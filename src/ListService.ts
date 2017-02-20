export class ListService {

    list = new Array<{ id: number, name: string }>(
        { id: 4, name: 'dd' },
        { id: 1, name: 'aa' },
        { id: 2, name: 'bb' },
        { id: 3, name: 'cc' }
    )

    constructor() {

    }

    sortList() {
        this.list.sort((left, right) => {
            return left.name.localeCompare(right.name)
        })
    }

    swapList() {
        let list = this.list

        let newIndex = list.length - 1
        let oldIndex = 0
        const temp = list[newIndex]
        list.splice(newIndex, 1, list[oldIndex])
        list.splice(oldIndex, 1, temp)
    }

    changeToYY() {
        this.list[0].name = 'yy'
    }

    changeToZZ() {
        this.list[0].name = 'zz'
    }

}