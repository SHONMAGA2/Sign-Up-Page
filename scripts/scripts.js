const form = document.getElementById('sign_up_form');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const user_name = formData.get('name');
    const user_email = formData.get('email');
    const user_password = formData.get('password');
    const confirm_password = formData.get('confirm_password');

    // Check if passwords match
    if (user_password !== confirm_password) {
        alert("Passwords do not match!");
        return; // Stop form submission
    }

    try {
        const response = await fetch("https://8cfe057e-f218-49e2-a3f0-6fbef0471e31-00-2u2eeiqy75xzi.riker.replit.dev/signUp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: user_name,
                email: user_email,
                password: user_password
            })
        });

        if (!response.ok) {
            throw new Error("Server responded with status " + response.status);
        }

        const data = await response.json();
        console.log("Success:", data);
        alert("Registration successful!");

        form.reset(); // Optional: clear the form

    } catch (error) {
        console.error("Fetch error:", error);
        alert("Error: " + error.message);
    }
});
