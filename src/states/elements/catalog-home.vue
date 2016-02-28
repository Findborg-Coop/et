<template>
<div>
 <shell>
    <etheader>
      <div class="et-layout__header-row" >
      <div class="mdl-layout__drawer-button "><i class="material-icons">menu</i></div>
      <!-- Title -->
      <span class="et-layout-title"><a v-link="{ name: 'home' }">
    Element Directory
  </a></span>
      <!-- Add spacer, to align navigation to the right -->
      <etspacer></etspacer>
      <topnav>   </topnav>
      
      </div>
      
    </etheader>
    <main>
    <div class="et-grid etAuto-mx" style="max-width:960px;">
    	<div class="et-block "><eticard class="bgLightBlue p1">
    	<div class="etDisplay-3">St</div>
    	<span class="etDisplay-1-color-contrast">Style<br>Elements</span>
			<hr class="style-two">
			<a v-link="{ name: 'styles' }">
    Exotypography Core Styles
  </a>
			
			</eticard>
    	</div>
    	<div class="et-block "><eticard class="bgRed3 p1">
    	<div class="etDisplay-3">St</div>
    	<span class="etDisplay-1-color-contrast">Style<br>Elements</span>
			<hr class="style-two">
			Exotypography Core Styles</eticard></div>
    	<div class="et-block "><eticard class="bgYellow p1">
    	<div class="etDisplay-3">St</div>
    	<span class="etDisplay-1-color-contrast">Style<br>Elements</span>
			<hr class="style-two">
			Exotypography Core Styles</eticard></div>
    	<div class="et-block "><eticard class="bgOrange p1">
    	<div class="etDisplay-3">St</div>
    	<span class="etDisplay-1-color-contrast">Style<br>Elements</span>
			<hr class="style-two">
			Exotypography Core Styles</eticard></div>
    	<div class="et-block "><eticard class="bgLime p1">
    	<div class="etDisplay-3">St</div>
    	<span class="etDisplay-1-color-contrast">Style<br>Elements</span>
			<hr class="style-two">
			Exotypography Core Styles</eticard></div>
    	<div class="et-block "><eticard class="bgPink p1">
    	<div class="etDisplay-3">St</div>
    	<span class="etDisplay-1-color-contrast">Style<br>Elements</span>
			<hr class="style-two">
			Exotypography Core Styles</eticard></div>
    </div>
    </main>
  </shell>
 </div>
 </template>
 <script>
import Eticard from '../../et/icard/icard.vue';


export default {
  components: {
    
    Eticard
  }
}
</script>
 <style lang="stylus">
hr.style-two {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
  
</style>