using System.Security.Cryptography;
using System.Text;

namespace VehicleVision.Pleasanter.JobRunner.Core.Authentication;

public sealed class PleasanterPasswordHashVerifier : IPasswordHashVerifier
{
    private readonly bool _allowPlainTextPasswordHashForDevelopment;

    public PleasanterPasswordHashVerifier(bool allowPlainTextPasswordHashForDevelopment = false)
    {
        _allowPlainTextPasswordHashForDevelopment = allowPlainTextPasswordHashForDevelopment;
    }

    public bool Verify(string password, string passwordHash)
    {
        if (string.IsNullOrEmpty(password) || string.IsNullOrWhiteSpace(passwordHash))
        {
            return false;
        }

        if (LooksLikeBCrypt(passwordHash))
        {
            try
            {
                return BCrypt.Net.BCrypt.Verify(password, passwordHash);
            }
            catch (BCrypt.Net.SaltParseException)
            {
                return false;
            }
        }

        return _allowPlainTextPasswordHashForDevelopment
            && FixedTimeStringEquals(password, passwordHash);
    }

    private static bool LooksLikeBCrypt(string passwordHash)
    {
        return passwordHash.StartsWith("$2a$", StringComparison.Ordinal)
            || passwordHash.StartsWith("$2b$", StringComparison.Ordinal)
            || passwordHash.StartsWith("$2x$", StringComparison.Ordinal)
            || passwordHash.StartsWith("$2y$", StringComparison.Ordinal);
    }

    private static bool FixedTimeStringEquals(string left, string right)
    {
        var leftHash = SHA256.HashData(Encoding.UTF8.GetBytes(left));
        var rightHash = SHA256.HashData(Encoding.UTF8.GetBytes(right));
        return CryptographicOperations.FixedTimeEquals(leftHash, rightHash);
    }
}
