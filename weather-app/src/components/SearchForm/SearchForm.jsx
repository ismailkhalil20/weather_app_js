import React from 'react'

export default function SearchForm({Search, handlechange, CitySearch}) {
    return (
        <div>
            <form>
                <input
                    name="cityname"
                    type="text"
                    onChange={CitySearch}
                    value={Search}
                    />
                <input type="submit" value="Submit" onClick={handlechange} />
            </form>
        </div>
    )
}
