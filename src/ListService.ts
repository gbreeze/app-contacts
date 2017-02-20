export class ListService {

    list = new Array<{ id: number, name: string }>(
        { id: 4, name: 'dd' },
        { id: 1, name: 'aa' },
        { id: 2, name: 'bb' },
        { id: 3, name: 'cc' }
    )

    groups = new Array<{ name: string, items: { id: number, name: string }[] }>()

    constructor() {
        this.groups.push({ name: 'xx', items: this.list })

    }

    sortList() {
        this.groups[0].items.sort((left, right) => {
            return left.name.localeCompare(right.name, undefined, { numeric: true, sensitivity: 'base' });
        })
    }

    swapList() {
        let list = this.groups[0].items

        let newIndex = list.length - 1
        let oldIndex = 0
        const temp = list[newIndex]
        list.splice(newIndex, 1, list[oldIndex])
        list.splice(oldIndex, 1, temp)
    }

    change() {
        this.groups[0].items[0].name = 'zz'

    }    
}