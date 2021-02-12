import React from 'react'

export default function SearchForm({ handlechange, CitySearch}) {
    return (
        <div>
            <form>
                <input
                    name="cityname"
                    type="text"
                    onChange={CitySearch}
                    />
                <input type="submit" value="Submit" onClick={handlechange} />
            </form>
        </div>
    )
}
