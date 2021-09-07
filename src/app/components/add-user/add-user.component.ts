import { PropertyBindingType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from 'src/app/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      name: [''],
      email: [''],
      street: [''],
      city: [''],
      phone: [''],
    });
  }

  onSubmit() {
    const payload = this.addUserForm.getRawValue();
    const prvArrStr = localStorage.getItem('users');
    const previousArr: any[] = prvArrStr ? JSON.parse(prvArrStr) : [];
    previousArr.push(payload);
    localStorage.setItem('users', JSON.stringify(previousArr));
  }
}
