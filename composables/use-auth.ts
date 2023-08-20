export const useAuth = () => {
  const config = useRuntimeConfig().public;
  async function login(email: string, password: string) {
    try {
      const req = await $fetch(`${config.authURL}/signin/email-password`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      return true;
    } catch (error) {
      return false;
    }
  }
  return {
    login,
  };
};
