import { ContextMenuModule } from 'primeng/contextmenu';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { LightboxModule } from 'primeng/lightbox';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng';
import { InputTextModule } from 'primeng/inputtext';
import { TurmaPesquisaComponent } from './turma-pesquisa/turma-pesquisa.component';
import { TurmaCadastroComponent } from './turma-cadastro/turma-cadastro.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule, InputMaskModule, OrderListModule, ProgressSpinnerModule } from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng';
import {AutoCompleteModule} from 'primeng';
import {CheckboxModule} from 'primeng';
import {ConfirmDialogModule} from 'primeng';
import {DialogModule} from 'primeng';
import {FieldsetModule} from 'primeng';
import {InputSwitchModule} from 'primeng';
import {InputTextareaModule} from 'primeng';
import {MessagesModule} from 'primeng';
import {MultiSelectModule} from 'primeng';
import {OverlayPanelModule} from 'primeng';
import {PaginatorModule} from 'primeng';
import {PanelModule} from 'primeng';
import {PanelMenuModule} from 'primeng';
import {RadioButtonModule} from 'primeng';
import {RatingModule} from 'primeng';
import {ScrollPanelModule} from 'primeng';
import {SelectButtonModule} from 'primeng';
import {SlideMenuModule} from 'primeng';
import {SliderModule} from 'primeng';
import {SpinnerModule} from 'primeng';
import {SplitButtonModule} from 'primeng';
import {StepsModule} from 'primeng';
import { TurmaRoutingModule } from './turma-routing.module';
import { TurmaPeriodoComponent } from './turma-periodo/turma-periodo.component';
import {DataViewModule} from 'primeng';
import {CardModule} from 'primeng';
import { TurmaAlunosComponent } from './turma-alunos/turma-alunos.component';


@NgModule({
  imports: [
    CommonModule,
    TurmaRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    CardModule,


    DataViewModule,
    InputTextModule,
    ButtonModule,
    DataViewModule,
    OrderListModule,
    TooltipModule,
    InputMaskModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    AutoCompleteModule,

    ButtonModule,
    CheckboxModule,
    ConfirmDialogModule,
    ContextMenuModule,
    DialogModule,
    FieldsetModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    LightboxModule,
    MenuModule,
    MenubarModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    RadioButtonModule,
    RatingModule,
    ScrollPanelModule,
    SelectButtonModule,
    SlideMenuModule,
    SliderModule,
    SpinnerModule,
    SplitButtonModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TooltipModule,
    ProgressSpinnerModule,


  ],
  declarations: [TurmaCadastroComponent, TurmaPesquisaComponent, TurmaPeriodoComponent, TurmaAlunosComponent]
})
export class TurmaModule { }
