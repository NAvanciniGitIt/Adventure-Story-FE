const archer = () => User.avatarFetch(archerPic)
const basic = () => User.avatarFetch(basicPic)
const mage = () => User.avatarFetch(magePic)
const science = () => User.avatarFetch(sciencePic)
const rogue = () => User.avatarFetch(roguePic)
const sword = () => User.avatarFetch(swordPic)
const ride = () => (bus.chosen = true, Story.renderPartTwo("ride"))
const walk = () => (bar.chosen = true, Story.renderPartTwo("walk"))

function resetMain() {
  main().innerHTML = ""
}

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

function rollTemplate() {
  return `
  <h3> Skill Check! </h3>
  <input type="hidden" id="roll" >
  <button onclick="return rollDisplay()" id="Ok"><img src="avatars/dice.jpg" width="50" height="50"></button>
  `

}

  // function storiesFetch(user_id) {
  
  //   strongParams = {
  //     story: {
  //       user_id: current_user.id,
  //       check_points: 0
  //     }
  //   }
  
  
  //   fetch(baseUrl + `/stories/${current_story.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(strongParams)
  //   })
  //   .then(function(resp) {
  //     return resp.json()
  //   })
  //   .then(function(data){
  //     Story.current_story = data
  //   })
  
  // }
  

document.addEventListener("DOMContentLoaded", function() { 
  if(User.all.length == 0) {
    User.getUsers()
    Story.renderStoryTemplate()
    Story.getStories()
  }
  else {

  }
})