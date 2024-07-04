document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Define hardcoded credentials
      const adminUsername = "admin";
      const adminPassword = "admin123";
  
      // Retrieve user input
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Validate credentials
      if (username === adminUsername && password === adminPassword) {
          // Redirect to admin dashboard or any other admin page
          window.location.href = "../Admin/Admin_panel.html";
      } else {
          // Display error message
          const errorMessage = document.getElementById("error-message");
          errorMessage.textContent = "Invalid username or password. Please try again.";
      }
  });
  