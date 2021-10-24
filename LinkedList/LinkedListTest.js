import LL from './LinkedList.js';

//create a LL -> 1 -> 2 -> 3
let lL;
function buildLL() {
    lL = new LL([5,2,8]);
    console.log(lL.print());
}

buildLL();
