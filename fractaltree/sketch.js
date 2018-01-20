var tree = [];
var leaves = [];
var count = 1;
var len = 150;

function setup() {
  createCanvas(1000, 800);
  var a = createVector(width / 2, height);
  var b = createVector(width / 2,  height - len);
  var root = new branch (a, b);

  tree[0] = root;
}

function mousePressed() {
  for (var i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished)
      {
      tree.push(tree[i].branch(PI / random(3, 7)));
      tree.push(tree[i].branch(-PI / random(3, 7)));
      }
  }
  if (count >= 5 ) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
  count++;
}


function draw() {
  background(50);
  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
  }
  for (var i = 0; i < leaves.length; i++) {
    fill(0, 198, 142, 100);
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    leaves[i].x += random(-0.5, 0.5);
  }
}