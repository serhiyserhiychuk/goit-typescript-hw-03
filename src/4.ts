class Key {
  private signature: number = Math.random();
  constructor(signature: number = 0) {
    this.signature = signature !== 0 ? signature : Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean = false;
  tenants: Person[] = [];
  constructor(key: Key) {}
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  openDoor(key: Key): void {}
}

class MyHouse extends House {
  openDoor(givenKey: Key): void {
    if (givenKey.getSignature() === key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
