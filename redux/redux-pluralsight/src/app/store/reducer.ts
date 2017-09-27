import { Course } from '../courses/course';
import { IAppState } from './IAppState';

const initialState: IAppState = {
  courses: [
    {
      id: 1,
      name: 'Building Apps with React',
      topic: 'ReactJS'
    },
    {
      id: 2,
      name: 'Building Apps with Angular',
      topic: 'AngularJS'
    },
    {
      id: 3,
      name: 'Building Apps with Angular and Redux',
      topic: 'Angular and Redux'
    }
  ]
};

export function reducer(state = initialState , action) {
    return state;
}
