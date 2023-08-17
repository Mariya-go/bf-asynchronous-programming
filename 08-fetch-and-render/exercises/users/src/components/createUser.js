const createUser = (userData) => {
    const container = document.createElement('div');
    container.id = 'userContainer'
    
    const h1 = document.createElement('h1');
    h1.innerHTML = userData.username
    h1.id = 'h1';

    const name = document.createElement('p');
    name.innerHTML = userData.name;
    name.id = 'name';

    const email = document.createElement('p');
    email.innerHTML = userData.email;
    email.id = 'email';

    const website = document.createElement('p');
    website.innerHTML = `<a href='https://${userData.website}' target="_blank">${userData.website}</a>`;
    website.id = 'website'

    container.append(h1, name, email, website);

    return container;
}

export default createUser;