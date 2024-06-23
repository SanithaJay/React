import React, { useState } from 'react'

export default function Hooks() {
    const [is_loggedIn, setLoggedIn] = useState(false);
    function handleLoggedIn() {
        setLoggedIn(!is_loggedIn)
    }

    return (
        <>
            <h3>Hooks Login</h3>
            <button onClick={handleLoggedIn}>{is_loggedIn?"LogOut":"LogIn"}</button>
        </>
    )
}
