<template>
<div class="collapse">
	<ul class="collapse-list">
		<li><label class="collapse-btn" for="collapse-1">Lorem ipsum dolor sit amet</label>
			<input class="collapse-open" type="checkbox" id="collapse-1" aria-hidden="true" hidden="">

			<div class="collapse-painel">
				<div class="collapse-inner">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non.</p>
				</div>
			</div>
		</li>
		<li><label class="collapse-btn" for="collapse-2">Lorem ipsum dolor sit amet</label><input class="collapse-open" type="checkbox" id="collapse-2" aria-hidden="true" hidden="">

			<div class="collapse-painel">
				<div class="collapse-inner">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non.</p>
				</div>
			</div>
		</li>
		<li><label class="collapse-btn" for="collapse-3">Lorem ipsum dolor sit amet</label>
		<input class="collapse-open" type="checkbox" id="collapse-3" aria-hidden="true" hidden="">
			<div class="collapse-painel">
				<div class="collapse-inner">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non.</p>
				</div>
			</div>
		</li>
	</ul>
</div>
</template>
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

//
// Collapse - Pure CSS (no JavaScript)
// ===================================================

.collapse-open  
  display none 
 

.collapse-painel   
  visibility hidden
  max-height 0
  opacity 0
  transition max-height .1s, visibility .3s, opacity .3s
 

.collapse-open:checked ~ .collapse-painel   
  max-height 100%
  opacity 100
  visibility visible
 

// Collapse List
// -------------------------------------------------- 

.collapse-list  
  @extends $list-unstyled 

  li   
    margin-bottom ($space / 2)   

  .collapse-btn  
    border $gray-lighter solid 1px 
    background darken($gray-lighter, 1%) 
    border-radius 2px 
    cursor pointer 
    display block 
    padding ($space / 4) ($space / 2) 
    
    &:hover  
      background lighten($gray-lighter, 1%) 
      
  .collapse-inner   
    padding ($space / 2)   
 
  
</style>