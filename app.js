import { createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`)

  rl.close()
})
// const answer = await rl.question('What is your favorite food? ')
// console.log(`Oh, so your favorite food is ${answer}`)
