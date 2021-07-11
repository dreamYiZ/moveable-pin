console.log("moveable-pin");

exports.moveablePin = function (el) {
  console.log("moveablePin el", el);

  let active =false;
  function preventDefault(e) {
    console.log('preventDefault active', active);
    if ( active ){
      e.preventDefault();
      return false;
    }else{

    }
  }
  let wheelOpt = { passive: false };
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile

  let dragItem = el;

  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  dragItem.addEventListener("touchstart", dragStart, false);
  dragItem.addEventListener("touchend", dragEnd, false);
  dragItem.addEventListener("touchmove", drag, false);

  function logState (){
    console.log('active', active)
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
    let touch = e.touches[0];
    placeDiv(touch.pageX - e.target.clientWidth/2, touch.pageY - e.target.clientHeight/2, el)
  }

  function placeDiv(x_pos, y_pos, el) {
    console.log('placeDiv', arguments )
    el.style.position = "fixed";
    el.style.left = x_pos+'px';
    el.style.top = y_pos+'px';
  }
};
