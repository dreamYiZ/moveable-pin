"use strict";

exports.moveablePin = function (el) {
  console.log("moveablePin el", el);
  var active = false;

  function preventDefault(e) {
    console.log("preventDefault active", active);

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
  dragItem.addEventListener("touchstart", dragStart, false);
  dragItem.addEventListener("touchend", dragEnd, false);
  dragItem.addEventListener("touchmove", drag, false);

  function dragStart(e) {
    active = true;
  }

  function dragEnd(e) {
    active = false;
  }

  function drag(e) {
    var touch = e.touches[0];
    placeDiv(touch.pageX - e.target.clientWidth / 2, touch.pageY - e.target.clientHeight, el);
  }

  function placeDiv(x_pos, y_pos, el) {
    el.style.position = "fixed";
    el.style.left = x_pos + "px";
    el.style.top = y_pos + "px";
  }
};