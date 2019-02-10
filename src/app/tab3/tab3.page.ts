import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
ayudas:any[]=[];
  constructor (private httpc:HttpClient)
{

this.actualizanoticias();
}
actualizanoticias()
  {
    let apiurl:string;
    apiurl="http://tbitpro.com/guaido/guaidoapi.php?opcion=ayudasver";
    this.httpc.get(apiurl).subscribe(data => {
     this.ayudas=data['noticias'];
      console.log(this.ayudas);
     }, error => {
      console.log('error');

    });  

  }

}
