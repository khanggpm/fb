<template>
  <div class="home">
    {{ user }}
    <a href="" @click.prevent="signOut">Out</a>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods : {
    signOut() {
      this.$appFb.auth()
              .signOut()
              .then(() => {
                this.$router.push({
                  name: "login"
                });
              });
    }
  }
}
</script>
