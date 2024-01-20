import { createApp } from 'vue'
import { createPinia } from 'pinia';
// import { createRouter } from 'vue-router'

// import './style.css'

import App from './App.vue'
import router from './router'

import { Tabbar, TabbarItem, Search, Icon } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(createPinia());
app.use(router)

app.use(Tabbar)
app.use(TabbarItem)
app.use(Search)
app.use(Icon)

const rootValue = 16;
const rootWidth = 390;
const deviceWidth = document.documentElement.clientWidth;
document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootWidth + 'px';

app.mount('#app')
