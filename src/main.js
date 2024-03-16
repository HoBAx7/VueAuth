import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faCog, faSpinner, faPlus, faFilePen, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane, faTrashCan } from '@fortawesome/free-regular-svg-icons'

library.add(faUserSecret, faCog, faSpinner, faPlus, faPaperPlane, faTwitter, faTrashCan, faFilePen, faCircleNotch);

import './axios'
import './style.css'
import App from './App.vue'


const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router);
})



const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(pinia);
app.use(router);
app.mount('#app');
