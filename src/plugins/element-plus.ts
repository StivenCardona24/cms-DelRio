import ElementPlus from 'element-plus'
import { ID_INJECTION_KEY } from 'element-plus'
import localeEs from 'element-plus/es/locale/lang/es'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Bootstrap from 'bootstrap'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 1000),
    current: 0
  })
 
  nuxtApp.vueApp.use(ElementPlus, {
    size: 'small',
    zIndex: 3000,
    locale: localeEs
  })
  nuxtApp.vueApp.use(ElementPlus);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(`Icon${key}`, component)
  }
})