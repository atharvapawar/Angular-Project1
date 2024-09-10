import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

@NgModule({
  declarations: [
    AddContactComponent,
    EditContactComponent,
    DeleteContactComponent,
    ViewContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddContactComponent,
    EditContactComponent,
    DeleteContactComponent,
    ViewContactComponent
  ]
})
export class ContactModule { }
