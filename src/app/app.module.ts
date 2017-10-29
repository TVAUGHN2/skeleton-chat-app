import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { TwoButtonComponent } from './two-button/two-button.component';
import { ProtectedComponent } from './protected/protected.component';

import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsComponent } from './settings/settings.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'chat', component: ChatboxComponent},
  { path: 'login', component: LoginComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  // authentication demo
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ LoggedInGuard ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    ChatboxComponent,
    TwoButtonComponent,
    ProtectedComponent,
    NavbarComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  providers: [AUTH_PROVIDERS, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
