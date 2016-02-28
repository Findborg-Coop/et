<template lang="jade">
button.et-button.et-js-button(v-bind:disabled='disabled' v-bind:class='{"et-button--icon": icon, "et-button--accent": accent, "et-button--primary": primary, "et-button--mini-fab": miniFab, "et-button--fab": fab || miniFab, "et-button--raised": raised, "et-button--colored": colored}')
slot
</template>
<script type="babel">
export default {
        props:{
            disabled: Boolean,
    icon:{required: false},
    accent:{required: false},
    primary:{required: false},
    miniFab:{required: false},
    fab:{required: false},
    raised:{required: false},
    colored:{required: false}
        }
    }
</script>


<style lang="stylus">
@require "../variables.styl"

.et-button {
    background:transparent;
    border:none;
    border-radius:2px;
    color:#000;
    display:block;
    position:relative;
    height:36px;
    min-width:64px;
    padding:0 8px;
    display:inline-block;
    font-family:"Overpass",sans-serif;
    font-size:14px;
    font-weight:500;
    text-transform:uppercase;
    line-height:1;
    letter-spacing:0;
    overflow:hidden;
    will-change:box-shadow,transform;
    transition:box-shadow .2s cubic-bezier(0.4,0,1,1),background-color .2s cubic-bezier(0.4,0,0.2,1),color .2s cubic-bezier(0.4,0,0.2,1);
    outline:none;
    cursor:pointer;
    text-decoration:none;
    text-align:center;
    line-height:36px;
    vertical-align:middle
}

.et-button::-moz-focus-inner {
    border:0
}

.et-button:hover {
    background-color:rgba(158,158,158,0.20)
}

.et-button:focus:not(:active) {
    background-color:rgba(0,0,0,0.12)
}

.et-button:active {
    background-color:rgba(158,158,158,0.40)
}

.et-button.et-button--colored {
    color:#3f51b5
}

.et-button.et-button--colored:focus:not(:active) {
    background-color:rgba(0,0,0,0.12)
}

input.et-button[type="submit"] {
    -webkit-appearance:none
}

.et-button--raised {
    background:rgba(158,158,158,0.20);
    box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12)
}

.et-button--raised:active {
    box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.2);
    background-color:rgba(158,158,158,0.40)
}

.et-button--raised:focus:not(:active) {
    box-shadow:0 0 8px rgba(0,0,0,0.18),0 8px 16px rgba(0,0,0,0.36);
    background-color:rgba(158,158,158,0.40)
}

.et-button--raised.et-button--colored {
    background:#3f51b5;
    color:#fff
}

.et-button--raised.et-button--colored:hover {
    background-color:#3f51b5
}

.et-button--raised.et-button--colored:active {
    background-color:#3f51b5
}

.et-button--raised.et-button--colored:focus:not(:active) {
    background-color:#3f51b5
}

.et-button--raised.et-button--colored .et-ripple {
    background:#fff
}

.et-button--fab {
    border-radius:50%;
    font-size:24px;
    height:56px;
    margin:auto;
    min-width:56px;
    width:56px;
    padding:0;
    overflow:hidden;
    background:rgba(158,158,158,0.20);
    box-shadow:0 1px 1.5px 0 rgba(0,0,0,0.12),0 1px 1px 0 rgba(0,0,0,0.24);
    position:relative;
    line-height:normal
}

.et-button--fab .material-icons {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-12px,-12px);
    line-height:24px;
    width:24px
}

.et-button--fab.et-button--mini-fab {
    height:40px;
    min-width:40px;
    width:40px
}

.et-button--fab .et-button__ripple-container {
    border-radius:50%;
    -webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)
}

.et-button--fab:active {
    box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.2);
    background-color:rgba(158,158,158,0.40)
}

.et-button--fab:focus:not(:active) {
    box-shadow:0 0 8px rgba(0,0,0,0.18),0 8px 16px rgba(0,0,0,0.36);
    background-color:rgba(158,158,158,0.40)
}

.et-button--fab.et-button--colored {
    background:color-accent;
    color:#fff
}

.et-button--fab.et-button--colored:hover {
    background-color:color-accent
}

.et-button--fab.et-button--colored:focus:not(:active) {
    background-color:color-accent
}

.et-button--fab.et-button--colored:active {
    background-color:color-accent
}

.et-button--fab.et-button--colored .et-ripple {
    background:#fff
}

.et-button--icon {
    border-radius:50%;
    font-size:24px;
    height:32px;
    margin-left:0;
    margin-right:0;
    min-width:32px;
    width:32px;
    padding:0;
    overflow:hidden;
    color:inherit;
    line-height:normal
}

.et-button--icon .material-icons {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-12px,-12px);
    line-height:24px;
    width:24px
}

.et-button--icon.et-button--mini-icon {
    height:24px;
    min-width:24px;
    width:24px
}

.et-button--icon.et-button--mini-icon .material-icons {
    top:0;
    left:0
}

.et-button--icon .et-button__ripple-container {
    border-radius:50%;
    -webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)
}

.et-button__ripple-container {
    display:block;
    height:100%;
    left:0;
    position:absolute;
    top:0;
    width:100%;
    z-index:0;
    overflow:hidden
}

.et-button[disabled] .et-button__ripple-container .et-ripple {
    background-color:transparent
}

.et-button--primary.et-button--primary {
    color:#3f51b5
}

.et-button--primary.et-button--primary .et-ripple {
    background:#fff
}

.et-button--primary.et-button--primary.et-button--raised,.et-button--primary.et-button--primary.et-button--fab {
    color:#fff;
    background-color:#3f51b5
}

.et-button--accent.et-button--accent {
    color:color-accent
}

.et-button--accent.et-button--accent .et-ripple {
    background:#fff
}

.et-button--accent.et-button--accent.et-button--raised,.et-button--accent.et-button--accent.et-button--fab {
    color:#fff;
    background-color:color-accent
}

.et-button[disabled][disabled] {
    color:rgba(0,0,0,0.26);
    cursor:auto;
    background-color:transparent
}

.et-button--fab[disabled][disabled] {
    background-color:rgba(0,0,0,0.12);
    color:rgba(0,0,0,0.26);
    box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12)
}

.et-button--raised[disabled][disabled] {
    background-color:rgba(0,0,0,0.12);
    color:rgba(0,0,0,0.26);
    box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12)
}

.et-button--colored[disabled][disabled] {
    background-color:rgba(0,0,0,0.12);
    color:rgba(0,0,0,0.26);
    box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12)
}

</style>