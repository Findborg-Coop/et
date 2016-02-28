<template>

<div class="aside left shadow2" v-bind:style="{ width: width + 'px' }">
  <div class="aside-dialog">
    <div class="aside-content">
      <div class="aside-header">
        <a href="#" class="close">&times;</a>
        <h4 class="aside-title">{{header}}</h4>
      </div>
      <div class="aside-body">
        <content><slot></slot></content>
      </div>
    </div>
  </div>
</div>
<div class="aside-backdrop"></div>
<code>
clicking on ".mdl-layout__drawer-button" toggles class "open" on ".aside"
clicking on ".close, .confirm" removes class "open" on ".aside"
</code>
</template>
<script>
export default {
props: {
header: {
type: String
},
width: {
type: String,
default: 320
}
}


}
</script>
<style>
.aside {
display: none;
transition: 1.5s;
}
.aside {
position: fixed;
top: 0;
bottom: 0;
z-index: 1049;
overflow: auto;
background: #fff;
}

.aside.left.open {
display: block;

}
.aside .close {
position: absolute;
width: 18px;
height: 18px;
left: 7px;
top: 7px;
text-indent: -9000px;
background: red;
}

.aside .left {
left: 0;
right: auto;
}

</style>