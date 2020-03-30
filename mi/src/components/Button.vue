<template>
	<div class="button">
		<input
		 type="button"
		 :value="text"
		 class="btn"
		 :style="{background:bgcolor}"
		 @click="$emit('click')"
		 />
	</div>
</template>

<script>
	export default{
		name:'button',
		props:{
			text:{
				type:String,
				default:'按钮'
			},
			bgcolor:{
				type:String,
				default:'#4c4f50'
			}
		},
		data(){
			return {
				
			}
		},
		components:{},
		mounted(){},
		updata(){}
	}
</script>

<style scoped="">
	.button{}
	.btn{width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
</style>
