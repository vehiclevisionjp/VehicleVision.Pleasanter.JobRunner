using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using Hangfire;
using Hangfire.Storage;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using VehicleVision.Pleasanter.JobRunner.Core.Scripting;
using VehicleVision.Pleasanter.JobRunner.Web.Jobs;

namespace VehicleVision.Pleasanter.JobRunner.Web.Pages;

[Authorize]
public sealed class IndexModel : PageModel
{
    private const string DefaultCSharp = "Console.WriteLine(\"Hello from C#\");";
    private const string DefaultPython = "print(\"Hello from Python\")";
    private readonly IBackgroundJobClient _backgroundJobs;
    private readonly IRecurringJobManager _recurringJobs;

    public IndexModel(IBackgroundJobClient backgroundJobs, IRecurringJobManager recurringJobs)
    {
        _backgroundJobs = backgroundJobs;
        _recurringJobs = recurringJobs;
    }

    [BindProperty]
    public JobInput Input { get; set; } = new();

    public IReadOnlyList<RecurringJobDto> ScheduledJobs { get; private set; } = Array.Empty<RecurringJobDto>();

    public string? StatusMessage { get; private set; }

    public void OnGet()
    {
        LoadScheduledJobs();
    }

    public IActionResult OnPostRunNow()
    {
        if (!ModelState.IsValid)
        {
            LoadScheduledJobs();
            return Page();
        }

        var request = CreateRequest();
        var jobId = _backgroundJobs.Enqueue<ScriptJob>(job => job.RunAsync(request, null));
        StatusMessage = $"Queued background job {jobId}.";
        LoadScheduledJobs();
        return Page();
    }

    public IActionResult OnPostSchedule()
    {
        if (string.IsNullOrWhiteSpace(Input.CronExpression))
        {
            ModelState.AddModelError("Input.CronExpression", "Cron expression is required for scheduling.");
        }

        if (!ModelState.IsValid)
        {
            LoadScheduledJobs();
            return Page();
        }

        var request = CreateRequest();
        var recurringJobId = CreateRecurringJobId(Input.JobName);
        _recurringJobs.AddOrUpdate<ScriptJob>(
            recurringJobId,
            job => job.RunAsync(request, null),
            Input.CronExpression!);

        StatusMessage = $"Scheduled recurring job {recurringJobId}.";
        LoadScheduledJobs();
        return Page();
    }

    public string GetSampleForSelectedLanguage()
    {
        return Input.Language == ScriptLanguage.Python ? DefaultPython : DefaultCSharp;
    }

    private ScriptExecutionRequest CreateRequest()
    {
        return new ScriptExecutionRequest(Input.Language, Input.ScriptCode, Input.JobName);
    }

    private void LoadScheduledJobs()
    {
        using var connection = JobStorage.Current.GetConnection();
        ScheduledJobs = connection.GetRecurringJobs()
            .Where(x => x.Id.StartsWith("jobrunner:", StringComparison.OrdinalIgnoreCase))
            .OrderBy(x => x.Id, StringComparer.OrdinalIgnoreCase)
            .ToArray();
    }

    private static string CreateRecurringJobId(string jobName)
    {
        var normalized = Regex.Replace(jobName.Trim().ToLowerInvariant(), "[^a-z0-9_.-]+", "-").Trim('-');
        return $"jobrunner:{(string.IsNullOrWhiteSpace(normalized) ? Guid.NewGuid().ToString("N") : normalized)}";
    }

    public sealed class JobInput
    {
        [Required]
        [StringLength(80)]
        [Display(Name = "Job name")]
        public string JobName { get; set; } = "Ad hoc script";

        [Required]
        public ScriptLanguage Language { get; set; } = ScriptLanguage.CSharp;

        [Required]
        [Display(Name = "Script code")]
        public string ScriptCode { get; set; } = DefaultCSharp;

        [StringLength(120)]
        [Display(Name = "Cron")]
        public string? CronExpression { get; set; } = "0 9 * * *";
    }
}
