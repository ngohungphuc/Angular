import { store , filterCourses } from '../store';
import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent, FilterService } from '../blocks/filter-text';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  filteredCourses = [];

  constructor(private _courseService: CourseService) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    store.dispatch(filterCourses(searchText));
  }

  updateFromState(){
    const allState = store.getState();
    this.filteredCourses = allState.filteredCourses;
  }

  ngOnInit() {
    this.updateFromState();
    store.subscribe(() => {
      this.updateFromState();
    });
    componentHandler.upgradeDom();
  }
}
