import { useState } from 'react'

export function useStateForm(initialState = false): { showUserForm: boolean, handleShowUserForm: () => void } {
    const [showUserForm, setShowUserForm] = useState(initialState)

    function handleShowUserForm(): void {
        setShowUserForm(!showUserForm)
        console.log(showUserForm)

        // if (showUserForm) {
            // document.body.style.maxHeight = '100vh'
            // document.body.style.overflow = 'hidden'
        // }
    }

    return {
        showUserForm,
        handleShowUserForm
    }
}