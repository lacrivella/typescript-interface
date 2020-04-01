interface Reportable {
  summary(): string;
}

const antonio = {
  name: 'antonio',
  animal: 'anteater',
  birthday: new Date(),
  town: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const island = {
  name: 'winden',
  occupied: true,
  people: 40,
  summary(): string {
    return `My island has ${this.people} people living on it.`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(antonio);
printSummary(island);
