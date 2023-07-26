// JS Problem 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generatePass = (length) => {
    if (length < 5) {
        return "Error: Password length should be at least 5 characters.";
    }
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*_+-=<>?";

    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        // console.log(randomIndex);
        password += allChars[randomIndex];
    }
    console.log(password);
    return password;
}
generatePass(6);
