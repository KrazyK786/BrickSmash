import {Comment} from "./Comment";
import {Friend} from "./Friend";

export class User {
  success: boolean;
  token: string;
  msg: string;
  user: {
    _id: number,
    name: string,
    username: string,
    email: string,
    profile: string,
    comments: Comment[],
    friends: Friend[],
    games: {
      bricksmash: {
        highscore: number
      },
      tetris: {
        highscore: number
      }
    }
  }
}
