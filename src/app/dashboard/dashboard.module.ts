import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SelectUserIdRangeComponent } from './select-user-id-range/select-user-id-range.component';
import { DashboardService } from './services/dashboard.service';
import { MatSelectModule } from '@angular/material/select';

const components = [DashboardComponent, SelectUserIdRangeComponent];
const servfices = [DashboardService];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
  ],
  declarations: [...components],
  exports: [...components],
  providers: [...servfices],
})
export class DashboardModule {}
