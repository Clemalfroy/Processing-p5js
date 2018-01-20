function branch (begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;

    this.show = function() {
        stroke(255);
        line (this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.branch = function(angle) {
        this.finished = true;
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(angle);
        dir.mult(0.8);
        var newEnd = p5.Vector.add(this.end, dir);
        var newBranch = new branch(this.end, newEnd);
        return newBranch;
    }
}