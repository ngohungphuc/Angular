import { IAppState } from '../store';
import { NgRedux } from 'ng2-redux';
import { Injectable } from '@angular/core';

export const FILTER_COURSES = 'courses/FILTER';

@Injectable()
export class CourseActions {
  constructor(private ngRedux: NgRedux<IAppState>) {}
  filterCourses(searchText: string) {
    this.ngRedux.dispatch({
      type: FILTER_COURSES,
      searchText
    });
  }
}
