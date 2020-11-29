// Создание типов
const str: string = 'Hello'

console.log(str)

const num: number = 34

const vari: boolean = true

const cont: [string, number] = ['HI', 23]

function setSet(name: string): void {
  console.log(name)
}

type ID = string | number

const id: ID = 4444

const copeId: ID = '3423514'

function setFam(fam: string):never {
  while (true) {
    let i = 1
  }
}

// Интерфейсы

interface Reac {
  id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect: Reac = {
  id: '123412',
  size: {
    width: 55,
    height: 55
  },
  color: '#fff'
}

// Enum позволяет лучше структурировать код