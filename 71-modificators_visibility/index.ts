function setName() {
  return 'COD'
}

class Player {
  private static game: string = 'COD'

  private login: string
  private _password: string
  public server: string
  protected consent: boolean

  static {
    Player.game = setName()
  }

  get password() {
    return this._password
  }

  set password(newPass: string) {
    // Validation
    this._password = newPass
  }

  static getGameName() {
    return Player.game
  }
}

new Player()
new Player()
console.log(Player.getGameName())

// Math.random()
//
// class CompetitivePlayer extends Player {
//   rank: number
//   private isConsented() {
//     this.consent ? 'Yes' : 'No'
//   }
// }
//
// const player = new CompetitivePlayer()
// player._password = '1qaz'

// class User {
//   public email string
//   public name: string
//
//   constructor(email: string, name: string) {
//     this.email = email
//     this.name = name
//   }
// }

// class User {
//   constructor(public email: string, public name: string) {}
// }