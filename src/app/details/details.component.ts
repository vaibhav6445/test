import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestApiService} from '../shared/rest-api.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TrailerComponent} from '../trailer/trailer.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  movieId = this.router.snapshot.params['movie-id'];
  MovieDetails: any = {};
  innerWidth: any;

  constructor(
    public router: ActivatedRoute,
    public restApi: RestApiService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    return this.restApi.getMovieDetails(this.movieId).subscribe((data: {}) => {
      this.MovieDetails = data;
    });
  }


}
