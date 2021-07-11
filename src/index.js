exports.moveablePin = function (el) {
  console.log("moveablePin el", el);

  let active = false;
  function preventDefault(e) {
    console.log("preventDefault active", active);
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
      touch.pageX - e.target.clientWidth / 2,
      touch.pageY - e.target.clientHeight / 2,
      el
    );
  }

  function placeDiv(x_pos, y_pos, el) {
    el.style.position = "fixed";
    el.style.left = x_pos + "px";
    el.style.top = y_pos + "px";
  }
};
