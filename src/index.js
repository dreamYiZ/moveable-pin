console.log("moveable-pin");

exports.moveablePin = function (el) {
  console.log("moveablePin el", el);

  let active =false;
  function preventDefault(e) {
    if ( active ){
    }else{
      e.preventDefault();
      return false;
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

  dragItem.addEventListener("mousedown", dragStart, false);
  dragItem.addEventListener("mouseup", dragEnd, false);
  dragItem.addEventListener("mousemove", drag, false);

  function logState (){
    console.log('active', active)
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
