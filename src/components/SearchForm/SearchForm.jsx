import React from 'react'

export default function SearchForm({Search, handlechange, CitySearch}) {
    return (
        <div>
            <form className="h-10 flex">
                <input
                    name="cityname"
                    type="text"
                    onChange={CitySearch}
                    value={Search}
                    className="w-full p-2 bg-opacity-0 outline-none"
                    />
                <button type="submit" value="Submit" onClick={handlechange} className="w-auto p-2 flex justify-end items-center text-white bg-yellow-600">search</button>
            </form>
        </div>
    )
}
