import data as data



def binarySearch(list, item):

    left  = 0
    right = len(list)

    point = None

    while (True):

        point = round((left + right) / 2)

        if (list[point] == item):
            return point
        if (left + 1 >= right):
            return None



        if (item < list[point]):
            right = point
        else:
            left = point

print(
    binarySearch(data.A, 'Egor')
)

