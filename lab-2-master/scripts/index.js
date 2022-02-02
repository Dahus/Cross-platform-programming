document.addEventListener('DOMContentLoaded', function () {

  const $iconPlus = document.querySelector('.icon__plus');
  const $addTextTask = document.querySelector('.add__tasks__text')
  const $crossOutRectangle = document.querySelector('.group__rectangle');
  const $removeItem = document.querySelector('.remove__item');

  objectNote = JSON.parse(localStorage.getItem('note')) || [];

  console.log($crossOutRectangle);

  renderTaks($crossOutRectangle, objectNote);
  renderGuage($crossOutRectangle, objectNote);

  $iconPlus.addEventListener('click', function (objectNote) {

    objectNote = JSON.parse(localStorage.getItem('note')) || [];
    const itemObj = {};

    id = objectNote.length; // Получаем id
    itemObj.id = id;
    itemObj.text = $addTextTask.value;
    if (!$addTextTask.value) {
      return;
    }
    itemObj.done = false;

    objectNote.push(itemObj);
    localStorage.setItem('note', JSON.stringify(objectNote));

    renderTaks($crossOutRectangle, objectNote);
    renderGuage($crossOutRectangle, objectNote);
  })


  $crossOutRectangle.addEventListener("click", function (eDone) { //функция зачеркивания
    objectNote = JSON.parse(localStorage.getItem('note')) || [];

    const target = eDone.target;
    const parentNode = target.parentNode;

    if (parentNode.dataset && parentNode.dataset.id) {
      const dataId = parentNode.dataset.id;
      const task = objectNote.find(({ id }) => id == dataId);
      task.done = !task.done;



      console.log(task.id);
      
      /*
      Реализовать отдельную функцию для работы крестика под $crossOutRectangle
      # Event.stopPropagation() вызываем в начале новой функции крестика.


      var pos = parseInt(task.id); 
      objectNote.splice(pos, 1) - pos;
      if (pos = 2){
        var pos = parseInt(task.id); 
        objectNote.splice(pos, 1);
      }
      */

      localStorage.setItem('note', JSON.stringify(objectNote));

      renderTaks($crossOutRectangle, objectNote);
      renderGuage($crossOutRectangle, objectNote);
    }
  });

  $removeItem.addEventListener('Click', function (rDone){
    //rDone.stopPropagation();

    console.log("работает");
  });


  /*
  $removeItem.addEventListener("click", function (e) {
    //objectNote = JSON.parse(localStorage.getItem('note')) || [];
    alert('del');
  });
  */

  function html(strings, ...values) {
    let result = '';
    for (let i = 0; i < values.length; i++) {
      result += strings[i] + values[i]
    }
    result += strings[strings.length - 1]

    return wrapWithTemplate(result)
  }

  function wrapWithTemplate(innerHTML) {
    const template = document.createElement('template')
    template.innerHTML = innerHTML

    return template.content
  }

  $addTextTask.addEventListener('keydown', function (e) { // Отправка сообщения в localStorage на 'Enter'
    if (e.keyCode == 13) {
      $iconPlus.click();
      $addTextTask.value = '';
    }
  })


  var users = JSON.parse(localStorage.getItem("note") || "[]");
  console.log("# пользователей: " + users.length);
  users.forEach(function (user, index) {
    console.log("[" + index + "]: " + user.text);
  });



  function renderTaks($containerTask, objectNote) { //Отрисовка задач
    $containerTask.innerHTML = "";
    objectNote.forEach(function ({ id, text, done }) {
      let textClassName = "square__window__text";
      if (done) {
        textClassName += " square__window__text--crossed";
      } //Отдельную функцию создать под удаление
      let newTaskNode = html
        `<div class="rectangle" data-id="${id}">
        <div class="square__window"></div>
        <div class="${textClassName}">${text}</div>
        
        <div class="remove__item" data-id="${id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41401 6.00001L11.707 1.70701C12.098 1.31601 12.098 0.684006 
        11.707 0.293006C11.316 -0.0979941 10.684 -0.0979941 10.293 0.293006L6.00001 4.58601L1.70701 0.293006C1.31601 
        -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.684006 -0.0979941 1.31601 0.293006 
        1.70701L4.58601 6.00001L0.293006 10.293C-0.0979941 10.684 -0.0979941 11.316 0.293006 11.707C0.488006 11.902 
        0.744006 12 1.00001 12C1.25601 12 1.51201 11.902 1.70701 11.707L6.00001 7.41401L10.293 11.707C10.488 11.902 
        10.744 12 11 12C11.256 12 11.512 11.902 11.707 11.707C12.098 11.316 12.098 10.684 11.707 10.293L7.41401 
        6.00001Z" fill="#A5A5A5"/>
        </svg>
        </div>
      </div>`;


      $containerTask.appendChild(newTaskNode);
    });
  }

  function renderGuage($containerGuage, objectNote) { //Отрисовка счетчика

    objectNote.forEach(function ({ id, text, done }) {
      const allTask = document.querySelector('.gauge__tasks');
      allTask.textContent = ++id;
    });

    let guageTask = objectNote.filter(({ done }) => done === true); //как-то циклом перебрать

    const $gauge = document.querySelector('.gauge')
    ratioOfNumbers = Math.round(guageTask.length / objectNote.length * 100); //Отношение чисел
    setGaugePercent($gauge, ratioOfNumbers);
  }


  /*
  const state = getStoredStateOrDefault({
    counter: 0
  })
  
  const $gauge = document.querySelector('.gauge')
  setGaugePercent($gauge, state.counter)

  $incrButton.addEventListener('click', function () {
    state.counter = Math.min(state.counter + 10, 100)
    saveState(state)
    setGaugePercent($gauge, state.counter)
  })

  $decrButton.addEventListener('click', function () {
    state.counter = Math.max(state.counter - 10, 0)
    saveState(state)
    setGaugePercent($gauge, state.counter)
  })
  */
})