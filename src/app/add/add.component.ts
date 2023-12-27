import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  addForm!: FormGroup;
  expenseTypes:string[] = ['Food', ''];
  
  constructor(private fb: FormBuilder) {
  }
  
  customerForm?: FormGroup;
  ngOnInit(): void {
    // this.addForm = new FormGroup
    this.addForm = this.fb.group({
      // expense: ['', Validators.required, Validators.maxLength(1)],
      expense: '',
      amount: [0, 
        [Validators.required, Validators.min(1)]], 
      // tag: '', 
      // month: '',
      // year: ''
    });

    this.customerForm = new FormGroup({

    })
  }

  save(): void {
    console.log(this.addForm.get('expense')?.value + ":" + this.addForm.get('amount')?.value);
    
  }
} 

