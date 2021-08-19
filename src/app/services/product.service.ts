import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Authorization coding_test`
  })
  opts = {headers:this.headers}

  constructor(
    private http:HttpClient
  ) { }

  getProducts(){
    return this.http.get(`${environment.apiUrl}`,this.opts)
  }

  createProduct(obj){
    return this.http.post(`${environment.apiUrl}`,obj, this.opts)
  }

  update(obj){
    return this.http.put(`${environment.apiUrl}${obj.id}`,obj,this.opts)
  }

  delete(id){
    return this.http.get(`${environment.apiUrl}${id}`, this.opts)
  }

  getSingleProduct(id){
    return this.http.get(`${environment.apiUrl}${id}`)
  }

}
