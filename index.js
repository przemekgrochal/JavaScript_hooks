// Sortowanie tablicy ze sprawdzeniem wielkości liter
const array = [99,13, 18, 100, 66, 45,2.45,1,1.11,2.12,0, 'ania', 23.45, 'Zygmunt', -1, 'Beata', 'diana', 'Celina'];

const check = (item) => {
  if(typeof item === 'string') {
    let firstLetter = item.charAt(0).toUpperCase();
    let cutString = item.substring(1);
    return firstLetter + cutString;
  } 
  
  return item;
}

const newArray = array.map(item => {
	return check(item);
})

console.log(newArray.sort((a, b) => a - b));
