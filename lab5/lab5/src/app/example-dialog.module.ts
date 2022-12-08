import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
  
import { ExampleDialogComponent } from './example-dialog.component';
  
@NgModule({
  declarations: [ExampleDialogComponent],
  entryComponents: [ExampleDialogComponent],
  imports: [
    FormsModule
  ],
})
export class ExampleDialogModule {}