import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [PhotoModule, PhotoListModule, PhotoFormModule],
})
export class PhotosModule {}
