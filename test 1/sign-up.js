
const form = document.getElementById('form-signin');

const users = [];

function User(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.total = 0;
}

const formSubmit = () => {
    const fullname = form.fullname.value;
    const email = form.email.value;
    const password = form.pass.value;
    const confpass = form.confpass.value;

    const formInfo = [fullname, email, password, confpass];

    for(const value of formInfo) {
        if(value === '') {
            alert('Please fill out all filds');
            return;
        }
    }

    if(password !== confpass) {
        alert('Confirm Password is incorrect');
        return;
    }

    const user = new User(fullname, email, password);
    const previus = JSON.parse(localStorage.getItem('users'));

    const usersArray = [previus, user];

    localStorage.setItem('users', JSON.stringify(usersArray));

    console.log(usersArray);


    form.reset();

    alert('Registration successful, Please log in now!')
    window.location.href = 'login.html'
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    formSubmit();
})