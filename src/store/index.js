import Vue from 'vue'
import Vuex, {createLogger} from 'vuex'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user: user,
    },
    plugins: process.env.NODE_ENV !== 'production'
        ? [createLogger()]
        : [],
    strict: process.env.NODE_ENV !== 'production',
});
