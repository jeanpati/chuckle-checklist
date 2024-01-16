

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

export const getAllJokes = () => {
    return fetch (`http://localhost:8088/jokes`).then((res) => res.json())
}

export const EditJoke =  async(joke) => {
    const putOptions = {
        method: "PUT", 
        headers: { // make the key a string bc the key name has a dash in it so surround with quotes
            "Content-Type": "application/json"
        },
        credentials: "include",
         body: JSON.stringify(joke)
        }
    // Send the transient state to your API
    return await fetch(`http://localhost:8088/jokes/${joke.id}`, putOptions).then((res) => res.json())
}

export const DeleteJoke =  async(joke) => {
    const deleteOptions = {
        method: "DELETE"
        }
    // Send the transient state to your API
    return await fetch(`http://localhost:8088/jokes/${joke.id}`, deleteOptions).then((res) => res.json())
}
