import guests from './guests.js'
 
const findPersonWithSameLetter = (list)=>{
    let person = 0
    let nextPerson = 1
    while(nextPerson < list.length){
        const firtsLetter = list[person][0]
        if(list[nextPerson].startsWith(firtsLetter)){
            const couple = []
            couple.push(list.slice(person, nextPerson +1))
            return couple
        }else{
            person++
            nextPerson++
        }
    }
}
console.log(findPersonWithSameLetter(guests))