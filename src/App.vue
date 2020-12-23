<template>
    <div id="app">
        <div class="main">
            <Navbar v-if="isLogin"/>
        </div>
        <router-view/>
    </div>
</template>
<script>
    import Navbar from "./components/Navbar";
    export default {
        data() {
          return {
              isLogin :false
          }
        },
        components : {
            Navbar : Navbar,
        }
    }
</script>
<style lang="scss">
    @import "src/assets/scss/app.scss";
</style>
