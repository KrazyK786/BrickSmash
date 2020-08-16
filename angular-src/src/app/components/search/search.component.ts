import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search/search.service";
import {UserData} from "../../models/UserData";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string;
  type: string;
  returnedUsers: UserData[];

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    // set type to all to match 'chekced'
    this.type = 'all';
  }

  submitSearch(): void {

    this.searchService.searchUsers(this.searchTerm, this.type).subscribe( resArray => {
      console.log(resArray);
      this.returnedUsers = resArray;
    });
    // console.log("Search value:" + this.searchValue);
  }

}
