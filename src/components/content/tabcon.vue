<template>
	<div>
		<Tabbar>
			<Tabbaritem>
				<router-link to="/home">
					<div><span class="iconfont">&#xe611;</span></div>
					<div>首页</div>
				</router-link>
			</Tabbaritem>
			<Tabbaritem>
				<router-link to="car">
					<div><span class="iconfont">&#xe600;</span></div>
					<div>购物车</div>
				</router-link>
			</Tabbaritem>
			<Tabbaritem>
				<router-link to="/list">
					<div><span class="iconfont">&#xe714;</span></div>
					<div>列表</div>
				</router-link>
			</Tabbaritem>
			<Tabbaritem>
				<router-link to="/profile">
					<div><span class="iconfont">&#xe608;</span></div>
					<div>我的</div>
				</router-link>
			</Tabbaritem>
		</Tabbar>
	</div>
</template>
<script>
	import Tabbar from 'components/common/tabbar/Tabbar.vue'
	import Tabbaritem from 'components/common/tabbar/tabbaritem.vue'
	export default{
		name:"tabcon",
		components:{
			Tabbar,Tabbaritem
		}
	}
</script>

<style>
	@import '../../assets/css/base.css';
	body{
		color:black;
	}
	.iconfont{
		font-size: 20px;

	}
</style>