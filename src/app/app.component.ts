import { Component } from '@angular/core';
import {GlobserService} from './globser.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data : String;
  dataskrg : String="";

  constructor(public varglob : GlobserService){
    this.data = this.varglob.getData();
  }
  ubahdata(){
    this.varglob.setData(this.dataskrg);
    this.data = this.varglob.getData();
  }
}
