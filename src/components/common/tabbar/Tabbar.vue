<template>
	<div id="tabbar">
		<slot></slot>
	</div>
</template>

<style>
	body{
		margin: 0;
		padding: 0;
	}
	#tabbar{
		height:49px;
		background: #ccc;
		position: fixed;
		left:0;
		right:0;
		bottom:0;
		box-shadow:0 -1px 2px rgba(1,1,1,0.8);
		display: flex;
		
	}
</style>