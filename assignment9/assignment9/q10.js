// Q10 - Registration Form Validation using jQuery
$(function(){
  const $app = $('#app');
  const $form = $(`<form id="reg">
    <div><label>Name: <input id="name" /></label> <span class="err" id="err-name"></span></div>
    <div><label>Email: <input id="email" /></label> <span class="err" id="err-email"></span></div>
    <div><label>Password: <input id="pass" type="password" /></label> <span class="err" id="err-pass"></span></div>
    <button class="btn" type="submit">Register</button>
  </form><div id="msg"></div>`);
  $app.append($form);
  // check uniqueness mock function
  function isUniqueEmail(email){ const existing=['a@x.com','b@x.com']; return existing.indexOf(email)===-1; }
  $('#reg').on('submit', function(e){
    e.preventDefault(); // prevent submission
    let ok=true;
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const pass = $('#pass').val();
    if(!name){ $('#err-name').text('Required'); $('#name').css('border','1px solid red'); ok=false; } else { $('#err-name').text(''); $('#name').css(''); }
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if(!emailRegex.test(email)){ $('#err-email').text('Invalid'); $('#email').css('border','1px solid red'); ok=false; } else if(!isUniqueEmail(email)){ $('#err-email').text('Email taken'); $('#email').css('border','1px solid red'); ok=false;} else { $('#err-email').text(''); $('#email').css(''); }
    if(pass.length<8){ $('#err-pass').text('Min 8'); $('#pass').css('border','1px solid red'); ok=false; } else { $('#err-pass').text(''); $('#pass').css(''); }
    if(ok){ $('#msg').text('Success: All fields valid'); $('#reg')[0].reset(); }
  });
  // live remove errors
  $('#reg input').on('input', function(){ $(this).css('border',''); $(this).next('.err').text(''); $('#msg').text(''); });
});
