import React, { useEffect, useState } from 'react';
import { getProfile } from '../services/profileService'

const profileContext = React.createContext()

const ProfileProvider = (props) => {
    const [profile, setProfile] = useState();

    useEffect(() => {
        getProfile().then(response => {
            setProfile(response.data.data)
        })
    }, []);

    return (
        <profileContext.Provider
        value={{
            profile,
            setProfile            
        }}
        >
            {props.children}
        </profileContext.Provider>
    )
}

export { profileContext, ProfileProvider }
