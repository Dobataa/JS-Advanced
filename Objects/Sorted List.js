function createSortedList() {

    let listOfNumbers = [];
    let list = {
        add(number) {
            listOfNumbers.push(number);
            listOfNumbers.sort((a, b) => a - b);
        },
        remove(index) {
            if (index > 0 && index < listOfNumbers.length) {
                listOfNumbers.splice(index, 1);
            }
        },
        get(index) {
            if (index > 0 && index < listOfNumbers.length) {
                return listOfNumbers[index];
            }
        },
        size() {
            return listOfNumbers.length;
        }
    };

    return list;

}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));