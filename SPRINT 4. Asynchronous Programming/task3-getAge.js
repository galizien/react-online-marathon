const { getUser, getUserProfile } = require('./Helper.js');

async function getAge() {
    const user = await getUser();
    const userProfile = await getUserProfile(user.id);
    return userProfile.age;
}
