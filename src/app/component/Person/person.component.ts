
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { provinceValidator } from '../CA provinces  and tettories/province.validator';
import { provinces } from '../CA provinces  and tettories/provinces';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  personForm!: FormGroup;
  provinces = provinces;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.personForm = this.fb.group({
      id: [null, [Validators.required, Validators.min(1), Validators.max(100)]],
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      address: ['', Validators.required],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      province: ['', [Validators.required, provinceValidator]],
      phone: ['', Validators.required],
      lastUpdated: ['', Validators.required]
    });
  }
  

  onSubmit(): void {
    if (this.personForm.valid) {
      console.log(this.personForm.value);
    }
  }
}

