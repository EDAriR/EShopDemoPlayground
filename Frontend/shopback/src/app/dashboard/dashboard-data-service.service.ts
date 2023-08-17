import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  private showDashboardDataSubject = new BehaviorSubject<boolean>(true);
  showDashboardData$ = this.showDashboardDataSubject.asObservable();

  setShowDashboardData(show: boolean) {
    this.showDashboardDataSubject.next(show);
  }
}
