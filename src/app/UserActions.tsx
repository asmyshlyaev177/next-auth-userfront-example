'use client'
import React from 'react'
import Userfront from "@userfront/core";
import Link from 'next/link'
import { Button } from "./Button";
import { useIsAuth } from "./login/useIsAuth";
import { Suspense } from "react";

Userfront.init(process.env.NEXT_PUBLIC_USERFRONT_TENANT_ID ?? "");

export const UserActions = () => {
    const authState = useIsAuth()

    return <div className='flex flex-col gap-4 test1'>
        <Link className="test2" href="/login">Log in</Link>
        <Link href="/signup">Sign up</Link>
        <Suspense>
            {authState.isAuth && <Button onClick={authState.logout}>Log out</Button>}
        </Suspense>
            
    </div>
}