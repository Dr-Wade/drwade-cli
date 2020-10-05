import Vue from 'vue'
import VueI18n from 'vue-i18n'
import English from "./localization/en.json"
Vue.use(VueI18n)

const messages = {
    en: English
};

export default new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    silentFallbackWarn: true,
    messages
});