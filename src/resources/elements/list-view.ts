import { autoinject, bindable, Animator } from 'aurelia-framework';

// import * as Sortable from 'sortablejs' // working but no with d.ts support
// import { Sortable } from 'sortablejs' // d.ts support but not working
import Sortable = require('sortablejs')


export interface ListViewItem {
    selected: boolean
}


@autoinject
export class ListView {


    /** Gets or sets the data source that provides the ListView with items. */
    @bindable items: Array<ListViewItem>

    /** Gets or sets a value that specifies whether items can be dragged. */
    @bindable itemsDraggable: boolean

    /** Gets or sets an object that indicates which item should have keyboard focus and the focus state of that item. */
    @bindable currentItem: ListViewItem

    /** Gets or sets a value that specifies how many ListView items can be selected. */
    @bindable selectionMode: boolean

    /** Gets or sets how the ListView reacts when the user taps or clicks an item. */
    // https://msdn.microsoft.com/en-us/library/windows/apps/hh701303.aspx
    //? @bindable tapBehavior: 'none' | 'directSelect' | 'toggleSelect' | 'invokeOnly'

    private sortablejs: Sortable

    constructor(private animator: Animator, private element: Element) {

    }


    private created() {

    }


    public detached() {

        if (this.sortablejs)
            this.sortablejs.destroy()

    }


    private select(item: ListViewItem) {

        if (this.selectionMode)
            item.selected = !item.selected

        this.currentItem = item
        console.log('Item selected:', item)

    }


    private selectionModeChanged(newValue: boolean, oldValue: boolean) {

        // if (!newValue) {
        //     this.items.forEach(item => {

        //         if (item.selected)
        //             item.selected = false

        //     })
        // }

    }


    private itemsDraggableChanged(newValue: boolean, oldValue: boolean) {

        if (newValue) {
            // this.sortablejs = Sortable.create(document.querySelector('ul.items'), {})   
            // TODO: submit option and reorder the items after dragging
            // https://github.com/rubaxa/Sortable
            this.sortablejs = new Sortable(document.querySelector('ul.items'))
        }
        else {
            if (this.sortablejs)
                this.sortablejs.destroy()
        }

    }


}