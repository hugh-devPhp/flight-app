import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';

export const routes: Routes = [
    { path: "search", component: SearchFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
