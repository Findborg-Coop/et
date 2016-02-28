<template lang="jade">
div
 div.et-shelf
  div.et-shelf-row
   <slot>ET
</template>

<style lang="stylus">
@require "../variables.styl"
.et-shelf {
	position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    border:none;
	height: 56px;
	background: #000;
	color: #fff;
	line-height:56px;
	z-index: 5;
}
.et-shelf-row {
	position: relative;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    flex-shrink:0;
    box-sizing:border-box;
    align-self:stretch;
    align-items:center;
    height:56px;
    margin:0;
    padding:0 16px;
    
}
</style>
