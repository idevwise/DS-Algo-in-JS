/**
 * The Object and Map classes are default hash-tables in JS. 
 * Map was introduced to provide a real hash-table experience 
 * because Object has some restrictions, like:
 * 1. it doesn't have a size property.
 * 2. there's no safe way to iterate over the actual data. There are many 
 * prototype properties that need to excluded while iterating by using
 * hasOwnProperty(). But, even hasOwnProperty() can be overwritten, which 
 * makes it risky.
 * 
 * In Map, we can't override the hash-table properties like size. 
 * 
 * Following is an example of how a hash-table can be explicitly
 * implemented in JS.
 * 
 * Conflict resolution has been done using an Array. Even a LinkedList can 
 * be used for this. 
 */
export default class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }

    get(key) {
        const hash = this._hash(key);
        const resArr = this.table[hash];
        for (let i=0; i < resArr.length; i++) {
            if (key === resArr[i][0]) {
                return resArr[i];
            }
        }
        return null;
    }

    set(key, value) {
        const hash = this._hash(key);
        if (this.table[hash]) {
            //same key should be overwritten
            for(let i=0; i<this.table[hash].length; i++) {
                if (this.table[hash][i][0] === key) {
                    this.table[hash][i][1] = value;
                    return;
                }
            }
            this.table[hash].push([key, value]);
        } else {
            this.table[hash] = [[key, value]]
        }
        this.size++;

    }

    _hash(key) {
        let hash = 0;
        for (let i=0; i<key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    display() {
        for (let i=0; i < this.table.length; i++) {
            if (!this.table[i]) {
                continue;
            }
            console.log(`Index: ${i}`);
            for (let j=0; j< this.table[i].length; j++) {
                console.log(`[key, value]: ${this.table[i][j]}`);
            }
        }
    }
}

const hTest = new HashTable();

//same key
hTest.set('ram', 21);
hTest.set('ram', 24);

//index collision
hTest.set("Spain", 110);
hTest.set("ǻ", 192);

hTest.set('raj', 3);

hTest.display();

console.log(hTest.get('raj'));
console.log(hTest.get('Spain'));
console.log(hTest.get('ǻ'));


