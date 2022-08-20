





function selectionSort(list: Array<number>): Array<number> {
    for (let i = 0; i < list.length; i++) {
        let min = i
        for (let j = i; j < list.length; j++) {
            if (list[j] < list[min]) {
                min = j
            }
        }

        let temp = list[min]

        list[min] = list[i]
        list[i]   = temp
    }
    
    return list
}

export default selectionSort