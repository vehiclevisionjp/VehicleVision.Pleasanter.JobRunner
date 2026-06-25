using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using VehicleVision.Pleasanter.JobRunner.Core.Authentication;

namespace VehicleVision.Pleasanter.JobRunner.Web.Pages.Account;

[AllowAnonymous]
public sealed class LoginModel : PageModel
{
    private readonly PleasanterAuthService _authService;
    private readonly ILogger<LoginModel> _logger;

    public LoginModel(PleasanterAuthService authService, ILogger<LoginModel> logger)
    {
        _authService = authService;
        _logger = logger;
    }

    [BindProperty]
    public LoginInput Input { get; set; } = new();

    public string? ReturnUrl { get; private set; }

    public void OnGet(string? returnUrl = null)
    {
        ReturnUrl = returnUrl;
    }

    public async Task<IActionResult> OnPostAsync(string? returnUrl = null)
    {
        ReturnUrl = returnUrl;

        if (!ModelState.IsValid)
        {
            return Page();
        }

        PleasanterAuthResult result;
        try
        {
            result = await _authService.AuthenticateAsync(Input.LoginId, Input.Password, HttpContext.RequestAborted);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Pleasanter authentication failed for login ID {LoginId}.", Input.LoginId);
            ModelState.AddModelError(string.Empty, "Authentication failed. Check Parameter files and Pleasanter database connectivity.");
            return Page();
        }

        if (!result.IsAuthenticated || result.UserId is null || result.LoginId is null)
        {
            ModelState.AddModelError(string.Empty, result.Message);
            return Page();
        }

        var claims = new List<Claim>
        {
            new(ClaimTypes.NameIdentifier, result.UserId.Value.ToString()),
            new(ClaimTypes.Name, result.LoginId),
            new("jobrunner.authorization_source", result.AuthorizationSource.ToString())
        };

        var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
        await HttpContext.SignInAsync(
            CookieAuthenticationDefaults.AuthenticationScheme,
            new ClaimsPrincipal(identity));

        return LocalRedirect(GetSafeReturnUrl(returnUrl));
    }

    private string GetSafeReturnUrl(string? returnUrl)
    {
        return !string.IsNullOrWhiteSpace(returnUrl) && Url.IsLocalUrl(returnUrl)
            ? returnUrl
            : Url.Page("/Index") ?? "/";
    }

    public sealed class LoginInput
    {
        [Required]
        [Display(Name = "Login ID")]
        public string LoginId { get; set; } = string.Empty;

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; } = string.Empty;
    }
}
