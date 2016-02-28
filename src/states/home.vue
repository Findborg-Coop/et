<template>
<div>
<shell>
<et-header>
      <div class="et-layout__header-row" >
       <div class="mdl-layout__drawer-button "><i class="material-icons">menu</i></div>
       <!-- Title -->
       <span class="et-layout-title"><a v-link="{ name: 'home' }">
         Exo<br>Typography
       </a></span>
       <!-- Add spacer, to align navigation to the right -->
       <etspacer></etspacer>
       <topnav>   </topnav>
      
      </div>
 </et-header>
    <main>
      <div class="home-intro py3">
  <grid>
    <div class="et-block et-size-100"><center><span class="etDisplay-4">ET!</span></center></div>
  </grid>
  <grid>
    <div class="et-block et-size-100">
    <center><h2>ExoTypography is a HTML, CSS, and JS framework for building responsive, mobile-first projects on the web.</h2></center>
    
    </div>
  </grid>
    <p class="calls-to-action">
      <a href="/hello/" class="et-button et-js-button et-button--raised et-button--colored">
        Find out more
      </a>
      <a href="/signup/" class="et-button et-js-button et-button--raised">
        Sign me up
      </a>
    </p>
  </div>
    <div class="bgCyan py3">
      <grid>
        <div class="et-block et-size-100">
          <p class="promo-tagline">Show off your latest creation and get feedback. Build a test case for that pesky bug. Find example design patterns and inspiration for your projects.</p>
        </div>
      </grid>
    </div>
    <div class="bgTeal9 py3">
    <grid>
      <div class="check-elements et-block et-size-100">
     <h2>Element Directory</h2> 
    <p class="etPerfect mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </grid>
    </div>
<div class="et-grid et-grid-no-spacing"> 
   
      <div class="et-block et-size-50 et-size-sm-100 bgOrange py3">
          <center><a v-link="{ name: 'styles' }">Styles</a></center>
     </div>
      <div class="et-block et-size-50 et-size-sm-100 bgPurple py3">Templates</div>
    </div>

    <et-grid> 
   
      <div class="et-block  et-size-sm-100 et-size-md-100 py3">
      <h4>Webpack Preprocessor</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.</p></div>
      <div class="et-block  et-size-sm-100 et-size-md-50 py3">
      <h4>Feature Rich</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.</p></div>
      <div class="et-block  et-size-sm-100 et-size-md-50 py3">
      <h4>Responsive</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.</p></div>
    </et-grid>
    </main>
  </shell>



  
</div>  
</template>
<script>

import Grid from '../et/grid/grid.vue';
import Topnav from './topnav.vue';
import Shell from '../et/layout/shell.vue';

import Etspacer from '../et/spacers/spacer.vue';


export default {
  components: {
    Grid,
    Topnav,
    Shell,
    Etspacer
  }
}
</script>

<style lang="stylus">
.home-intro
  min-height: 75vh
  background: #111;
  color: #ddd;
  background-color: #7B7B7B
  background-image: radial-gradient(#adadad, #474747)
  background-attachment: scroll
  text-shadow: 2px 3px 0 #111
.promo-tagline
  color: white

.check-elements
  color: white
  min-height: 250px  
</style>

