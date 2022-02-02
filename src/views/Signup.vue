<template>
  <div class="row">
    <div
      class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-5 pt-3 pb-3 bg-white from-wrapper"
    >
      <div class="container">
        <h3>Registrarse</h3>
        <hr />
        <form
          @submit.prevent="register()"
          class
          action="/register"
          method="post"
        >
          <div class="row">
            <div class="col-12 col-sm-6">
              <div class="form-group">
                <label for="firstname">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  name="firstname"
                  id="firstname"
                  v-model="firstname"
                />
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-group">
                <label for="lastname">Apellido</label>
                <input
                  type="text"
                  class="form-control"
                  name="lastname"
                  id="lastname"
                  v-model="lastname"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="email">Email </label>
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  id="email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-group">
                <label for="password">Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  v-model="password"
                  value
                />
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-group">
                <label for="password_confirm">Confirmar Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  name="password_confirm"
                  id="password_confirm"
                  v-model="password_confirm"
                />
              </div>
            </div>
            <alert v-if="msg" :msg="msg" :classAlert="classAlert"></alert>
          </div>

          <div class="row">
            <div class="col-12 col-sm-4">
              <button type="submit" class="btn btn-primary">Registrarse</button>
            </div>
            <div class="col-12 col-sm-8 text-right">
              <router-link to="/signin">Ya tienes una cuenta</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "../components/Alert";
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password_confirm: "",
      msg: null,
      classAlert: null,
    };
  },
  components: {
    Alert,
  },
  methods: {
   register() {
      const form = new FormData();
      form.append("firstname", this.firstname);
      form.append("lastname", this.lastname);
      form.append("email", this.email);
      form.append("password", this.password);
      form.append("password_confirm", this.password_confirm);

      this.$guest
        .post("/register", form)
        .then(() => {
          this.msg = "You have been successfully registered!";
          this.classAlert = "success";
          this.firstname = "";
          this.lastname = "";
          this.email = "";
          this.password = "";
          this.password_confirm = "";
        })
        .catch(err => {
          this.msg = err.response.data.messages.error;
          this.classAlert = "danger";
        });
      //axios
    },
  },
};
</script>

<style lang="scss" scoped></style>
