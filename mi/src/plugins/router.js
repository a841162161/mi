import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Recommend from '../pages/home_list/Recommend.vue'
import Phone from '../pages/home_list/Phone.vue'
import Intelligence from '../pages/home_list/Intelligence.vue'
import Tv from '../pages/home_list/Tv.vue'
import Notebook from '../pages/home_list/Notebook.vue'
import Equipment from '../pages/home_list/Equipment.vue'


import Follow from '../pages/Follow.vue';
import Column from '../pages/Column.vue';
import Detail from '../pages/Detail.vue';
import User from '../pages/User.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';

let routes = [
  {
	  path:'/home',
	  component:Home,
	  children:[
		  {path:':name',component:Recommend},
		  {path:':name',component:Phone},
		  {path:':name',component:Intelligence},
		  {path:':name',component:Tv},
		  {path:':name',component:Notebook},
		  {path:':name',component:Equipment}
		  ]
	  },
  {path:'/Follow',component:Follow},
  {path:'/Column',component:Column},
  {path:'/Detail/:_id',component:Detail,name:'detail'},
  {path:'/User',component:User},
  {path:'/Login',component:Login},
  {path:'/Reg',component:Reg},
  {path:'/',redirect:'/home'},
];

let router = new VueRouter({
  routes
})

export default router;