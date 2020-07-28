
class Picture {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    description(){
        document.getElementById("polyexample").innerHTML = `A. Dimension del cuadro: ancho-${this.width} / alto-${this.height}`;
    }
  }
class Market {
    constructor(width, height, price) {
        this.width = width;
        this.height = height;
        this.price = price;
    }
    description(){
        document.getElementById("polyexample").innerHTML = `B. Dimension del cuadro: ancho-${this.width} / alto-${this.height} / $ ${this.price}`;
    }
}  

function showDescription(obj) {
    if(typeof obj.description === "function"){
        obj.description();
    }
}

var myPicture = new Fruit(50, 60);
var myMarket = new Market(50, 60, 25);

showActionPicture = (e) => {
    showDescription(myPicture);
}

showActionMarket = (e) => {
    showDescription(myMarket);
}

