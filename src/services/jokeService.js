
export const AddJoke = async(input)=>{ 
    const userInput = {text: input, told: false}
    const postOptions = {
        method: "POST", //POST means to create
        headers: { // make the key a string bc the key name has a dash in it so surround with quotes
            "Content-Type": "application/json"
        },
         body: JSON.stringify(userInput)
        }
    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/jokes", postOptions)
}