'use strict';

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

function renderDateTime() {
  var date = new Date();
  var d = date.toString().substring(0, 3).toUpperCase();
  var dt = date.toLocaleString();
  var fullDate = d + " " + dt;

  $('#subnav-date').html(fullDate);

  return fullDate;
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

    var dt = renderDateTime();
    tVal = capFirstLetter(tVal);

    if (tVal == "" || tVal == " " || tVal == null) {
      return false;
    } else {
      $('#todo-task-list').prepend(
        `<li class="todo-task-li">${tVal} <br> <span class="todo-task-date">${dt}</span></li>`
      );
      let count = STATS.todoCount + 1;
      STATS.todoCount = count;
      $('#todo-count').html(STATS.todoCount);
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
      // Find any li item that is not the currently selected li
      // then remove the edit and done buttons 
      $('li').not(thisLi).children().remove('#edit-done-btn-wrap');
      // then set their click state to unclicked
      $('li').not(thisLi).attr('data-click-state', 0);

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
    $('#todo-count').html(STATS.todoCount);
    console.log("2DO count: " + STATS.todoCount);

    var dt = renderDateTime();

    $('#todone-task-list').prepend(
      // `<li class="todone-task-li">${tVal}</li>`
      `<li class="todone-task-li">${tVal} <br> <span class="todone-task-date">${dt}</span></li>`
    );

    let count = STATS.todoneCount + 1;
    STATS.todoneCount = count;
    console.log("2DONE " + count + ": [ " + tVal + " ]");
  });
}

function detectTodoneLiClick() {
  $('#todone-task-list').on('click', 'li', function() {
    var thisLi = $(this);

    if ($(thisLi).attr('data-click-state') == 1) {
      $(thisLi).children().remove('#edit-done-btn-wrap');
      $(thisLi).attr('data-click-state', 0);
    } else {
      // Find any li item that is not the currently selected li
      // then remove the edit and done buttons 
      $('li').not(thisLi).children().remove('#edit-done-btn-wrap');
      // then set their click state to unclicked
      $('li').not(thisLi).attr('data-click-state', 0);

      // Add edit and done buttons as child elements
      // to the currectly selected li item
      $(thisLi).append(
        `<div class="edit-done-btn-wrap" id="edit-done-btn-wrap">
          <button class="list-btn edit-btn" id="omit-btn" type="button">OMIT</button>
          <button class="list-btn done-btn" id="undo-btn" type="button">UNDO</button>
        </div>`
      );
      // then set their click state to clicked
      $(thisLi).attr('data-click-state', 1);

      var str = $(thisLi).html();
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

    var dt = renderDateTime();

    $('#todo-task-list').prepend(
      `<li class="todo-task-li">${tVal} <br> <span class="todo-task-date">${dt}</span></li>`
    );
    let count = STATS.todoCount + 1;
    STATS.todoCount = count;
    $('#todo-count').html(STATS.todoCount);
    console.log("2DO " + count + ": [ " + tVal + " ]");
  });
}

function handleSubmit() {
  $('#todo-form').on('submit', function(e) {
    e.preventDefault();
  });
}


function startQuizApp() {
  startWelcome();
  handleWelcomeGoSubmit();
  renderDateTime();
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