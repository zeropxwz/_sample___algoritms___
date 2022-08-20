import data as data






def selectionSort(list):

    l = len(list)
    i = 0

    min = 0

    temp = 0 

    while (i < l):
        min = i
        for j in range(l):
            if (list[j] < list[min]): 
                min = j
                
        temp = list[min]

        list[min] = list[j]
        list[j]   = temp

        i = i + 1

    return list



print(
    selectionSort(data.C)
)