getDay(5, 24); // SUN

function getDay(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
  let str = `2020-${a}-${b}`;
  let date = new Date(str);
  let index = date.getDay();
    
  return week[index];
}
