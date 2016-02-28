<template>
<div id="mypanel" class="panel {{placement}} {{fixed}} is-active" 
      style="width: {{width}}px; height:  {{height}}px;" 
      v-show="show" transition="expand">
 <slot> here is some stuff for you to look at</slot>
 <button v-on:click = "show = true" >Click the Button</button>
</div>


</template>

<script>
export default{
  
  data: function () {
    return {
      el: '#mypanel',
      show: true,
      transitionState: 'Idle'
     }
   },
  
  transitions: {
    expand: {
      beforeEnter: function (el) {
        el.textContent = 'beforeEnter'
      },
      enter: function (el) {
        el.textContent = 'enter'
      },
      afterEnter: function (el) {
        el.textContent = 'afterEnter'
      },
      beforeLeave: function (el) {
        el.textContent = 'beforeLeave'
      },
      leave: function (el) {
        el.textContent = 'leave'
      },
      afterLeave: function (el) {
        el.textContent = 'afterLeave'
      }
    }
  },
  props: {
  placement: {
        type: String,
        default: 'panel-right'
      },
  fixed: {
        type: String,
        default: ''
      },
  width: {
    type: String,
    default: '300'
  },
  height: {
    type: String,
    default: ''
  }        
}
}
</script>

<style>
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
.panel {
  position: absolute;
  z-index: 100;
  overflow-y: auto;
  display: none; }
  .is-active.panel {
    display: block; }

.panel {
  /*
    Basic styles
  */
  padding: 0;
  background: #fff; }

.panel-top {
  /*
    Direction
  */
  top: 0;
  left: 0;
  width: 100%;
  /*
    Sizing
  */
  height: 300px;
  /*
    Shadows
  */ }
  .panel-top.is-active {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25); }

.panel-right {
  /*
    Direction
  */
  top: 0;
  right: 0;
  height: 100%;
  /*
    Sizing
  */
  width: 100%;
  /*
    Shadows
  */ }
  @media only screen and (min-width: 18.75em) {
    .panel-right {
      width: 300px; } }
  .panel-right.is-active {
    box-shadow: -3px 0 10px rgba(0, 0, 0, 0.25); }

.panel-bottom {
  /*
    Direction
  */
  bottom: 0;
  left: 0;
  width: 100%;
  /*
    Sizing
  */
  height: 300px;
  /*
    Shadows
  */ }
  .panel-bottom.is-active {
    box-shadow: 2px -3px 10px rgba(0, 0, 0, 0.25); }

.panel-left {
  /*
    Direction
  */
  top: 0;
  left: 0;
  height: 100%;
  /*
    Sizing
  */
  width: 100%;
  /*
    Shadows
  */ }
  @media only screen and (min-width: 18.75em) {
    .panel-left {
      width: 300px; } }
  .panel-left.is-active {
    box-shadow: 3px 0 10px rgba(0, 0, 0, 0.25); }

.panel-fixed {
  position: fixed; }

</style>