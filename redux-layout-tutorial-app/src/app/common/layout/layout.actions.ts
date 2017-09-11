/**
 * The layout actions will be dispatched every time when an user action is made
 */

import {Action} from '@ngrx/store';

/* Layout actions are defined here */
export const LayoutActionTypes = {
    OPEN_MODAL: '[Layout] Open modal',
    CLOSE_MODAL: '[Layout] Close modal'
};


/**
 * Modal action
 */
export class OpenModalAction implements Action {
    type = LayoutActionTypes.OPEN_MODAL;
    constructor(public payload: string) {

    }
}

export class CloseModalAction implements Action {
    type = LayoutActionTypes.CLOSE_MODAL;
    constructor(public payload: string) {

    }
}

/* The action classes will be added here once they are defined */
export type LayoutActions = CloseModalAction | OpenModalAction;
