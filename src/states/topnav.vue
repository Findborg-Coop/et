<template>


<nav class="et-navigation etHide-sm etHide-md">
  
  <a v-link="{ name: 'a' }" class="et-navigation__link">
    Get me started!
  </a>
  <a v-link="{ name: 'b' }" class="et-navigation__link">
    Guides & Resources
  </a>
  <a v-link="{ name: 'elements' }" class="et-navigation__link">
    Element Directory
  </a>
</nav>
</template>
<style>
.topnav {
background: #f5f5f5;
}
.topnav a {
display: inline-block;
padding: 8px 32px;
text-decoration: none;
color: #778;
}
.topnav a.active {
background: #eee;
}
</style>