class Choice {

  static all = []

  constructor(name, chosen) {
    this.name = name
    this.chosen = chosen
    Choice.all.push(this)
  }
}

let bus = new Choice("Ride", false)
let bar = new Choice("Walk", false)