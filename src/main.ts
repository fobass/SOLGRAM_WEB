import { createApp } from 'vue'
import App from './App.vue'
import Popper from 'vue3-popper'
// import { AppScss } from '@/plugins/app-scss' 
import router from './router'
import './assets/style/index.css'
// import Moment from 'vue-moment'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

const app = createApp(App)
            .use(router)
            .use(Popper)
            .use(VueChartkick)
            // .use(Moment)
            // .use(AppScss)
            .mount('#app')

