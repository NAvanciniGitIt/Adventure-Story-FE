let user = ""

let avatar = ""

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
  return false
}

function basic() {
  avatar = "<img src='avatars/Basic.png'>"
  return false
}

function mage() {
  avatar = "<img src='avatars/Mage.png'>"
  return false
}

function science() {
  avatar = "<img src='avatars/Science.png'>"
  return false
}

function rogue() {
  avatar = "<img src='avatars/Rogue.png'>"
  return false
}

function sword() {
  avatar = "<img src='avatars/Sword.png'>"
  return false
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

function renderStory() {
  resetMain()
  return `
    ${avatar}
  `
}

document.addEventListener("DOMContentLoaded", function() { 
  if(user == "") {
    renderNameTemplate()
  }
  else {
   renderStory
  }
})