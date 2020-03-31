const antonio = {
  name: 'antonio',
  animal: 'anteater',
  birthday: 10 - 20,
  town: true
};

const printVillager = (villager: {
  name: string;
  animal: string;
  birthday: number;
  town: boolean;
}): void => {
  console.log(`Name: ${villager.name}`);
  console.log(`Animal: ${villager.animal}`);
  console.log(`Birthday: ${villager.birthday}`);
  console.log(`Lives in Town: ${villager.town}`);
};

printVillager(antonio);