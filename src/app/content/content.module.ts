import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content.component';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  declarations: [HeaderComponent, NavbarComponent, ContentComponent]
})
export class ContentModule { }
