"use strict";

exports.moveablePin = function (el) {
  var active = false;

  function preventDefault(e) {
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
    placeDiv(touch.pageX - el.clientWidth / 2, touch.pageY - el.clientHeight / 2, el);
  }

  function placeDiv(x_pos, y_pos, el) {
    el.style.position = "fixed";
    el.style.left = x_pos + "px";
    el.style.top = y_pos + "px";
  }
};