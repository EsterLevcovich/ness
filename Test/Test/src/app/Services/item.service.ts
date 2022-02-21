import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../Model/item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private configUrl = 'https://raw.githubusercontent.com/GoogleChromeLabs/sample-pie-shop/master/src/data/products.json';


  constructor(private http:HttpClient) { }  

  


  GetItemsList():Observable<any>{
    return this.http.get<any>(this.configUrl );
  }

}
