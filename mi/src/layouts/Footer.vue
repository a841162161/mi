<template>
	<div class="footer">
		<ul>
			<router-link
				class="home"
				exact-active-class="all_active"
				to="/home"
				tag="li"
			>
				<a href="javascript:;"><i class="el-icon-s-home"></i><p>首页</p></a>
			</router-link>
			<router-link
				class="classification"
				exact-active-class="all_active"
				to="/classification"
				tag="li"
			>
				<a href="javascript:;"><i class="el-icon-s-fold"></i><p>分类</p></a>
			</router-link>
			<router-link
				class="star"
				exact-active-class="all_active"
				to="/star"
				tag="li"
			>
				<a href="javascript:;"><i class="el-icon-sunset"></i><p>星球</p></a>
			</router-link>
			<router-link
				class="shop"
				exact-active-class="all_active"
				to="/shop"
				tag="li"
			>
				<a href="javascript:;"><i class="el-icon-s-goods"></i><p>购物车</p></a>
			</router-link>
			<router-link
				class="mine"
				exact-active-class="all_active"
				to="/user"
				tag="li"
			>
				<a href="javascript:;"><i class="el-icon-user-solid"></i><p>我的</p></a>
			</router-link>
		</ul>
	</div>
</template>

<script>
	
	export default{
		name:'footer',
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.footer{
		width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;
	}
	.footer ul{width:100%;height: 100%;margin:0 auto; display: flex; justify-content: space-around;}
	.footer ul li{ float:left; text-align: center; width: 20%; height: 100%;}
	.footer ul li a{ display:block; width:100%;height:100%; padding-top: 0.15rem;}
	
	i{
		font-size: 0.4rem;
	}
	.all_active a{
		color: orangered;
	}
</style>
