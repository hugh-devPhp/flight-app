import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from './post/view/view.component';
import { FlightsListComponent } from './flights/components/flights-list/flights-list.component';

export const routes: Routes = [
    { path: "search", component: SearchFormComponent },
    { path: "list", component: FlightsListComponent },
    { path: "post", redirectTo: 'post/index', pathMatch: 'full' },
    { path: "post/create", component: CreateComponent },
    { path: "post/edit", component: EditComponent },
    { path: "post/:postId/index", component: IndexComponent },
    { path: "post/:postId/view", component: ViewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
