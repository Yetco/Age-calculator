const btn = document.getElementById("btn");
const bday = document.getElementById("birthday");
const result = document.getElementById("result");

function calculateAge() {
  const birthDate = bday.value;
  if (birthDate === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthDate);
    // console.log(age);
    result.innerText = `Your age is ${age} ${age <= 1 ? "year" : "years"} old.`;
  }
}

function getAge(birthDate) {
  const today = new Date();
  const bdayDate = new Date(birthDate);
  let age = today.getFullYear() - bdayDate.getFullYear();
  const month = today.getMonth() - bdayDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < bdayDate.getDate())) {
    age--;
  }

  return age;
}

btn.addEventListener("click", calculateAge);
