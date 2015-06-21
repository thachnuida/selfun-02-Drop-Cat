var cats = [];
var ACCELERATION = 5;
var DELTAL_TIME = 100/1000;
var CAT_WIDTH = 128;
var CAT_HEIGHT = 128;

var Cat = function(left, top) {
  this.left = left;
  this.top = top;

  this.time = 0;

  // Create html element, add to body
  this.elem = document.createElement('img');
  this.elem.setAttribute('src', 'cat.png');
  this.elem.className = 'cat';
  this.elem.style.left = this.left + 'px';
  this.elem.style.top = this.top + 'px';
  document.body.appendChild(this.elem);
};

Cat.prototype.fall = function() {
  var self = this;
  self.timer = setInterval(function() {
    self.time += DELTAL_TIME;
    var s = 1/2 * ACCELERATION * self.time * self.time + self.time;
    self.elem.style.top = (self.top + s) + 'px';

    // Remove element if fall out of screen
    if (self.top + s > window.innerHeight) self.remove();
  }, DELTAL_TIME);
};

Cat.prototype.remove = function() {
  // Remove html element
  this.elem.remove();

  // Clear interval
  clearInterval(this.timer);
};

window.addEventListener('click', function(event) {
  var newCat = new Cat(event.clientX - CAT_WIDTH / 2, event.clientY - CAT_HEIGHT / 2);
  newCat.fall();
});