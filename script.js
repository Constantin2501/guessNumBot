const guessNumBot = () => { function res () {
  let randomNum = parseInt(Math.random() * 100)
  let userNum = prompt('Угадай число от 1 до 100')


  if (isNaN(userNum)) {
     confirm('Введи число!')
  }

  if (userNum === null) {
    alert('Игра окончена')
  }
  

  if (userNum === randomNum) {
    alert('Поздравляю, Вы угадали!!!')
  
  }  else if (userNum > randomNum) {
    prompt('Загаданное число меньше')

  } else if (userNum < randomNum && userNum !== null) {
    prompt('Загаданное число больше')

  } 

}
  

  return res
}

let guessBot = guessNumBot()

guessBot()