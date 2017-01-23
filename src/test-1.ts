import { autoinject } from 'aurelia-framework';
import { WebAPI } from './web-api';

@autoinject
export class Test1ViewModel {

    statusText: string


    constructor(private api: WebAPI) {

    }

    private created() {

    }

    async click() {

        console.info("on click")
        this.statusText = "on click"

        console.log("doWork")
        try {
            let data = await this.api.getContactList(true)
            console.log("Data", data)
        } catch (error) {
            console.error(error)
        }

    }

}