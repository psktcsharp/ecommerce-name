import React from "react";
const itemToSave = {}
const addItem = () => (
    <div>
        Add new item :
        <label>Item title : </label>
        <input type="text"></input>
        <label>Price :</label>
        <input type="number" min="1" />
        <label>Quantity :</label>
        <input type="number" min="1" />
        <label>Category : </label>
        <select name="Categories">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
        </select>
        <label>Size : </label>
        <select name="Size">
            <option value="XXL">XXL</option>
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="S">S</option>
        </select>
        <label>Brand :</label>
        <input type="text" />
        <label>Description :</label>
        <input type="text" />
        <label>Color :</label>
        <input type="color"></input>
        <button>Save</button>
        <button>Cancel</button>
    </div>
);
export default addItem;
