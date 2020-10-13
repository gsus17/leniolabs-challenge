import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app-routes.config';
import { MainModule } from './main/main.module';

/**
 * Configuración de rutas para el módulo app.
 */
@NgModule({
    imports: [
        MainModule,
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
