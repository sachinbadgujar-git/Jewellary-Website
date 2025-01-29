const wrapper=document.querySelector('.wrapper');
const registerLink=document.querySelector('.register-link');
const loginLink=document.querySelector('.login-link');

registerLink.onclick =() =>{
    wrapper.classList.add('active');
}

loginLink.onclick=()=>{
    wrapper.classList.remove('active');
}

document.getElementById('register-form').onsubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Collect input data using getElementById
    const username = document.getElementById('register-username').value;
    const mobile = document.getElementById('register-mobile').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    try {
        // API call for registration
        const response = await fetch('http://localhost:8087/add-user', {
            method: 'POST', // Use POST for sending data
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, mobile, email, password }) // Data to send
        });

        const data = await response.json(); // Parse JSON response
        if (response.ok) {
            alert('Registration successful!');
            console.log(data); // Handle success (e.g., save tokens, redirect)
        } else {
            alert(data.message || 'Registration failed!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
};

//Login button apis 


