function biDirectSearch<A>(list: Array<A>, item: A): A | null {

    let l: number = 0
    let r: number = list.length - 1

    while (l < list.length / 2) {
        if (list[l] === item) return list[l]
        if (list[r] === item) return list[r]

        l++
        r--
    }

    return null
}

export default biDirectSearch