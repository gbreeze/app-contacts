import { autoinject, Animator } from 'aurelia-framework';
import { WebAPI } from './web-api';

@autoinject
export class Test2ViewModel {

    statusText: string

    items = ['foo', 'bar', 'slfksfj', 'lsdfjsdklf lsf', 'sldj salfj ']

    remove(item) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    constructor(private api: WebAPI, private animator: Animator, private element: Element) {

    }

    private created() {

    }

    click() {
        this.items.splice(2, 1)
    }

    customAnimation() {
        this.animator.animate(this.element.querySelector('.animated-collection') as HTMLElement,
            'background-animation')

        this.animator.enter(this.element.querySelector('li'))

    }

}