document.getElementById('registerForm').addEventListener('submit', registerUser);
document.getElementById('login-form').addEventListener('submit', loginUser);

function registerUser(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const userData = {
    username,
    email,
    password
  };

  console.log(userData)

  fetch('https://localhost:5000/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);

    })
    .catch(error => {
      console.error('Error:', error);

    });
}

function loginUser(event) {
    event.preventDefault();
  
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    const loginData = {
      email,
      password
    };

    console.log(loginData)
  
    fetch('https://main.d21aidivw4ryh2.amplifyapp.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        console.log('Login Response:', data);
        
        if (data.message === 'Login successful') {
          window.location.href = '/dashboard';
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
        console.log("rammer vi ")
      });
  }
  


/*   function testConnection(){
    fetch('https://main.d21aidivw4ryh2.amplifyapp.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        console.log(data.message);
      })
  }

  testConnection(); */