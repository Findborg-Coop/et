<style lang="stylus">
@require "../variables.styl"
.tBar {
	position: relative;
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
    z-index:3;
    background-color color-primary-dark
    color: #ffffff;
    box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12);
    transition-duration:.2s;
    transition-timing-function:cubic-bezier(0.4,0,0.2,1);
    transition-property:max-height,box-shadow
}
/* Toolbar for phone screen widths  */
@media only screen {
.tBar {
	position: relative;
  height: 48px;
  
}
  .tBar.medium-tall {
  height: 96px;
}

.tBar.tall {
  height: 154px;
}


}
/* Tbar classes for tablet screen widths  */
@media only screen and (min-width: 400px) {
.tBar{
    /* size */
      height: 56px;
     /* typography */
       font-size: 20px;
    	line-height:28px;
       }
.tBar.medium-tall {
  height: 112px;
}

.tBar.tall {
  height: 164px;
  

}
.et-toolbar-row {
	position: relative;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    flex-shrink:0;
    box-sizing:border-box;
    align-self:stretch;
    align-items:center;
    height:56px;
    margin:0;
    padding:0 16px;
    
}
}
/* Tbar classes for wide Tablet / Laptop to Small Desktop Size */

@media only screen and (min-width: 630) {
/* size */
.tBar{
  height: 64px;
  /* typography */
  font-size: 20px;
  line-height:28px;
  
}
  .tBar.medium-tall {
  height: 128px;
}

.tBar.tall {
  height: 192px;
}
.et-toolbar-row {
	position: relative;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    flex-shrink:0;
    box-sizing:border-box;
    align-self:stretch;
    align-items:center;
    height:64px;
    margin:0;
    padding:0 16px;
    
}
}



/* Tbar Classes for Large Desktop Size */
@media only screen and (min-width: 850px) {
/* size */
.tBar{
/* technical */
  display: block;
  position: relative;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  
  z-index: 5;
  height: 64px;
  /* typography */
  font-size: 20px;
  line-height: 20px;
  }
  .tBar.medium-tall {
  height: 128px;
}

.tBar.tall {
  height: 192px;
}
.et-toolbar-row {
	position: relative;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    flex-shrink:0;
    box-sizing:border-box;
    align-self:stretch;
    align-items:center;
    height:64px;
    margin:0;
    padding:0 16px;
    
}

}




.tBar.animate {
  /* transition */
  transition: height 0.18s ease-in;
}




/* middle bar */
#middleBar {
position: relative;
 
  top: 0;
  right: 0;
  left: 0;
}


/* bottom bar */
#bottomBar {
position: absolute;
  
  right: 0;
  bottom: 0;
  left: 0;
}


</style>