function swap<A>(list: Array<A>, index: number): Array<A> | object {

    if (index >= list.length - 1) {
        return Error('index can`t be last in array and more length array')
    }

    let temp = list[index + 1]

    list[index + 1] = list[index]
    list[index]     = temp

    return list
}




export default swap