import { useState } from 'react'
import '../style/Dropdown.css'

function Dropdown(props) {
    const [categories, setCategories] = useState([])

    let url = "https://api.chucknorris.io/jokes/categories";

    fetch(url).then((resp) => {
            return resp.json();
        })
        .then((data) => {
            setCategories(data)
        })

    return (
        <div className="Dropdown">
            <select>
                <option value="Random">Random</option>
                {categories.map((el, index)=> {return <option value={el} key={index}>{el}</option>})}
            </select>
        </div>

    )
}

export default Dropdown
