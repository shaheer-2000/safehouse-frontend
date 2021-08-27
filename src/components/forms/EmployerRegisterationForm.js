import React, {useState} from 'react'


const EmployerRegisterationForm = () => {
    
    const [userRegisteration, setuserRegisteration] = useState({
        name: "",
        description: "",
        email: "",
        address: "",
        phone:"",
        website: "",
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

        setuserRegisteration({name: "",
        description: "",
        email: "",
        address: "",
        phone: "",
        website: "",
        });
    }

    
    
    return (
        <React.Fragment>
            <form action="" onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td align="right"><label htmlFor="name">Name </label></td><td> <input type="string" required autoComplete="off" value={userRegisteration.name} onChange={handleInput} name="name" id="name"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="description">Description </label></td><td><textarea rows="5" cols="50"  required autoComplete="off" value={userRegisteration.description} onChange={handleInput} name="description" id="description"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="email">E-mail Address </label></td><td><input type="email" required autoComplete="off" value={userRegisteration.email} onChange={handleInput} name="email" id="email"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="address">Address </label></td><td><input type="Address" required autoComplete="off" value={userRegisteration.address} onChange={handleInput} name="address" id="address"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="phone">Phone Number </label></td><td><input type="number" required autoComplete="off" value={userRegisteration.phone} onChange={handleInput} name="phone" id="phone"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="website">WebSite </label></td><td><input type="website" autoComplete="off" value={userRegisteration.website} onChange={handleInput} name="website" id="website"/></td>
                    </tr>
                    <tr>
                        <td align="right"></td><td><button type="submit">Submit</button></td>
                    </tr>
                </table>
            </form>
        </React.Fragment>
    )
}

export default EmployerRegisterationForm
