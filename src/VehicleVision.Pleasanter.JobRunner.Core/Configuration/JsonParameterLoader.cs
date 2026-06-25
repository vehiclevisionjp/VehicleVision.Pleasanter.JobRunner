using System.Text.Json;

namespace VehicleVision.Pleasanter.JobRunner.Core.Configuration;

public sealed class JsonParameterLoader : IParameterLoader
{
    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        AllowTrailingCommas = true,
        PropertyNameCaseInsensitive = true,
        ReadCommentHandling = JsonCommentHandling.Skip
    };

    private readonly string _parameterDirectory;

    public JsonParameterLoader(string parameterDirectory)
    {
        if (string.IsNullOrWhiteSpace(parameterDirectory))
        {
            throw new ArgumentException("Parameter directory must not be empty.", nameof(parameterDirectory));
        }

        _parameterDirectory = parameterDirectory;
    }

    public static string GetDefaultParameterDirectory(string contentRootPath)
    {
        if (string.IsNullOrWhiteSpace(contentRootPath))
        {
            throw new ArgumentException("Content root path must not be empty.", nameof(contentRootPath));
        }

        return Path.Combine(contentRootPath, "App_Data", "Parameters");
    }

    public RdsParameters LoadRds()
    {
        var parameters = LoadRequired<RdsParameters>("Rds.json");
        parameters.Validate();
        return parameters;
    }

    public JobRunnerParameters LoadJobRunner()
    {
        var parameters = LoadRequired<JobRunnerParameters>("JobRunner.json");
        parameters.Validate();
        return parameters;
    }

    private T LoadRequired<T>(string fileName)
    {
        var path = Path.Combine(_parameterDirectory, fileName);

        if (!File.Exists(path))
        {
            throw new ParameterLoadException(
                $"Required parameter file '{path}' was not found. Create it under App_Data/Parameters.");
        }

        try
        {
            using var stream = File.OpenRead(path);
            var value = JsonSerializer.Deserialize<T>(stream, JsonOptions);
            return value ?? throw new ParameterLoadException($"Parameter file '{path}' is empty.");
        }
        catch (JsonException ex)
        {
            throw new ParameterLoadException($"Parameter file '{path}' contains invalid JSON.", ex);
        }
        catch (IOException ex)
        {
            throw new ParameterLoadException($"Parameter file '{path}' could not be read.", ex);
        }
    }
}
