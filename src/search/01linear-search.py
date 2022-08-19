
import data as data

def linearSearch (list, item):

    for i in range(len(list)):
        if (list[i] == item):
            return list[i]

    return None


print(
    linearSearch(data.A, 'Oleg')
)