function solve(pies, start, end){

    let startIndex = pies.indexOf(start);
    let endIndex = pies.indexOf(end);

    console.log(pies.slice(startIndex, endIndex + 1));

}
solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');