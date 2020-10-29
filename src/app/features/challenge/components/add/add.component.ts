import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  formGroup = this.fb.group({
    title: this.fb.control('', Validators.required),
    description: this.fb.control('', Validators.required),
    tags: this.fb.control('', Validators.required),
  });
  submitConfig = {
    type: 'primary',
    disabled: false,
  };
  greetingsConfig = {
    header: ['Add Challenge'],
    subHeader: 'Fill in the details for your challenge',
  };
  ngOnInit(): void {}
  submitChallenge() {
    console.log('herhehe');
  }
}
