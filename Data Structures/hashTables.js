class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashMethod(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value) {
        const address = this.hashMethod(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);

        return this.data;
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;
    }

    delete(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    const currentValue = currentBucket[i];
                    this.data[address].splice(i, 1);
        
                    return currentValue;
                }
            }
        }

        return undefined;
    }

    getDataByValue(value) {
        let myArray = [];

        for (let i = 0; i < this.data.length; i++) {
            const myData = this.data[i];
            
            if (myData) {
                for (let y = 0; y < myData.length; y++) {
                    if (myData[y][1] === value) {
                        myArray.push(myData[y]);
                    }                    
                }
            }
        }

        return myArray;
    }
}

const myHashTable = new HashTable(50);