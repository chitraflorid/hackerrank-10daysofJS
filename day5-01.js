

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
 Rectangle.prototype.area = function() {
     return this.w * this.h;
 }

 class Square extends Rectangle{
     constructor(len) {
         super(len, len);
     }
 }

