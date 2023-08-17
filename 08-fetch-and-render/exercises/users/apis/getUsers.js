const getUsers = async (id) => {
try {
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok){
        throw new Error(`Failed to get users with status: ${res.status}`)
    }

    const users = await res.json();
    return users;

} catch (err) {
    console.error(err);
}
}

export default getUsers;