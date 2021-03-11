
class User {
  static baseUrl = "http://localhost:3000"
  static all = []

  constructor(name) {
    this.name = name;
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
        avatar: ""
      }
    }

    Api.post('/users', strongParams)
    .then(function(data) {
      User.create(data)
      User.all.push(data)
      User.renderAvatarTemplate()
      current_user = data
      storiesFetch()
    })
  }

  static nameTemplate() {

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
      `
  
  }

  static avatarTemplate() {

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
        Story.renderPartOne()
      }
    })
  
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
    <h3> Alright ${current_user.name}! Are you satisfied 
    with your hero?! </h3>
   
  
    <input type="submit" value="Yes i'm ready!" onclick="return Story.renderPartOne()">
    <br><br>
    
    <form id="delete">
      <div class="input-field">
        <label for="delete">Type name to Delete</label> <br>
        <input type="text" name="deletename" id="deletename">
      </div>
      <input type="submit" value="Are you sure?">
    </form>
    `
  }

  static renderConfirmUserForm() {
    resetMain()
    main().innerHTML = User.confirmUserForm()
    deletes().addEventListener("submit", User.deleteUser)
  }

  static avatarFetch(pic) {

    strongParams = {
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
            Story.renderPartOne()
          }
        })
      })
  }

  static async deleteUser(e) {

    e.preventDefault()
   
    let user = User.findsName()
    
    
    const data = await Api.delete(baseUrl + "/users/" + `${user.id}`)
   
    User.all = User.all.filter(function(user) {
  
      return user.id !== data.id
    })
    

    Story.renderStoryTemplate()
  }
  
}


