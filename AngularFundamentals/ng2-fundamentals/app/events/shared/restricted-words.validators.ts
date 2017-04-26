/**
 * Created by ngohungphuc on 04/04/2017.
 */
import  {FormControl} from '@angular/forms'
// custome validators
export function restrictedWords(words) {
    return (control: FormControl): { [key: string]: any } => {
        if (!words) return null
        // loop through to find restricted words return null if not found then filter
        const invalidWords = words.map((w) => control.value.includes(w) ? w : null).filter((w) => w != null)
        return invalidWords && invalidWords.length > 0 ? {restrictedWords: invalidWords.join(', ')} : null
    }
}
