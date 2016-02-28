<template>
<div>
	<et-header class="et-layout__header shadow1">
        <slot></slot>
	</et-header>
</div>
</template>

<style lang="stylus">
@require "../variables.styl"
.et-layout-title {
display:block;
position:relative;
font-family:"Overpass",sans-serif;
font-size:20px;
font-weight:500;
line-height:1;
letter-spacing:.02em;
font-weight:400;
box-sizing:border-box;
padding-left: 20px;

}
.et-layout-title a{
color: black;
text-decoration:none;
    }
.et-layout-spacer {
flex-grow:1;
}
.et-layout__drawer {
display:flex;
flex-direction:column;
flex-wrap:nowrap;
width:240px;
height:100%;
max-height:100%;
position:absolute;
top:0;
left:0;
box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12);
box-sizing:border-box;
border-right:1px solid #e0e0e0;
background:#fafafa;

transform-style:preserve-3d;
will-change:transform;
transition-duration:.2s;
transition-timing-function:cubic-bezier(0.4,0,0.2,1);
transition-property:transform;
color:#424242;
overflow:visible;
overflow-y:auto;
z-index:5
}
.et-layout__drawer.is-visible {
transform:translateX(0)
}
.et-layout__drawer>* {
flex-shrink:0
}
.et-layout__drawer>.et-layout-title {
line-height:64px;
padding-left:40px
}
@media screen and (max-width: 850px) {
.et-layout__drawer>.et-layout-title {
line-height:56px;
padding-left:16px
}
}
.et-layout__drawer .et-navigation {
flex-direction:column;
align-items:stretch;
padding-top:16px
}
.et-layout__drawer .et-navigation .et-navigation__link {
display:block;
flex-shrink:0;
padding:16px 40px;
margin:0;
color: #666;
}
@media screen and (max-width: 850px) {
.et-layout__drawer .et-navigation .et-navigation__link {
padding:16px
}
}
.et-layout__drawer .et-navigation .et-navigation__link:hover {
background-color:#e0e0e0
}
.et-layout__drawer .et-navigation .et-navigation__link--current {
background-color:#000;
color:#3f51b5
}
@media screen and (min-width: 851px) {
.et-layout--fixed-drawer>.et-layout__drawer {
transform:translateX(0)
}
}
.et-layout__drawer-button {
display:block;
position:absolute;
height:48px;
width:48px;
border:0;
flex-shrink:0;
overflow:hidden;
text-align:center;
cursor:pointer;
font-size:26px;
line-height:50px;
font-family:"Overpass",sans-serif;
margin:10px 12px;
top:0;
left:0;
color:#fff;
z-index:4
}
.et-layout__header .et-layout__drawer-button {
position:absolute;
color:inherit
}
@media screen and (max-width: 850px) {
.et-layout__header .et-layout__drawer-button {
margin:4px
}
}
@media screen and (max-width: 850px) {
.et-layout__drawer-button {
margin:4px;
color:rgba(0,0,0,0.5)
}
}
@media screen and (min-width: 851px) {
}
.et-layout__header {
display:flex;
flex-direction:column;
flex-wrap:nowrap;
justify-content:flex-start;
box-sizing:border-box;
flex-shrink:0;
width:100%;
margin:0;
padding:0;
border:none;
min-height:64px;
max-height:1000px;
z-index:3;
background-color: #f9f9f9; 
color: black;
box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12);
transition-duration:.2s;
transition-timing-function:cubic-bezier(0.4,0,0.2,1);
transition-property:max-height,box-shadow
}
@media screen and (max-width: 850px) {
.et-layout__header {
min-height:56px
}
}
.et-layout--fixed-drawer:not(.is-small-screen)>.et-layout__header {
margin-left:240px;
width:calc(100% - 240px)
}
.et-layout__header>.et-layout-icon {
position:absolute;
left:40px;
top:16px;
height:32px;
width:32px;
overflow:hidden;
z-index:3;
display:block
}
@media screen and (max-width: 850px) {
.et-layout__header>.et-layout-icon {
left:16px;
top:12px
}
}
.et-layout__header.is-compact {
max-height:64px
}
@media screen and (max-width: 850px) {
.et-layout__header.is-compact {
max-height:56px
}
}
.et-layout__header.is-compact.has-tabs {
height:112px
}
@media screen and (max-width: 850px) {
.et-layout__header.is-compact.has-tabs {
min-height:104px
}
}
@media screen and (max-width: 850px) {
.et-layout--fixed-header>.et-layout__header {
display:flex
}
}
.et-layout__header--transparent.et-layout__header--transparent {
background-color:transparent;
box-shadow:none
}
.et-layout__header--seamed {
box-shadow:none
}
.et-layout__header--scroll {
box-shadow:none
}
.et-layout__header--waterfall {
box-shadow:none;
overflow:hidden
}
.et-layout__header--waterfall.is-casting-shadow {
box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12)
}
.et-layout__header-row {
display:flex;
flex-direction:row;
flex-wrap:nowrap;
flex-shrink:0;
box-sizing:border-box;
align-self:stretch;
align-items:center;
height:64px;
margin:0;
padding:0 16px
}
@media screen and (max-width: 850px) {
.et-layout__header-row {
height:56px;
padding:0 16px 0 16px
}
}
.et-layout__header-row>* {
flex-shrink:0
}
.et-layout__header--scroll .et-layout__header-row {
width:100%
}
.et-layout__header-row .et-navigation {
margin:0;
padding:0;
height:64px;
flex-direction:row;
align-items:center
}
@media screen and (max-width: 850px) {
.et-layout__header-row .et-navigation {
height:56px
}
}
.et-layout__header-row .et-navigation__link {
display:block;
color: black;
line-height:64px;
padding:0 24px
}
@media screen and (max-width: 850px) {
.et-layout__header-row .et-navigation__link {
line-height:56px;
padding:0 16px
}
}
.et-layout__obfuscator {
background-color:transparent;
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
z-index:4;
visibility:hidden;
transition-property:background-color;
transition-duration:.2s;
transition-timing-function:cubic-bezier(0.4,0,0.2,1)
}
.et-layout__drawer.is-visible ~ .et-layout__obfuscator {
background-color:rgba(0,0,0,0.5);
visibility:visible
}
.et-layout__content {
-ms-flex:0 1 auto;
display:inline-block;
overflow-y:auto;
overflow-x:hidden;
flex-grow:1;
z-index:1;
-webkit-overflow-scrolling:touch
}
.et-layout--fixed-drawer>.et-layout__content {
margin-left:240px
}
.et-layout__container.has-scrolling-header .et-layout__content {
overflow:visible
}
@media screen and (max-width: 850px) {
.et-layout--fixed-drawer>.et-layout__content {
margin-left:0
}
.et-layout__container.has-scrolling-header .et-layout__content {
overflow-y:auto;
overflow-x:hidden
}
}
.et-layout__tab-bar {
height:96px;
margin:0;
width:calc(100% - 112px);
padding:0 0 0 56px;
display:flex;
background-color:#3f51b5;
overflow-y:hidden;
overflow-x:scroll
}
.et-layout__tab-bar::-webkit-scrollbar {
display:none
}
@media screen and (max-width: 850px) {
.et-layout__tab-bar {
width:calc(100% - 60px);
padding:0 0 0 60px
}
}
.et-layout--fixed-tabs .et-layout__tab-bar {
padding:0;
overflow:hidden;
width:100%
}
.et-layout__tab-bar-container {
position:relative;
height:48px;
width:100%;
border:none;
margin:0;
z-index:2;
flex-grow:0;
flex-shrink:0;
overflow:hidden
}
.et-layout__container>.et-layout__tab-bar-container {
position:absolute;
top:0;
left:0
}
.et-layout__tab-bar-button {
display:inline-block;
position:absolute;
top:0;
height:48px;
width:56px;
z-index:4;
text-align:center;
background-color:#3f51b5;
color:transparent;
cursor:pointer;
user-select:none
}
@media screen and (max-width: 850px) {
.et-layout__tab-bar-button {
display:none;
width:60px
}
}
.et-layout--fixed-tabs .et-layout__tab-bar-button {
display:none
}
.et-layout__tab-bar-button .material-icons {
line-height:48px
}
.et-layout__tab-bar-button.is-active {
color:#1f1f21
}
.et-layout__tab-bar-left-button {
left:0
}
.et-layout__tab-bar-right-button {
right:0
}
.et-layout__tab {
margin:0;
border:none;
padding:0 24px;
float:left;
position:relative;
display:block;
flex-grow:0;
flex-shrink:0;
text-decoration:none;
height:48px;
line-height:48px;
text-align:center;
font-weight:500;
font-size:14px;
text-transform:uppercase;
color:rgba(255,255,255,0.6);
overflow:hidden
}
@media screen and (max-width: 850px) {
.et-layout__tab {
padding:0 12px
}
}
.et-layout--fixed-tabs .et-layout__tab {
float:none;
flex-grow:1;
padding:0
}
.et-layout .is-upgraded .et-layout__tab .is-active {
color:#1f1f21
}
.et-layout .is-upgraded .et-layout__tab .is-active::after {
height:2px;
width:100%;
display:block;
content:" ";
bottom:0;
left:0;
position:absolute;
background:#ff4081;
animation:border-expand .2s cubic-bezier(0.4,0,0.4,1) .01s alternate forwards;
transition:all 1s cubic-bezier(0.4,0,1,1)
}
.et-layout__tab .et-layout__tab-ripple-container {
display:block;
position:absolute;
height:100%;
width:100%;
left:0;
top:0;
z-index:1;
overflow:hidden
}
.et-layout__tab .et-layout__tab-ripple-container .et-ripple {
background-color:#fff
}
.et-layout__tab-panel {
display:block
}
.et-layout .is-upgraded .et-layout__tab-panel {
display:none
}
.et-layout.is-upgraded .et-layout__tab-panel.is-active {
display:block
}
</style>