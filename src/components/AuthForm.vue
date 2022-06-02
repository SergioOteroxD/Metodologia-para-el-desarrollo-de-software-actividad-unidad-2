<style scoped>
input {
  display: block;
  margin-bottom: 10%;
}
.tdo {
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  width: fit-content;
  height: fit-content;
}
form {
  margin: auto;
  width: fit-content;
}

button {
  margin-left: 15px;
  border: none;
  outline: 0;
  padding: 10px;
  color: white;
  background-color: #fa8807;
  text-align: center;
  cursor: pointer;
  width: 80%;
  font-size: 20px;
}
button:hover {
  opacity: 0.7;
}
</style>
<template>
  <div class="tdo">
    <div style="margin-bottom: 10px;">
      <img style="width: 200px" src="./../../public/tiki (1).png" alt="" />
    </div>

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
