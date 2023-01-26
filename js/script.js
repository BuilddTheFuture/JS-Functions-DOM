'use strict';

// function setText(id, text) {
// 	let elem = document.getElementById(id);
// 	elem.textContent = text;
// }
// setText('elem1', 'text1');
// setText('elem2', 'text22');

// function setText (selector, text) {
// 	let elem = document.getElementsByTagName(selector)[0];
// 	elem.textContent = text;
// };
// setText('p', 'new span')

//
// function setAttr(selector, attr, value) {
// 	let elem = document.getElementsByTagName(selector)[0];
// 	console.log(elem.id);
// 	elem.id = value;
// 	console.log(elem.id);
// };
// setAttr('span', 'id', 'elem2')

//
// function appendText (selector, text) {
// 	let elems = document.querySelectorAll(selector);
// 	for (let elem of elems) {
// 		elem.textContent = elem.textContent + text;
// 	}
// }
// appendText('.text1', ' - 1');
// appendText('.text2', ' - 2');

//
// function forEach(selector, callback) {
//     let elems = document.querySelectorAll(selector);
//     for (let elem of elems) {
//         callback(elem) 
//     }
    
// }
// let result = forEach('.elem', function(elem) {
//     return elem.textContent = elem.textContent + '!';
// })
// console.log(result);

//
// function forEach(selector, callback){
//     let elems = document.querySelectorAll(selector);
//     for (let i=0; i < elems.length; i++) {
//         callback(elems[i], i)
//     }
// }
// let result = forEach('.elem', function(elem, index){
//     return elem.textContent = (index+1) + ' ' + elem.textContent;
// })

//
// function appendText (elem, text) {
//     elem.textContent = elem.textContent + text;
// }
// let elem1 = document.querySelector('#elem1');
// appendText(elem1, ' - elem1!');
// let elem2 = document.querySelector('#elem2');
// appendText(elem2, ' - elem2!');

//
// function func (elem, text) {
//     elem.textContent = elem.textContent + text;
// };
// let elems = document.querySelectorAll('.elem');
// for (let elem of elems) {
//     func (elem, ' !!!')
// }

//
// function setValue (input, text) {
//     input.value = text;
// };
// let inp = document.querySelector('#inp');
// setValue(inp, 'text fghj')
// let btn = document.querySelector('#btn');
// btn.addEventListener('mouseup', function func() {
//     btn.style.backgroundColor = 'red';
//     setValue(inp, 'dblclick on button')
// })

//
// function appendText (elems, text) {
//     for (let elem of elems) {
//         elem.textContent = elem.textContent + text;
//     }
// };
// let elems = document.querySelectorAll('.elem');
// appendText(elems, ' - text')

//
// function appendElem (ul, text) {
//     let li = document.createElement('li');
//     li.textContent = text;
//     ul.appendChild(li)
// }; 
// let ul = document.querySelector('#parent');
// let btn = document.querySelector('#btn');
// btn.addEventListener('mouseup', function () {
//     appendElem(ul, 'new li')
// })

//
// function appendElem (ul, elem) {
//     let li = document.createElement('li');
//     li.textContent = 'li ' + elem;
//     ul.appendChild(li)
// }; 
// let ul = document.querySelector('#parent');
// let arr = [3, 4, 5, 6, 7, 8, 9, 10];
// let btn = document.querySelector('#btn');
// btn.addEventListener('mouseup', function () {
//     for (let elem of arr) {
//         appendElem(ul, elem)
//     }
// })

//
// function createTable (numTd, numTr, div) {
//     let num = 1;
//     let table = document.createElement('table');
//     for (let i = 1; i <= numTd; i++) {
//         let tr = document.createElement('tr')
//         for (let j = 1; j<= numTr; j++) {
//             let td = document.createElement('td');
//             td.textContent = num;
//             tr.appendChild(td);
//             num++;
//         }
//         table.appendChild(tr);
//     }
//     div.appendChild(table)
// }
// let div1 = document.querySelector('#parent')
// createTable(5, 5, div1);
// createTable(10, 10, div1);

//
// function createTable (numTd, numTr) {
//     let num = 1;
//     let table = document.createElement('table');
//     for (let i = 1; i <= numTd; i++) {
//         let tr = document.createElement('tr')
//         for (let j = 1; j<= numTr; j++) {
//             let td = document.createElement('td');
//             td.textContent = num;
//             tr.appendChild(td);
//             num++;
//         }
//         table.appendChild(tr);
//     }
//     return table;
// }
// let div = document.querySelector('#parent')
// let table = createTable(5, 5);
// div.appendChild(table)
// div.appendChild(createTable(8, 8))

//
// function createTable (numTd, numTr) {
//     let num = 1;
//     let table = document.createElement('table');
//     for (let i = 1; i <= numTd; i++) {
//         let tr = document.createElement('tr')
//         for (let j = 1; j<= numTr; j++) {
//             let td = document.createElement('td');
//             td.textContent = num;
//             tr.appendChild(td);
//             num++;
//         }
//         table.appendChild(tr);
//     }
//     return table;
// }
// let block = document.querySelector('#elem');
// block.appendChild(createTable(5, 5))

// создали таблицу из массива
function createTableByArr(arr) {
    let table = document.createElement('table');
    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr');
        for(let j = 0; j < arr[i].length; j++) {
            let td = document.createElement('td');
            td.textContent = arr[i][j];
            tr.appendChild(td)
        }
        table.appendChild(tr);
    }
    return table;
}
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let block = document.querySelector('#parent');
let table = createTableByArr(arr);
block.appendChild(table)






































