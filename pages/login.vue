<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <section class="flex flex-col space-y-3 max-w-md mx-auto w-full">
      <h1>Login</h1>
      <UInput v-model="state.email" placeholder="Email" />
      <UInput v-model="state.password" type="password" placeholder="Password" />
      <article>
        <UButton :loading="state.isLoading" @click.prevent="login"
          >Submit</UButton
        >
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const auth = useAuth();
const toast = useToast();
const state = reactive({
  email: "",
  password: "",
  isLoading: false,
});

const login = async () => {
  state.isLoading = true;
  try {
    const req = await auth.login(state.email, state.password);
    if (req) {
      navigateTo("/");
    }else{
      toast.add({
        title: "Fail",
        description: "Email or password is incorrect",
      });
    }

  } catch (error) {
    toast.add({
      title: "Fail",
      description: "Email or password is incorrect",
    });
  } finally {
    state.isLoading = false;
  }
};
</script>

<style scoped></style>
