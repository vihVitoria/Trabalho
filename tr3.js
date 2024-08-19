function countlistasdefrutas(arr) {
    const listasdefrutas = {};
    
    arr.forEach(str => {
        if (listasdefrutas[str]) {
            listasdefrutas[str]++;
        } else {
            listasdefrutas[str] = 1;
        }
    });
    
    return listasdefrutas;
}
const array = ['morango', 'banana', 'maça', 'laranja', 'banana', 'maça'];
const result = countlistasdefrutas(array);
console.log(result);