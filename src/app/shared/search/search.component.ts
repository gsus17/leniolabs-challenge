import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/**
 * Search component.
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  /** Search text. */
  public searchText: string = '';

  /** Event to filter */
  @Output() public changeEvent = new EventEmitter<string>();

  constructor() { }

  /**
   * Init the component.
   */
  public ngOnInit(): void {
  }

  /**
   * Emit search text changes.
   */
  public detectorChange(): void {
    this.changeEvent.emit(this.searchText);
  }
}
