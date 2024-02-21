import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users/pages/users-list/users-list.component';
import { UsersItemComponent } from './users/pages/users-item/users-item.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { TagSelectComponent } from './tags/pages/tag-selector/tag-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersItemComponent,
    TagSelectComponent,
    FooterComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
