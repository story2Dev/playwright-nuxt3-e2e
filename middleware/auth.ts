export default defineNuxtRouteMiddleware((_to, _from) => {
  const user = useAuthUser();
  const { permissions } = user;
  const { permission } = _to.meta;
  if (permission && !permissions.includes(permission)) {
    return navigateTo("/");
  }
});
