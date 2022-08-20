function selectionSort(list: Array<number>): Array<number>{
    for (let i = 0; i < list.length; i++) {
        let indexMIN = i
        for (let j = i; j < list.length; j++) {
            if (list[j] < list[indexMIN]) {
                indexMIN = j
            }
        }

        let temp = list[i]

        list[i]        =  list[indexMIN]
        list[indexMIN] = temp
    }

    return list
}

export default selectionSort