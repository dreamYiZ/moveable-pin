exports.moveablePin = function (el) {
  let active = false;
  function preventDefault(e) {
    if (active) {
      e.preventDefault();
      return false;
    } else {
    }
  }
  let wheelOpt = { passive: false };

  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile

  let dragItem = el;

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
    let touch = e.touches[0];
    placeDiv(
      touch.pageX - el.clientWidth / 2,
      touch.pageY - el.clientHeight / 2,
      el,
      e
    );
  }

  function placeDiv(x_pos, y_pos, el, e) {
    if (
      x_pos < 0 ||
      y_pos < 0 ||
      window.innerHeight < y_pos + el.clientHeight ||
      window.innerWidth < x_pos + el.clientWidth
    ) {
      return;
    }
    console.log("placeDiv", arguments);
    el.style.position = "fixed";
    el.style.left = x_pos + "px";
    el.style.top = y_pos + "px";
  }
};
