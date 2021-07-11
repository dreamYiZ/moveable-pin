"use strict";

console.log("moveable-pin");

exports.moveablePin = function (el) {
  console.log("moveablePin el", el);
  var active = false;

  function preventDefault(e) {
    console.log('preventDefault active', active);

    if (active) {
      e.preventDefault();
      return false;
    } else {}
  }

  var wheelOpt = {
    passive: false
  };
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile

  var dragItem = el;
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;
  dragItem.addEventListener("touchstart", dragStart, false);
  dragItem.addEventListener("touchend", dragEnd, false);
  dragItem.addEventListener("touchmove", drag, false);

  function logState() {
    console.log('active', active);
  }

  function dragStart(e) {
    // logState();
    // console.log("dragStart", e);
    active = true;
  }

  function dragEnd(e) {
    // logState();
    // console.log("dragEnd", e);
    active = false;
  }

  function drag(e) {
    logState();
    console.log("drag", e);
    var touch = e.touches[0];
    placeDiv(touch.pageX - e.target.clientWidth / 2, touch.pageY - e.target.clientHeight / 2, el);
  }

  function placeDiv(x_pos, y_pos, el) {
    console.log('placeDiv', arguments);
    el.style.position = "fixed";
    el.style.left = x_pos + 'px';
    el.style.top = y_pos + 'px';
  }
};