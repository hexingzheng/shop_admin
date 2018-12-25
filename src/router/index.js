import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

// export default new Router({
//   routes: [
//     { path: '/', redirecte: '/Login' },
//     { path: '/login', component: Login },
//     { path: '/home', component: Home }
//   ]
// })
const router = new Router({
  routes: [
    { path: '/', redirecte: '/Login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})
// 导航守卫  vue里面router提供的方法
router.beforeEach((to, from, next) => {
  // console.log(from, to, next )
  if (to.path === '/login') {
    next()
    return
  }
  let token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
