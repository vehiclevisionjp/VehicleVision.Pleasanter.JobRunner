# Pleasanter DB Schema Hint

This document is a working hint for JobRunner integration code. It focuses on the Pleasanter tables used for login and authorization.

Pleasanter versions and customizations can differ. Confirm the live schema in `reference/Implem.Pleasanter` or the target database before production rollout.

## Users

Purpose: stores Pleasanter user accounts and user-level extension fields.

| Column | Typical type | Notes |
| --- | --- | --- |
| `UserId` | bigint/int | Primary key for the user. |
| `LoginId` | nvarchar/varchar/text | Login identifier entered on the JobRunner login page. |
| `PasswordHash` | nvarchar/varchar/text | Pleasanter password hash. Verification is isolated behind `IPasswordHashVerifier`. |
| `DeptId` | bigint/int/null | Main organization/department for the user. |
| `CheckA` ... `CheckZ` | bit/boolean/tinyint/null | User-level extension check fields. JobRunner uses `UsersAuthorizationCheckColumn`. |

## Groups

Purpose: stores Pleasanter groups and group-level extension fields.

| Column | Typical type | Notes |
| --- | --- | --- |
| `GroupId` | bigint/int | Primary key for the group. |
| `GroupName` | nvarchar/varchar/text | Display name. Not required by auth logic. |
| `CheckA` ... `CheckZ` | bit/boolean/tinyint/null | Group-level extension check fields. JobRunner uses `GroupsAuthorizationCheckColumn`. |

## Depts

Purpose: stores organizations/departments and dept-level extension fields.

| Column | Typical type | Notes |
| --- | --- | --- |
| `DeptId` | bigint/int | Primary key for the organization/department. |
| `DeptCode` | nvarchar/varchar/text | Optional code. Not required by auth logic. |
| `DeptName` | nvarchar/varchar/text | Display name. Not required by auth logic. |
| `CheckA` ... `CheckZ` | bit/boolean/tinyint/null | Dept-level extension check fields. JobRunner uses `DeptsAuthorizationCheckColumn`. |

## Members

Purpose: joins users to groups.

| Column | Typical type | Notes |
| --- | --- | --- |
| `UserId` | bigint/int | References `Users.UserId`. |
| `GroupId` | bigint/int | References `Groups.GroupId`. |

## Authorization hierarchy

JobRunner evaluates login authorization after password verification:

1. Query `Users` by `LoginId`.
2. If `Users.<UsersAuthorizationCheckColumn>` is true, allow login with source `User`.
3. If not, query `Members` joined to `Groups`; if any `Groups.<GroupsAuthorizationCheckColumn>` value is true, allow login with source `Group`.
4. If not, query the user's `Depts` row; if `Depts.<DeptsAuthorizationCheckColumn>` is true, allow login with source `Dept`.
5. Otherwise deny login.

## RDBMS notes

- SQL Server often returns `bit` values as `bool`.
- PostgreSQL returns `boolean` values as `bool`.
- MySQL may return `tinyint(1)` values as numeric values.
- Normalize values in .NET with a conversion helper rather than relying on provider-specific behavior.
- Keep identifier quoting provider-specific:
  - SQL Server: `[Users]`, `[CheckA]`
  - PostgreSQL: `"Users"`, `"CheckA"`
  - MySQL: `` `Users` ``, `` `CheckA` ``
