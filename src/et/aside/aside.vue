<template>
   
  <button id="content" class="et-button et-button--raised et-button--accent" v-on:click = "isVisible = true" >red box</button>  
 <div id="content" v-show="isVisible">

<div class="box bgRed3" >
	<h1>The Box</h1>
<button v-on:click = "isVisible = false" >Click the Button</button>
</div>

 </div>
</template>
<script>
export default {
    data: function () {
            return {
            	twoWay: true,
                isVisible: false,

            }
        }
        
}
</script>

<style>
.box {

border: 1px solid #333;
}
.box.greenbox{background:green;}
</style>
