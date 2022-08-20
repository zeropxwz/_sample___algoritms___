function binarySearch<A>(list: Array<A>, item: A): number | null {

    let left:  number = 0
    let right: number = list.length

    let point: number

    while (true) {

        point = Math.floor( (left + right) / 2 )

        if (list[point] === item) {
            return point
        }
        if (left + 1 === right) {
            return null
        }

        if (item < list[point]) {
            right = point
        }
        else {
            left = point
        }
    }
}

export default binarySearch