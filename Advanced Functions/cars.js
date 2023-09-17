function solve(input) {
  let cars = {};

  let carBuilder = {
    create(name) {
      cars[name] = {};
    },
    inherit(child, parent) {
      cars[child] = Object.create(cars[parent]);
    },
    set(name, key, value) {
      cars[name][key] = value;
    },
    print(name) {
      let result = [];
      let currentObject = cars[name];
      for (let key in currentObject) {
        result.push(`${key}:${currentObject[key]}`);
      }
      console.log(result.join(','));
    }
  };

  for (let line of input) {
    let [command, ...args] = line.split(' ');

    if (command === 'create') {
      carBuilder.create(args[0]);

      if (args[1] === 'inherit') {
        carBuilder.inherit(args[0], args[2]);
      }
    } else {
      carBuilder[command](args[0], args[1], args[2]);
    }
  }
}
solve(['create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2']);