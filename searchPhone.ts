function searchPhone(phones: number[], target: number): number {
    //validate inputs
    if (!Array.isArray(phones) || phones.length === 0) {
        return -1;
    }
    if (typeof target !== 'number' || !Number.isInteger(target)) {
        return -1;
    }
    //binary search
    let left = 0;
    let right = phones.length -1;
    while (left <= right){
        //const mid = Math.floor((left + right) / 2);
        // evitando desbordamiento si son numeros muy grandes
        const mid = left + Math.floor((right - left) / 2);
        //check mid
        if (phones[mid] === target){
            return mid;
        }
        //adjust search range
        if(phones[mid] < target){
            left = mid + 1; // move right
        }else{
            right = mid - 1; // move left
        }
    }
    return -1
}


const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]
console.log(searchPhone(phones,1020)) // Output: 4