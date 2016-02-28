<template>

<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <slot></slot>
            </div>
        </div>
        <!-- Add Scroll Bar -->
        <div class="swiper-scrollbar"></div>
    </div>
    
</template>

<style lang="stylus">
@require "css/swiper.min.css"
 
 .swiper-container {
 		width: 100%;
        height: 100%;
    }
    .swiper-slide {
    	display: flex;
    flex-flow: row wrap;
    margin: 0 auto 0 auto;
    align-items: stretch;
       text-align:left;
       font-size:inherit;
        height: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        
    }
</style>