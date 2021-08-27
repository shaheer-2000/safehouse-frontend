import React, {useState} from 'react'


const HouseRegisterationForm = () => {
    
    const [userRegisteration, setuserRegisteration] = useState({
        rooms: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        price: "",
        city:"",
        country: "",
        address: "",
        phone:"",
        
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setuserRegisteration({...userRegisteration, [name] : value})
    }

    const handleSubmit = (e) => {
        //send to backend from here
        e.preventDefault();
        
        const newuser = {...userRegisteration}

        setuserRegisteration({rooms: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        price:"",
        city: "",
        country: "",
        address: "",
        phone:"",
        });
    }

    
    
    return (
        <React.Fragment>
            <form action="" onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td align="right"><label htmlFor="rooms">No of Rooms </label></td><td> <input type="number" required autoComplete="off" value={userRegisteration.rooms} onChange={handleInput} name="rooms" id="rooms"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="bedrooms">No of Bedrooms </label></td><td><input type="number" required autoComplete="off" value={userRegisteration.bedrooms} onChange={handleInput} name="bedrooms" id="bedrooms"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="bathrooms">No of Bathrooms </label></td><td><input type="number" required autoComplete="off" value={userRegisteration.bathrooms} onChange={handleInput} name="bathrooms" id="bathrooms"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="area">Total Area </label></td><td><input type="number" required autoComplete="off" value={userRegisteration.area} onChange={handleInput} name="area" id="area"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="price">Price </label></td><td><input type="number" required autoComplete="off" value={userRegisteration.price} onChange={handleInput} name="price" id="price"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="city">City </label></td><td><input type="text" required autoComplete="off" value={userRegisteration.city} onChange={handleInput} name="city" id="city"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="country">Country </label></td><td><input type="text" required autoComplete="off" value={userRegisteration.country} onChange={handleInput} name="country" id="country"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="address">Address </label></td><td><input type="Address" required autoComplete="off" value={userRegisteration.address} onChange={handleInput} name="address" id="address"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="phone">Phone Number </label></td><td><input type="number" required autoComplete="off" value={userRegisteration.phone} onChange={handleInput} name="phone" id="phone"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="status">Status </label></td><td><input type="radio" autoComplete="off" value="available" onChange={handleInput} name="status" id="available"/><label>Available</label>
                    <input type="radio" autoComplete="off" value="unavailable" onChange={handleInput} name="status" id="unavailable"/><label>Unavailable</label></td>
                    </tr>
                    <tr>
                        <td align="right"></td><td><button type="submit">Submit</button></td>
                    </tr>
                </table>
            </form>
        </React.Fragment>
    )
}

export default HouseRegisterationForm
