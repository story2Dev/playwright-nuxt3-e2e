export const useAuth = () => {
  const token = useCookie("token");
  const config = useRuntimeConfig().public;
  async function login(email: string, password: string) {
    try {
      const req = await $fetch<any>(`${config.authURL}/signin/email-password`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      const { session } = req;
      token.value = session.accessToken;
      return true;
    } catch (error) {
      return false;
    }
  }
  return {
    login,
  };
};
