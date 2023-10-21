export const ExerciseJsFunctions = () => {
  const sortImmune = (parametr) => {
    const result = [...parametr];
    return result.sort((a, b) => a - b);
  };
  const originalArr = [1, 3, 2];
  const sortedArr = sortImmune(originalArr);
  console.log({
    originalArr, // [1, 3, 2]
    sortedArr, // [1, 2, 3]
  });
  /// Zadanie 1
  const obj = {
    name: 'adam',
    surname: 'kowalski',
  };

  for (let prop in obj) {
    // return prop.charAt(0).toUpperCase() + prop.slice(1);

    console.log(prop.charAt(0).toUpperCase() + prop.slice(1));
    ///rozwiazanie trenera
    /*const capitilize = (obj) => {

    const newObj = {};

 

    for (const key in obj) {

      newObj[key[0].toUpperCase() + key.slice(1)] = obj[key];

    }

 

    return newObj;

  };
  
  ------------------------V2---------------------*/
    //lepsza uniwersalna
    /*
    const capitilize = (obj) => {

    return Object.fromEntries(

      Object.entries(obj).map(([key, value]) => [

        key.charAt(0).toUpperCase() + key.slice(1),

        value,

      ])

    );

  };
  */
  }
  // ZADANIE:

  const calcAvr = (arr) => {
    return arr.map(({ id, name, grades }) => {
      const avr = grades.reduce((acc, grade) => acc + grade, 0) / grades.length;

      return {
        id,

        name,

        avr: avr,
      };
    });
  };

  const tablicaPierwotna = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },

    { id: 2, name: 'Eve2', grades: [4, 2, 4, 6, 1, 2, 3] },
  ];

  const tablicaWynikowa = calcAvr(tablicaPierwotna);

  console.log(tablicaPierwotna, 'tablicaPierwotna');

  console.log(tablicaWynikowa, 'tablicaWynikowa');

  // tablicaWynikowa -> [

  //    {id: 0, name: "Eve", avr: 3.14},

  //    {id: 1, name: "Eve2", avr: 3.14},

  // ]
  //zadanie 3
  const fibonacci = (number) => {
    if (number === 0) {
      return 0;
    } else if (number === 1) {
      return 1;
    } else {
      return fibonacci(number - 1) + fibonacci(number - 2);
    }
  };
  console.log(fibonacci(10));

  // ZADANIE 4

  const sumOfParams = (...args) => {
    return args.reduce((acc, curr) => {
      if (typeof acc !== 'number') return 'Złe wejście';

      return acc + curr;
    }, 0);
  };

  console.log(sumOfParams(10, 1, 1, '15', 23), 'sumOfParams(10)');

  // Zadanie 5
  const outerFunction = (param) => {
    return () => {
      return (str) => {
        return param + str;
      };
    };
  };

  console.log(outerFunction('Hello')()('World'), 'outerFunction(10)');

  // Zadanie 6
  const calculateWithChar = (operator) => {
    return (val1, val2) => {
      if (typeof val1 !== 'number' || typeof val2 !== 'number')
        return 'Złe wejście';

      switch (operator) {
        case '+':
          return val1 + val2;

        case '-':
          return val1 - val2;

        case '/':
          return val1 / val2;

        case '*':
          return val1 * val2;

        case '%':
          return val1 % val2;

        default:
          return 'Zły znak';
      }
    };
  };
  console.log(calculateWithChar('+')(1, 2), 'calculatedWitchChar()');
  console.log(calculateWithChar('-')(1, 'abc'), 'calculatedWitchChar()');
  console.log(calculateWithChar('/')('abc', 2), 'calculatedWitchChar()');
  console.log(calculateWithChar('*')(1, 2), 'calculatedWitchChar()');

  return (
    <div>
      <h1>ExerciseJsFunctions</h1>
      <h2>Ćw sortImmute</h2>
      <p>
        napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i
        zwraca ją posortowana funkcja ma nie zmieniać pierwotnej tablicy
      </p>
    </div>
  );
};
