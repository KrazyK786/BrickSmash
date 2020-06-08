export class UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  games: {
    bricksmash: {
      highscore: number
    },
    tetris: {
      highscore: number
    }
  }
  // bricksmashscore: number;
  // tetrisscore: number;
}
