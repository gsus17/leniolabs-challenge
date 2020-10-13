import { Component, OnInit } from '@angular/core';

/**
 * Person list component.
 */
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  constructor() { }

  /**
   * Init component.
   */
  public ngOnInit(): void {
  }

}
