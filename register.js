// Register page functionality

function highlightActiveNav() {
  // Implementation for highlighting active navigation
}

function validateEmail(email) {
  // Implementation for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validatePassword(password) {
  // Implementation for password validation
  return password.length >= 6
}

function getUser(email) {
  // Implementation for checking if user already exists
  // This is a placeholder implementation
  return false
}

function saveUser(email, user) {
  // Implementation for saving user
  // This is a placeholder implementation
}

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav()

  const form = document.querySelector("form")
  const emailInput = document.querySelector('input[type="email"]')
  const firstNameInput = document.querySelectorAll('input[type="text"]')[0]
  const lastNameInput = document.querySelectorAll('input[type="text"]')[1]
  const passwordInput = document.querySelector('input[type="password"]')
  const genderSelect = document.querySelector("select")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = emailInput.value.trim()
    const firstName = firstNameInput.value.trim()
    const lastName = lastNameInput.value.trim()
    const password = passwordInput.value
    const gender = genderSelect.value

    if (!email || !firstName || !lastName || !password) {
      alert("Please fill in all fields")
      return
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email")
      return
    }

    if (!validatePassword(password)) {
      alert("Password must be at least 6 characters")
      return
    }

    if (getUser(email)) {
      alert("User already exists. Please login instead.")
      return
    }

    const newUser = {
      email,
      firstName,
      lastName,
      password,
      gender,
      createdAt: new Date().toISOString(),
      budget: 20000,
      spent: 0,
      transactions: [],
    }

    saveUser(email, newUser)
    alert("Account created successfully! Redirecting to login...")
    window.location.href = "login.html"
  })
})
