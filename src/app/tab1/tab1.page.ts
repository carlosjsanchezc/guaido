import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  noticias:any[]=[];
  principal:{titulo:"",imagen:"",texto:""};
constructor (private httpc:HttpClient)
{

this.actualizanoticias();
}
actualizar(event)
{
  let apiurl:string;
  apiurl="http://tbitpro.com/guaido/guaidoapi.php?opcion=noticiasver";
  this.httpc.get(apiurl).subscribe(data => {
   this.noticias=data['noticias'];
    console.log(this.noticias);
    event.target.complete();
   }, error => {
    console.log('error');
    event.target.complete();

  });  
}
actualizanoticias()
  {
    let apiurl:string;
    apiurl="http://tbitpro.com/guaido/guaidoapi.php?opcion=noticiasver";
    this.httpc.get(apiurl).subscribe(data => {
     this.noticias=data['noticias'];
      console.log(this.noticias);
     }, error => {
      console.log('error');

    });  


apiurl="http://tbitpro.com/guaido/guaidoapi.php?opcion=principal";
console.log(apiurl);
    this.httpc.get(apiurl).subscribe(data => {
     this.principal=data['noticias'];
      console.log(this.principal);
     }, error => {
      console.log('error');

    });  
  }



}
