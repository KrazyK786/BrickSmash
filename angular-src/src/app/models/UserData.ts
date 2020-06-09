import {Comment} from "./Comment";

export class UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  comments: Comment[];
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
