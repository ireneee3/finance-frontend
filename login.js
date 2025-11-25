// Login page functionality

document.addEventListener("DOMContentLoaded", () => {
  const highlightActiveNav = () => {
    // Implementation for highlighting active navigation
  }

  highlightActiveNav()

  const form = document.querySelector("form")
  const emailInput = document.querySelector('input[type="email"]')
  const passwordInput = document.querySelector('input[type="password"]')

  const validateEmail = (email) => {
    // Implementation for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const getUser = (email) => {
    // Implementation for fetching user data
    // This is a placeholder implementation
    const users = {
      "user@example.com": { password: "password123" },
    }
    return users[email]
  }

  const saveUser = (email, userData) => {
    // Implementation for saving user data
    // This is a placeholder implementation
    localStorage.setItem("user", JSON.stringify(userData))
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = emailInput.value.trim()
    const password = passwordInput.value

    if (!email || !password) {
      alert("Please fill in all fields")
      return
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email")
      return
    }

    const userData = getUser(email)
    if (!userData) {
      alert("User not found. Please register first.")
      return
    }

    if (userData.password !== password) {
      alert("Incorrect password")
      return
    }

    saveUser(email, userData)
    alert("Login successful!")
    window.location.href = "dashboard.html"
  })
})
