// 1. Given the following array: [2,3,4,5,7]
// Perform 3 right rotations:
// First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]
// return [4,5,7,2,3]

const arr = [2,3,4,5,7];

function rotate(arr, rot){
    let len = arr.length;
    for(let i = 0; i<rot; i++){
        arr.unshift(arr[len-1]);
        arr.pop();
    }
    console.log("New Arr",arr);
}

rotate(arr, 3);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
