import { autoinject } from 'aurelia-framework';
import { WebAPI } from './web-api';

@autoinject
export class List1ViewModel {

    statusText: string
    data: Array<any>
    selectionMode: boolean
    itemsDraggable: boolean


    constructor(private api: WebAPI) {

        this.loadList()

    }


    private created() {

    }


    async loadList() {

        console.info("on click")
        this.statusText = "on click"

        console.log("doWork")
        try {
            this.data = await this.api.getContactList()
            console.log("Data", this.data)
        } catch (error) {
            console.error(error)
        }

        console.log("doWork end")

    }


    toggleSelectionMode() {

        this.selectionMode = !this.selectionMode

    }


    toggleItemsDraggable() {

        this.itemsDraggable = !this.itemsDraggable

    }


}