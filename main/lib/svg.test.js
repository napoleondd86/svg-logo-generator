const SVG = require('../lib/svg');
const { Circle, Triangle, Square } = require("../lib/shapes");

describe("SVG", () => {
  describe("Instantiation", () => {
    it("should instantiate correctly.", () => {
      const svg = new SVG();
      expect(svg).toBeInstanceOf(SVG);
    })
  })
  describe("Set text color and text", () => {
    it('should set text and text color correctly', () => {
      const svg = new SVG();
      svg.setText("abc", 'red');
      expect(svg.textEl).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">abc</text>')
    })
  })
  describe("Render entire SVG file", () => {
    it('should render the file correctly', () => {
      const svg = new SVG();
      const triangle = new Triangle();
      triangle.setColor('black')
      svg.setText("abc", 'red');
      svg.setShape(triangle);
      console.log(svg.render());
      expect(svg.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,40 230,180 70,180" fill="black" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">abc</text></svg>')
    })
  })
 
})