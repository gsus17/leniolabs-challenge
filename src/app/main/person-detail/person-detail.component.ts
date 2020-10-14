import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';

/**
 * Person detail component.
 */
@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  /** Person detail */
  public personDetail;

  constructor(
    private router: ActivatedRoute,
    private mainService: MainService) { }

  /**
   * Init the component.
   */
  public ngOnInit(): void {
    this.router
      .params
      .subscribe((params) => {

        if (params.data) {
          this.mainService.getPersonListById$(params.data)
            .subscribe((x) => this.personDetail = x);
        }
      });
  }

}
