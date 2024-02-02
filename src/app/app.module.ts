import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './layout/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './screens/home/home.component';
import { ContactUsComponent } from './screens/contact-us/contact-us.component';
import { AboutUsComponent } from './screens/about-us/about-us.component';
import { ServicesComponent } from './screens/services/services.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { WebappLayoutComponent } from './layout/webapp-layout/webapp-layout.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminSidemenuComponent } from './components/admin-sidemenu/admin-sidemenu.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    ServicesComponent,
    NotFoundComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    WebappLayoutComponent,
    LoginComponent,
    RegisterComponent,
    AdminHeaderComponent,
    AdminSidemenuComponent,
    AdminFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
