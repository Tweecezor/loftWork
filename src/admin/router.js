import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    component:()=>import('./components/about.vue'),
    name:'home'
  },
  {
    path:'/works',
    component:()=>import('./components/works.vue')
  },
  {
    path:'/reviews',
    component:()=>import('./components/reviews.vue')
  },
];

const router = new VueRouter({
  routes,
  base:'admin'
})
export default router;




















































// import Vue from "vue";
// import VueRouter from "vue-router";

// Vue.use(VueRouter);

// const routes = [
// 	{
//     path: "/",
//     name:'home',
// 		component: () => import("./components/about.vue"),
// 	},
// 	{
// 		path: "/works",
// 		component: () => import("./components/works.vue"),
// 	},
// 	{
// 		path: "/reviews",
// 		component: () => import("./components/reviews.vue"),
// 	},
// ];

// const router = new VueRouter({
// 	routes,
// 	base: "admin",
// });
// export default router;
