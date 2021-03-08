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

function avatarInput() {
  return document.getElementById("avatar")
}

function form() {
  return document.getElementById("form")
}

function getUserName(input) {
  user = input
}

function nameTemplate() {
  return `
    <h3>Submit Your Name</h3>
    <form id ="form">
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
  <form id="form">
  <img src="avatars/Archer.png">
  <input type="hidden" id="avatar" value="<img src='avatars/Archer.png'>">
  <input type="submit" value="Choose">
  <img src="avatars/Basic.png">
  <input type="hidden" id="avatar" value="<img src='avatars/Basic.png'>">
  <input type="submit" value="Choose">
  <img src="avatars/Mage.png">
  <input type="hidden" id="avatar" value="<img src='avatars/Mage.png'>">
  <input type="submit" value="Choose">
  <img src="avatars/Science.png">
  <input type="hidden" id="avatar" value="<img src='avatars/Science.png'>">
  <input type="submit" value="Choose">
  <img src="avatars/Rogue.png">
  <input type="hidden" id="avatar" value="<img src='avatars/Rogue.png'>">
  <input type="submit" value="Choose">
  <img src="avatars/Sword.png">
  <input type="hidden" id="avatar" value="<img src='avatars/Sword.png'>">
  <input type="submit" value="Choose">
  `;
}

function renderNameTemplate() {
  resetMain()
  main().innerHTML = nameTemplate()
  form().addEventListener("submit", submitName)
}

function submitName(e) {
  e.preventDefault()
  user = nameInput().value
  main().innerHTML = avatarTemplate()
  form().addEventListener("submit", submitAvatar)

}

function submitAvatar(e) {
  e.preventDefault()
    avatar = avatarInput().value

}

document.addEventListener("DOMContentLoaded", function() { 
  if(user == "") {
    renderNameTemplate()
  }
  else {
    main().innerHTML = avatarTemplate()
  }
})