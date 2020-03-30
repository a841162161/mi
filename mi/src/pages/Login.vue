<template>
	<div class="Login" >
		<nav arrow='gray' bgcolor = 'transparent' :borderwidth='0'/>
		<h1></h1>
		<div class="box">
			<p class="lsolid"></p>
				<div class="logindd">
					<router-link to="/login">登陆</router-link>
					<span></span>
					<router-link to="/reg">注册</router-link>
				</div>
				<p class="rsolid"></p>
		</div>
		
		<div class="input">
		    <!-- <uc-input :label="'账号'" type="text" :value="username" @input="checkUser" /> -->
		    <uc-input :label="'账号'" type="text" v-model="username" />
		    <uc-input label="密码" type="password" v-model="password" />
		  </div>
		  <div class="footbox">
		    <Button text="登 录"  @click="logins"/>
		    <a href="javascript:;" class="tishi">忘记密码？</a>
		  </div>
		</div>
	</div>
</template>

<script>
	import Button from '../components/Button.vue'
	  import UcInput from '../components/Ipt.vue'
	  import UcNav from '../components/uc-nav'
	  export default {
	    name: 'Login',
	    props: {},
	    data() {
	      return {
	        username:'',
	        password:''
	      }
	    },
	    components: {
	      Button,UcInput,UcNav
	    },
	    mounted() {},
	    updated() {},
	    methods: {
	      logins(){
	        axios({
	          url:'/api/login',
	          method:'post',
	          data:{
	            username:this.username,
	            password:this.password
	          }
	        }).then(
	          res=>{
	            //种user信息
	            window.localStorage.setItem('user',JSON.stringify(res.data))
				console.log(JSON.stringify(res.data))
	            //跳转之前的页面
	            // this.$router.replace(this.$route.query.p)
	            
	          }
	        )
	      }
	    }
	  }
	
</script>

<style scoped="">
	.Login{max-width:6.4rem; margin:0 auto;}
	.Login h1{width:2.18rem;height:1.35rem; background:url(../assets/img/say.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
	.Login .logindd{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
	.logindd a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
	.logindd span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
	.Login .box{ position:relative;}
	.Login .box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
	.Login .box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
	.Login div.input{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
	
	.Login .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
	
	.Login .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>
