const joinList2 = (list) => {
  if (list.length === 0)
    return '';
  let newList = list.reduce((str, item) => str += `${item}, `, '');
  return newList.substring(0, newList.length - 2);
  // return newList.slice(0, -1);
};