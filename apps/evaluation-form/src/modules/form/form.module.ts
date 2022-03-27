import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TuiFieldErrorPipeModule } from '@taiga-ui/kit';
import { InputNumberDirective } from '../../directives/input-number/input-number.directive';
import { SharedModule } from '../../utils/shared/shared.module';
import { FormComponent } from './component/form.component';
import { FormRoutingModule } from './form-routing.module';
import { UserFormComponent } from './user-form-component/user-form.component';
import { Form1Component } from './form1-component/form1.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    FormComponent,
    InputNumberDirective,
    UserFormComponent,
    Form1Component,
  ],
  imports: [
    CommonModule,
    TuiFieldErrorPipeModule,
    SharedModule,
    FormRoutingModule,
  ],
})
export class FormModule {}
