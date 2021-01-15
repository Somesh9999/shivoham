import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports:[
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ]
})
export class AngularMaterialModule{

}
