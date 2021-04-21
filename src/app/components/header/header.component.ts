import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/interfaces/data-structure';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  name: String;
  profile: String;

  constructor( private dataServices: DataService ) { }

  ngOnInit(): void {
    this.dataServices.getHeader()
      .subscribe( ( res: Header ) => {
        this.name = res.name;
        this.profile = res.profile
        
      });
  }

}
