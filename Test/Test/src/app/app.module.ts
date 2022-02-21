import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './Components/items-list/items-list.component';
import { LoginComponent } from './Components/login/login.component';
import { AddItemComponent } from './DialogBoxes/add-item/add-item.component';



import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';





@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    LoginComponent,
   AddItemComponent,
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,


    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,

    AgGridModule.withComponents([]),

  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,



   ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
