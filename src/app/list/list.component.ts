import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import {ActivatedRoute} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})

export class ListComponent implements OnInit {
  Movies: any = [];
  Genres: any = [];
  apiResponse: any;
  searchQuery = '';
  timer = null;
  noResult = false;
  id : number;
  gnrId = this.router.snapshot.params['genres-id'];

  constructor( public restApi: RestApiService,public router: ActivatedRoute,) {
    this.apiResponse = [];
    
  }

  ngOnInit() {
    // Get movies list
    this.restApi.getAllMovies(this.gnrId).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
      console.log(data);
    });

 



    
  }

  searchMovie(searchStr: string) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      searchStr = searchStr.trim();
      if (searchStr === '') {
        this.Movies = this.apiResponse;
        return;
      }
      this.restApi.searchMovie(searchStr).subscribe((data: {
        total_results: number;
      }) => {
        this.noResult = false;
        if (data.total_results === 0) {
          this.Movies = [];
          this.noResult = true;
          return;
        }
        this.Movies = data;
      });
    }, 250);
  }
}

