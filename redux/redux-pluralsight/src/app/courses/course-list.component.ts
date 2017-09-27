import { Observable } from 'rxjs/Observable';
import { filterCourses, IAppState } from '../store';
import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent, FilterService } from '../blocks/filter-text';
import { NgRedux, select } from 'ng2-redux';
import { CourseActions } from './course.action';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('filteredCourses') filteredCourses$: Observable<Course>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private courseAction: CourseActions
  ) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    // remove direct dispatch
    // store.dispatch(filterCourses(searchText));
    this.courseAction.filterCourses(searchText);
  }

  ngOnInit() {
    componentHandler.upgradeDom();
  }
}
