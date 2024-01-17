import { Route } from '@angular/router';
import { ExcursaoComponent } from './routes/view/excursao/excursao.component';

export const appRoutes: Route[] = [
    { path: '*', pathMatch: 'full', redirectTo: 'arborizacaoSocial' },
    {
        path: '',
        component: ExcursaoComponent,
        children: [
            {
                path: 'excursao',
                loadChildren: () =>
                    import('src/app/routes/view/view-routing.module').then(m => m.ViewRoutingModule),
            },
           
        ]
    },
];
