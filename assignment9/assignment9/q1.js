// Q1 - Welcome Page Greeting
// Uses jQuery to manipulate DOM and handle events.
// On load -> show greeting based on time of day.
$(function(){
  const $app = $('#app');
  const greeting = $('<h3 id="greeting"></h3>');
  const changeBtn = $('<button class="btn" id="change">Change Greeting</button>');
  const toggleBtn = $('<button class="btn" id="toggle">Toggle Welcome</button>');
  const welcome = $('<p id="welcome">Welcome to our site!</p>');
  $app.append(greeting, changeBtn, toggleBtn, welcome);

  function showGreeting(){
    const h = new Date().getHours();
    let text = 'Hello';
    if(h<12) text='Good Morning';
    else if(h<18) text='Good Afternoon';
    else text='Good Evening';
    $('#greeting').text(text + ' — have a great day!');
  }
  showGreeting();

  // clicking greeting shows alert
  $app.on('click', '#greeting', function(){
    alert('Greeting clicked! Enjoy your visit.');
  });
  // change greeting to quote
  $app.on('click', '#change', function(){
    $('#greeting').text('Believe you can and you're halfway there. —Theodore Roosevelt');
  });
  // toggle welcome paragraph
  $app.on('click', '#toggle', function(){
    $('#welcome').toggle();
  });
});
