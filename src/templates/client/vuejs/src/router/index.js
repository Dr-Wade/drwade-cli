import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import keys from '../utils/keys';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
    if (to.meta.unprotected)
        next();
    else {
        router.app.$client.reAuthenticate()
        .then(results => {
            router.app.$d.user = results.user;
            var redirect_to = localStorage.getItem('redirect_to');
            if (redirect_to != null ) {
                localStorage.removeItem('redirect_to');
                next(redirect_to);
            }
            else next();
        })
        .catch(() => {
            localStorage.removeItem('feathers-jwt')
            localStorage.setItem('redirect_to', to.fullPath);
            location.href = `${keys.API_BASE_PATH || location.origin}/oauth/auth0/`;
        })
    }

})

router.afterEach(() => {
    let hash = window.location.hash
    if (hash.includes('access_token')) window.location.hash = ''
})

export default router;
