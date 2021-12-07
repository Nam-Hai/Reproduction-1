import { trigger, state, style, transition, animate, query, group, animateChild} from '@angular/animations';

export const Animations = [
    trigger('headerOnStart', [
        state('onStart', style({
            transform: 'translateZ(0px)',
        })),
        transition('* => onStart', animate('700ms linear')),
    ])
]