function rainbowfishAnswer(){
  var password = document.getElementById("rainbowfishQuestion")
  var passwordText = password.value;
  if(passwordText=="Aquaarus Spectrum"){
    return true;
  }
  alert("Incorrect Answer! Try Again")
  return false; 
}