// parent class
class Villager {
  constructor(public name: string) {}

  protected question(): void {
    console.log('how are you?');
  }
}
const villager = new Villager('tybalt');
console.log(villager.name);

// child class of Villager
class Apollo extends Villager {
  constructor(public birthday: number, color: string) {
    super(color);
  }
  private greeting(): void {
    console.log('sup yo');
  }

  startGreetingProcess(): void {
    this.greeting();
    this.question();
  }
}

const apollo = new Apollo(704, 'white and black');
apollo.startGreetingProcess();
