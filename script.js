const guessNumBot = () => { function res () {
  let randomNum = parseInt(Math.random() * 100)
  let userNum = prompt('Угадай число от 1 до 100')


  if (isNaN(userNum) || userNum === '') {
     alert('Введи число!')
     res()
  }

  if (userNum === null) {
    alert('Игра окончена')
  }
  

  if (userNum === randomNum) {
    alert('Поздравляю, Вы угадали!!!')
  
  }  else if (userNum > randomNum) {
    alert('Загаданное число меньше')
    res()

  } else if (userNum < randomNum && userNum !== null && userNum !== '') {
    alert('Загаданное число больше')
    res()

  } 

}
  

  return res
}

let guessBot = guessNumBot()

guessBot()