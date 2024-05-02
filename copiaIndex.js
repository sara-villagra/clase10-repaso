import chalk from 'chalk'
import { createInterface } from 'readline'

//console.log(chalk.blue('Hello world!'))
//console.log(chalk.bgRed.bold('Hello world!'))
const tasks = []

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

const displayMenu = () => {
  console.log('menu tarea')
  console.log('1. agregar a task')
  console.log('2. Lista all tasks')
  console.log('3. completar a task')
  console.log('0. salir')
}

const addTask = () => {
  rl.question('Ingrese la tarea: ', (task) => {
    tasks.push({ tarea: task, completed: false })
    console.log(tasks)
    console.log('la tarea fue ingresada  ')
    displayMenu()
    chooseOption()
  })
}

const listTask = () => {
  console.log(chalk.bold.green('Lista de tareas'))
  tasks.forEach((item, index) => {
    const estado = item.completed ? '✔' : '❌'
    if (item.completed) {
      console.log(chalk.bold.green(`${index + 1}- ${estado}- ${item.tarea}`))
    } else {
      console.log(
        chalk.bold.red(`${index + 1}- estado:${estado}- ${item.tarea}`)
      )
    }
  })
  displayMenu()
  chooseOption()
}
const completeTask = () => {
  rl.question('Ingrese el numero de tarea que completo: ', (numero) => {
    const indiceTarea = parseInt(numero) - 1
    if (indiceTarea >= 0 && indiceTarea < tasks.length) {
      tasks[indiceTarea].completed = true
      console.log(chalk.bold.green('Tarea completada'))
      console.log(tasks)
      console.log(tasks)
    } else {
      console.log(chalk.bold.red('Tarea no encontrada'))
    }
    displayMenu()
    chooseOption()
  })
}
const chooseOption = () => {
  rl.question('Ingrese la opcion : ', (option) => {
    switch (option) {
      case '1':
        console.log(`opcion correcta ${option}`)
        addTask()
        break
      case '2':
        listTask()
        break
      case '3':
        console.log(`opcion correcta ${option}`)
        completeTask()
        break
      case '0':
        console.log(chalk.bold.green('Fin del programa.'))
        rl.close()
      default:
        console.log(`opcion incorrecta ${option}`)
        rl.close()
        break
    }
  })
}
displayMenu()
chooseOption()
