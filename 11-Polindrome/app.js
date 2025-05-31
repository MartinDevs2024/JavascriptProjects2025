function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    const reversed = cleaned.split("").reverse().join("");
    const result = cleaned === reversed;
    
    console.log(`Original String: ${str}`);
    console.log(`Original String: ${cleaned}`);
    console.log(`Original String: ${reversed}`);

    if(result)
    {
        console.log("It's a palindrome");
    } else {
        console.log("It's not palindrome")
    }
}

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("Hello World");