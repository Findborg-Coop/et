<template>
<!-- Number badge -->
<span class="et-badge" data-badge="5"><slot>{{amount}} Inbox</slot></span>

</template>
<script>
	export default {
  data () {
    return {
      amount: 'Hello world!'
    }
  }
}
</script>

<style lang="stylus">
@require "../typography/variables.styl"
.et-badge {
    position:relative;
    white-space:nowrap;
    margin-right:24px
}

.et-badge:not([data-badge]) {
    margin-right:auto
}

.et-badge[data-badge]:after {
    content:attr(data-badge);
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-content:center;
    align-items:center;
    position:absolute;
    top:-11px;
    right:-24px;
    font-family:"Overpass", "Arial", sans-serif;
    font-weight:600;
    font-size:12px;
    width:22px;
    height:22px;
    border-radius:50%;
    background:color-accent;
    color:#fff
}

.et-button .et-badge[data-badge]:after {
    top:-10px;
    right:-5px
}

.et-badge.et-badge--no-background[data-badge]:after {
    color:#ff4081;
    background:rgba(255,255,255,0.2);
    box-shadow:0 0 1px gray
}

</style>