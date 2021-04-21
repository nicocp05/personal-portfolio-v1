import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { DataStructure } from '../interfaces/data-structure';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getHeader() {
    return this.http.get('../assets/data.json')
      .pipe( map( (res: DataStructure ) => {
        return res.header;
      }));
  }

  getSkills() {
    return this.http.get('../assets/data.json')
      .pipe( map( (res: DataStructure ) => {
        return res.skills;
      }));
  }

}
