var userName = 'SimplisticLight'
userName ? console.log(`Hello there ${userName}`) : console.log('Please get a username.')
var userQuestion = 'Are dogs mammals?'
console.log('Look below for a reply (:')
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = ''
switch (randomNumber) {
case 7: console.log('Absolutely!')
break;
case 6: console.log('It may be so...')
break;
case 5: console.log('It is a high probability.')
break
case 4: console.log('Probability disagrees with that.')
break
case 3: console.log('There is no chance of a yes to that.')
break
case 2: console.log('Outlook is looking negative.')
break
case 1: console.log('No no no no no no no no no...')
break
case 0: console.log('Impending doom lurks on us all... Zzzz')
default:
console.log('My vision is blurry, come later please!');
}
