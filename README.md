# Алгоритмы поиска  

## Линейный поиск  

Простейший из алгоритмов поиска.  
Осуществляется методом последовательного перебора всех элементов массива, пока не найдет нужный элемент или не пройдет по всему массиву.  
Сложность алгоритма: O(n)

Линейный поиск на TypeScript:

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

Линейный поиск най python:

```py
def linearSearch (list, item):
    for i in range(len(list)):
        if (list[i] == item):
            return list[i]

    return None
```
