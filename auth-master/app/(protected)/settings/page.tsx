"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { useSession, signOut } from "next-auth/react";

const SettingsPage = () => {

    const user = useCurrentUser();

    const onClick = () => {
        signOut();
    }

    return (
        <div>
            {JSON.stringify(user)}
            <button type="submit" onClick={onClick}>
                Sign out
            </button>
        </div >
    );
}

export default SettingsPage;