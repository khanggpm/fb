<template>
  <f7-app :params="f7params">

  <!-- Left panel with cover effect-->
  <f7-panel left cover theme-dark>
    <f7-view>
      <f7-page>
        <f7-navbar title="Left Panel"></f7-navbar>
        <f7-block>Left panel content goes here</f7-block>
      </f7-page>
    </f7-view>
  </f7-panel>

  <!-- Your main view, should have "view-main" class -->
  <f7-view main  class="safe-areas" url="/" :push-state="true" push-state-separator :animate="true"></f7-view>
    
  </f7-app>
</template>
<script>

  import routes from '../js/routes.js';

  export default {
    data() {
      return {
        // Framework7 Parameters
        f7params: {
          name: 'Kpami', // App name
          theme: "ios", //auto, md, ios Automatic theme detection


          // App routes
          routes: routes,
        },
        // Login screen data
        username: '',
        password: '',
      }
    },
    methods: {
      alertLoginData() {
        this.$f7.dialog.alert('Username: ' + this.username + '<br>Password: ' + this.password, () => {
          this.$f7.loginScreen.close();
        });
      }
    },
    mounted() {
      this.$f7ready((f7) => {

        // Call F7 APIs here
      });
    }
  }
</script>