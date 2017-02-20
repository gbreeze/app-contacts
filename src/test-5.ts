import { autoinject } from 'aurelia-framework'
import { ListService } from './ListService'


@autoinject
export class Test5ViewModel {


    show = false

    constructor(private listService: ListService) {
    }

    canActivate() {

    }

    activate() {
        this.listService.sortList()
    }

    attached() {
        this.show = true
    }

    private created() {

    }


}