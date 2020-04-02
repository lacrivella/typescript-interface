class Villager {
  greeting(): void {
    console.log('good morning');
  }

  question(): void {
    console.log('how are you?');
  }
}

const villager = new Villager();
villager.greeting();
villager.question();
