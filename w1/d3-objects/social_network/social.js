const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

const biggestFollower = (data) => {
  let biggest = {
    code: '',
    follows: 0,
  }

  for(let key in data){
    if(data[key].follows.length > biggest.follows){
      biggest.follows = data[key].follows.length;
      biggest.code = key;
    }
  }

  return data[biggest.code].name;
}

// console.log(biggestFollower(data));

const mostPopular = (data) => {
  let followCounter = {}

  for(let key in data){
    data[key].follows.reduce((total, name) => {
      if(!followCounter[name]) followCounter[name] = 0;
      followCounter[name] ++;
      return followCounter;
    }, followCounter)
  }
  let currentPop = 0;
  let mostPop = '';

  for(let key in followCounter){
    if(currentPop < followCounter[key]){
      currentPop = followCounter[key];
      mostPop = key;
    } 
  }

  return data[mostPop].name; 
}

// console.log(mostPopular(data));

// Implement printAll() which outputs a list
// of everyone and for each of them, the names
// of who they follow and who follows them.

const printAll = (data) => {

  // This gives people who follows a specific person

  const followHistory = {
    following: {

    }, 
    follows: {
      
    }
  }

  for(let key in data){
    // Follows person
    data[key].follows.reduce((total, code) => {
      const name = data[code].name;
      if(!followHistory.follows[name]) 
        followHistory.follows[name] = [];
      
        followHistory.follows[name].push(data[key].name);
      
      return followHistory.follows;
    }, followHistory.follows)
    // Person follows
    followHistory.following[data[key].name] = data[key].follows.map(code => data[code].name)
  }

  for(let key in data){
    console.log('-------------------------------------')
    console.log(`${data[key].name} follows:`)
    console.log(followHistory.following[data[key].name])
    console.log(`${data[key].name} is followed by:`)
    console.log(followHistory.follows[data[key].name])
  }
}

// printAll(data);

const unrequitedFollowers = (data) => {
  let unRequitedList = {

  }

  for(let key in data){
    const list = data[key].follows
      .filter(code => !data[code].follows.includes(key))
      .map(code => data[code].name)
    unRequitedList[data[key].name] = list;
  }

  console.log('--------------------------')
  console.log(`unRequitedList List `)
  console.log('--------------------------')
  console.log(unRequitedList)
  console.log('--------------------------')
  
  return unRequitedList;
}

// unrequitedFollowers(data);

const mostFollowsOverThirty = (data) => {
  let currentMostFollows = {
    name: '',
    count: 0,
  }
  for(let key in data){
    console.log(key)
    if(data[key].age > 30 && currentMostFollows.count < data[key].follows.length){
      currentMostFollows.name = data[key].name;
      currentMostFollows.count = data[key].follows.length;
    }
  }
  console.log(currentMostFollows)
}

mostFollowsOverThirty();