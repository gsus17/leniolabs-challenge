import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MainService } from '../main.service';

/**
 * Person detail component.
 */
@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit, OnDestroy {

  /** Person detail */
  public personDetail;

  /** Destroy$ of component */
  private destroy$ = new Subject<void>();

  constructor(
    private router: ActivatedRoute,
    private mainService: MainService) { }

  /**
   * Init the component.
   */
  public ngOnInit(): void {
    this.router
      .params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        if (params.data) {
          this.mainService.getPersonListById$(params.data)
            .pipe(takeUntil(this.destroy$))
            .subscribe((x) => this.personDetail = x[0]);
        }
      });
  }

  /**
   * Destroy component.
   */
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
