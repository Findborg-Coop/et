//Load Exotypography
var Vue = require('vue');
var Ethvbox = require('./layout/hvbox.vue');
//var Etlayout = require('./layout/layout.vue')
var EtHeader = require('./layout/header.vue');
var EtGrid = require('./grid/grid.vue');
var Etbutton = require('./buttons/buttons.vue');
var Eticard = require('./icard/icard.vue');
//var Etbadge = require('./badge/badge.vue')
var Ettoolbar = require('./toolbar/toolbar.vue');
var Etspacer = require('./spacers/spacer.vue');
var Etshelf = require('./layout/shelf.vue');
var Etmdfooter = require('./layout/md-footer.vue');
//var Etresponsiveswiper = require('./swiper/responsiveswiper.vue');
//var Etscrollpane = require('./swiper/scroll-pane.vue');
//var Etdropdown = require('./dropdown/dropdown.vue');
//var Etcollapse = require('./collapse/collapse.vue');
//var Etaside = require('./aside/aside.vue');
//var Ettoggles = require('./toggles/toggle.vue');
//var Etmodals = require('./modals/modal.vue');
//var Etsidebar = require('./et/sidebar/sidebar.vue')
//var Etactionsheet = require('./action-sheets/action-sheet.vue');
//var Etpanel = require('./panel/panel.vue');


var components = {
  	//Etlayout,
    EtHeader: EtHeader,
    EtGrid: EtGrid,
    EtButton: Etbutton,
    EtIcard: Eticard,
   // Etbadge,
    EtToolbar: Ettoolbar,
    EtSpacer: Etspacer,
    EtShelf:  Etshelf,
    EtMdfooter:  Etmdfooter
    //Etresponsiveswiper,
    //Etscrollpane,
    //Etdropdown,
    //Etcollapse,
    //Etaside,
    //Ettoggles,
    //Etmodals,
    //Etsidebar,
    //Etactionsheet,
    //Etpanel

};
    
module.exports = function(Vue) {

  for (let name in components) {
    Vue.component(name, components[name]);
  }

};    
    
   





