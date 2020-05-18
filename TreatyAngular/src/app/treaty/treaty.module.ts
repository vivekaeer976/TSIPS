import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTreatyComponent } from './edittreaty/edittreaty.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { ActionbydateofmodificationComponent } from './actionbydateofmodification/actionbydateofmodification.component';
@NgModule({
  declarations: [
    EditTreatyComponent,
    ActionbydateofmodificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    
  ],
  exports: [EditTreatyComponent, ActionbydateofmodificationComponent]
})
export class TreatyModule { }
