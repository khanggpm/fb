<template>
    <div id="navbar">
        <div class="row-first">
            <ul >
                <li v-for="item in arr_menu" >
                    <router-link :to="item.path">{{ item.name}}</router-link>
                </li>
            </ul>
        </div>

        <div class="row-second">
            <router-link to="/profile/"><img src="../assets/img/ava.png" alt="" class="avatar"></router-link>
        </div>

    </div>

</template>
<script>
    export  default  {
        data() {
            return {
                arr_menu : [
                    {
                        name : "",
                        path : '/'
                    },
                    {
                        name : "Post",
                        path : '/post/'
                    },
                    {
                        name : "Setting",
                        path : '/setting/'
                    },
                ]
            }
        },
        methods : {

        }
    }
</script>

<style scoped>
    #navbar {
        height: 50px;
        width: 100%;
        background-color: #009FE0;
        position: relative;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        font-weight: bold;
    }

    .row-first {
        width: 70%;
        height: 100%;

    }
    .row-first > ul {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        outline: none;
        list-style: none;
    }


    .row-first > ul > li {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .row-first > ul > li:first-child {
        flex: 1.33335555;
        border-right: none;
        border-right: 1px solid #EBEAED;

    }

    .row-first > ul > li:hover, .row-first > ul > li > a {
        color: #FFF;
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .row-second {
        position: relative;
        width: 30%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .avatar {
        height: 42px;
        border: 2.5px solid #FFF;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        object-fit: cover;
        cursor: pointer;
    }


</style>
