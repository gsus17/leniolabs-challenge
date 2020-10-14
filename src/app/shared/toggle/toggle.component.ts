import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/**
 * Toggle component.
 */
@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  /** Value to change */
  public value: boolean = false;

  /** Change event. */
  @Output() public changeEvent = new EventEmitter<boolean>();

  constructor() { }

  /**
   * Init the component.
   */
  public ngOnInit(): void {
  }

  /**
   * Emit the change envent.
   */
  public detectorChange(): void {
    this.changeEvent.emit(this.value);
  }
}
