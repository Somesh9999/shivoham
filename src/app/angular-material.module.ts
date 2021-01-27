import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports:[
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class AngularMaterialModule{

}
