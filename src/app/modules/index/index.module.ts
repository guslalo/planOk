import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './components/index/index.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FichaComponent } from './components/ficha/ficha.component';


@NgModule({
  declarations: [
    IndexComponent,
    FichaComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    HttpClientModule,
    MaterialModule
  ], 
  exports:[
    MaterialModule
  ]
})
export class IndexModule { }
