import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideComponent } from './side/side.component';
import { MainComponent } from './main/main.component';
import { ContactModule } from './contact/contact.module';
import { FormsModule } from '@angular/forms';
import { FahrPipe } from './fahr.pipe';
import { CapsPipe } from './caps.pipe';
import { RepeatPatternPipe } from './repeat-pattern.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent,
    MainComponent,
    FahrPipe,
    CapsPipe,
    RepeatPatternPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    ContactModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
