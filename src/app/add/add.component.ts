import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  addForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    // this.addForm = new FormGroup
    this.addForm = this.fb.group({
      type: '', //drop down menu
      amount: '', //$
      tag: '', //
      month: '',
      year: ''
    });
  }
} 



