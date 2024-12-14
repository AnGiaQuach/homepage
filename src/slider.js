let listOfBoxartImg = [];
const NUM_OF_IMG = 13;
const NUM_OF_BLOCK = 6;

function getLeftBoxartList(currentLeftMostIndex, numOfList) {
  if (numOfList > NUM_OF_IMG) {
    console.log("NOT VALID NumOfList");
  }

  let result = [];
  let i = currentLeftMostIndex - 1;
  let count = 0;

  while (count < numOfList) {
    if (i < 1) {
      i = NUM_OF_IMG;
    }
    result.push(`asset/img_0${i}`);
    count++;
    i--;
  }
  result.reverse();

  return result;
}

function getRightBoxartList(currentRightMostIndex, numOfList) {
  if (numOfList > NUM_OF_IMG) {
    console.log("NOT VALID NumOfList");
  }

  let result = [];
  let i = currentRightMostIndex + 1;
  let count = 0;
  while (count < numOfList) {
    if (i > NUM_OF_IMG) {
      i = 1;
    }
    result.push(`asset/img_0${i}`);
    count++;
    i++;
  }
  return result;
}

function sliceLeftList(listOfBoxart, count) {
  let res = listOfBoxart.slice(0, count);
  return res;
}

function sliceRightList(listOfBoxart, count) {
  let res = listOfBoxart.slice(
    listOfBoxart.length - count,
    listOfBoxart.length
  );
  return res;
}
function parseImgId(str) {
  let i = 11;
  let s = "";
  while (i < str.length) {
    s += str[i];
    i++;
  }
  return Number(s);
}

function addLeft(listOfBoxart, count) {
  let leftMostIndex = parseImgId(listOfBoxart[0]);
  let newArray = getLeftBoxartList(leftMostIndex, count);

  listOfBoxart = sliceLeftList([...newArray, ...listOfBoxart], count + 1);

  return listOfBoxart;
}

function addRight(listOfBoxart, count) {
  let rightMostIndex = parseImgId(listOfBoxart[listOfBoxart.length - 1]);
  let newArray = getRightBoxartList(rightMostIndex, count);
  listOfBoxart = sliceRightList(listOfBoxart.concat(newArray), count + 1);

  return listOfBoxart;
}

export { addLeft, addRight };
