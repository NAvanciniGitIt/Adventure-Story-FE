class Story {
  static all = []
  
  constructor(attr){
    this.check_points = attr.check_points;
  }

  save() {
    Story.all.push(this)
  }

  static create(attr) {
    
    let story = new Story(attr)
    story.save()
    return story

  }

 


  static createStoryObj() {
  
    let strongParams = {
      story: {
        user_id: "",
        check_points: 0
      }
    }
    
    Api.post('/stories', strongParams)
      .then(function(data) {
        Story.create(data)
        current_story = data
      })

  }

  static async getStories() {
 
    const data = await Api.get("/stories");
    Story.all = data
    
  }

  static storyTemplate() {

    return `
    <div class="typewriter">
    <div class="typewriter-text"><h2>Welcome Adventurer!</h2></div><br></div>
    <div id"border"></div>
    
  <p>Would you like to begin a new adventure?<input type="submit" value="Yes" onclick="return User.renderNameTemplate()"></p>
  
  <p>Or continue your story?</p>
  <form id="form">
    <p><div class="input-field"></p>
      <p><label for="name">Type Name Here:</label></p>
      <p><input type="text" name="name" id="name"></p>
    </div>
    <p><input type="submit" value="Continue"></p>
  </form>
  </div>
    `
  
  }

  static renderStoryTemplate() {

    resetMain()
    main().innerHTML = Story.storyTemplate()
    form().addEventListener("submit", User.findName)
    
  }

  static renderPartOne() {
 
    resetMain() 
    main().innerHTML = 
    `
    <div class="container">
      <h2>Adventure awaits ${current_user.name.capitalize()}!</h2> <br> 
      <p> ${current_user.avatar}</p>
      <p> Filler Text
      Choices
      ${Choice.choiceTemplate()}</p>
      </div>
        `;
  }

  static renderPartTwo(choice) {

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

  static updateCheckPoint(checkpoint) {

    let strongParams = {

      story: {
        check_points: checkpoint
      }
    }

    Api.patch(`/stories/${current_story.id}`, strongParams) 
    .then(function(data) {
      current_story.check_points = data.check_points
    })

  }
  
}