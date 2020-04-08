import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RedirectComponent} from './redirect/redirect.component'


const routes: Routes = [
  { path: '',
    component: AppComponent
  },
  { path: 'red',
  component: RedirectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
