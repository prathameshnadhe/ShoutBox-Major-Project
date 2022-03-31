import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TempComponent } from './temp/temp.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},  
  {path: 'login', component: LoginComponent},
  {path: '',redirectTo:'register', pathMatch:'full'},
  {path: 'temp', component: TempComponent, canActivate: [AuthGuard] },

  {path: 'footer', component: FooterComponent,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
