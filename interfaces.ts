interface Villager {
  name: string;
  animal: string;
  birthday: Date;
  town: boolean;
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

const printVillager = (villager: Villager): void => {
  console.log(villager.summary());
};

printVillager(antonio);
