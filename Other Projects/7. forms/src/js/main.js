const $name = document.querySelector("#id_name");
const $bday = document.querySelector("#id_bday");
const $form = document.querySelector("#mainform");
const $sentence = document.querySelector("#sentence");

const user = {
  name: "",
  birthdate: 0,
  get age() {
    let today = new Date();
    let birth_date = new Date(this.birthdate);
    let age = today.getFullYear() - birth_date.getFullYear();
    let month = today.getMonth() - birth_date.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth_date.getDate())) {
      age--;
    }
    return age--;
  },
};

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  user.name = $name.value;
  user.birthdate = $bday.value;

  generateSentence(user);
});

function generateSentence(user) {
  let { name, birthdate, age } = user;
  $sentence.innerHTML = `My name is ${name}, birthdate ${birthdate}, ${age} years old.`;
}
