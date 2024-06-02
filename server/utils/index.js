exports.makeUser = (user) => {
    delete user.password;
    return user;
}