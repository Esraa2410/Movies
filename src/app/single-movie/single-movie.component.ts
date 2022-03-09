import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css'],
})
export class SingleMovieComponent implements OnInit {
  singliepMovieObj: any;

  recieved: boolean = false;

  constructor(
    public _ApiService: ApiService,
    public _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let movieId = this._ActivatedRoute.snapshot.params['x'];

    console.log(movieId);

    this._ApiService.getSinglemovie(movieId).subscribe({
      next: (data) => {
        console.log(data);
        this.singliepMovieObj = data;
        this.recieved = true;
      },
      error: () => {},
    });
  }
}




// form

// authonication autho guard

// xd

// sass

// domain


