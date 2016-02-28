<template>
<div class="dropdown">
  <label for="dropdown-1" class="btn btn-dropdown">{{btnText}}</label>
  <input class="dropdown-open" type="checkbox" id="dropdown-1" aria-hidden="true" hidden />
  <label for="dropdown-1" class="dropdown-overlay"></label>
  <div class="dropdown-inner">
    <slot>enter dropdown content</slot>
  </div>
</div>
</template>
<script>
export default {
	props:['btnText']
}
</script>
<style lang="stylus">
//
// Variables
// --------------------------------

// Colors
// --------------------------------

$gray-dark     = #222 
$gray          = #555 
$gray-light    = #aaa 
$gray-lighter  = #eaeaea 

$brand-primary = #428bca 

// Margins
// --------------------------------

$space = 20px 

// Media Queries
// --------------------------------

// Extra small screen / phone
$screen-xs-min = 480px 
$screen-xs-max = ($screen-sm-min - 1) 

// Small screen / tablet
$screen-sm-min = 768px 
$screen-sm-max = ($screen-md-min - 1) 

// Medium screen / desktop
$screen-md-min = 992px 
$screen-md-max = ($screen-lg-min - 1) 

// Large screen / wide desktop
$screen-lg-min = 1200px 
//
// Dropdown - Pure CSS (no JavaScript)
// ===================================================

// Button
// -------------------------------------------------- 

.btn-dropdown   
  z-index 2 
  
  &:after  
    content ' ▼' 
   
 
// Dropdown
// -------------------------------------------------- 

.dropdown  
  display inline-block 
 
 
.dropdown-overlay  
  display none 
  position fixed 
  top 0 
  right 0 
  bottom 0 
  left 0 
  z-index 1 
  

.dropdown-inner  
  background #fff 
  border $gray-light solid 1px 
  border-radius 3px 
  position absolute 
  padding $space 
  opacity 0 
  transition opacity .3s, visibility .3s
  visibility hidden 
  z-index 2 
 

.dropdown-hover:hover .dropdown-inner,
.dropdown-open:checked ~ .dropdown-inner   
  opacity 100
  visibility visible 
 

.dropdown-hover:hover .dropdown-overlay,
.dropdown-open:checked ~ .dropdown-overlay  
  display block 
 
 //  
// Helpers
//
// 1. Center, horizontal and vertical
// 2. Clearfix 
// 3. Reset list styles
// 4. Hidden
// 5. Hidden on mobile
// 6. Visible on mobile
// 7. Visible on small screeens  
// 8. Triangle 
// 9. Triangle line  
// 10. Hidden Font
//
// ===============================================================

//
// 1. Center, horizontal and vertical
// -----------------------------------

$center($arg = "")
  position absolute
  
  if ($arg == top)
    top 50%
    transform translateY(-50%)
  else if ($arg == full)
    top 50%
    left 50%
    transform translate(-50%,-50%)
  else
    left 50%
    transform translateX(-50%)


//
// 2. Clearfix
// --------------------------------

$clearfix 
  &:before,
  &:after
    content " " 
    display table 

  &:after
    clear both 

 
//
// 3. Reset list styles
// --------------------------------------------------

$list-unstyled 
  margin-bottom 0
  padding-left 0
  list-style none

 
//
// 4. Hidden
// --------------------------------------------------

$hidden 
  visibility hidden
  font-size 0
  display none 


//
// 5. Hidden on mobile
// --------------------------------------------------

$hidden-xs 
  @media (max-width $screen-xs-max)
    display none  
    

//
// 6. Visible on mobile
// --------------------------------------------------

$visible-xs 
  @media (min-width $screen-sm)
    display none  


//
// 7. Visible on small screeens
// --------------------------------------------------

$visible-sm 
  display none  
  
  @media (min-width $screen-sm)
    display block 
    

//
// 8. Triangle 
// Usage: triangle(width, height, direction, color)
// --------------------------------------------------

         
triangle($width = 10px, $height = 10px, $direction = 'bottom', $color = #000)

  // Base triangle styles
  width 0
  height 0
  background 0
  border-style solid

  // Styles for each direction
  directions = {
    top: {
      border-width: 0 ($width * .5) $height ($width * .5),
      border-color: transparent transparent $color transparent
    },
    topRight: {
      border-width: 0 $width $height 0,
      border-color: transparent $color transparent transparent
    },
    right: {
      border-width: ($height * .5) 0 ($height *.5) $width,
      border-color: transparent transparent transparent $color
    },
    bottomRight: {
      border-width: 0 0 $height $width,
      border-color: transparent transparent $color transparent
    },
    bottom: {
      border-width: $height ($width * .5) 0 ($width * .5),
      border-color: $color transparent transparent transparent
    },
    bottomLeft: {
      border-width: $width 0 0 $height,
      border-color: transparent transparent transparent $color
    },
    left: {
      border-width: ($height * .5) $width ($height * .5) 0,
      border-color: transparent $color transparent transparent
    },
    topLeft: {
      border-width: $height $width 0 0,
      border-color: $color transparent transparent transparent
    }
  }

  // Mixin styles for passed direction
  styles = directions[$direction]
  {styles}
  

// 
// 9. Triangle line    
// Usage: triangle-line(width, height, color-line, color-triangle, direction, position)     
      
// --------------------------------------------------

triangle-line($width = '', $height = '', $color-line = '', $color-triangle = '', $direction = '', $position = '')  

  w = -($width / 2)   
      
  &:before,
  &:after 
    content ''
    position absolute  
     
    if ($position == 'left')
      left: 0  
    
    else if ($position == 'right')
      right: 0
     
    else
      margin-left: w
      left: 50%
    
    if ($direction == 'bottom')
      top: 100% 
  
    else 
      bottom: 100%
      
  &:before 
    triangle($width, $height, $direction, $color-line) 
    
  &:after  
    triangle(($width - 1.5), ($height - 2), $direction, $color-triangle) 
    margin-left (w + 2)
    

//
// 10. Hidden Font
// --------------------------------------------------

$hidden-font 
  font-size 0
  text-indent -999em
</style>