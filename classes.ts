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
// class Apollo extends Villager {
//   private greeting(): void {
//     console.log('sup yo');
//   }

//   startGreetingProcess(): void {
//     this.greeting();
//     this.question();
//   }
// }

// const apollo = new Apollo();
// apollo.startGreetingProcess();
