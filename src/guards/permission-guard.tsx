export const bypassPermissionsDictionary: any = {};

function checkPermissions(userPermissions: any, modulePermissions: any) {
  if (!modulePermissions?.length) return false;
  if (
    modulePermissions.some((perm: string) => bypassPermissionsDictionary[perm])
  ) {
    return true;
  }

  if (!userPermissions?.length) return false;

  const modulePermissionsSet = new Set(modulePermissions);

  return userPermissions.some((perm: string) => modulePermissionsSet.has(perm));
}

export const PermissionGuard = () => {};
