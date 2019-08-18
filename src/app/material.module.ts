import { MatButtonModule, MatCheckboxModule, MatInputModule,  MatFormFieldModule, MatIconModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, MatNativeDateModule],
  exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, MatNativeDateModule]
})

export class MaterialModule {}