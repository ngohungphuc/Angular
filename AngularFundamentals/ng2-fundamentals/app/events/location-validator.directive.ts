import {Directive} from '@angular/core'
import {Validator, FormGroup} from '@angular/forms'
@Directive({
    selector: '[validateLocation]'
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
        let addressControl = formGroup.controls['address']
        let cityControl = formGroup.controls['city']
        let countryControl = formGroup.controls['country']
        //validator is siblings so need to go up to root dom
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl']

        //passing validation with no problem
        if ((addressControl && addressControl.value && cityControl &&
            cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
            return null
        } else {
            return { validateLocation: false }
        }
    }
}
