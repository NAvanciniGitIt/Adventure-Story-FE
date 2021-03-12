class Choice {
  
  static all = []
  
  constructor(attr) {
    this.name = attr.name;
    this.chosen = attr.chosen;
    this.user_id = attr.user_id;
    this.story_id = attr.story_id
    this.checkpoint_id = attr.checkpoint_id
    Choice.all.push(this)
  }
  
  
  
  static choiceTemplate(){
    
    return `
    <div class="container">
    <h3> Make a choice, ${current_user.name.capitalize()}! </h3> 
    <p>${bus.name} <input type="hidden" id="bus" ></p>
    <p><input type="submit" value="Choice 1" onclick="return ride()"></p> 

    <p style="color:white;">${bar.name} <input type="hidden" id="bar" ></p>
    <p><input type="submit" value="Choice 2" onclick="return walk()"></p>
    </div>
    `
    
  }

  static choiceTwoTemplate() {

  }
  
}

let bus = new Choice({name: "Ride", chosen: false, checkpoint_id: 1})
let bar = new Choice({name: "Walk", chosen: false, checkpoint_id: 2})