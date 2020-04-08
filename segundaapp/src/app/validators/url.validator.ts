import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
    if(!control.value.startsWith('https') || !control.value.includes('.com')) {
        // esto sería que no pasa
        return { validUrl: true };
    }

    return null;
}