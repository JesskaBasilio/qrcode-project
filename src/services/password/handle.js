import permitedCharacters from "./utils/permited-characters";


async function handle() {
    let characters = [];
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGTH;
    characters = await permitedCharacters();

    for(let i=0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
    return password;
}

export default handle;