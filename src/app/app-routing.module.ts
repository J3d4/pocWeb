import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './pages/connection/connection.component';
import { HomeComponent } from './pages/home/home.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { MapComponent } from './pages/map/map.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { SurveyComponent } from './pages/survey/survey.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'introduction',component:IntroductionComponent},
  {path:'map',component:MapComponent},
  {path:'samples',component:SamplesComponent},
  {path:'survey',component:SurveyComponent},
  {path:'connection',component:ConnectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
