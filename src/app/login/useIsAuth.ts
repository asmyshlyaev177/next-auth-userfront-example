'use client'
import React from 'react'
import Userfront from "@userfront/core";

Userfront.init(process.env.NEXT_PUBLIC_USERFRONT_TENANT_ID ?? "");

export const useIsAuth = () => {
    const isAuth = !!Userfront.tokens.accessToken
    const mounted = useIsMounted()
    const logout = React.useCallback(() => {
        Userfront.logout({ redirect: '/' }).then(() => {
            window.location.reload()
        })
    }, [])

    return {...Userfront, logout, mounted, isAuth: mounted ? isAuth : false }
}

const useIsMounted = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return mounted
}