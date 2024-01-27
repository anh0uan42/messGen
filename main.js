let noun = ['You', 'Your family', 'Your group'];
let verb = ['are', 'will', 'was'];
let adjective = ['wonderful', 'enjoying the day', 'busting asses working'];
const messGen = (nounArr, verbArr, adjArr) => {
    let mess = []
    mess.push(nounArr[Math.floor(Math.random()*nounArr.length)])
    mess.push(verbArr[Math.floor(Math.random()*verbArr.length)])
    mess.push(adjArr[Math.floor(Math.random()*adjArr.length)])
    return mess.join(' ');
}
console.log(messGen(noun, verb,adjective))