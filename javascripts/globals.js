/** Global Variables **/
const baseUrl = "http://localhost:3000"
let stories = [];
let current_user = "";
let current_story = "";
let avatar = "";
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

// User Avatars 
const archerPic = "<img src='avatars/heroarcher.gif' style='transform: scaleX(-1)';></img>"
const bardPic = "<img src='avatars/herobardd.gif' style='transform: scaleX(-1)';>"
const druidPic = "<img src='avatars/herodruid.gif' style='transform: scaleX(-1)';>"
const swordPic = "<img src='avatars/herosword.gif' style='transform: scaleX(-1)';>"
const diePic = "<img class='die' src='avatars/die.png' width='50' height='50'></img>"

// Avatar Variables
const archer = () => User.avatarFetch(archerPic)
const bard = () => User.avatarFetch(bardPic)
const druid = () => User.avatarFetch(druidPic)
const sword = () => User.avatarFetch(swordPic)


// Choice Variables
const ride = () => (bus.chosen = true, current_story.check_points = bus.checkpoint_id, Story.updateCheckPoint(bus.checkpoint_id), Story.renderPartTwo("ride"))
const walk = () => (bar.chosen = true, current_story.check_points = bar.checkpoint_id, Story.updateCheckPoint(bar.checkpoint_id), Story.renderPartTwo("walk"))


/** Node Getters **/
const main = () => document.getElementById("main");
const form = () => document.getElementById("form");
const check = () => document.getElementById("check");
const nameInput = () => document.getElementById("name");
const avatarInput = () => document.getElementById("avatar");
const deletes = () => document.getElementById("delete");
const deleteName = () => document.getElementById("deletename");



