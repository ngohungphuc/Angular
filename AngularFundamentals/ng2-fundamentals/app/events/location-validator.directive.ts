import {Directive} from '@angular/core'
import {FormGroup, NG_VALIDATORS, Validator} from '@angular/forms'
@Directive({
    selector: '[validateLocation]',
    // add LocationValidator to list of NG_VALIDATORS
    providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }],
})
/**
 * Custom validator for create-event component
 * @param  {FormGroup} formGroup [description]
 * @return {[type]}              [description]
 */
export class LocationValidator implements Validator {
    /**
     * [Return object object have key is a string
     *  value of key can be anything]
     * @param  {FormGroup} contro [description]
     * @return {[type]}           [description]
     */
    validate(formGroup: FormGroup): { [key: string]: any } {
        const addressControl = formGroup.controls['address']
        const cityControl = formGroup.controls['city']
        const countryControl = formGroup.controls['country']
        // validator is siblings so need to go up to root dom
        const onlineUrlControl = (formGroup.root as FormGroup).controls['onlineUrl']

        // passing validation with no problem
        if ((addressControl && addressControl.value && cityControl &&
            cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
            return null
        } else {
            return { validateLocation: false }
        }
    }
}
