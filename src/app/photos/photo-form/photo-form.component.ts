import { Router } from '@angular/router';
import { PhotoService } from './../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css'],
})
export class PhotoFormComponent implements OnInit {
  photoForm!: FormGroup;
  file!: File | any;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload() {
    const description = this.photoForm.get('description')?.value;
    const allowComments = this.photoForm.get('allowComments')?.value;
    this.photoService
      .upload(description, allowComments, this.file)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }

  onChange(target: any) {
    if (target instanceof EventTarget) {
      let element = target as HTMLInputElement;
      let files = element.files;
      if (files) {
        this.file = files[0];
      }
    }
  }
}
