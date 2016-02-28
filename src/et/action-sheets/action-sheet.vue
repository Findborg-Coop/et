<template>
	<div class="action-sheet-container">
		<div class="action-sheet">
			This is something I think.
		</div>
	</div>

</template>

<style>
.action-sheet-container {
  position: relative;
  display: inline-block; }
  .action-sheet-container .button {
    margin-left: 0;
    margin-right: 0; }

.action-sheet {
  position: fixed;
  left: 0;
  z-index: 1000;
  width: 100%;
  padding: 1rem;
  background: white;
  text-align: center;
  transition-property: -webkit-transform opacity;
  transition-property: transform opacity;
  transition-duration: 0.25s;
  transition-timing-function: ease-out;
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.25);
  bottom: 0;
  -webkit-transform: translateY(100%);
          transform: translateY(100%); }
  .action-sheet.is-active {
    -webkit-transform: translateY(0%);
            transform: translateY(0%); }
  .action-sheet ul {
    margin: -1rem;
    margin-top: 0;
    list-style-type: none;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none; }
    .action-sheet ul:first-child {
      margin-top: -1rem; }
      .action-sheet ul:first-child li:first-child {
        border-top: 0; }
    .action-sheet ul a {
      display: block;
      padding: 0.8rem;
      line-height: 1;
      color: #000;
      border-top: 1px solid #ccc; }
      .action-sheet ul a:hover {
        color: #000;
        background: #f2f2f2; }
    .action-sheet ul .alert > a {
      color: #F04124; }
    .action-sheet ul .disabled > a {
      pointer-events: none;
      color: #999; }
  @media only screen and (min-width: 40em) {
    .action-sheet {
      /*
    Core styles
  */
      position: absolute;
      left: 50%;
      width: 300px;
      border-radius: 4px;
      opacity: 0;
      pointer-events: none;
      /*
    Menu shadow
  */
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
      /*
    Active state
  */
      /*
    Menu tail
  */
      /*
    Positioning
  */
      top: auto;
      bottom: 0;
      -webkit-transform: translateX(-50%) translateY(110%);
              transform: translateX(-50%) translateY(110%); }
      .action-sheet.is-active {
        opacity: 1;
        pointer-events: auto; }
      .action-sheet::before, .action-sheet::after {
        content: '';
        position: absolute;
        left: 50%;
        display: block;
        width: 0px;
        height: 0px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        margin-left: -10px; }
      .action-sheet.is-active {
        -webkit-transform: translateX(-50%) translateY(100%);
                transform: translateX(-50%) translateY(100%); }
      .action-sheet::before, .action-sheet::after {
        top: -10px;
        bottom: auto;
        border-top: 0;
        border-bottom: 10px solid white; }
      .action-sheet::before {
        top: -12px;
        border-bottom-color: rgba(0, 0, 0, 0.15); }
      .action-sheet.top {
        /*
    Core styles
  */
        position: absolute;
        left: 50%;
        width: 300px;
        border-radius: 4px;
        opacity: 0;
        pointer-events: none;
        /*
    Menu shadow
  */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        /*
    Active state
  */
        /*
    Menu tail
  */
        /*
    Positioning
  */
        top: 0;
        bottom: auto;
        -webkit-transform: translateX(-50%) translateY(-120%);
                transform: translateX(-50%) translateY(-120%); }
        .action-sheet.top.is-active {
          opacity: 1;
          pointer-events: auto; }
        .action-sheet.top::before, .action-sheet.top::after {
          content: '';
          position: absolute;
          left: 50%;
          display: block;
          width: 0px;
          height: 0px;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          margin-left: -10px; }
        .action-sheet.top.is-active {
          -webkit-transform: translateX(-50%) translateY(-110%);
                  transform: translateX(-50%) translateY(-110%); }
        .action-sheet.top::before, .action-sheet.top::after {
          top: auto;
          bottom: -10px;
          border-top: 10px solid white;
          border-bottom: 0; }
        .action-sheet.top::before {
          bottom: -12px;
          border-top-color: rgba(0, 0, 0, 0.15); } }
  .action-sheet.primary {
    background: #00558b;
    color: #fff;
    border: 0; }
    .action-sheet.primary::before {
      display: none; }
    .action-sheet.primary::before, .action-sheet.primary::after {
      border-top-color: #00558b; }
    .action-sheet.primary.top::before, .action-sheet.primary.top::after {
      border-bottom-color: #00558b; }
    .action-sheet.primary ul {
      margin: -1rem;
      margin-top: 0;
      list-style-type: none;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none; }
      .action-sheet.primary ul:first-child {
        margin-top: -1rem; }
        .action-sheet.primary ul:first-child li:first-child {
          border-top: 0; }
      .action-sheet.primary ul a {
        display: block;
        padding: 0.8rem;
        line-height: 1;
        color: #fff;
        border-top: 1px solid #006cb0; }
        .action-sheet.primary ul a:hover {
          color: #fff;
          background: #00609e; }
      .action-sheet.primary ul .alert > a {
        color: #F04124; }
      .action-sheet.primary ul .disabled > a {
        pointer-events: none;
        color: #999; }
  .action-sheet.dark {
    background: #232323;
    color: #fff;
    border: 0; }
    .action-sheet.dark::before {
      display: none; }
    .action-sheet.dark::before, .action-sheet.dark::after {
      border-top-color: #232323; }
    .action-sheet.dark.top::before, .action-sheet.dark.top::after {
      border-bottom-color: #232323; }
    .action-sheet.dark ul {
      margin: -1rem;
      margin-top: 0;
      list-style-type: none;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none; }
      .action-sheet.dark ul:first-child {
        margin-top: -1rem; }
        .action-sheet.dark ul:first-child li:first-child {
          border-top: 0; }
      .action-sheet.dark ul a {
        display: block;
        padding: 0.8rem;
        line-height: 1;
        color: #fff;
        border-top: 1px solid #393939; }
        .action-sheet.dark ul a:hover {
          color: #fff;
          background: #2e2e2e; }
      .action-sheet.dark ul .alert > a {
        color: #F04124; }
      .action-sheet.dark ul .disabled > a {
        pointer-events: none;
        color: #999; }

</style>