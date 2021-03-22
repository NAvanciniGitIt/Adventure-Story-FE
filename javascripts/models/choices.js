class Choice {
  
  static all = []
  
  constructor(attr) {
    this.name = attr.name;
    this.chosen = attr.chosen;
    this.user_id = attr.user_id;
    this.story_id = attr.story_id;
    this.checkpoint_id = attr.checkpoint_id;
    Choice.all.push(this)
  }

  static create(attr) {
    
    let choice = new Choice(attr)
    choice.save()
    return choice
    
  }

  save() {
    Choice.all.push(this)
  }
 
  static createChoiceObj(decision, id) {

    
    let strongParams = {
      choice: {
        user_id: current_user.id,
        story_id: current_user.id,
        name: decision,
        chosen: true,
        checkpoint_id: id
      }
    }
    
    Api.post('/choices', strongParams)
      .then(function(data) {
        Choice.create(data)
        current_checkpoint = data.checkpoint_id
        current_story.check_points = current_checkpoint
        
      })
    }
  
  
  // Templates
  static choiceTemplate(){
    
    return `
      <h3> Make a choice, ${current_user.name.capitalize()}! </h3> 
        <p> <input type="hidden" id="one" >&nbsp;<input type="submit" value="Choice 1" onclick="return c1()"></p> 
        <p> <input type="hidden" id="two" >&nbsp;<input type="submit" value="Choice 2" onclick="return c2()"></p>
    `
    
  }

  static choiceTwoTemplate() {

  }
  
}

