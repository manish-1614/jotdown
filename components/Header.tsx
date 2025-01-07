'use client'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs"

function Header() {
    const { user } = useUser();

  return (
    <div className="flex justify-between items-center p-4">
        { user && 
            <div>
                <p>{user?.firstName}{`'s`} Space</p>
            </div>
        }

        {/* breadcrumbs  */}
        <div>
            <SignedOut>
                <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </div>
  )
}
export default Header