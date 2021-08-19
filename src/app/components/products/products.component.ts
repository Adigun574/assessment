import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:IProduct[] = []

  constructor(
    private productsService:ProductService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    console.log('getting products')
    this.productsService.getProducts().subscribe((data:any)=>{
      console.log(data)
      this.products = data.result
    },
      err=>{
        console.log(err)
      })
  }

  deleteProduct(id){
    console.log(id)
    this.productsService.delete(id).subscribe(data=>{
      console.log(data)
      this.getAllProducts()
    },
      err=>{
        console.log(err)
      })
  }

  viewProduct(id){
    this.router.navigateByUrl(`/main/product/${id}`)
  }

}
