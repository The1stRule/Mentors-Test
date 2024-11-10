
const form = document.getElementById('myForm');
const users = JSON.parse(localStorage.getItem('users'));

const formSubmit = () => {
    const email = form.email.value;
    const password = form.pass.value;

    if(email === '' || password === '') {
        alert('Please fill out all filds');
        return;
    }

    if(!signIn(email, password)) {
        alert('Incorrect email or password')
        return;
    } else {
        alert('Login successful!');
        form.reset();
        window.location.href = 'index.html';
    }
}

const signIn = (email, password) => {
    for(const user of users) {
        if(user.email == email && user.password === password) {
            return true;
        }
    }
    return false;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    formSubmit();
})