'use client'
import Userfront from "@userfront/core";
import { Button } from "./Button";

Userfront.init(process.env.NEXT_PUBLIC_USERFRONT_TENANT_ID ?? "");

export const LogoutBtn = () => {

    const isAuth = !!Userfront.tokens.accessToken
    console.log({ isAuth }, Userfront)

    if (isAuth) {
        return <Button onClick={() => { Userfront.logout({ redirect: '/'}) }}>Log out</Button>
    }

    return null
}