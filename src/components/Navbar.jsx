import { useClerk, useUser, UserButton } from "@clerk/react";

// ...

const { openSignIn } = useClerk();
const { isLoaded, isSignedIn } = useUser();

// ...

<div className="hidden md:flex items-center gap-4">
    <svg
        className={`h-6 w-6 text-white transition-all duration-500 ${isScrolled ? "invert" : ""
            }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>

    {isLoaded && (
        isSignedIn ? (
            <UserButton>
                <UserButton.MenuItems>
                    <UserButton.Action
                        label="My Bookings"
                        labelIcon={<BookingIcon />}
                        onClick={() => navigate("/my-bookings")}
                    />
                </UserButton.MenuItems>
            </UserButton>
        ) : (
            <button
                onClick={openSignIn}
                className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled
                        ? "text-white bg-black"
                        : "bg-white text-black"
                    }`}
            >
                Login
            </button>
        )
    )}
</div>