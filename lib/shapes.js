/// this is about the shapes 
//and the color of the shapes

class Shape {
  constructor(){
    this.color = '';
  }
  setColor(color){
    this.color = color
  }
}

class Circle extends Shape{
  render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
  }
}

class Triangle extends Shape{
  render(){
    return `<polygon points="150,40 230,180 70,180" fill="${this.color}" />`
  }
}

class Square extends Shape{
  render(){
    return `<rect x="85" y="60" width="130" height="130" fill="${this.color}" />`
  }
}

module.exports = {Circle, Triangle, Square};