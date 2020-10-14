import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MainService } from '../main.service';

/**
 * Person list component.
 */
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit, OnDestroy {
  /** Person list */
  public personList = [];

  /** Local Person list */
  public renderList = [];

  /** Show/hide the avanced options */
  public showAvancedOptions: boolean = false;

  /** Destroy$ of component */
  private destroy$ = new Subject<void>();

  constructor(
    private mainService: MainService,
    private router: Router) { }


  /**
   * Init the component.
   */
  public ngOnInit(): void {
    this.mainService.getPersonList$()
      .pipe(takeUntil(this.destroy$))
      // tslint:disable-next-line: no-any 
      .subscribe((data: any) => {
        this.personList = data;
        this.renderList = data;
      });
  }

  /**
   * Redirect to person detail by id.
   */
  public personSelection(id: string): void {
    this.router.navigate(['main/person-detail/', { data: id }]);
  }

  /**
   * Filter by name.
   */
  public filterByName(name: string): void {
    this.renderList = this.personList.filter((x) => x.first_name.toLowerCase().includes(name));
  }

  /**
   * Filter by name.
   */
  public filterByLastName(lastName: string): void {
    this.renderList = this.personList.filter((x) => x.last_name.toLowerCase().includes(lastName));
  }

  /**
   * Filter by gender.
   */
  public filterByGenderName(gender: string): void {
    this.renderList = this.personList.filter((x) => x.gender.toLowerCase().includes(gender));
  }

  /**
   * Filter by party.
   */
  public filterByPartyName(party: string): void {
    this.renderList = this.personList.filter((x) => x.party.toLowerCase().includes(party));
  }

  /**
   * Show/Hide avanced options.
   */
  public toggleAvancedOptions(value: boolean): void {
    this.showAvancedOptions = value;
  }

  /**
   * Destroy component.
   */
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
