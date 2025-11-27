
$('#btn').click(function(event){
    event.preventDefault();
    getData();
});


function getData(){
    const email = $('#exampleFormControlInput1').val();
    const password = $('#password').val();

    console.log("Email: "+email+" Password: "+password);

    const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{7,15}$/;

    if (!email || !password){
        alert("Please fill all the fields");
        return;
    }

    if (!emailPattern.test(email)){
        alert("Please enter a valid email");
        return;
    }

    //

    alert("Registration successful");
    // optionally call login or send to server
    login(email, password);
}

function login(email, password) { 
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/login");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        console.log("Response from server: ", JSON.parse(xhr.responseText));
    };
    const body = JSON.stringify({ email: email, password: password });
    xhr.send(body);
}
// ...existing code...