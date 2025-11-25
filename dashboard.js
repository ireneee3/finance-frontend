// Dashboard page functionality

function highlightActiveNav() {
  // Implementation for highlighting active navigation
}

function isUserLoggedIn() {
  // Implementation to check if user is logged in
  return false // Placeholder implementation
}

function getLoggedInUser() {
  // Implementation to get the logged-in user's email
  return "" // Placeholder implementation
}

function getUser(email) {
  // Implementation to fetch user data
  return {
    budget: 100000,
    spent: 50000,
    transactions: [
      { amount: 20000, description: "Groceries" },
      { amount: 30000, description: "Utilities" },
    ],
  } // Placeholder implementation
}

function logout() {
  // Implementation for logout functionality
  window.location.href = "login.html" // Placeholder implementation
}

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav()

  if (!isUserLoggedIn()) {
    alert("Please login first")
    window.location.href = "login.html"
    return
  }

  const loggedInEmail = getLoggedInUser()
  const userData = getUser(loggedInEmail)

  updateDashboard(userData)

  addLogoutButton()
})

function updateDashboard(userData) {
  const cards = document.querySelectorAll(".card")

  if (cards.length >= 1) {
    const budgetCard = cards[0]
    const remaining = userData.budget - userData.spent
    budgetCard.innerHTML = `
      <h2>Budget Overview</h2>
      <p>Total Budget: KES ${userData.budget.toLocaleString()}</p>
      <p>Spent: KES ${userData.spent.toLocaleString()}</p>
      <p>Remaining: KES ${remaining.toLocaleString()}</p>
    `
  }

  if (cards.length >= 2) {
    const transactionsCard = cards[1]
    let transactionsList = userData.transactions
      .map((t) => `<p>• KES ${t.amount.toLocaleString()} - ${t.description}</p>`)
      .join("")

    if (transactionsList === "") {
      transactionsList = "<p>No transactions yet</p>"
    }

    transactionsCard.innerHTML = `
      <h2>Recent Transactions</h2>
      ${transactionsList}
    `
  }

  if (cards.length >= 3) {
    const savingsCard = cards[2]
    const savingsPercentage =
      userData.budget > 0 ? Math.round(((userData.budget - userData.spent) / userData.budget) * 100) : 0
    savingsCard.innerHTML = `
      <h2>Savings Progress</h2>
      <p>You have saved ${savingsPercentage}% of your budget.</p>
    `
  }
}

function addLogoutButton() {
  const main = document.querySelector(".main")
  const logoutBtn = document.createElement("button")
  logoutBtn.textContent = "Logout"
  logoutBtn.style.cssText =
    "margin-top: 20px; width: 150px; padding: 10px; background: #ff4444; cursor: pointer; border-radius: 8px; border: none;"
  logoutBtn.addEventListener("click", logout)
  main.appendChild(logoutBtn)
}
