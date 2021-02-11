import React from 'react'

export default function SearchForm({City, setCity}) {
    return (
        <div>
            <form>
                <input
                    name="cityname"
                    type="text"
                    value={City}
                    onChange={() => {setCity(City)}} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
