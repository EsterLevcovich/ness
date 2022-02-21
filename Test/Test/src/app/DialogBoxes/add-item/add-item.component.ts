import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/Model/item';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  
  ItemForm = this.formBuilder.group({
    id: new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(8)],),
    name: new FormControl('',[Validators.required,]),
    description: new FormControl('',[Validators.maxLength(100)]),
    features: new FormControl('',[Validators.maxLength(100)]),
    price: new FormControl(''),
    keywords: new FormControl(''),
    url: new FormControl(''),
    category: new FormControl(''),
    subcategory: new FormControl(''),
    
  });

  constructor( private formBuilder: FormBuilder,
     public dialogRef: MatDialogRef<AddItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item:Item) {}

  ngOnInit(): void { 
  } 
 

  getErrorMessage(formControl:any) { 
         
    if (formControl.hasError('required')) {
      return 'Required field';
    } 

    else if (formControl.hasError('minLength')) {
      return 'Minimum 8 characters';
    }   
    return  '';
  }

  Save()
  {
    if(this.ItemForm.valid)
    {
      this.item=this.ItemForm.value;
      this.dialogRef.close(this.item);
    }
    else
    {
      alert("not valid Data");
    }
  }

}
