class Menu {
  constructor() {
    this.appetizers = [];
    this.beverages = [];
  }

  addAppetizer(appetizer) {
    if (appetizer instanceof Appetizer) {
      this.appetizers.push(appetizer)
    } else {
      throw new Error(`Object must be of class Appetizer: ${appetizer}`)
    }
  }

  addBeverage(beverage) {
    if (beverage instanceof Beverage) {
      this.beverages.push(beverage)
    } else {
      throw new Error(`Object must be of class Beverage: ${beverage}`)
    }
  }
}


//Test Save to gitHub
// Parent class for Appetizers and Beverages
class OrderItem {
  constructor(name) {
    this.name = name;
    this.price = 0;
    this.calories = 0;
  }

  toString() {
    return `${this.name}: ${this.getPrice()} (${this.calories})`
  }

  setPrice(price) {
    if (price < 0) {
      throw new Error(`Price must be greater than zero: ${price}`);
    } else {
      this.price = price;
    }
  }

  // Use this for displaying to users; returns a string
  getPrice() {
    if (this.price == 0) {
      return 'Free';
    } else {
      return `$${this.price}`;
    }
  }

  // This validates that calories are not negative before assigning the value
  setCalories(calories) {
    if (price < 0) {
      throw new Error(`Calories must be not be less than 0: ${calories}`)
    } else {
      this.calories = calories;
    }
  }
}

class Appetizer extends OrderItem {}

class Beverage extends OrderItem {}


let appy = new Appetizer('Deviled Eggs')
appy.setPrice(6)
let menu = new Menu()
menu.addAppetizer(appy)