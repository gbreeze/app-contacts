import { autoinject, bindable } from 'aurelia-framework';


export interface ListViewItem {
    selected: boolean
}


@autoinject
export class ListView {


    /** Gets or sets the data source that provides the ListView with items. */
    @bindable items: Array<ListViewItem>

    /** Gets or sets a value that specifies whether items can be dragged. */
    @bindable itemsDraggale: boolean

    /** Gets or sets an object that indicates which item should have keyboard focus and the focus state of that item. */
    @bindable currentItem: ListViewItem

    /** Gets or sets a value that specifies how many ListView items can be selected. */
    @bindable selectionMode: 'none' | 'single' | 'multi'

    /** Gets or sets how the ListView reacts when the user taps or clicks an item. */
    // https://msdn.microsoft.com/en-us/library/windows/apps/hh701303.aspx
    @bindable tapBehavior: 'none' | 'directSelect' | 'toggleSelect' | 'invokeOnly'


    constructor() {

    }

    private created() {

    }

}