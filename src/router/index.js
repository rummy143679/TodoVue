import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Add a navigation guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.login.accessed;
  if (to.name === 'login' || to.name === 'register') {
    next();
  } else if (!isLoggedIn) {
    // Redirect to login if not logged in
    next({ name: 'login' });
  } else {
    // Allow navigation to other routes if logged in
    next();
  }
});

export default router
