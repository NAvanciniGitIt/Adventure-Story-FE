function resetMain() {
  main().innerHTML = ""
}

// Dice rolling stuff
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
  <h1 style="color:red;"> Skill Check! </h1>
  <input type="hidden" id="roll" >
  <p> <button onclick="return rollDisplay() " style="background-color: transparent" id="Ok">${diePic}</button> </p>
  `
  
}

    document.addEventListener("DOMContentLoaded", function() { 
      if(User.all.length == 0) {
        User.getUsers()
        Story.renderStoryTemplate()
        Story.getStories()
      }
      else {
    
      }
    })

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
