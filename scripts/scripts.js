const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
     const formData = new FormData(form);

     const name = formData.get('name');
     const email = formData.get('email');
     const password = formData.get('password');
     console.log('Name:', name);
     console.log('Email:', email);
     console.log('Password:', password);
    
}); 