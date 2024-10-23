import { NgModule } from "@angular/core";
import { CapitalCityGame } from "./game.component";
import { CapitalCityRoutingModule } from "./game-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CapitalGameService } from "./game.service";
import { CapitalModalComponent } from "./capital-modal/capital.component";
@NgModule({
    declarations: [
      CapitalCityGame,
      CapitalModalComponent
    ],
    imports: [
      CommonModule,
      HttpClientModule,
      CapitalCityRoutingModule,
      ReactiveFormsModule
    ],
    providers: [
      CapitalGameService
    ]
  })
  export class CapitalCityModule {

   }
  