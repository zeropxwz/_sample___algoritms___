import {dataA, dataB} from './search/data-ts' 
import  dataC         from './sort/data-ts'

import linearSearch   from './search/01linear-search'
import biDirectSearch from './search/02bidirect-search'
import binarySearch   from './search/03binary-search'


import selectionSort  from './sort/01secection-sort'
import bubleSort      from './sort/02bubble-sort'
import quickSort      from './sort/03quick-sort'



// Search
// console.log(
//     linearSearch<string>(dataA, 'Oleg')
// )

// console.log(
//     biDirectSearch<string>(dataA, 'Igor')
// )

// console.log(
//     binarySearch<number>(dataB, 10)
// )

// Sort
console.log(
    selectionSort(dataC)
)

// console.log(
//     bubleSort(dataC)
// )

// console.log(
//     quickSort(dataC)
// )


