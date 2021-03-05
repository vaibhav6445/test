import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.sass']
})
export class GenresComponent implements OnInit {

  Movies: any = [];
  Genres: any = [];
  apiResponse: any;
  searchQuery = '';
  timer = null;
  noResult = false;


  constructor( public restApi: RestApiService) {
    this.apiResponse = [];
  }

  ngOnInit() {

    this.restApi.getAllGenres().subscribe((data: {}) => {
      this.apiResponse = data;
      this.Genres = data;
      console.log(data);

      
    });

  
  }

}
