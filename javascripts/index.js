const story = []
const user = []
let avatar = ""

function rollDie() {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (7 - 1) + 1); //The maximum is exclusive and the minimum is inclusive
}

function rollDisplay() {
  resetMain()
  main().innerHTML = `
  ${rollDie()}
  `
}

function main() {
  return document.getElementById("main")
}

function resetMain() {
  main().innerHTML = ""
}

function nameInput() {
  return document.getElementById("name")
}

function archer() {
  avatar = "<img src='avatars/Archer.png'>"
  renderPartOne()
}

function basic() {
  avatar = "<img src='avatars/Basic.png'>"
  renderPartOne()
}

function mage() {
  avatar = "<img src='avatars/Mage.png'>"
  renderPartOne()
}

function science() {
  avatar = "<img src='avatars/Science.png'>"
  renderPartOne()
}

function rogue() {
  avatar = "<img src='avatars/Rogue.png'>"
  renderPartOne()
}

function sword() {
  avatar = "<img src='avatars/Sword.png'>"
  renderPartOne()
}

function ride() {
  bus.chosen = true
  renderPartTwo("ride")
}

function walk() {
  bar.chosen = true
  renderPartTwo("walk")
}

function form() {
  return document.getElementById("form")
}

function getUserName(input) {
  user = input
}

function nameTemplate() {
  return `
    <h2>Welcome Adventurer!</h2>
    <h3>Tell us your name!</h3>
    <form id="form">
      <div class="input-field">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name">
      </div>
      <input type="submit" value="Create Hero">
    </form>  
  `;
}

function avatarTemplate() {
  return `
  <h3>Choose your Avatar</h3> 
  <img src="avatars/Archer.png">
  <input type="hidden" id="avatar" value="<img src='avatars/Archer.png'>">
  <input type="submit" value="Choose" onclick="return archer()">
  <img src="avatars/Basic.png">
  <input type="hidden" id="avatar" value="<img src='avatars/Basic.png'>">
  <input type="submit" value="Choose" onclick="return basic()">
  <img src="avatars/Mage.png">
  <input type="hidden" id="avatar" value="<img src='avatars/Mage.png'>">
  <input type="submit" value="Choose" onclick="return mage()">
  <img src="avatars/Science.png">
  <input type="hidden" id="avatar" value="<img src='avatars/Science.png'>">
  <input type="submit" value="Choose" onclick="return science()">
  <img src="avatars/Rogue.png">
  <input type="hidden" id="avatar" value="<img src='avatars/Rogue.png'>">
  <input type="submit" value="Choose" onclick="return rogue()">
  <img src="avatars/Sword.png">
  <input type="hidden" id="avatar" value="<img src='avatars/Sword.png'>">
  <input type="submit" value="Choose" onclick="return sword()">
  `;
}

function rollTemplate() {
  return `
  <h3> Skill Check! </h3>
  <input type="hidden" id="roll" >
  <input type="submit" value="Roll" onclick="return rollDisplay()">
  `
}

function choiceTemplate(){
  return `
    <h3> Make a choice, ${user}! </h3> 
    ${bus.name} <input type="hidden" id="bus" >
    <input type="submit" value="Choice 1" onclick="return ride()"> &nbsp;

    ${bar.name} <input type="hidden" id="bar" >
    <input type="submit" value="Choice 2" onclick="return walk()">

  `
}

function choiceTwoTemplate() {

}

function renderNameTemplate() {
  resetMain()
  main().innerHTML = nameTemplate()
  form().addEventListener("submit", submitName)
}

function renderAvatarTemplate() {
  resetMain()
  main().innerHTML = avatarTemplate()
}

function submitName(e) {
  e.preventDefault()
  user = nameInput().value
  
  renderAvatarTemplate()
}

function renderPartOne() {
  resetMain()
  main().innerHTML =
   `<h3>Adventure awaits ${user}!</h3> <br> 
    ${avatar}
    <img src="backgrounds/pixelforest.jpg"  width="400" height="200">
    <br>
   Filler Text

   Choices
    ${choiceTemplate()}

  `
}

function renderPartTwo(choice) {
  resetMain()
  if(choice == "walk") {
    main().innerHTML = `
    <h3> Filler Text for choice 2 
    
    Roll</h3>
    ${rollTemplate()}

    `
  }
    if(choice == "ride") {
      main().innerHTML = `
      <h3>Filler text for choice 1 </h3>
      `
    }

    else {
      main().innerHTML
    }
  }


document.addEventListener("DOMContentLoaded", function() { 
  if(user.length == 0) {
    renderNameTemplate()
  }
  else {

  }
})