export class HungryBear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }
//When setHunger() is called, it needs to decrement the bear’s food level by 1 every second. this doesn’t have lexical scope inside a nested function unless we use arrow notation
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }
  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }
}

//Added functionality: A player could still feed the bear after getting ‘eaten' and keep playing. Need to add player is dead function and reset game. 
