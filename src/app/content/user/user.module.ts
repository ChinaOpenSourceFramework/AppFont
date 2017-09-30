import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [UserListComponent],
  providers: [UserService]
})
export class UserModule { }
