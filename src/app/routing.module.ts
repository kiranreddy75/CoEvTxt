import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
    {path:'employees', component:EmployeeListComponent},
    {path:'details', component: EmployeeDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
export const routingComponents = [EmployeeListComponent, EmployeeDetailComponent]