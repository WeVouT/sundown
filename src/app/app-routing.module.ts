import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SundownOverviewComponent } from './components/sundown-overview/sundown-overview.component';

const routes: Routes = [
  { path: '', component: SundownOverviewComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
