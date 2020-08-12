const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get _courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },
  get appetizers() {

  },
  get mains() {

  },
  get desserts() {

  },
  set appetizers(appetizerIn) {

  },
  set mains(mainsIn) {

  },
  set desserts(dessertsIn) {

  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  }
};