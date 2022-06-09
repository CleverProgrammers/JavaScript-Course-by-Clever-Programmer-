class Bank {
  constructor(balance) {
    this.balance = balance
  }
  
  withdraw(amount) {
    // guard clause
    if (this.balance - amount <= 0) {
      console.log('❌ You cannot withdraw more than what you have!')
      console.log({balance: this.balance})
      return
    }
    
    this.balance -= amount
    console.log('withdrew', `$${amount}`)
    console.log({balance: this.balance})
  }

  deposit(amount) {
    this.balance += amount
    console.log('deposited', `$${amount}`)
    console.log({balance: this.balance})
  }
}

const qaziChecking = new Bank(0)
// console.log(qaziChecking.balance)
// qaziChecking.deposit(10000)
// qaziChecking.deposit(10000)
// qaziChecking.deposit(10000)
// qaziChecking.withdraw(1000)
// qaziChecking.withdraw(20000)
// qaziChecking.withdraw(5000)
// qaziChecking.withdraw(5000)

const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const amountInput = document.getElementById('amount')
const balanceDiv = document.getElementById('balance')

depositButton.onclick = () => {
  const amount = Number(amountInput.value)
  qaziChecking.deposit(amount)
  balanceDiv.innerText = `Balance: ${qaziChecking.balance}`
}

withdrawButton.onclick = () => {
  const amount = Number(amountInput.value)
  qaziChecking.withdraw(amount)
  balanceDiv.innerText = `Balance: ${qaziChecking.balance}`
}