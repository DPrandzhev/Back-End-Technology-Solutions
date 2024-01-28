function validatePassword(password) {
    let isValid = true;
    let messages = [];

    
    if (password.length < 6 || password.length > 10) {
        isValid = false;
        messages.push("Password must be between 6 and 10 characters");
    }

    
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        isValid = false;
        messages.push("Password must consist only of letters and digits");
    }

    
    if ((password.match(/\d/g) || []).length < 2) {
        isValid = false;
        messages.push("Password must have at least 2 digits");
    }

    return isValid ? "Password is valid" : messages.join('\n');
}

// Example usage:
console.log(validatePassword('logIn'));
console.log(validatePassword('MyPass123'));
console.log(validatePassword('Pa$s$s'));
