const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    // return a dish from dishes by using a randomIndex
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} the price is ${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'nachoes', 5.25);
menu.addDishToCourse('appetizers', 'wings', 9.50);
menu.addDishToCourse('appetizers', 'onion rings', 4.75);
menu.addDishToCourse('mains', 'pasta', 10.25);
menu.addDishToCourse('mains', 'steak', 22.25);
menu.addDishToCourse('mains', 'grilled fish', 12.50);

menu.addDishToCourse('desserts', 'brownies', 3.25);
menu.addDishToCourse('desserts', 'cake', 4.50);
menu.addDishToCourse('desserts', 'pie', 4.00);

const meal = menu.generateRandomMeal();
console.log(meal);