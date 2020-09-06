import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "Home",
  redirect: "/home"
},
{
  path: '/login',
  name: 'login/index',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import( /* webpackChunkName: "about" */ '../views/login/index.vue')
},
{
  path: '/home',
  name: 'home',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import( /* webpackChunkName: "about" */ '../views/home/index.vue'),
  redirect: "/home/guanli",
  children: [
    {
      path: "/home/guanli",
      name: "guanli",
      name: 'guanli',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/home/guanli.vue'),
      redirect: "/home/guanli/xueyuanzi",
      children: [
        {
          path: '/home/guanli/xueyuanzi',
          name: "xueyuanzi",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import( /* webpackChunkName: "about" */ '../views/home/xueyuanzi.vue'),
        },
        {
          path: '/home/guanli/jiangshi',
          name: "xueyuanzi",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import( /* webpackChunkName: "about" */ '../views/home/jiangshi.vue'),
        },
        {
          path: '/home/guanli/zhujiao',
          name: "xueyuanzi",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import( /* webpackChunkName: "about" */ '../views/home/zhujiao.vue'),
        },
      ]
    },
    {
      path: '/home/jiaoxue',
      name: 'jiaoxue',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/jiaoxue/index.vue'),
      // redirect: "/home/xueyuan",
      // children: [{
      //   path: "/home/xueyuan",
      //   name: "xueyuan",
      //   component: () => import( /* webpackChunkName: "about" */ '../views/home/xueyuan.vue'),
      // },]
    },
    {
      path: '/home/tiku',
      name: 'tiku',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/tiku/index.vue'),
      // redirect: "",
      // children: [{
      //   path: "",
      //   name: "",
      //   component: () => import( /* webpackChunkName: "about" */ '../views'),
      // },]
    },
    {
      path: '/home/yunying',
      name: 'yunying',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/yunying/index.vue'),
      // redirect: "",
      // children: [{
      //   path: "",
      //   name: "",
      //   component: () => import( /* webpackChunkName: "about" */ '../views'),
      // },]
    },
    {
      path: '/home/yingxiao',
      name: 'yingxiao',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/yingxiao/index.vue'),
      // redirect: "",
      // children: [{
      //   path: "",
      //   name: "",
      //   component: () => import( /* webpackChunkName: "about" */ '../views'),
      // },]
    },
    {
      path: '/home/shangpin',
      name: 'shangpin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/shangpin/index.vue'),
      // redirect: "",
      // children: [{
      //   path: "",
      //   name: "",
      //   component: () => import( /* webpackChunkName: "about" */ '../views'),
      // },]
    },
    {
      path: '/home/caiwu',
      name: 'caiwu',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/caiwu/index.vue'),
      // redirect: "",
      // children: [{
      //   path: "",
      //   name: "",
      //   component: () => import( /* webpackChunkName: "about" */ '../views'),
      // },]
    },
    {
      path: '/home/tongji',
      name: 'tongji',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/tongji/index.vue'),
      // redirect: "",
      // children: [{
      //   path: "",
      //   name: "",
      //   component: () => import( /* webpackChunkName: "about" */ '../views'),
      // },]
    },
    {
      path: '/home/xitong',
      name: 'xitong',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/xitong/index.vue'),
      // redirect: "",
      // children: [{
      //   path: "",
      //   name: "",
      //   component: () => import( /* webpackChunkName: "about" */ '../views'),
      // },]
    },
  ]
},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;