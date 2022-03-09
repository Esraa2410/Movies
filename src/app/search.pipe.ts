import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(moviesArray: any, searchWord: any): any[] {
    // let x = objProp;

    if (
      searchWord == undefined ||
      searchWord == '' 

    ) {
      return moviesArray;
    }

    return moviesArray.filter((elm: any) => {
      // return elm.x.toLowerCase().includes(searchWord.toLowerCase());
      return elm.title.toLowerCase().includes(searchWord.toLowerCase());
    });
  }
}
