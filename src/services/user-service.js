import axios from "axios";
const USER_API = 'http://localhost:4000/api/users'

const api = axios.create({
    withCredentials: true
})

export const fetchAllUsers = async () => {
    const response = await api.get(`${USER_API}`)
    return response.data
}

export const getUser = async (userID) => {
    const response = await api.get(`${USER_API}/${userID}`)
    return response.data
}

export const updateFollowers = async (toFollowUser, followingUser) => {
    await api.put(`${USER_API}/${toFollowUser._id}`, {
        ...toFollowUser,
        followers: [...toFollowUser.followers, followingUser]
    })
}

export const updateFollowing = async (toFollowUser, followingUser) => {
    await api.put(`${USER_API}/${followingUser._id}`, {
        ...followingUser,
        following: [...followingUser.following, toFollowUser]
    })
}

export const findFollowers = async (userID) => {
    const response = await api.get(`${USER_API}/${userID}/followers`)
    return response.data
}

export const findFollowing = async (userID) => {
    const response = await api.get(`${USER_API}/${userID}/following`)
    return response.data
}

export const findLiked = async (userID) => {
    const response = await api.get(`${USER_API}/${userID}/liked`)
    return response.data
}

export const findEmail = async (userID) => {
    const response = await api.get(`${USER_API}/${userID}/email`)
    return response.data
}

export const findPassword = async (userID) => {
    const response = await api.get(`${USER_API}/${userID}/password`)
    return response.data
}

export const editEmail = async (profile, email) => {
    await api.put(`${USER_API}/${profile._id}`, {
        ...profile,
        email: email
    })
    return email
}

export const editPassword = async (profile, password) => {
    await api.put(`${USER_API}/${profile._id}`, {
        ...profile,
        password: password
    })
    return password
}

export const addToMyLikes = async (profile, movie) => {
    await api.put(`${USER_API}/${profile._id}`, {
        ...profile,
        likedMovies: [...profile.likedMovies, movie]
    })
}