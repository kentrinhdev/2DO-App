'use strict';

//Place questions in random order
function shuffle( array ) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}
//Call only once to shuffle questions
shuffle(STORE);

function startWelcome() {
  $('#intro-page').toggle().delay(200).fadeIn(1000);
  $('#modal').toggle().delay(500).slideDown(3000);
  $('#main-app').toggle(false);
  $('#end-page').toggle(false);
  $('#footer').toggle(false);
}

function toggleMainApp() {
  $('#intro-page').toggle().delay(200).slideUp(2000).fadeOut(500);
  $('#modal').toggle().delay(500).slideUp(1000);
  $('#main-app').toggle().delay(1000).slideDown(4000).fadeIn(500);
  $('#end-page').toggle(false);
  $('#footer').toggle(true);
  $('#add-task-box-container').toggle(false);
  $('#btn-submit-yes').focus();
}

function handleWelcomeGoSubmit() {
  $('#welcome-form').submit(function(event) {
    event.preventDefault();
    
    toggleMainApp();

    const introName = $('#hello-name').val();
    $('#nav-player-name').html(introName);
    STATS.name = introName;
  });
}

function capFirstLetter(inputValue) {
  var s = inputValue;

  if (inputValue) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  } else {
    return false;
  }
}

function handleAddTaskButton() {
  $('#btn-submit-yes').on('click', function() {
    $('#add-task-box-container').animate(
      { width: 'toggle' }
    );

    $('#add-task-box').focus();

    var tVal = $('#add-task-box').val();

    tVal = capFirstLetter(tVal);

    if (tVal == "" || tVal == " " || tVal == null) {
      return false;
    } else {
      $('#todo-task-list').prepend(
        `
        <li class="todo-task-li">${tVal}</li>
        `
      );
      let count = STATS.todoCount + 1;
      STATS.todoCount = count;
      console.log("2DO " + count + ": [ " + tVal + " ]");
    }
    $('#add-task-box').val("");

    $('#btn-submit-yes').focus();
  });
}

function keypressEnter() {
  $('#add-task-box').keydown(function(e) {
    var keycode = e.which;

    if (keycode == 13) {
      $('#btn-submit-yes').click();
      $('#btn-submit-yes').focus();
      return false;
    }
  });
}

function detectTodoLiClick() {
  $('#todo-task-list').on('click', 'li', function() {
    var thisLi = $(this);

    // var prevLi;
    // if (prevLi && prevLi != thisLi) {
    //   prevLi.children().remove('#edit-done-btn-wrap');
    //   prevLi.attr('data-click-state', 0);
    // }
    // prevLi = thisLi;

    if (thisLi.attr('data-click-state') == 1) {
      thisLi.children().remove('#edit-done-btn-wrap');
      thisLi.attr('data-click-state', 0);
    } else {
      $('#todo-task-list').not(thisLi).each(function() {
        $('li').not(thisLi).children().remove('#edit-done-btn-wrap');
        $('li').not(thisLi).attr('data-click-state', 0);
      });

      thisLi.append(
        `<div class="edit-done-btn-wrap" id="edit-done-btn-wrap">
          <button class="list-btn edit-btn" id="edit-btn" type="button">EDIT</button>
          <button class="list-btn done-btn" id="done-btn" type="button">DONE</button>
        </div>`
      );
      thisLi.attr('data-click-state', 1);

      var str = thisLi.html();
      str = str.split('<')[0];

      handleDoneClick(str);

      $('#done-btn').on('click', function() {
        thisLi.remove();
      });
    }
  });
}

function handleDoneClick(tVal) {
  $('#done-btn').on('click', function() {
    STATS.todoCount = STATS.todoCount - 1;
    console.log("2DO count: " + STATS.todoCount);

    $('#todone-task-list').prepend(
      `<li class="todone-task-li">${tVal}</li>`
    );

    let count = STATS.todoneCount + 1;
    STATS.todoneCount = count;
    console.log("2DONE " + count + ": [ " + tVal + " ]");
  });
}

function detectTodoneLiClick() {
  $('#todone-task-list').on('click', 'li', function() {
    var thisLi = $(this);

    if ($(this).attr('data-click-state') == 1) {
      $(this).children().remove('#edit-done-btn-wrap');
      $(this).attr('data-click-state', 0);
    } else {
      $('#todone-task-list').not(thisLi).each(function() {
        $('li').not(thisLi).children().remove('#edit-done-btn-wrap');
        $('li').not(thisLi).attr('data-click-state', 0);
      });

      $(this).append(
        `<div class="edit-done-btn-wrap" id="edit-done-btn-wrap">
          <button class="list-btn edit-btn" id="omit-btn" type="button">OMIT</button>
          <button class="list-btn done-btn" id="undo-btn" type="button">UNDO</button>
        </div>`
      );
      $(this).attr('data-click-state', 1);

      var str = $(this).html();
      str = str.split('<')[0];

      handleUndoClick(str);

      $('#omit-btn').on('click', function() {
        STATS.todoneCount = STATS.todoneCount - 1;
        console.log("2DONE count: " + STATS.todoneCount);
        thisLi.remove();
      });

      $('#undo-btn').on('click', function() {
        thisLi.remove();
      });
    }
  });
}

function handleUndoClick(tVal) {
  $('#undo-btn').on('click', function() {
    STATS.todoneCount = STATS.todoneCount - 1;
    console.log("2DONE count: " + STATS.todoneCount);

    $('#todo-task-list').prepend(
      `<li class="todo-task-li">${tVal}</li>`
    );
    let count = STATS.todoCount + 1;
    STATS.todoCount = count;
    console.log("2DO " + count + ": [ " + tVal + " ]");
  });
}

function handleSubmit() {
  $('#todo-form').on('submit', function(e) {
    e.preventDefault();

    // handleAddTaskButton();
    // keypressEnter();
  });
}


function startQuizApp() {
  startWelcome();
  handleWelcomeGoSubmit();
  handleAddTaskButton();
  keypressEnter();
  handleSubmit();
  detectTodoLiClick();
  detectTodoneLiClick();
  // handleQuizFormSubmit();
  // handleNextButton();
  // handleEndGoSubmit();
}

$(startQuizApp);