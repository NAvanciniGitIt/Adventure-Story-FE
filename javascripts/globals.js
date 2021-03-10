/** Global Variables **/
const baseUrl = "http://localhost:3000"
let stories = [];
let current_user = ""
let current_story = ""
let avatar = ""
const archerPic = "<img src='avatars/Archer.png'></img>"
const basicPic = "<img src='avatars/Basic.png'>"
const magePic = "<img src='avatars/Mage.png'>"
const sciencePic = "<img src='avatars/Science.png'>"
const roguePic = "<img src='avatars/Rogue.png'>"
const swordPic = "<img src='avatars/Sword.png'>"

/** Node Getters **/
const main = () => document.getElementById("main");
const form = () => document.getElementById("form");
const nameInput = () => document.getElementById("name");



