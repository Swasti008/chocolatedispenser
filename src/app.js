var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color
function addChocolates(chocolates, color, count) {
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      chocolates.unshift(color);
    }
  } else {
    return 'Number cannot be zero/negative';
  }
}

//Progression 2: Remove z chocolates from the top the dispenser
function removeChocolates(chocolates, count) {
  if (count <= 0) {
    return 'Number cannot be zero/negative';
  }
  if (chocolates.length < count) {
    return 'Insufficient chocolates in the dispenser';
  }
  removeChoco = [];

  while (count > 0) {
    removeChoco.push(chocolates.shift());
    count--;
  }
  console.log(removeChoco);
  return removeChoco;
}

//Progression 3: Dispense z chocolates
function dispenseChocolates(chocolates, count) {
  if (count <= 0) {
    return 'Number cannot be zero/negative';
  }
  if (chocolates.length < count) {
    return 'Insufficient chocolates in the dispenser';
  }
  dispenseChoco = [];

  while (count > 0) {
    dispenseChoco.push(chocolates.pop());
    count--;
  }
  return dispenseChoco;
}

//Progression 4: Dispense z chocolates of x color
function dispenseChocolatesOfColor(chocolates, count) {
  return dispenseChocolates(chocolates, count);
}
//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
let checkColor = function (chocolates) {
  let answer = [];
  let chocoColor = [
    'green',
    'silver',
    'blue',
    'crimson',
    'purple',
    'red',
    'pink',
  ];
  chocoColor.forEach((choco) => {
    let count = 0;
    chocolates.forEach((chocolate) => {
      if (chocolate == choco) {
        count++;
      }
    });
    if (count > 0) {
      answer.push(count);
    }
  });
  return answer;
};
function noOfChocolates(chocolates) {
  return checkColor(chocolates);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
  return chocolateSort(chocolates);
}

function chocolateSort(chocolates) {
  chocolates.sort();
  let answer = [];
  let chocolateNum = {};
  let FinalColors = {};

  chocolates.forEach((color) => {
    chocolateNum[color] = color in chocolateNum ? chocolateNum[color] + 1 : 1;
  });

  let KeysInDecen = Object.keys(chocolateNum).sort(
    (a, b) => chocolateNum[b] - chocolateNum[a]
  );

  KeysInDecen.forEach((color) => {
    FinalColors[color] = chocolateNum[color];
  });

  Object.keys(FinalColors).forEach((color) => {
    for (let i = 0; i < FinalColors[color]; i++) {
      answer.push(color);
    }
  });

  return answer;
}

//Progression 7: Change z chocolates of x color to y color
function changeChocolateColor(chocolates, number, color, finalColor) {
  return number <= 0
    ? 'Number cannot be zero/negative'
    : color == finalColor
    ? "Can't replace the same chocolates"
    : checkConditions(chocolates, number, color, finalColor);
}
function checkConditions(chocolates, number, color, finalColor) {
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      chocolates[i] = finalColor;
    }
  }
  return chocolates;
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
  let count = 0;
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      chocolates[i] = finalColor;
    }
  }
  chocolates.forEach((color) => {
    color == finalColor ? (count += 1) : (count += 0);
  });
  console.log(count);
  return color != finalColor
    ? [count, chocolates]
    : "Can't replace the same chocolates";
}

//Challenge 1: Remove one chocolate of x color from the top
function removeChocolateOfColor(chocolates, color) {
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      index = i;
      break;
    }
  }
  chocolates.splice(index, 1);
  return chocolates;
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(chocolates) {
  let storedColor = {};

  chocolates.forEach((color) => {
    if (color in storedColor) {
      storedColor[color] += 1;
    } else {
      storedColor[color] = 1;
    }
  });

  let chocoCount = Object.values(storedColor);
  let rainbowChocolates = 0;
  chocoCount.forEach((counter) => {
    if (counter % 3 == 0) {
      rainbowChocolates += counter / 3;
    }
  });
  console.log(rainbowChocolates);
  return rainbowChocolates;
}
