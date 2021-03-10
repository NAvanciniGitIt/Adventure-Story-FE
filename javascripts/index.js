let stories = [];
let users = [];
let current_user = ""
let current_story = ""
const baseUrl = "http://localhost:3000"
let avatar = ""
const archerPic = "<img src='avatars/Archer.png'></img>"
const basicPic = "<img src='avatars/Basic.png'>"
const magePic = "<img src='avatars/Mage.png'>"
const sciencePic = "<img src='avatars/Science.png'>"
const roguePic = "<img src='avatars/Rogue.png'>"
const swordPic = "<img src='avatars/Sword.png'>"


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
  avatarFetch(archerPic)

}

function basic() {
  avatarFetch(basicPic)

}

function mage() {
  avatarFetch(magePic)

}

function science() {
  avatarFetch(sciencePic)

}

function rogue() {
  avatarFetch(roguePic)

}

function sword() {
  avatarFetch(swordPic)

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

function createStoryObj() {

  let strongParams = {
    story: {
      user_id: "",
      check_points: 0
    }
  }

  fetch(baseUrl + "/stories", {
    body: JSON.stringify(strongParams),
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(function (resp){
    return resp.json()
  })
  .then(function (data){
    stories.push(data)
    current_story = data
  })

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
  <button onclick="return rollDisplay()" id="Ok"><img src="avatars/dice.jpg" width="50" height="50"></button>
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
      current_user = user
      renderPartOne()
    }
  })

  }

function submitName(e) {
  e.preventDefault()

  let strongParams = {
    user: {
      name: nameInput().value,
      avatar: ""
    }
  }
  
 

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
    
    current_user = data
    storiesFetch()
  })

}

function renderPartOne() {
  resetMain()
  main().innerHTML =
   `<h3>Adventure awaits ${current_user.name}!</h3> <br> 
    ${current_user.avatar}
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

  function avatarFetch(pic) {

    strongParams = {
      user: {
        name: current_user.name,
        avatar: pic
      }
    }
  
    fetch(baseUrl + `/users/${current_user.id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(strongParams)
    })
    .then(function(resp) {
      return resp.json()
    })
    .then(function(data){
      users.forEach(function(user){
        if(current_user.name == user.name){
          current_user.avatar = pic
          renderPartOne()
        }
      })
    })
  
  }
  
  function storiesFetch(user_id) {
  
    strongParams = {
      story: {
        user_id: current_user.id,
        check_points: 0
      }
    }
  
  
    fetch(baseUrl + `/stories/${current_story.id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(strongParams)
    })
    .then(function(resp) {
      return resp.json()
    })
    .then(function(data){
      current_story = data
    })
  
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