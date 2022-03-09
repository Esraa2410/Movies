import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //access modifires  private   public  protected

  constructor(private req: HttpClient) {}

  // get()
  // post()
  // delete()
  // patch()

  // RXjs

  getNowPlayingMovies(pageNum:number): Observable<any> {
    let respon = this.req.get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=afed2bdc759c185496dcd94a60b71d77&language=en-US&page='+pageNum
    );
    return respon; //pbservable
  }

  getSinglemovie(id:number):Observable<any> {
    return this.req.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=afed2bdc759c185496dcd94a60b71d77&language=en-US`
    );
  }
}
// let x = new ApiService();

// getPasta()
// {
//   return new promises()
// }

// getPasta().then



// form

// reactive form

// templtae driven form



// reactiveforms module
