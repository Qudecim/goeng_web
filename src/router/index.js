import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import HomeView from '../views/HomeView.vue'
import DictView from '../views/DictView.vue'
import DictAdd from '../views/DictAdd.vue'
import WordAdd from '../views/WordAdd.vue'
import WordsView from '../views/WordsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/web/dict/:id',
      component: DictView
    },
    {
      path: '/web/words/:id',
      component: WordsView
    },
    {
      path: '/web/sign-in',
      name: 'sign-in',
      component: AuthView
    },
    {
      path: '/web/sign-up',
      name: 'sign-up',
      component: AuthView
    },
    {
      path: '/web/dict/add',
      name: 'dict_add',
      component: DictAdd
    },
    {
      path: '/web/word/add/:dict_id',
      name: 'word_add',
      component: WordAdd
    },
    {
      path: '/web/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DictView.vue')
    }
  ]
})

export default router
