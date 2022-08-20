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
//     binarySearch(dataB, 11)
// )

// Sort
// console.log(
//     selectionSort(dataC)
// )

// console.log(
//     bubleSort(dataC)
// )

// console.log(
//     quickSort(dataC)
// )


// function searchMAX(list: Array<number>): number {

//     let max = list[0]

//     for (let i = 0; i < list.length; i++) {
//         if (list[i] > max) {
//             max = list[i]
//         }
//     }

//     return max
// }

// function searchMIN(list: Array<number>): number {

//     let min = list[0]

//     for (let i = 0; i < list.length; i++) {
//         if (list[i] < min) {
//             min = list[i]
//         }
//     }

//     return min
// }

// console.log(
//     searchMAX(dataC)
// )