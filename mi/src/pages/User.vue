<template>
	<div class="User">
		<div class="header">
			<div class="us_us">
				<i class="el-icon-user-solid"></i>
			</div>
			<div class="us_lr">
				<router-link to="/login" class="stylle">登陆 / </router-link>
				<router-link to="/reg" class="stylle">注册</router-link>
			</div>
		</div>
		<a href="#">
			<div class="dingdan">
				<p>我的订单</p>
				<p>全部订单<i class="el-icon-arrow-right"></i></p>
			</div>
		</a>
		<div class="tu">
			<router-link to="user" tag="a" class="styy">
				<i class="el-icon-goods"><p></p><p>待付款</p></i>
				
			</router-link>
			<router-link to="user" tag="a" class="styy">
				<i class="el-icon-wallet"><p></p><p>代收货</p></i>
				
			</router-link>
			<router-link to="user" tag="a" class="styy">
				<i class="el-icon-setting"><p>退换修</p></i>
				
			</router-link>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.User{
		
	}
	.header{
		height: 1rem;
		background: orangered;
		line-height: 1rem;
	}
	.us_us{
		font-size: 0.5rem;
		width: 0.8rem;
		text-align: center;
		float: left;
		margin-left: 0.3rem;
		margin-right: 0.3rem;
	}
	.us_us i{
		padding: 0.1rem;
		border: 0.015rem solid #FFFFFF;
		border-radius: 50%;
		color: #FFFFFF;
		background-color: goldenrod;
	}
	.stylle{
		font-size: 0.2rem;
		color: #FFFFFF;
		line-height: 1rem;
	}
	.dingdan{
		line-height: 0.5rem;
		height: 0.5rem;
		display: flex;
		justify-content: space-between;
		padding: 0 0.3rem;
		border-bottom: 0.015rem solid #666666;
		font-size: .2rem;
		background-color: #FFFFFF;
	}
	.tu{
		height: 1rem;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
	}
	.styy{
		width: 33%;
		text-align: center;
		padding-top: 0.2rem;
	}
	.styy i{
		font-size: 0.3rem;
	}
	.styy i p{
		font-size: 0.2rem;
		margin-top: 0.1rem;
	}
</style>
