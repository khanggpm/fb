<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen  color-theme="teal">
    <!-- <f7-login-screen-title>Kpami App</f7-login-screen-title> -->
    <img :src="ava_default" alt="" class="ava_default">

    <f7-list form>
      <f7-list-input
        label="Email"
        type="text"
        placeholder="Your email"
        :value="email"
        @input="email = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label="Password"
        type="password"
        placeholder="Your password"
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
    </f7-list>
    <f7-list>
      <f7-list-button @click="signIn">Sign In</f7-list-button>
      
    </f7-list>
  </f7-page>
</template>

<script>
  import { ava_default } from '../../../config/index.js'

  export default {
    data() {
      return {
        email: '',
        password: '',
        ava_default : ava_default

      };
    },
    created() {
    },
    methods: {
      signIn() {
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;
        app.dialog.alert(`email: ${self.email}<br>Password: ${self.password}`, () => {
          // router.back();
          alert('?')
        });
      },
    },
  };
</script>

<style scoped>
  .ava_default {
    margin: auto;
    width: 18vw;
    display: flex;
    border: 3px solid #FFFFFF;
    border-collapse: collapse;
    border-radius: 50%;
  }  
</style>