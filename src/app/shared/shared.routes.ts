import {Routes, RouterModule}      from '@angular/router'
import { SearchComponent } from './search.component';
import {NoComponent} from './no.component'

const routes = [
    { path: 'shared ',  component :NoComponent,    pathMatch: 'full'},

];

export default RouterModule.forChild(routes)




