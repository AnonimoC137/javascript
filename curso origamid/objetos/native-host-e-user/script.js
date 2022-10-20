//Liste 5 objetos nativos
Object
String
Array
Function
Number
//Liste 5 objetos do browser
Window
History
Document
HTMLCollection
NodeList

//presente no Chrome que não existem no firefox

if (typeof document.webkitVisibilityState !== 'undefined') {
    console.log('existe');
} else {
    console.log('não existe');
}