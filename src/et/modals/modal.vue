<template>
Design Meetup. <button class=rsvp>RSVP</button>
<div id="overlay">
  <div id="registration">
    <a href="#" class="close">Close</a>
    <h1>Design Meetup</h1>
    <input placeholder="Name">
    <input placeholder=Email type=email>
    <a href="#" class="confirm">Confirm</a>
  </div>
</div>
<code>
  clicking on ".rsvp" adds class "open" on "#overlay"
  clicking on ".close, .confirm" removes class "open" on "#overlay"
</code>
</template>
<style>
#overlay, #registration {
  opacity: 0;
  transition: .5s;
}

#overlay {
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(26,53,71,.85);
  pointer-events: none;
}

#overlay.open {
  opacity: 1;
  pointer-events: auto;
}

#registration {
  position: relative;
  width: 170px;
  margin: 100px auto 0;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0 5px 12px rgba(15,27,39,.4);
  background: #fff;
  -webkit-transform: translateY(80%) scale(.8);
  transform: translateY(80%) scale(.8);
  transition-timing-function: cubic-bezier(.3, 0, 0, 1.3);
  transition-delay: .4s;
}

.open #registration {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
}

#registration .close {
  position: absolute;
  width: 18px;
  height: 18px;
  left: 7px;
  top: 7px;
  text-indent: -9000px;
  background: red;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  #registration .close {
    background: red;
    background-size: 100% 100%;
  }
}

#registration h1 {
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 700;
  color: #1A3547;
}

input {
  display: block;
  width: 152px;
  padding: 8px;
  border: 1px solid #E9EBED;
  border-radius: 5px 5px 0 0;
  font: 500 13px "helvetica neue", helvetica, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

input:focus {
  outline: none;
}
.confirm {
  display: block;
  margin-top: 20px;
  padding: 8px 0;
  border: 1px solid #E9EBED;
  border-radius: 5px;
  background: #FAFAFB;
}

</style>