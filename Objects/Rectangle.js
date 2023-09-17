function rectangle(width, height, color) {

    let firstChar = color[0].toUpperCase();
    let remaning = color.slice(1);
    color = firstChar + remaning;

    let rect = {
        width,
        height,
        color,
        calcArea(){
            let area = this.width * this.height;
            return area;
        }
    };

    return rect;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());