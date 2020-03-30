<template>
	<div class="Header">
			<ul>
				<router-link to="/home/recommend" exact-active-class="active" tag="li">
					<a href="javascript:;">推荐</a>
				</router-link>
				
				<router-link to="/home/phone" exact-active-class="active" tag="li">
					<a href="javascript:;">手机</a>
				</router-link>
				
				<router-link to="/home/intelligence" exact-active-class="active" tag="li">
					<a href="javascript:;">智能</a>
				</router-link>
				
				<router-link to="/home/tv" exact-active-class="active" tag="li">
					<a href="javascript:;">电视</a>
				</router-link>
				
				<router-link to="/home/notebook" exact-active-class="active" tag="li">
					<a href="javascript:;">笔记本</a>
				</router-link>
				
				<router-link to="/home/equipment" exact-active-class="active" tag="li">
					<a href="javascript:;">家电</a>
				</router-link>
			</ul>
			<router-view></router-view>
			
		</div>
</template>
<script>
export default{
	name:'home',
	data(){
		return{
			
		}
	},
	components:{
		
	}
}
</script>

<style scoped>
	.Header{width:100%; position:fixed; top:0;left:0; z-index:2; background:#fff;}
	.Header ul{width:100%;height:0.6rem; margin:0 auto; display: flex; justify-content: space-between;}
	.Header ul li{width:15%;height:0.6rem; float:left;}
	.Header ul li a{ display:block;width:100%;height:0.6rem; line-height:0.6rem; text-align:center; font-size:0.3rem; color:#9e9a95;}
	.Header ul li.active a{height:0.5rem; border-bottom:0.1rem solid #5477b2; color:#5477b2;}
</style>
