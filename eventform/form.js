
const form = document.querySelector("#eventForm");
const patronType = document.querySelector("#type");
const idContainer = document.querySelector("#idContainer");
const idName = document.querySelector("#idName");
const idTitle = document.querySelector("#idTitle");
const output = document.querySelector("#output");


function updateNumberField() {
  const value = patronType.value;

  if (value === 'student') {
    idContainer.hidden = false;
    idName.textContent = "Student I#";
    idTitle.required = true;
  }
  else if (value === "guest") {
    idContainer.hidden = false;
    idName.textContent = "Access Code";
    idTitle.required = true;
  }
  else {
    idContainer.hidden = true;
  }
  
}

patronType.addEventListener("change", updateNumberField);
updateNumberField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const type = patronType.value;
  const availableDate = form.eventDate.value;
  

  if (type === 'student' && !idTitle.value) {
    output.textContent = "Please add Student I#";
    return;
  }
  if (type === 'student' && idTitle.value.length != 9 && idTitle.value) {
    output.textContent = "Student I# must be 9 digits";
    return;
  }

  
  if (type === 'guest' && !idTitle.textContent) {
    output.textContent = "Please add access code"
    return;
  }
  

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${availableDate}</p>
  `;

  form.reset();
  updateNumberField();
});
          