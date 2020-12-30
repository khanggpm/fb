<template>

    <f7-page no-toolbar no-navbar no-swipeback login-screen>

        <f7-login-screen-title style="margin: 0">
            <img :src="imageLink"  class="ava" alt="">
        </f7-login-screen-title>

        <f7-list form id="signForm" @submit.prevent="signIn">
            <f7-list-input
                    label="Email"
                    type="email"
                    placeholder="Your email"
                    :value="email"
                    @input="email = $event.target.value"
                    required
                    validate
            ></f7-list-input>
            <f7-list-input
                    label="Password"
                    type="password"
                    placeholder="Your password"
                    :value="password"
                    @input="password = $event.target.value"
                    required
                    validate
                    minlength=6
            ></f7-list-input>
            <f7-button  fill color="red" raised type="submit" >Sign In</f7-button>
        </f7-list>
    </f7-page>
</template>

<script>
    import imageLink from '../../assets/images/ava.jpg'
    export default {
        data() {
            return {
                email: '',
                password: '',
                imageLink : imageLink
            };
        },
        created() {
            console.log(this.$toastr)
            this.$toastr.success('helelo','test')
        },
        methods: {
            signIn() {

                const self = this;
                const app = self.$f7;
                const router = self.$f7router;
                var that = this;
                this.$firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .then(data => {
                        console.log(data)
                        that.$toastr.success('helelo','test')
                        // this.$router.push({ name: "Home" });
                    })
                    .catch(err => {
                        this.error = err.message;
                        that.$toastr.success('helelo','test')

                    });
            },

        },
    };
</script>

<style scoped>
    .ava {
        height: 25vw;
        display: flex;
        margin: auto;
        border: 2px solid #e86020;
        padding: 10px;
        border-radius: 50%;
    }
</style>
