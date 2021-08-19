import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProductForm:FormGroup

  constructor(
    private fb:FormBuilder,
    private productService:ProductService,
    private router:Router
  ) { 
    this.setProductForm()
  }

  ngOnInit(): void {
  }

  setProductForm(){
    this.addProductForm = this.fb.group({
      name:['',Validators.required],
      price:['',Validators.required],
      quantity:['',Validators.required],
      uom:['']
    })
  }

  saveProduct(){
    if(this.addProductForm.invalid) return
    this.productService.createProduct(this.addProductForm.value).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl('/main/products')
    },
      err=>{
        console.log(err)
      })
  }

}
