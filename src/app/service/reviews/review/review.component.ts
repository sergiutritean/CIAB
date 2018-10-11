import { Component, OnInit, Input } from '@angular/core';
import { ReviewModel } from 'src/app/shared/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() review: ReviewModel;

  constructor() { }

  ngOnInit() {
  }

}
