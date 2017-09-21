var gameplay = [
  {//0
    "image":"https://vignette4.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f3/S5_e12_Finn_and_Flame_Princess_running_into_a_dungeon.PNG/revision/latest?cb=20130219200825",  
    "question":"Your name is Finn, you are the last living human in the world millenia after the end of human civilization.  Your girlfriend is the princess of the flame kingdom (she is made of fire, that will be important later).  She is feeling conflicted because everyone in her family is evil and she is not sure if she is good or evil herself.  To help her take her mind off things, you suggest finding and looting a dungeon, after all you are an adventurer and slaying evil things is your favorite thing to do.  You and Flame Princess set off in search of a dungeon armed only with your Demon Blood Sword and her magical fire-powers.",
    "answers":[
          {"title":"I'm ready, let's go find a dungeon!","response":1}
          ]
  },
  {//1
      "question":"You can't seem to find the entrances to any dungeons, lots of times there will be a switch hidden under a rock or something, so sometimes this takes a while.  Where do you look?",
      "answers":[
          {"title":"Under a rock","response":2},
          {"title":"Knock on a tree, see if it's hollow","response":3},
          {"title":"Ask FP (Flame Princess) if she has any ways of finding hidden things.","response":5},
          ]
  },
  {//2 
      "question":"There's a bunch of beetles having a dance party under the rock, they squeek at you shrilly.  It seems like the rock is a nightclub and they can't see their laser effects in the daylight. You feel bad.",
      "answers":[
          {"title":"Apologize and put the rock back.","response":3},
          {"title":"Tell them they're shaking it all wrong and show. them. how. it's. DONE.","response":4}
          ]
  },
  {//3
      "image":"https://vignette2.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/5e/S5e18_angry_squirrel.png/revision/latest?cb=20140318033035",
      "question":"You disturb a squirrel who gives you the evil eye.  Just ask your girlfriend for help already",
      "answers":[
          {"title":"Okay...","response":5},
          {"title":"I will do this MY WAY! I'm checking under that rock!","response":2}
          ]
  },
  {//4
      "image":"https://m.popkey.co/1ab628/lkE60.gif",
      "question":"Okay, I'll ask FP if she has any ideas.",
      "answers":[
          {"title":"Got any ideas, Flame P?","response":5}
          ]
  },
  {//5
      "image":"https://vignette2.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/30/S5e12_FP_using_Heat_Sense.png/revision/latest?cb=20140310180445",
      "question":"Flame Princess finds the entrance to a dungeon using her Heat Sense.",
      "answers":[
          {"title":"Wooooo, dungeon!!!","response":6}
      ]
  },
  {//6
    "question":"You enter the dungeon's entrance which is shaped like a skull.  Once inside, you find a gauntlet on the ground.",
    "answers":[
        {"title":"Free gauntlet...Yesss!","response":7},
        {"title":"Leave it alone.","response":8}
        ]
  },
  {//7
    "question":"The gauntlet fits nicely, congrats, you just got a free gauntlet.",
    "answers":[
        {"title":"","response":0},
        {"title":"","response":0}
        ]
  },
  {//8
    "question":"You passed up a free gauntlet...oh well.",
    "answers":[
        {"title":"","response":0},
        {"title":"","response":0}
        ]
  },
  {//9
    "question":"",
    "answers":[
        {"title":"","response":0},
        {"title":"","response":0}
        ]
  },
  {//10
    "question":"",
    "answers":[
        {"title":"","response":0},
        {"title":"","response":0}
        ]
  },
  {//11
    "question":"",
    "answers":[
        {"title":"","response":0},
        {"title":"","response":0}
        ]
  },
  {//12
    "question":"",
    "answers":[
        {"title":"","response":0},
        {"title":"","response":0}
        ]
  },
  {//13
    "question":"",
    "answers":[
        {"title":"","response":0},
        {"title":"","response":0}
        ]
  },
  {//14
    "question":"",
    "answers":[
        {"title":"","response":0},
        {"title":"","response":0}
        ]
  },
  {//15
    "question":"",
    "answers":[
        {"title":"","response":0},
        {"title":"","response":0}
        ]
  },
  {//16
    "question":"",
    "answers":[
        {"title":"","response":0},
        {"title":"","response":0}
        ]
  },
  {//17
    "question":"",
    "answers":[
        {"title":"","response":0},
        {"title":"","response":0}
        ]
  },
  ];

var currentLocation = 0;
//var inventory = [];

window.printCurrentLocation = function(){
  document.getElementById("question").innerHTML = gameplay[currentLocation].question;
  document.getElementById("image").src = gameplay[currentLocation].image;
  //document.getElementById("image2").src = gameplay[currentLocation].image2;
  //document.getElementById("image3").src = gameplay[currentLocation].image3;
  var answers = "";
  for(var i=0;i<gameplay[currentLocation].answers.length;i++){
  //for(var i=0,l=gameplay[currentLocation].answers.length;i<l;i++){    original code
      answers += "<p><button onclick='setLocation("+gameplay[currentLocation].answers[i].response+")'>"+gameplay[currentLocation].answers[i].title+"</button></p>";
  }
  document.getElementById("answers").innerHTML = answers;
}

window.setLocation = function(num) {
  currentLocation = num;
  window.printCurrentLocation();
}

window.printCurrentLocation();


/*Create functions for options one and two

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let stages = document.getElementById('stages');
let situations = document.getElementById('situations');

var story = {
  currentSituation: {},
  currentOption1: {},
  currentOption2: {},

}

button1.addEventListener('click', option1);
button2.addEventListener('click', option2);

//function replace() {
//  situations = ''
//}

function option1() {
  situations.innerHTML = ''
}

function option2() {
  alert ("You chose option 2");
}

function getCurrentSituation(currentSituation) {
  var currentSituation = {};
}


//document.getElementById('situations').*/



//pixel img of rock http://piskel-imgstore-b.appspot.com/img/b334771c-9e4d-11e7-8375-93de5053410d.gif
//img of tree  http://piskel-imgstore-b.appspot.com/img/64a30d87-9e4e-11e7-a0f5-93de5053410d.gif
//img of fp   http://piskel-imgstore-b.appspot.com/img/9dc5308f-9e4f-11e7-8502-93de5053410d.gif


//light torch
//pick up gold piece
//come across large skeleton
//