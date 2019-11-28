const nameInverter = function(name) {

  if(typeof name === 'undefined') throw 'error'

  name = name.trim();
  const nameSplit = name.split(' ');

  if (name === '') return '';

  if (nameSplit.join('').length === name.length){

    if (nameSplit[0].includes('.')) return ''
    return name; 

  } else if(nameSplit.length === 2){
  
    if (nameSplit[0].includes('.')) return name
    
    const [first, last] = nameSplit
    return `${last}, ${first}`;
  
  } else if(nameSplit.length === 3){
  
    if (nameSplit[0].includes('.')){
      const [title, first, last] = nameSplit
      return `${title} ${last}, ${first}`;
    }
  }
}

module.exports = nameInverter;