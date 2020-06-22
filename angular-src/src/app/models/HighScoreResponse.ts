import {User} from "./User";
import {UserData} from "./UserData";

export interface HighScoreResponse {
  success: boolean;
  sortedUsers: UserData[];
}
