<template>
    <f7-page name="home">
        <!-- Top Navbar -->
        <f7-navbar large :sliding="false">
            <f7-nav-left>
                <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
            </f7-nav-left>
            <f7-nav-title sliding>KP</f7-nav-title>
            <f7-nav-title-large>Mickey</f7-nav-title-large>
        </f7-navbar>

        <f7-block-title>Navigation</f7-block-title>

        <f7-list>
            <f7-list-item link="/about/" title="About"></f7-list-item>
            <f7-list-item link="/form/" title="Form"></f7-list-item>
            <f7-list-item link="/login/" title="Login"></f7-list-item>
        </f7-list>

        {{ user}}

        <f7-list>
            <a href="" @click.prevent="signOut">Log out</a>
        </f7-list>

    </f7-page>
</template>
<script>

    import { mapGetters } from "vuex";

    export  default {
        data() {
            return {

            }
        },
        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user/user"
            })
        },
        created() {
            console.log(' home component')
        },
        methods : {
            signOut() {
                let self = this;
                this.$firebase.auth()
                    .signOut()
                    .then(() => {
                        self.$f7router.navigate({name : "Login"});
                    });
            }
        }
    }
</script>
