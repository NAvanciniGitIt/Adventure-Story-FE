let story = []
let users = []
let current_user = ""
const baseUrl = "http://localhost:3000"
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

async function getUsers() {
 
  const resp = await fetch(baseUrl + '/users')
  const data = await resp.json()
  
  users = data
  
}

function storyTemplate() {
  return ` <h2>Welcome Adventurer!</h2><br>
  Would you like to begin a new adventure <input type="submit" value="Yes" onclick="return renderNameTemplate()">
  
  Or enter name to continue?
  <form id="form">
    <div class="input-field">
      <label for="name">Name</label>
      <input type="text" name="name" id="name">
    </div>
    <input type="submit" value="Continue">
  </form>

  `
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
    <h3> Make a choice, user! </h3> 
    ${bus.name} <input type="hidden" id="bus" >
    <input type="submit" value="Choice 1" onclick="return ride()"> &nbsp;

    ${bar.name} <input type="hidden" id="bar" >
    <input type="submit" value="Choice 2" onclick="return walk()">

  `
}

function choiceTwoTemplate() {

}

function renderStoryTemplate() {
  resetMain()
  main().innerHTML = storyTemplate()
  form().addEventListener("submit", findName)
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

function findName(e) {
  e.preventDefault()
  let name = nameInput().value
  users.forEach(function (user){
    if(name == user.name){
      current_user = user.name
      renderAvatarTemplate()
    }
  })

  }

function submitName(e) {
  e.preventDefault()

  let strongParams = {
    user: {
      name: nameInput().value
    }
  }
  
  current_user = nameInput().value
 

  fetch(baseUrl + '/users', {
    body: JSON.stringify(strongParams),
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(function(resp){
    return resp.json()
  })
  .then(function(data){
    users.push(data)
    renderAvatarTemplate()
    
  })

}

function renderPartOne() {
  resetMain()
  main().innerHTML =
   `<h3>Adventure awaits ${current_user}!</h3> <br> 
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
  if(users.length == 0) {
    renderStoryTemplate()
    // renderNameTemplate()
    getUsers()
  }
  else {

  }
})