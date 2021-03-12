class User {

  static baseUrl = "http://localhost:3000"
  static all = []
  

  constructor(attr) {
    this.name = attr.name;
    this.story_id = attr.story_id
  }

  save() {
    User.all.push(this)
  }

  static create(attr) {
    let user = new User(attr)
    user.save()
    return user
  }

  static async getUsers() {
    
    const data = await Api.get('/users');
    User.all = data
  }

  static submitName(e) {

    e.preventDefault()

    let strongParams = {
      user: {
        name: nameInput().value,
        story_id: current_story.id,
        avatar: ""
      }
    }

    Api.post('/users', strongParams)
    .then(function(data) {
      User.create(data)
      User.all.push(data)
      User.renderAvatarTemplate()
      current_user = data
    })
  }

  static nameTemplate() {

    return `
    <h2>You there! Yes, you!</h2>
    <h3>Tell us your name!</h3>
    <form id="form">
      <div class="input-field">
        <p><label for="name">Name:</label>
        <input type="text" name="name" id="name"></p>
      </div>
      <p><input type="submit" value="Create Hero"></p>
    </form>
      `
  
  }

  static avatarTemplate() {
    
    return `
    <h2>You look in the mirror...</h2> 
  <p><img src="avatars/Archer.png">
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
  <input type="submit" value="Choose" onclick="return sword()"></p>

  `;
  
  }

  static editFormTemplate(id) {

    return `
    <h3>Edit Hero Name:</h3>
    <form id="form" data-id="${id}">
      <p><div class="input-field"></p>
       <p><label for="name">Name</label> </p>
        <p><input type="text" name="name" id="name" value="${current_user.name}" /></p>
      </div>
      <p><input type="submit" id="submit" value="Submit" ></p>
    
    `;

  }

  static renderEditFormTemplate(user) {
    
    resetMain();
    main().innerHTML = User.editFormTemplate(user);
    form().addEventListener("submit", User.submitEditForm);
  }


  static submitEditForm(e) {

    e.preventDefault();
  
    let strongParams = {
      user: {
        name: nameInput().value,
        avatar: "",
        story_id: current_user.story_id
      }
    }
   

    const id = e.target.dataset.id;
    
    Api.patch("/users/" + id, strongParams)
      .then(function(data) {
        
        let u = User.all.find((u) => u.id == data.id);
        let idx = User.all.indexOf(u);
        User.all[idx] = new User(data);
        current_user.name = nameInput().value
        User.renderAvatarTemplate()
        
      })

  }

  static renderNameTemplate() {

    resetMain()
    Story.createStoryObj()
    main().innerHTML = User.nameTemplate()
    form().addEventListener("submit", User.submitName)
    
  
  }

  static findName(e) {

    e.preventDefault()
    let name = nameInput().value
    User.all.forEach(function (user){
      if(name == user.name){
        current_user = user
        User.findStory()
      }
    })
  
  }

  static findStory() {
    
    Story.all.forEach(function (story){
      if(story.id == current_user.story_id) {
        current_story = story
        User.findPart()
      }
    })
  }

  static findPart() {
    const check = current_story.check_points
    switch(check) {
      case 2:
        Story.renderPartTwo("horse")
        break
      default:
        Story.renderPartOne()
    }

  }

  static findsName() {

    
    let name = deleteName().value
    
    User.all.forEach(function (user){
      if(name == user.name){
        name = user
      }
    })
    return name
  }

  static renderAvatarTemplate() {

    resetMain()
    main().innerHTML = User.avatarTemplate()
   
  }

  static confirmUserForm() {
    
    return `
    <h3>Ready to begin your journey, ${current_user.name.capitalize()}?</h3>
   
  
   <p><input type="submit" value="Onward!" onclick="return Story.renderPartOne()"></p>
    <br>
    <p>Or have you forgotten something?</p>
    <p><input type="submit" value="Edit" onclick="return User.renderEditFormTemplate(${current_user.id})"></p>
    <br><br>
    <form id="delete">
      <div class="input-field">
        <p><label for="delete">If neither, type your name to delete</label> <br>
        <input type="text" name="deletename" id="deletename">
      </div></p>
      <p><input type="submit" value="Are you sure?"></p>
    </form>
    `
  }

  static renderConfirmUserForm() {
    resetMain()
    main().innerHTML = User.confirmUserForm()
    deletes().addEventListener("submit", User.deleteUser)
  }

  static avatarFetch(pic) {

    let strongParams = {
      user: {
        name: current_user.name,
        avatar: pic
      }
    }
    
    Api.patch(`/users/${current_user.id}`, strongParams)
    .then(function(data){
        User.all.forEach(function(user){
          if(current_user.name == user.name){
            current_user.avatar = pic
            User.renderConfirmUserForm()
          }
        })
      })
  }

  static async deleteUser(e) {

    e.preventDefault()
   
    let user = User.findsName()
    
    
    const data = await Api.delete(baseUrl + "/users/" + `${current_user.id}`)
   
    User.all = User.all.filter(function(user) {
  
      return user.id !== data.id
    })
    

    Story.renderStoryTemplate()
  }
  
}


