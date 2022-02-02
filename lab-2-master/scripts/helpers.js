const GAUGE_MAX = 329

function setGaugePercent($node, percent) {
  const $gaugeCircle = $node.querySelector('.gauge__cirlce-arc')
  const $gaugePercent = $node.querySelector('.gauge__percent')

  const value = GAUGE_MAX * (percent / 100)

  $gaugeCircle.setAttribute('stroke-dasharray', `${value} ${GAUGE_MAX}`)
  $gaugePercent.innerText = percent
}

/*
function getStoredStateOrDefault(defaultState) {
  const stateAsStr = localStorage.getItem('todayAppState')
  if (stateAsStr) {
    return JSON.parse(stateAsStr)
  } else {
    return defaultState
  }
}

function saveState(state) {
  localStorage.setItem('todayAppState', JSON.stringify(state))
}
*/

/* let ID = 1
function saveTextTask() {
  if (localStorage.getItem(ID) == null) {
    for (let i = 1; i <= ID; i + 1) {
      localStorage.setItem(ID, JSON)
    }
  } else {
    localStorage.setItem(ID, JSON)
  } 
} */

/* function onloadTextTask(id, text, done) {

  let rectangle = document.createElement('div');
  let square__window = document.createElement('div');
  let square__window__text = document.createElement('div');

  elementId = id;
  square__window__text.elementId = text;

  containerGetElement = document.querySelector('.container');
  group__rectangleGetElement = document.querySelector('.group__rectangle');
  add__tasks = document.querySelector('.add__tasks');
  document.body.appendChild(containerGetElement);
  containerGetElement.appendChild(group__rectangleGetElement);
  group__rectangleGetElement.insertBefore(rectangle, add__tasks);
  rectangle.appendChild(square__window);
  rectangle.appendChild(square__window__text);

  rectangle.className = 'rectangle';
  square__window.className = 'square__window';
  square__window__text.className = 'square__window__text';

  add__tasks__text = document.querySelector('.add__tasks__text').value;

  var myList = add__tasks__text.split(text);
  square__window__text.value = myList.join();
} */