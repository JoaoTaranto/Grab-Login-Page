function Submit() {
  var email = document.querySelector(".input-email");
  var elementInput = document.querySelector(".input-email");
  var elementSpan = document.querySelector(".span-email");

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    elementInput.style.border = "2px solid var(--white)";
    elementSpan.style.color = "var(--white)";
    return true;
  } else {
    elementInput.style.border = "2px solid var(--red)";
    elementSpan.style.color = "var(--red)";
    alert("Por favor, insira um e-mail válido!");
    return false;
  }

  //   alert("You have entered an invalid email address!");
  //   console.log(email.value);
}
