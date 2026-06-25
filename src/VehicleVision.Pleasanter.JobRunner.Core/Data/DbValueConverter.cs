using System.Globalization;

namespace VehicleVision.Pleasanter.JobRunner.Core.Data;

public static class DbValueConverter
{
    public static bool ToBoolean(object? value)
    {
        return value switch
        {
            null => false,
            DBNull => false,
            bool b => b,
            byte b => b != 0,
            sbyte b => b != 0,
            short s => s != 0,
            ushort s => s != 0,
            int i => i != 0,
            uint i => i != 0,
            long l => l != 0,
            ulong l => l != 0,
            decimal d => d != 0,
            double d => Math.Abs(d) > double.Epsilon,
            float f => Math.Abs(f) > float.Epsilon,
            string s => ToBooleanString(s),
            _ => Convert.ToBoolean(value, CultureInfo.InvariantCulture)
        };
    }

    private static bool ToBooleanString(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            return false;
        }

        if (bool.TryParse(value, out var parsedBool))
        {
            return parsedBool;
        }

        if (decimal.TryParse(value, NumberStyles.Number, CultureInfo.InvariantCulture, out var parsedNumber))
        {
            return parsedNumber != 0;
        }

        return string.Equals(value, "yes", StringComparison.OrdinalIgnoreCase)
            || string.Equals(value, "y", StringComparison.OrdinalIgnoreCase)
            || string.Equals(value, "on", StringComparison.OrdinalIgnoreCase);
    }
}
