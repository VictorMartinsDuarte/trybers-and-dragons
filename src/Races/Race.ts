abstract class Race {
  private _name: string;
  private _dexterity: number;
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;
// import Fighter from '../Fighter';

// abstract class Battle {
//   constructor(protected player: Fighter) { }

//   // Should return 1 if player wins, -1 otherwise
//   fight(): number {
//     return this.player.lifePoints === -1 ? -1 : 1;
//   }
// }

// export default Battle;