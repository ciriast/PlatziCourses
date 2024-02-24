class MyArray{
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;

        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length--;

        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);

        return item;
    }

    shiftIndex(index) {
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
    }

    insertAtBegining(item) {
        if (!item) {
            return this.data;
        }

        this.modifyIndexes();
        this.data[0] = item;

        return this.data;
    }

    modifyIndexes() {
        let valueToInsert = this.data[0];

        for(let i = 0; i < this.length; i++) {
            const originalValue = this.data[i + 1];
            this.data[i + 1] = valueToInsert;

            if(originalValue) {
                valueToInsert = originalValue;
            }
        }

        this.length++;
    }

    deleteFirstElement() {
        if (this.length <= 0) {
            return undefined;
        }

        const valueToRemove = this.data[0]
        let valueToInsert = this.data[this.length - 1];

        for (let i = this.length; i > 0; i--) {
            const originalValue = this.data[i - 1];
            this.data[i - 1] = valueToInsert

            if(originalValue) {
                valueToInsert = originalValue;
            }
        }
        
        delete this.data[this.length - 1];
        this.length--;

        return valueToRemove;
    }
}

const myArray = new MyArray();