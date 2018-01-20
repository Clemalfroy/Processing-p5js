var angle;
var axiom = "X";
var sentence = axiom;
var len = 100;

var rules = [];
rules[0] = {
  a: "F",
  b: "FF"
}
rules[1] = {
    a: "X",
    b: "F[+X]F[−X]+X"
  }

function generate() {
  len *= 0.55;
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  turtle();

}

function handleChar(current) {
    if (current == "F") {
        line(0, 0, 0, -len);
        translate(0, -len);
      } else if (current == "+") {
        rotate(radians(random(20,30)));
      } else if (current == "-") {
        rotate(-radians(random(20, 30)));
      } else if (current == "[") {
        push();
      } else if (current == "]") {
        pop();
      }
}

function turtle() {
  background(51);
  resetMatrix();
  translate(width / 2, height);
  stroke(255, 100);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    handleChar(current);
  }
}

function setup() {
  createCanvas(600, 600);
  background(50);
  turtle();
  var button = createButton("generate");
  button.mousePressed(generate);
}