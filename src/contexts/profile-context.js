import React, {useContext, useState} from "react";
import axios from "axios";

const ProfileContext = React.createContext()

const api = axios.create({withCredentials: true})

export const ProfileProvider = ({children}) => {
    const [profile, setProfile]
        = useState()

    // registering as a new user
    const register = async (isAdmin, isWatcher, isCreator, email, username, password) => {
        try { // TODO: move this to service
            const response = await api
                .post("http://localhost:4000/api/register",
                    { isAdmin, isWatcher, isCreator, email, username, password })
            setProfile(response.data)
        } catch (e) { throw e }
    }

    // signing in as an existing user
    const signin = async (username, password) => {
        try {
            const response = await api
                .post("http://localhost:4000/api/login",
                    {username, password})
            setProfile(response.data)
        } catch (e) {
            throw e
        }
    }

    // logout from current user profile
    const signout = async () => {
        const response = await api
            .post("http://localhost:4000/api/logout")
        setProfile(null)
    }




    const checkLoggedIn = async () => {
        try {
            const response = await api
                .post("http://localhost:4000/api/profile")
            setProfile(response.data)
            return response.data
        } catch (e) {
            throw e
        }
    }





    const value = {signout, signin, profile, register, checkLoggedIn}
    return(
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    return useContext(ProfileContext)
}