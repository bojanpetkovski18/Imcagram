import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NavMenuComponent } from './header/nav-menu/nav-menu.component';
import { PostGridComponent } from './main/post-grid/post-grid.component';
import { FooterComponent } from './footer/footer.component';
import { PostDetailsComponent } from './main/post-details/post-details.component';
import { AddFormComponent } from './header/add-form/add-form.component';
import { PostService } from 'src/shared/services/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommunicationsService } from 'src/shared/services/communications.service';
import { DeleteFormComponent } from './main/post-details/delete-form/delete-form.component';
import { EditFormComponent } from './main/post-details/edit-form/edit-form.component';

const routes: Routes = [
  { path: 'posts', component: MainComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    AddFormComponent,
    MainComponent,
    PostGridComponent,
    PostDetailsComponent,
    DeleteFormComponent,
    EditFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  providers: [PostService, CommunicationsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
