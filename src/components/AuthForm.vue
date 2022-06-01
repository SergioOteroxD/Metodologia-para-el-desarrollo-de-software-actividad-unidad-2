<template>
  <div>
    <img src="./../../public/tiki (1).png" alt="" />
  </div>

  <div>
    <div>
      <form v-on:submit.prevent="auth(authUser.email, authUser.password)">
        <input
          type="email"
          v-model="authUser.email"
          placeholder="Enter your email"
        />
        <input
          type="password"
          v-model="authUser.password"
          placeholder="Enter your password"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authUser: {
        email: "",
        password: "",
      },
      user: {
        email: "cahrry@gmail.com",
        password: "123456",
      },
    };
  },
  computed: {},
  methods: {
    auth(name, password) {
      if (name == this.user.email && password == this.user.password) {
        //return true;
        this.$router.push("/caja");
        // eslint-disable-next-line no-unreachable
        this.authUser = {};
      }
      return false;
    },
  },
};
</script>
