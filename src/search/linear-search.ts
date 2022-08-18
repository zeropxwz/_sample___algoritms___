function linearSearch<A>(list: Array<A>, item: A): A | null {

    for (let i = 0; i < list.length; i++) {

        if (list[i] === item) {
            return list[i]
        }

    }

    return null
}


export default linearSearch
