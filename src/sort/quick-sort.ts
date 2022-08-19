function quickSort (list: Array<number>): Array<number> {

    if (list.length <= 1) return list

    let less: Array<number> = []
    let more: Array<number> = []

    let index = Math.round(list.length / 2)
    let point = list[index]

    for (let i = 0; i < list.length; i++) {
        
        if (index === i) continue

        if (list[i] < point) {
            less.push(list[i])
        }
        else {
            more.push(list[i])
        }
    }

    return [...quickSort(less), point, ...quickSort(more)]
}

export default quickSort