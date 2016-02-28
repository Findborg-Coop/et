<template lang="jade">
div.et-layout
  <slot></slot>
  
</template>


<style lang="stylus">
  .et-layout {
    width:100%;
    height:100%;
    min-height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
   
}



.et-layout__container {
    position:absolute;
    width:100%;
    height:100%
}
</style>