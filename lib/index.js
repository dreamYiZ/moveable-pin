"use strict";

console.log("moveable-pin");

exports.moveablePin = function (el) {
  console.log("moveablePin el", el);
  var active = false;

  function preventDefault(e) {
    if (active) {} else {
      e.preventDefault();
      return false;
    }
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
  dragItem.addEventListener("mousedown", dragStart, false);
  dragItem.addEventListener("mouseup", dragEnd, false);
  dragItem.addEventListener("mousemove", drag, false);

  function logState() {
    console.log('active', active);
  }

  function dragStart(e) {
    logState();
    console.log("dragStart", e);
    active = true;
  }

  function dragEnd(e) {
    logState();
    console.log("dragEnd", e);
    active = false;
  }

  function drag(e) {
    logState();
    console.log("drag", e);
  }

  function moveItem(xPos, yPos, el) {
    logState();
    console.log("moveItem");
  }
};