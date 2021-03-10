class Story {
  static all = []

  constructor(attr){
    this.user_id = attr.user_id;
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

  static storyTemplate() {

    return `
    <h2>Welcome Adventurer!</h2><br>
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

  static renderStoryTemplate() {

    resetMain()
    main().innerHTML = Story.storyTemplate()
    form().addEventListener("submit", User.findName)
    
  }

  static renderPartOne() {
 
    resetMain() 
    main().innerHTML = 
    `
    <h3>Adventure awaits ${current_user.name}!</h3> <br> 
    ${current_user.avatar}
    <img src="backgrounds/pixelforest.jpg"  width="400" height="200">
    <br>
   Filler Text

   Choices
    ${Choice.choiceTemplate()}
    `
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
  
}