import { autoinject } from 'aurelia-framework';
import { WebAPI } from './web-api';
import { Router, RouteConfig, NavigationInstruction, RedirectToRoute } from 'aurelia-router'

@autoinject
export class Test1ViewModel {

    statusText: string


    constructor(private api: WebAPI, private router: Router) {

    }

    private created() {

    }

    async click() {

        this.router.navigate('test-5')
        
        /*
        console.info("on click")
        this.statusText = "on click"

        console.log("doWork")
        try {
            let data = await this.api.getContactList(true)
            console.log("Data", data)
        } catch (error) {
            console.error(error)
        }

        console.log("doWork end")
        */
    }

}