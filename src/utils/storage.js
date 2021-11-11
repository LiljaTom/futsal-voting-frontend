const saveUser = (user) => {
    window.localStorage.setItem('user', JSON.stringify(user));
};

const loadUser = () => {
    const user = window.localStorage.getItem('user');
    return JSON.parse(user);
};

const logoutUser = () => {
    window.localStorage.removeItem('user');
};

export default {
    saveUser,
    loadUser,
    logoutUser
};