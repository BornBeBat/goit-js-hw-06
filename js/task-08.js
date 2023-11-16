const form = document.querySelector(".login-form");
const { email, password } = form.elements;
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (email.value === "" || password.value === "") {
    alert("Enter yours data");
  } else {
    const nevArr = {
      email: email.value,
      password: password.value,
    };
    console.log(nevArr);
    form.reset();
  }
}
