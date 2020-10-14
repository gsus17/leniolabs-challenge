import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MainService } from '../main.service';

/**
 * Person list component.
 */
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  /** Person list */
  public personList = [];

  /** Local Person list */
  public renderList = [];

  constructor(
    private mainService: MainService,
    private router: Router) { }


  /**
   * Init the component.
   */
  public ngOnInit(): void {
    this.mainService.getPersonList$()
      .pipe(
        map((response: any) => response.results[0].members))
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
}
