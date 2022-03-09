import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor(public _ApiService: ApiService) {}

  x = new Subscription();

  searchWord: any;

  moviesContainer: any;

  currentPage: any;

  getpage(eve: any) {
    console.log(eve.target.innerHTML);

    this.currentPage = eve.target.innerHTML;

    this._ApiService.getNowPlayingMovies(eve.target.innerHTML).subscribe({
      next: (data) => {
        console.log(data.results);
        this.moviesContainer = data.results;
      },
      error: (er) => {
        console.log(er.message);
      },
    });
  }

  totalPage: any;

  getNextPage() {
    this.currentPage++; //zwd wa7d

    if (this.currentPage > this.totalPage) {
      this.currentPage = 1;
    }

    this._ApiService.getNowPlayingMovies(this.currentPage).subscribe({
      next: (data) => {
        console.log(data.results);

        this.totalPage = data.total_pages;

        this.moviesContainer = data.results;
      },
      error: (er) => {
        console.log(er.message);
      },
    });
  }

  getPrevPage() {
    this.currentPage--; //zwd wa7d

    if (this.currentPage == 0) {
      this.currentPage = this.totalPage;
    }

    this._ApiService.getNowPlayingMovies(this.currentPage).subscribe({
      next: (data) => {
        console.log(data.results);

        this.totalPage = data.total_pages;

        this.moviesContainer = data.results;
      },
      error: (er) => {
        console.log(er.message);
      },
    });
  }

  ngOnInit(): void {
    // let x = this._ApiService.getNowPlayingMovies(); //observable not data
    // let x = this._ApiService.getNowPlayingMovies().subscribe(complete  , error  )

    // let x = this._ApiService.getNowPlayingMovies().subscribe( (x)=>{console.log(x)}  , (er)=>{console.log(er.message)}    )
    this.x = this._ApiService.getNowPlayingMovies(1).subscribe({
      next: (data) => {
        console.log(data.results);
        this.moviesContainer = data.results;
      },
      error: (er) => {
        console.log(er.message);
      },
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    this.x.unsubscribe();

    alert('unsubscribe done');
  }
}



// --development


// production mode


// ng build


// npm install


// server domain

// xd


// local lap


// host(global stortage) + domain(url windowWhen.meritmagdy.com)


// // hosting  >> server   1tera 10tera


// ip adrees 123.33.66.77  >> domain(www.xyz.com)



// cms  php
