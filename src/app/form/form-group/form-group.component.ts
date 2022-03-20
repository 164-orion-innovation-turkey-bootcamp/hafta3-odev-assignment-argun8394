
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent  {

  //Tüm inputlara etkileşim sağlanmıştır
  productForm = new FormGroup({
    name : new FormControl("",
    [
      Validators.required,

  ]),
    description : new FormControl("",Validators.minLength(20)),
    price : new FormControl("",Validators.required),
    model : new FormControl("",Validators.required),



  })

  get name() {
    return this.productForm.get("name")
  }

  get description() {//get() metodu ile formControle etkileşimi sağla
    return this.productForm.get("description")
  }



  onSubmit (){
   console.log(this.productForm.value)//burda product form nesnesinin value larını yazdırmış olduk
  }

update() {
  this.productForm.patchValue({//Burada patchValue() metodu ile sadece istediğimiz değerleri değiştiririz
    //setValue() metodu kullanacak olursak tüm formControl inputlarını değiştirmeye çalışır
    //name : "Iphone X",
    //price : "7500"
  })
}

}
