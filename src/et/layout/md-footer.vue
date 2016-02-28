<template>
<footer class="et-mini-footer">
	<slot></slot>
</footer>
</template>
<style>
	
.et-mini-footer {
display:flex;
flex-flow:row wrap;
justify-content:space-between;
padding:32px 16px;
color:#9e9e9e;
background-color:#424242
}
.et-mini-footer:after {
content:'';
display:block
}
.et-mini-footer .et-logo {
line-height:36px
}
.et-mini-footer--link-list,.et-mini-footer__link-list {
display:flex;
flex-flow:row nowrap;
list-style:none;
margin:0;
padding:0
}
.et-mini-footer--link-list li,.et-mini-footer__link-list li {
margin-bottom:0;
margin-right:16px
}
@media screen and (min-width: 760px) {
.et-mini-footer--link-list li,.et-mini-footer__link-list li {
line-height:36px
}
}
.et-mini-footer--link-list a,.et-mini-footer__link-list a {
color:inherit;
text-decoration:none;
white-space:nowrap
}
.et-mini-footer--left-section,.et-mini-footer__left-section {
display:inline-block;
order:0
}
.et-mini-footer--right-section,.et-mini-footer__right-section {
display:inline-block;
order:1
}
.et-mini-footer--social-btn,.et-mini-footer__social-btn {
width:36px;
height:36px;
padding:0;
margin:0;
background-color:#9e9e9e;
border:none
}

.et-mega-footer {
    padding:16px 40px;
    color:#9e9e9e;
    background-color:#424242
}

.et-mega-footer--top-section:after,.et-mega-footer--middle-section:after,.et-mega-footer--bottom-section:after,.et-mega-footer__top-section:after,.et-mega-footer__middle-section:after,.et-mega-footer__bottom-section:after {
    content:'';
    display:block;
    clear:both
}

.et-mega-footer--left-section,.et-mega-footer__left-section {
    margin-bottom:16px
}

.et-mega-footer--right-section,.et-mega-footer__right-section {
    margin-bottom:16px
}

.et-mega-footer--right-section a,.et-mega-footer__right-section a {
    display:block;
    margin-bottom:16px;
    color:inherit;
    text-decoration:none
}

@media screen and (min-width: 760px) {
.et-mega-footer--left-section,.et-mega-footer__left-section {
    float:left
}

.et-mega-footer--right-section,.et-mega-footer__right-section {
    float:right
}

.et-mega-footer--right-section a,.et-mega-footer__right-section a {
    display:inline-block;
    margin-left:16px;
    line-height:36px;
    vertical-align:middle
}
}

.et-mega-footer--social-btn,.et-mega-footer__social-btn {
    width:36px;
    height:36px;
    padding:0;
    margin:0;
    background-color:#9e9e9e;
    border:none
}

.et-mega-footer--drop-down-section,.et-mega-footer__drop-down-section {
    display:block;
    position:relative
}

@media screen and (min-width: 760px) {
.et-mega-footer--drop-down-section,.et-mega-footer__drop-down-section {
    width:33%
}

.et-mega-footer--drop-down-section:nth-child(1),.et-mega-footer--drop-down-section:nth-child(2),.et-mega-footer__drop-down-section:nth-child(1),.et-mega-footer__drop-down-section:nth-child(2) {
    float:left
}

.et-mega-footer--drop-down-section:nth-child(3),.et-mega-footer__drop-down-section:nth-child(3) {
    float:right
}

.et-mega-footer--drop-down-section:nth-child(3):after,.et-mega-footer__drop-down-section:nth-child(3):after {
    clear:right
}

.et-mega-footer--drop-down-section:nth-child(4),.et-mega-footer__drop-down-section:nth-child(4) {
    clear:right;
    float:right
}

.et-mega-footer--middle-section:after,.et-mega-footer__middle-section:after {
    content:'';
    display:block;
    clear:both
}

.et-mega-footer--bottom-section,.et-mega-footer__bottom-section {
    padding-top:0
}
}

@media screen and (min-width: 1024px) {
.et-mega-footer--drop-down-section,.et-mega-footer--drop-down-section:nth-child(3),.et-mega-footer--drop-down-section:nth-child(4),.et-mega-footer__drop-down-section,.et-mega-footer__drop-down-section:nth-child(3),.et-mega-footer__drop-down-section:nth-child(4) {
    width:24%;
    float:left
}
}

.et-mega-footer--heading-checkbox,.et-mega-footer__heading-checkbox {
    position:absolute;
    width:100%;
    height:55.8px;
    padding:32px;
    margin:0;
    margin-top:-16px;
    cursor:pointer;
    z-index:1;
    opacity:0
}

.et-mega-footer--heading-checkbox ~ .et-mega-footer--heading:after,.et-mega-footer--heading-checkbox ~ .et-mega-footer__heading:after,.et-mega-footer__heading-checkbox ~ .et-mega-footer--heading:after,.et-mega-footer__heading-checkbox ~ .et-mega-footer__heading:after {
    font-family:'Material Icons';
    content:""
}

.et-mega-footer--heading-checkbox:checked ~ ul,.et-mega-footer__heading-checkbox:checked ~ ul {
    display:none
}

.et-mega-footer--heading-checkbox:checked ~ .et-mega-footer--heading:after,.et-mega-footer--heading-checkbox:checked ~ .et-mega-footer__heading:after,.et-mega-footer__heading-checkbox:checked ~ .et-mega-footer--heading:after,.et-mega-footer__heading-checkbox:checked ~ .et-mega-footer__heading:after {
    font-family:'Material Icons';
    content:""
}

.et-mega-footer--heading,.et-mega-footer__heading {
    position:relative;
    width:100%;
    padding-right:39.8px;
    margin-bottom:16px;
    box-sizing:border-box;
    font-size:14px;
    line-height:23.8px;
    font-weight:500;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    color:#e0e0e0
}

.et-mega-footer--heading:after,.et-mega-footer__heading:after {
    content:'';
    position:absolute;
    top:0;
    right:0;
    display:block;
    width:23.8px;
    height:23.8px;
    background-size:cover
}

.et-mega-footer--link-list,.et-mega-footer__link-list {
    list-style:none;
    margin:0;
    padding:0;
    margin-bottom:32px
}

.et-mega-footer--link-list:after,.et-mega-footer__link-list:after {
    clear:both;
    display:block;
    content:''
}

.et-mega-footer--link-list li,.et-mega-footer__link-list li {
    font-size:14px;
    font-weight:400;
    line-height:24px;
    letter-spacing:0;
    line-height:20px
}

.et-mega-footer--link-list a,.et-mega-footer__link-list a {
    color:inherit;
    text-decoration:none;
    white-space:nowrap
}

@media screen and (min-width: 760px) {
.et-mega-footer--heading-checkbox,.et-mega-footer__heading-checkbox {
    display:none
}

.et-mega-footer--heading-checkbox ~ .et-mega-footer--heading:after,.et-mega-footer--heading-checkbox ~ .et-mega-footer__heading:after,.et-mega-footer__heading-checkbox ~ .et-mega-footer--heading:after,.et-mega-footer__heading-checkbox ~ .et-mega-footer__heading:after {
    background-image:none
}

.et-mega-footer--heading-checkbox:checked ~ ul,.et-mega-footer__heading-checkbox:checked ~ ul {
    display:block
}

.et-mega-footer--heading-checkbox:checked ~ .et-mega-footer--heading:after,.et-mega-footer--heading-checkbox:checked ~ .et-mega-footer__heading:after,.et-mega-footer__heading-checkbox:checked ~ .et-mega-footer--heading:after,.et-mega-footer__heading-checkbox:checked ~ .et-mega-footer__heading:after {
    content:''
}
}

.et-mega-footer--bottom-section,.et-mega-footer__bottom-section {
    padding-top:16px;
    margin-bottom:16px
}

.et-logo {
    margin-bottom:16px;
    color:#fff
}

.et-mega-footer--bottom-section .et-mega-footer--link-list li,.et-mega-footer__bottom-section .et-mega-footer__link-list li {
    float:left;
    margin-bottom:0;
    margin-right:16px
}

@media screen and (min-width: 760px) {
.et-logo {
    float:left;
    margin-bottom:0;
    margin-right:16px
}
}

</style>