const{palindrome} = require("./for_testing")

test("palindrome of mydev", ()=>{
    const result = palindrome("midudev")
    expect(result).toBe("vedudim")
})

test("palyndrome of empty string", ()=>{
    const result = palindrome("")
    expect(result).toBe("")
})