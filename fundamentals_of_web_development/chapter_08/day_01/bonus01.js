const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
// Crie uma função que reotorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem
// (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const dragonDamage = (dragon) => {
  return Math.ceil(Math.random() * (dragon.strength - 15) + 15);
};

const warriorDamage = (warrior) => {
  const str = warrior.strength;
  const weapon = warrior.weaponDmg;
  const max = str * weapon - str;
  return Math.ceil(Math.random() * max + str);
};

const mageDamage = (mage) => {
  const mana = mage.mana;
  const intelligence = mage.intelligence;
  const maxDamage = intelligence * 2;
  const status = {
    damage: 0,
    mana: 0,
  };
  if (mana < 15) {
    return "Não possui mana suficiente";
  }
  status.damage = Math.ceil(Math.random() * (maxDamage - intelligence) + intelligence);
  status.mana = 15;
  return status;
};

///////                    Part 2

// Crie a primeira HOF que compõe o objeto gameActions .
// Ela será a função que simula o turno do personagem warrior .
// Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon .
// Além disto ela também deve atualizar o valor da chave damage do warrior .
// Crie a segunda HOF que compõe o objeto gameActions .
// Ela será a função que simula o turno do personagem mage .
// Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon .
// Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
// Crie a terceira HOF que compõe o objeto gameActions .
// Ela será a função que simula o turno do monstro dragon .
// Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior .
// Além disto ela também deve atualizar o valor da chave damage do monstro.
// Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para
// visualizar o resultado final do turno.

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const damage = warriorDamage(warrior);
    warrior.damage = damage;
    dragon.healthPoints -= damage;
  },
  mageTurn: (mageDamage) => {
    const { damage, mana } = mageDamage(mage);
    mage.damage = damage;
    mage.mana -= mana;
    dragon.healthPoints -= damage;
  },
  dragonTurn: (dragonDamage) => {
    const damage = dragonDamage(dragon);
    dragon.damage = damage;
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());
