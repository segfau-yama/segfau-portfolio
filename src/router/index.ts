import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import WorkView from '@/views/WorkView.vue'
import BlogView from '@/views/BlogView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'ページタイトル', desc: 'ディスクリプションを記述' },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/work',
    name: 'Work',
    component: WorkView
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export {router, routes}
