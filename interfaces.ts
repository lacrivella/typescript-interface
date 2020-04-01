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

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(antonio);
