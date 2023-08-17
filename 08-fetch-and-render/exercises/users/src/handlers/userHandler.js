import dom from "../dom.js";
import data from "../data.js";
import createUser from "../components/createUser.js";
import getUsers from "../../apis/getUsers.js";

const userHandler = async () => {
// get user id
const inputValue = Number(dom.input.value)

// if user dom exist
const userExist = document.getElementById('userContainer');

// if error dom exist
const errorExist = document.getElementById('errorMessage');

// processing incorrect values
if(inputValue === '' || inputValue < 1 || inputValue > 10 || Number.isNaN(inputValue)){
if (!errorExist) {
    userExist.remove();
    const errorMessage = document.createElement('div');
    errorMessage.innerHTML = 'The number is incorrect. Please enter number from 1 to 10';
    errorMessage.id = 'errorMessage'
    
    dom.root.append(errorMessage);
}

data.id = null;
return;

}

// check if the same user
if (inputValue === data.id){
    return;
}



// get user data
const userData = await getUsers(inputValue);



// render user
if (!userExist){
    if (errorExist){
        errorExist.remove();
    }

    // create user dom
    const userDom = createUser(userData);
    
    dom.root.append(userDom)
} else {
    if (errorExist){
        errorExist.remove();
    }
    // update user dom
        const h1 = document.getElementById('h1');
        h1.innerHTML = userData.username;
    
        const name = document.getElementById('name');
        name.innerHTML = userData.name;
    
        const email = document.getElementById('email');
        email.innerHTML = userData.email;
    
        const website = document.getElementById('website');
        website.innerHTML = `<a href='https://${userData.website}' target="_blank">${userData.website}</a>`;
}
data.id = inputValue;
}

export default userHandler;