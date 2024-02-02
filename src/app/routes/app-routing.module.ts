import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../screens/home/home.component';
import { APP_ROUTES } from '../constants/app-routes';
import { ContactUsComponent } from '../screens/contact-us/contact-us.component';
import { AboutUsComponent } from '../screens/about-us/about-us.component';
import { ServicesComponent } from '../screens/services/services.component';
import { NotFoundComponent } from '../screens/not-found/not-found.component';
import { AppComponent } from '../layout/app.component';
import { WebappLayoutComponent } from '../layout/webapp-layout/webapp-layout.component';
import { AuthLayoutComponent } from '../layout/auth-layout/auth-layout.component';
import { LoginComponent } from '../modules/auth/login/login.component';
import { RegisterComponent } from '../modules/auth/register/register.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: "web-app",
    component: WebappLayoutComponent,
    children: [{
      path: APP_ROUTES.default,
      component: HomeComponent
    },
    {
      path: APP_ROUTES.home,
      component: HomeComponent
    },
    {
      path: APP_ROUTES.constactUs,
      component: ContactUsComponent
    },
    {
      path: APP_ROUTES.aboutUs,
      component: AboutUsComponent
    },
    {
      path: APP_ROUTES.services,
      component: ServicesComponent
    },
    {
      path: APP_ROUTES.notFound,
      component: NotFoundComponent
    },
    {
      path: APP_ROUTES.unknown,
      redirectTo: APP_ROUTES.notFound
    }]
  },
  {
    path:"admin/auth",
    component: AuthLayoutComponent,
    children:[{
      path: "",
      component: LoginComponent
    },
    {
      path: "sign-in",
      component: LoginComponent
    },{
      path: "sign-up",
      component: RegisterComponent
    }]
  },
  {
    path:"admin/app",
    component: MainLayoutComponent,
    children:[{
      path: "",
      component: LoginComponent
    },
    {
      path: "sign-in",
      component: LoginComponent
    },{
      path: "sign-up",
      component: RegisterComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
