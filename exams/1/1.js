function doubleArray(array){
    return array.map(function(number) {
        return (typeof number !== 'number') ? -1 : number*2; 
    });
}

const array = [1,{},2,'abc',3,4,'5'];

console.log(doubleArray(array));