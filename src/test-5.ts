import { autoinject } from 'aurelia-framework'
import { ListService } from './ListService'
import { Router, RouteConfig, NavigationInstruction, RedirectToRoute } from 'aurelia-router'


@autoinject
export class Test5ViewModel {


    show = false

    constructor(private listService: ListService, private router: Router) {
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

    toMainPage() {
        this.router.navigate('test-1')
    }


}