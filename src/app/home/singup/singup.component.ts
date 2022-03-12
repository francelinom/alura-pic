import { UserNotTakenService } from './user-not-taken.validator.service';
import { lowerCaseValidator } from './../../shared/validators/lower-case.validators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
})
export class singUpComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenService: UserNotTakenService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: [
        '',
        [Validators.required, Validators.min(2), Validators.max(40)],
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.min(2),
          Validators.max(30),
          lowerCaseValidator,
        ],
        this.userNotTakenService.checkUserNameTaken(),
      ],
      password: [
        '',
        [Validators.required, Validators.min(8), Validators.max(14)],
      ],
    });
  }
}
