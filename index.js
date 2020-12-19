const url = "https://5ee248e08b27f300160948a4.mockapi.io/video/login";


// Ready Call Back Function using JQuery
$(document).ready(() => {

    
// Check Login Status from Local Storage & Re-direct Webpage
localStorage.getItem('login') && window.location.replace('./orders.html');



// Login Form Submit - Callback function
$("#login-form").submit((e) => {
    e.preventDefault();

    // Store Form Value
    let userName = $("#userName").val();
    let password = $("#password").val();

    // Validate Credentials
    if(userName === password) {

        // Send User Credentials by POST Method
        $.post(url, {username: userName, password: password}, () => {

            // Set Login Status & Re-direct Webpage
            localStorage.setItem('login', JSON.stringify(true));
            alert('login Successful');
            window.location.href = './orders.html';
        });
    } 
    // If User Credentials Not Valid
    else {
        alert('please enter valid credentials');
    }

});



});


