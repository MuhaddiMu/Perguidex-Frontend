import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

if (process.client) {
  Vue.use(AOS.init({}))
}
