// parent class
class Villager {
  public greeting(): void {
    console.log('good morning');
  }

  public question(): void {
    console.log('how are you?');
  }
}

// child class of Villager
class Apollo extends Villager {
  private greeting(): void {
    console.log('sup yo');
  }

  startGreetingProcess(): void {
    this.greeting();
  }
}

const apollo = new Apollo();
apollo.startGreetingProcess();
apollo.question();
