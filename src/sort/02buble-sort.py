import data as data






def bubleSort (list):
    for i in range(len(list)):
        for j in range(len(list)):
            if (list[j] >= list[j + 1]):

                temp = list[j + 1]

                list[j + 1] = list[j]
                list[j]     = temp




bubleSort(data.C)