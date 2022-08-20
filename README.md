## Алгоритмы поиска  

### Линейный поиск  

Осуществляется методом последовательного перебора всех элементов массива, пока не найдет нужный или не пройдет по всему массиву.  
##### Сложность: O(N)

<img src="assets/linear-search.gif" width="720">

#### Линейный поиск на TypeScript:

```ts
function linearSearch<A>(list: Array<A>, item: A): A | null {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === item) {
            return list[i]
        }
    }

    return null
}
```

#### Линейный поиск на python:

```py
def linearSearch (list, item):
    for i in range(len(list)):
        if (list[i] == item):
            return list[i]

    return None
```

### Двунаправленный поиск

Похож на обычный линейный поиск, но отличается тем, что последовательность поиска ведется сразу с двух направлений - с начала и с конца массива.  
#### Сложность: O(N)

#### Двунаправленный поиск на TypeScript:

```ts
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
```

#### Двунаправленный поиск на python:

```py
def biDirectSearch (list, item):

    l = 0
    r = 0

    length = len(list) / 2
    
    while (l <= length):
        if (list[l] == item): 
            return list[l]
        if (list[r] == item):
            return list[r]

        l += 1
        r -= 1

    return None
```

### бинарный поиск

<img src="assets/binary-search.png" width="720">

