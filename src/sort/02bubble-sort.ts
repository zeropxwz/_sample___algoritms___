function bubleSort (list: Array<number>): Array<number> {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j + 1]

                list[j + 1] = list[j]
                list[j]     = temp
            }
        }
    }

    return list
}

export default bubleSort