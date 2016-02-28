<template>
<div class="aside-menu">
          <div class="etMenu"><span class="et-layout-title">
          <a v-link="{ name: 'styles'}"> ET Styles</a>
         </span></div>
          <nav class="et-navigation">
          <a v-link="{ name: 'headings' }" class="et-navigation__link">Headings</a>
          <a v-link="{ name: 'basic-lists' }" class="et-navigation__link">Basic Lists</a>
          <a class="et-navigation__link" href="">Abbreviations</a>
          <div class="et-drawer-separator"></div>
          <span class="et-navigation__link" href="">Tables</span>
          <a class="et-navigation__link" href="">Forms</a>
          <a class="et-navigation__link" href="">Block quotes</a>
          <a class="et-navigation__link" href=""></a>
          <a v-link="{ name: 'paragraphs' }" class="et-navigation__link">Paragraphs</a>
          <a class="et-navigation__link" href="">Text</a>
          
        </nav>
          </div>
</template>