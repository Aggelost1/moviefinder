import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';


const routes = [
    { path: '', component: SearchComponent, pathMatch: 'full' }
];

export default RouterModule.forChild(routes)