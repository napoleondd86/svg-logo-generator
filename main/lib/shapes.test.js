const { Circle, Triangle, Square } = require("../lib/shapes");

describe("Shape", () => {
  describe('Instantiate Circle', () => {
    it('should instantiate Circle correctly', () => {
      const shape = new Circle();
      expect(shape).toBeInstanceOf(Circle);
    })
  }), 
  describe('Instantiate Triangle', () => {
    it('should instantiate Triangle correctly', () => {
      const shape = new Triangle();
      expect(shape).toBeInstanceOf(Triangle);
    })
  }), 
  describe('Instantiate Square', () => {
    it('should instantiate Square correctly', () => {
      const shape = new Square();
      expect(shape).toBeInstanceOf(Square);
    })
  })
  describe('Render Shape', () => {
    it('should render the shape correctly.', () => {
      const shape = new Square();
      shape.setColor("green");
      console.log(shape)
      expect(shape.render()).toEqual('<rect x="85" y="60" width="130" height="130" fill="green" />');
    })
  })
})