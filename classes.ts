// parent class
class Villager {
  greeting(): void {
    console.log('good morning');
  }

  question(): void {
    console.log('how are you?');
  }
}

// child class of Villager
class Apollo extends Villager {
  greeting(): void {
    console.log('sup yo');
  }
}

const apollo = new Apollo();
apollo.greeting();
apollo.question();
