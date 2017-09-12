import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule} from 'ngx-bootstrap';
import { RouterModule} from '@angular/router';

import { imageFilterPipe} from './image-details/filter.pipe'
import { ImageService } from './image-details/imageDatabase/image.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailsComponent } from './image-details/image-details.component'
import { appRoutes } from '../routes';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailsComponent,
    imageFilterPipe
  ],
  imports: [
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [ImageService, imageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
