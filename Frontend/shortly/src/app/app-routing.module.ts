import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RedirectComponent} from './redirect/redirect.component'
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserpageComponent } from './userpage/userpage.component';


const routes: Routes = [
  { path: '',
    component: UserpageComponent
  },
  { path: 'admin',
    component: MainpageComponent
  },
  { path: 'shortly',
  component: UserpageComponent
  },
  { path: ':id',
  component: RedirectComponent
  },
  { path: '**',
  component: RedirectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
