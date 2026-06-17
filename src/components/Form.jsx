import { cities } from "../assets/assets";

const Form = () => {
    return (
        <form
            className="
                w-full
                max-w-7xl
                mx-auto
                bg-white
                text-gray-500
                rounded-lg
                p-4
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-5
                gap-4
                shadow-lg
            "
        >
            {/* Destination */}
            <div className="w-full">
                <div className="flex items-center gap-2">
                    <svg
                        className="w-4 h-4 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                        />
                    </svg>
                    <label htmlFor="destinationInput">Destination</label>
                </div>

                <input
                    list="destinations"
                    id="destinationInput"
                    type="text"
                    placeholder="Type here"
                    required
                    className="w-full rounded border border-gray-200 px-3 py-2 mt-1.5 text-sm outline-none focus:border-black"
                />

                <datalist id="destinations">
                    {cities.map((city, index) => (
                        <option value={city} key={index} />
                    ))}
                </datalist>
            </div>

            {/* Check In */}
            <div className="w-full">
                <div className="flex items-center gap-2">
                    <svg
                        className="w-4 h-4 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                        />
                    </svg>
                    <label htmlFor="checkIn">Check In</label>
                </div>

                <input
                    id="checkIn"
                    type="date"
                    className="w-full rounded border border-gray-200 px-3 py-2 mt-1.5 text-sm outline-none focus:border-black"
                />
            </div>

            {/* Check Out */}
            <div className="w-full">
                <div className="flex items-center gap-2">
                    <svg
                        className="w-4 h-4 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                        />
                    </svg>
                    <label htmlFor="checkOut">Check Out</label>
                </div>

                <input
                    id="checkOut"
                    type="date"
                    className="w-full rounded border border-gray-200 px-3 py-2 mt-1.5 text-sm outline-none focus:border-black"
                />
            </div>

            {/* Guests */}
            <div className="w-full">
                <label htmlFor="guests" className="block">
                    Guests
                </label>

                <input
                    min={1}
                    max={4}
                    id="guests"
                    type="number"
                    placeholder="1"
                    className="w-full rounded border border-gray-200 px-3 py-2 mt-1.5 text-sm outline-none focus:border-black"
                />
            </div>

            {/* Search Button */}
            <div className="flex items-end">
                <button
                    type="submit"
                    className="
                        w-full
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-md
                        bg-black
                        px-5
                        py-2.5
                        text-white
                        cursor-pointer
                        hover:bg-gray-800
                        transition
                    "
                >
                    <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    <span>Search</span>
                </button>
            </div>
        </form>
    );
};

export default Form;