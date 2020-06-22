import {Comment} from "./Comment";
import {Friend} from "./Friend";

export class UserData {
  _id: number;
  name: string;
  username: string;
  email: string;
  comments: Comment[];
  friends: Friend[];
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
