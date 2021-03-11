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
    <h3> Make a choice, user! </h3> 
    ${bus.name} <input type="hidden" id="bus" >
    <input type="submit" value="Choice 1" onclick="return ride()"> &nbsp;

    ${bar.name} <input type="hidden" id="bar" >
    <input type="submit" value="Choice 2" onclick="return walk()">
    
    `
    
  }

  static choiceTwoTemplate() {

  }
  
}

let bus = new Choice({name: "Ride", chosen: false, checkpoint_id: 1})
let bar = new Choice({name: "Walk", chosen: false, checkpoint_id: 2})