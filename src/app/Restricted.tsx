'use client'
import { useIsAuth } from "./login/useIsAuth"

export const Restricted = ({ children }: {children: React.ReactNode}) => {
    const { isAuth } = useIsAuth();

    return isAuth ? children : null
}