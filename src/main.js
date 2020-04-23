import Vue from "vue";
import App from "./App.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import * as firebase from "firebase";
import firebaseConfig from "./firebaseConfig.js";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { store } from "./store/store";
import axios from "axios";
import VueOffline from "vue-offline";
import AlertErrCmp from "./components/Shared/AlertError.vue";
import AlertSuccessCmp from "./components/Shared/AlretSuccess.vue";

Vue.use(VueOffline);

Vue.config.productionTip = false;
Vue.component("app-alert", AlertErrCmp);
Vue.component("succuss-alert", AlertSuccessCmp);

Vue.prototype.$http = axios;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
  methods: {
    ...mapActions(["retrieveRecipes", "autoSignin", "clearSuccess"])
  },

  computed: {
    ...mapGetters(["success"])
  },
  created() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.autoSignin(user);
      }
    });
    this.retrieveRecipes();
  }
}).$mount("#app");
