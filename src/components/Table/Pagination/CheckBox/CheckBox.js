import React from 'react'

export const CheckBox = () => {
    return (
        <div>
            <label htmlFor="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
        </div>
    )
}
