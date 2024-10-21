function getbyIdx(arr, idx){
    if(idx < 0 || arr.length <= idx){
        return 'elemento inexistente';
    }
    return arr[idx];
}
let resultado = getbyIdx([1, 2],1);
console.log(resultado);