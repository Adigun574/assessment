import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  productID

  constructor(
    private productService:ProductService,
    private route:ActivatedRoute
  ) { 
    this.route.paramMap.subscribe((param:any)=> this.productID = param.params.id)
    console.log(this.productID)
  }

  ngOnInit(): void {
    this.getProduct()
  }


  getProduct(){
    console.log('yes')
    this.productService.getSingleProduct(this.productID).subscribe(data=>{
      console.log(data)
    },
      err=>{})
  }

}
