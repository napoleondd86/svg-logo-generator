const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require("./lib/shapes");
const SVG = require('./lib/svg');

/////////////Tutor had me refactor this.  I didn't have class CLI//////////////
class CLI {
  run() {
    return inquirer.prompt([
      {
        type: 'input',
        message: 'Enter a text for the logo. (Must not be more than 3 characters)',
        name: 'text'
      },
      {
        type: 'input',
        message: 'Enter a text color. (example: blue)',
        name: 'textColor'
      },
      {
        type: 'list',
        message: 'Select a shape for your logo: ',
        name: 'shapeType',
        choices: ['circle', 'square', 'triangle']
      },
      {
        type: 'input',
        message: 'Enter a shape color. (example: red)',
        name: 'shapeColor'
      },
    ]).then(({ text, textColor, shapeType, shapeColor }) => {
      let shape;
      switch (shapeType) {
        case "circle":
          shape = new Circle();
          break;
        case "triangle":
          shape = new Triangle();
          break;
        default:
          shape = new Square();
          break;
      }
      shape.setColor(shapeColor);
      const svg = new SVG();
      svg.setText(text, textColor);
      svg.setShape(shape);
      return fs.writeFileSync('logo.svg', svg.render())
    }).then(() => {
      console.log("Generated logo.svg")
    }).catch((err) => {
      console.log(err);
      console.log('Something went wrong');
    })
  }
}





//start app


new CLI().run()