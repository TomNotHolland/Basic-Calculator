const HubOne = document.querySelector('.hub-1')
const HubTwo = document.querySelector('.hub-2')
const TempResult = document.querySelector('.temp-result')
const Numbers = document.querySelectorAll('.number, .dot')
const Operators = document.querySelectorAll('.operator')
const Result = document.querySelector('.result')
const ClearAll = document.querySelector('.clear-all')
const ClearLast = document.querySelector('.clear-last')

let ShowOneDigit = ''
let ShowTwoDigit = ''
let ResultEqualsTo = null
let LastOperation = ''
let Dot = false

Numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !Dot) {
            Dot = true
        } else if (e.target.innerText === '.' && Dot) {
            return
        }
        ShowTwoDigit += e.target.innerText
        HubTwo.innerText = ShowTwoDigit
    })
})

Operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (!ShowTwoDigit) ResultEqualsTo
        Dot = false
        const OperationName = e.target.innerText
        if (ShowOneDigit && ShowTwoDigit && LastOperation) {
            MathOperation()
        } else {
            ResultEqualsTo = parseFloat(ShowTwoDigit)
        }
        Wipe(OperationName)
        LastOperation = OperationName
        console.log(ResultEqualsTo)
    })
})

function Wipe (Name = '') {
    ShowOneDigit += ShowTwoDigit + ' ' + Name + ' '
    HubOne.innerText = ShowOneDigit
    HubTwo.innerText = ''
    ShowTwoDigit = ''
    TempResult.innerText = ResultEqualsTo
}

function MathOperation() {
    if (LastOperation === '×') {
        ResultEqualsTo = parseFloat(ResultEqualsTo) * parseFloat(ShowTwoDigit)
    } else if (LastOperation === '+') {
        ResultEqualsTo = parseFloat(ResultEqualsTo) + parseFloat(ShowTwoDigit)
    } else if (LastOperation === '-') {
        ResultEqualsTo = parseFloat(ResultEqualsTo) - parseFloat(ShowTwoDigit)
    } else if (LastOperation === '÷') {
        ResultEqualsTo = parseFloat(ResultEqualsTo) / parseFloat(ShowTwoDigit)
    } else if (LastOperation === '%') {
        ResultEqualsTo = parseFloat(ResultEqualsTo) % parseFloat(ShowTwoDigit)
    }
}

Result.addEventListener('click', (e) => {
    if (!ShowOneDigit || !ShowTwoDigit) return
    Dot = false
    MathOperation()
    Wipe()
    HubTwo.innerText = ResultEqualsTo
    TempResult.innerText = ''
    ShowTwoDigit = ResultEqualsTo
    ShowOneDigit = ''
})

ClearAll.addEventListener('click', (e) => {
    HubOne.innerText = '0'
    HubTwo.innerText = '0'
    ShowOneDigit = ''
    ShowTwoDigit = ''
    ResultEqualsTo = ''
    TempResult.innerText = '0'
})

ClearLast.addEventListener('click', (e) => {
    ShowTwoDigit = ''
    HubTwo.innerText = ''
})

window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ) {
        PressingTheKey(e.key)
    } else if (
        e.key === '+' ||
        e.key === '-' ||
        e.key === '%' ||
        e.key === '=') {
            PressingOperators(e.key)
        } else if (e.key === '*') {
            PressingOperators('×')
        } else if (e.key === '/') {
            PressingOperators('÷')
        } else if (e.key == 'Enter' || e.key =='Return' || e.key === '=') {
            ResultKey()
        } else if (e.key === 'Escape' || e.key === 'Delete') {
            ClearAllKey()
        } else if (e.key === 'Backspace') {
            ClearLastKey()
        }
})

function PressingTheKey(key) {
    Numbers.forEach(numbers => {
        if (numbers.innerText === key) {
            numbers.click()
        }
    })
}

function PressingOperators(key) {
    Operators.forEach(operator => {
        if (operator.innerText === key) {
            operator.click()
        }
    })
}

function ResultKey () {
    Result.click()
}

function ClearAllKey() {
    ClearAll.click()
}

function ClearLastKey(params) {
    ClearLast.click()
}