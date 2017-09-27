/*    Project:  Hands-On Project 2-2
      Author: Logan Rabalais
      Date: 9/13/17 
      Purpose:
*/ 
function submitInfo()
{
  var name= document.getElementById("nameinput");
  var email= document.getElementById("emailinput");
  var phone= document.getElementById("phoneinput");
  (name.value && email.value && phone.value) ? alert ("Thank you!") : alert ("Please fill in all fields.");
}

document.getElementById("submit").addEventListener("click", submitInfo, false);