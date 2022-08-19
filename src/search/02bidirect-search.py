from operator import length_hint
import data as data

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

print(
    biDirectSearch(data.A, 'Igor')
)



