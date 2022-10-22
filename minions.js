const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

  //forEach
// First, he wants to test out forEachto check who's present. So as he goes down the array of minions, they should console.logthat they're here.
// ### map
// They're all here -- great! But Gru has noticed something off about the array of minions: their names aren't capitalized. He might be a mob boss, but he does care about correct grammar! So let's go ahead and fix that for him using the mapmethod.
// Using the mapmethod, capitalize each minion's name EXCEPT kevin's because he was being sneaky and save it to a new array called capitalizedMinions
 
  const forEachMinions= (arr)=>{
    arr.forEach((element,index)=>{
      console.log(element)
    })  
  }
  forEachMinions(minions)
  
 // map
// const capitalizedMinions = (arr)=>{
//   let names=arr.map((element, index)=>{
//     if (element !=="kevin") {
//       console.log(element[0].toUpperCase()+element.slice(1))      
//     }else if(element ==="kevin") {
//       console.log("kevin")
//     }
// })
// return names
// }
let capitalizedMinions = minions.map((element,index) => {
  if (element !== "kevin") {
      return element.charAt(0).toUpperCase() + element.slice(1)
  } else {
      return element
  }
})
console.log(capitalizedMinions)

//filter
// Uh oh! Not every minion was capitalized. Gru's not feeling too happy about that, so now he wants to test out the filtermethod to filter out the sneaky minion who didn't get capitalized.
// Use filterto filter out minions that are not capitalized and save the correctly capitalized minions to an array called actuallyCapitalizedMinions
// Use everyagain, but this time on your new actuallyCapitalizedMinionsarray, to check if they're all capitalized now

const actuallyCapitalizedMinions = capitalizedMinions.filter((element, index)=>{ 
  
  return element !=="kevin"
})
console.log(actuallyCapitalizedMinions)


  //every
//   In order to check whether or not that previous map worked, Gru wants to try using the everymethod instead. So, using every, check whether or not every minion in capitalizedMinionsare actually capitalized.
// Create a function called isCapitalizedthat accepts a minion as an argument and checks whether or not the first letter of the minion's name is capitalized
// Now using both the everymethod and the isCapitalizedmethod you just wrote, check whether or not all the capitalizedMinionsare capitalized

 let isCapitalized = capitalizedMinions.every((element,index)=>{element[0]===element[0].toUpperCase()})
 console.log(isCapitalized)

// find
// Great! We filtered out the non-capitalized minion, but while we know it was kevin, Gru didn't know that. So, he wants to find out which minion escaped his map earlier by testing out the findmethod.

// Using find, find which minion is not correctly capitalized in the original capitalizedMinionsarray and save it to a variable called uncapitalizedMinion, then console log it
const uncapitalizedMinion = capitalizedMinions.find((element, index)=>{
  return element.charAt(0)!==element.charAt(0).toUpperCase()
})
  console.log(uncapitalizedMinion)


// findIndex
// Aha! Now that Gru's found out which minion escaped him, he wants to find out what index in the original array he was at so he can fix him up later.
// Using findIndex, find what index kevin is in the original capitalizedMinionsarray
// Now that he's found him, he can just use capitalizedMinions[1]to select kevin and capitalize his name.
// Once that's done, check again using everywhether or not capitalizedMinionsis all capitalized correctly
const kevinIndex = minions.findIndex((element,index)=>{
  return element ==="kevin"
})
console.log(kevinIndex)
// Capitalize Kevin
capitalizedMinions[1]= capitalizedMinions[1][0].toUpperCase() + capitalizedMinions[1].slice(1)
console.log(capitalizedMinions[1])
console.log(capitalizedMinions)
// check and see if all are capitalized
console.log(isCapitalized)

// reduce
// Sweet! Now that that's all sorted, Gru can just have some fun testing out the remaining array methods he wanted to learn, starting with reduce. Out of curiority, he wants to know what the sum of all his minions' name lengths is. Use reduceto find out
// First, using mapcreate a separate array called minionNameLengthsthat maps out the minions' name lengths
// Use reduceto sum up the minionNameLengthsarray
const minionNameLengths = minions.map((element, index)=>{
  return element.length
})

console.log(minionNameLengths)

const sum= minionNameLengths.reduce((a, b) => 
{
  return a+b},0)
  console.log(sum)



// some
// Now Gru wants to test out the somemethod, so let's go ahead and do that a few times.

// Check whether or not some of the minion's name lengths are 6 or above. How about 7 or above?
// Lowercase Kevin's name again inside of the capitalizedMinionsarray, then check whether or not some of the minion's names are capitalized using some. How about it any are lowercased?

const six = minions.some((element)=> {
  return element.length>=6
})
console.log(six)

const seven = minions.some((element)=>{
  return element.length>=7})
console.log(seven)


capitalizedMinions[1]= capitalizedMinions[1][0].toLowerCase() + capitalizedMinions[1].slice(1)
console.log(capitalizedMinions[1])
const upperCase = capitalizedMinions.some((element)=>{
  return element[0]===element[0].toUpperCase})
console.log(upperCase)
const lowerCase = capitalizedMinions.some((element)=>{
  return element[0]===element[0].toLowerCase})
console.log(lowerCase)

// sort
// Great, now Gru has had some practice with array methods that require callbacks. Now it's time to do some bad guy stuff. Before he can do so by sending his minions out to do his bidding, he wants to sort them in ascending order of their name lengths. Because why not?
// Use sortto order the minions within the capitalizedMinionsarray by order of name length.
// Hints: you'll need to write your own compareMinionsfunction first to pass in as a callback to sort
const sortNameLength = minions.sort((a,b)=>{
  if (a.minionNameLengths<b.minionNameLengths){
  return -1
} else if (a.minionNameLengths>b.minionNameLengths){
  return 1
}else{
  return 0
}
})
console.log(sortNameLength)

// why is it not sorting????



    
  

  
