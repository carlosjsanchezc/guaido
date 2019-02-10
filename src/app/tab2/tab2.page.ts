import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  noticiash:any[]=[];
constructor (private httpc:HttpClient)
{

this.actualizanoticias();
}
actualizanoticias()
  {
    let apiurl:string;
    apiurl="http://tbitpro.com/guaido/guaidoapi.php?opcion=noticiashver";
    this.httpc.get(apiurl).subscribe(data => {
     this.noticiash=data['noticias'];
      console.log(this.noticiash);
     }, error => {
      console.log('error');

    });  

  }
  actualizar(event)
  {
    let apiurl:string;
    apiurl="http://tbitpro.com/guaido/guaidoapi.php?opcion=noticiashver";
    this.httpc.get(apiurl).subscribe(data => {
     this.noticiash=data['noticias'];
      console.log(this.noticiash);
      event.target.complete();
     }, error => {
      console.log('error');
      event.target.complete();
  
    });  
  }
}
