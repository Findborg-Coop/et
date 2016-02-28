<template lang="jade">
div.et-card.shadow1
	<slot></slot>
</template>

<style lang="stylus">
@require "../variables.styl"
.et-card {
    display:flex;
    flex-direction:column;
    font-size:16px;
    font-weight:400;
    min-height:200px;
    overflow:hidden;
    //width:330px;
    z-index:1;
    position:relative;
    background: #ffffff;
    border-radius:2px;
    box-sizing:border-box
}

.et-card__media {
    background-color:color-accent;
    background-repeat:repeat;
    background-position:50% 50%;
    background-size:cover;
    background-origin:padding-box;
    background-attachment:scroll;
    box-sizing:border-box
}

.et-card__title {
    align-items:center;
    color:#000;
    display:block;
    display:flex;
    justify-content:stretch;
    line-height:normal;
    padding:16px;
    perspective-origin:165px 56px;
    transform-origin:165px 56px;
    box-sizing:border-box
}

.et-card__title.et-card--border {
    border-bottom:1px solid rgba(0,0,0,0.1)
}

.et-card__title-text {
    align-self:flex-end;
    color:inherit;
    display:block;
    display:flex;
    font-size:24px;
    font-weight:300;
    line-height:normal;
    overflow:hidden;
    transform-origin:149px 48px;
    margin:0
}

.et-card__subtitle-text {
    font-size:14px;
    color:grey;
    margin:0
}

.et-card__supporting-text {
    color:rgba(0,0,0,0.87);
    font-size:13px;
    line-height:18px;
    overflow:hidden;
    padding:16px;
    width:90%
}

.et-card__actions {
    font-size:16px;
    line-height:normal;
    width:100%;
    background-color:transparent;
    padding:8px;
    box-sizing:border-box
}

.et-card__actions.et-card--border {
    border-top:1px solid rgba(0,0,0,0.1)
}

.et-card--expand {
    flex-grow:1
}

.et-card__menu {
    position:absolute;
    right:16px;
    top:16px
}

</style>