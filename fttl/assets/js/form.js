/* ###########################################
                FORM VALIDATION
############################################*/

var fname = document.querySelector('#fullname');
var phoneNum = document.querySelector('#telephone');
var email = document.querySelector('#email');
var date = document.getElementById('dateselect');
      
var inputs = document.querySelectorAll('input');
var successMsg = '&#10004; Thank you. We\'ve got that!';
var lettersOnlyMsg = 'Alphabetical characters only. Please try again.';
var numOnlyMsg = 'Numerical characters only. Please try again.';
var emailMsg = 'This email seems to be wrong. Please try again.';
var failMsg = 'Please don\'t leave this field empty.';


var requiredField = document.querySelectorAll('input[data-req="required"]').length;

//validate the name input

fname.addEventListener("blur", function(){

        if (checkHasInput(fname) ) {
            
          if (alphaOnly(fname.value) ) {
            success(this);
          } else {
            lettersOnly(this);
          };

        } else {
          fail(this);
        };

      } );

//validate the email input

email.addEventListener("blur", function(){

        if (checkHasInput(email) ) {
            
          if (enteredEmail(email.value) ) {
            success(this);
          } else {
            emailWrong(this);
          };

        } else {
          fail(this);
        };

      } );

//validate the phone input

phoneNum.addEventListener("blur", function(){

        if (checkHasInput(phoneNum) ) {
            
          if (numberCheck(phoneNum.value) ) {
            success(this);
          } else {
            numOnly(this);
          };

        } else {
          fail(this);
        };

      } );

var check = setInterval(function() {
        nextStep(requiredField);
        NonextStep(requiredField);
      }, 300)
    
    date.addEventListener('click', function() {
        clearInterval(check);
      } );

function alphaOnly (value) {
        var rexAlphOnly = /^[A-Za-z\s]+$/;
        return rexAlphOnly.test(value);
      }

function numberCheck (value) {
        var rexNumOnly = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/
        return rexNumOnly.test(value);
      }

function enteredEmail (value) {
    var rexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return rexEmail.test(value);
    }   

function checkHasInput (obj) {
        return obj.value.length>0;
      }

function success (obj) {
        obj.nextElementSibling.className = "success";
        obj.nextElementSibling.innerHTML = successMsg;
        obj.parentNode.style.background = "green";
      }

function lettersOnly (obj) {
        obj.nextElementSibling.className = "fail";
        obj.nextElementSibling.innerText = lettersOnlyMsg;
        obj.parentNode.style.background = "white"; 
      }

function numOnly (obj) {
        obj.nextElementSibling.className = "fail";
        obj.nextElementSibling.innerText = numOnlyMsg;
        obj.parentNode.style.background = "white";
      }

function emailWrong (obj) {
        obj.nextElementSibling.className = "fail";
        obj.nextElementSibling.innerText = emailMsg;
        obj.parentNode.style.background = "white"; 
      }

function fail (obj) {
        obj.nextElementSibling.className = "fail";
        obj.nextElementSibling.innerText = failMsg;
        obj.parentNode.style.background = "white";
      }

// don"t allow to go to next step if any inputs are validated wrong

function nextStep (numReq) {
        validated = document.querySelectorAll('span.success').length;

        if (validated == numReq) {
            document.getElementById('booking').style.display = "block";
            document.getElementById('next').style.display = "none";
            document.getElementById('note').style.display = "none";
            document.querySelector('.progress').style.display = "none";
        } 
      };

// if correction has been made remove error message

function NonextStep (numReq) {
        failed = document.querySelectorAll('span.fail').length;

        if (failed >= 1) {
            document.getElementById('note').style.display = "block";
        } else {
            document.getElementById('note').style.display = "none";
        }
      };



/* ###########################################
                BOOKING PROGRESS
############################################*/

// booking form progress after each input display next one

var date = document.getElementById('dateselect');
    pilot = document.getElementsByClassName("pilotselect");
    airfield = document.getElementById('airfieldselect');  
    aircraft = document.getElementsByClassName("aircraftselect");
    tour = document.getElementsByClassName("tourselect");
    airtime = document.getElementById('airtimeselect');
    passengers = document.getElementById('passengersselect');
    var submit = '<h1>THANK YOU FOR YOUR ENQUIRY!<br>ONE OF OUR FRIENDLY STAFF MEMBER WILL BE IN CONTACT WITH YOU SHORTLY.</h1><p>Do to weather restrictions and availability of aircrafts we can not guarantee our service is available on your requested date.</p><br><div id="close"><a href="index.html">BACK TO HOMEPAGE</a></div>'
    
// console.log ( pilot.length )

date.addEventListener("input", function() {
    document.getElementById('pilot').style.display = "block";
    this.parentNode.style.background = "green";
});

for (var i=0; i < pilot.length; i++) {
  pilot[i].addEventListener("click", function(){
    document.getElementById('airfield').style.display = "block";
    this.parentNode.style.background = "green";
});
}

airfield.addEventListener("input", function() {
    document.getElementById('aircraft').style.display = "block";
    this.parentNode.style.background = "green";
});

for (var n=0; n < aircraft.length; n++) {
  aircraft[n].addEventListener("click", function(){
    document.getElementById('tour').style.display = "block";
    this.parentNode.style.background = "green";
});
}

for (var h=0; h < tour.length; h++) {
  tour[h].addEventListener("click", function(){
    document.getElementById('airtime').style.display = "block";
    this.parentNode.style.background = "green";
});
}

airtime.addEventListener("input", function() {
    document.getElementById('passengers').style.display = "block";
    this.parentNode.style.background = "green";
});

passengers.addEventListener("input", function() { 
    this.parentNode.style.background = "green";
    document.getElementById('message').style.display = "block";
    document.getElementById('newsletter').style.display = "block";
    document.getElementById('send_btn').style.display = "block";
    document.getElementById('progress2').innerHTML = 'Step No 3 of 3';
});

/* ###########################################
                SUBMIT BUTTON CLICK POPUP
############################################*/

document.getElementById('send_btn').addEventListener("click", function(){ 
  document.getElementById('overlay').style.display = "block";
  document.getElementById('content').style.display = "block";
  document.getElementById('content').innerHTML = submit;
});