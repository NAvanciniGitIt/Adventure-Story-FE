class Option {

  static all = []

  constructor(name, chosen) {
    this.name = name
    this.chosen = chosen
    Option.all.push(this)
  }
}

let bus = new Option("Ride", false)
let bar = new Option("Walk", false)