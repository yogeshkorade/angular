import { Directive, ElementRef, HostListener, Output, EmbeddedViewRef } from '@angular/core';

@Directive({
    selector:'[only-digits]'
})

export class OnlyDigits {

    constructor (public el : ElementRef) {
        this.el.nativeElement.onkeypress = (evt) => {
            if(evt.which < 48 || evt.which > 57){
                evt.preventDefault();
            }
        };
    }    
}


@Directive({
    selector:'[only-alpha]'
})

export class OnlyAlpha {    
    constructor (public el : ElementRef) {
        this.el.nativeElement.onkeypress = (evt) => {
            if(evt.which < 97 || evt.which > 122){
                evt.preventDefault();
            }
        };
    }    
}

@Directive({
    selector: '[email]'
})
export class EmailValid {
    constructor (public el : ElementRef) {
        this.el.nativeElement.onkeypress = (evt) => {
            //if(evt.which < 97 || evt.which > 122){
                //evt.preventDefault();
            //}
        };
    }
}    