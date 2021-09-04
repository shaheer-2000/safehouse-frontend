import React, {useState} from 'react'
import Select from 'react-select'

const clickusertype = "Admin";

const admintype = [
    {
        value:"ngo",
        name:"NGO",
    },
    {
        value:"manager",
        name:"Manager",
    },
    {
        value:"homeless",
        name:"Homeless",
    },
    {
        value:"housemate",
        name:"Housemate",
    },
];

const managertype = [
    {
        value:"homeless",
        name:"Homeless",
    },
    {
        value:"housemate",
        name:"Housemate",
    },
];


const RegistrationForm = () => {

    const [usertype, setusertype] = useState(null);
    const handleusertype = obj => {
        setusertype(obj.value);

        setuserRegisteration({...userRegisteration, role : obj.value})
    }

    const [userRegisteration, setuserRegisteration] = useState({
        username: "",
        password: "",
        role: "manager",
        firstname: "",
        lastname: "",
        name: "",
        email: "",
        description: "",
        website: "",
        phone:"",
        address: "",
        city: "",
        country: "",
        dateofbirth: "",
        gender: "",
        cnic: "",
        image: "",
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

        setuserRegisteration({username: "",
        password: "",
        role:"",
        firstname: "",
        lastname: "",
        name: "",
        email: "",
        description: "",
        website: "",
        phone:"",
        address: "",
        city: "",
        country: "",
        dateofbirth: "",
        gender: "",
        cnic: "",
        image: "",});
    }

    
    
    return (
            <form action="" onSubmit={handleSubmit}>
                <table>
                <tbody>
                    <tr>
                        <td colSpan="2">User</td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label >Username </label>
                        </td>
                        <td>
                            <input type="text" required autoComplete="off" value={userRegisteration.username} onChange={handleInput} name="username" id="username"/>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label >Password </label>
                        </td>
                    <td>
                        <input type="password" required autoComplete="off" value={userRegisteration.password} onChange={handleInput} name="password" id="password"/>
                    </td>
                    </tr>
                    {
                        (clickusertype === "NGO") ? 
                        <></>: 
                        <tr>
                            <td align="right">
                                <label >Role </label>
                            </td>
                            <td>
                            {
                                (clickusertype === "Admin") ? 
                                <>
                                    <Select required value={admintype.find(x => x.value === usertype)} onChange={handleusertype} options={admintype} getOptionLabel= {option => option.name}/>
                                </> : 
                                (clickusertype === "Manager") ? 
                                <>
                                    <Select required value={managertype.find(x => x.value === usertype)} onChange={handleusertype} options={managertype} getOptionLabel= {option => option.name}/>
                                </> : 
                                <>

                                </> 
                            }
                            </td>
                        </tr>
                    }
                    {
                        (userRegisteration.role === "homeless") ? 
                            <>
                                <tr>
                                    <td align="right">
                                        <label >Gender </label>
                                    </td>
                                    <td>
                                        <input required type="radio" autoComplete="off" value="male" onChange={handleInput} name="gender" id="male"/><label>Male</label>
                                        <input required type="radio" autoComplete="off" value="female" onChange={handleInput} name="gender" id="female"/><label>Female</label>
                                        <input required type="radio" autoComplete="off" value="other" onChange={handleInput} name="gender" id="other"/><label>Other</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Date of Birth </label>
                                    </td>
                                    <td>
                                        <input type="date" format="YYYY-MM-DD" required autoComplete="off" value={userRegisteration.dateofbirth} onChange={handleInput} name="dateofbirth" id="dateofbirth"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">Details</td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Full Name </label>
                                    </td>
                                    <td>
                                        <input type="text" required autoComplete="off" value={userRegisteration.name} onChange={handleInput} name="name" id="name"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Phone Number </label>
                                    </td>
                                    <td>
                                        <input type="number" required autoComplete="off" value={userRegisteration.phone} onChange={handleInput} name="phone" id="phone"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Country </label>
                                    </td>
                                    <td>
                                        <input type="text" required autoComplete="off" value={userRegisteration.country} onChange={handleInput} name="country" id="country"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >City </label>
                                    </td>
                                    <td>
                                        <input type="text" required autoComplete="off" value={userRegisteration.city} onChange={handleInput} name="city" id="city"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Address </label>
                                    </td>
                                    <td>
                                        <input type="Address" autoComplete="off" value={userRegisteration.address} onChange={handleInput} name="address" id="address"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >CNIC no :-</label>
                                    </td>
                                    <td>
                                        <input type="number" required autoComplete="off" value={userRegisteration.cnic} onChange={handleInput} name="cnic" id="cnic"/>
                                    </td>
                                </tr>    
                            </>:
                        (userRegisteration.role === "housemate") ?
                            <>
                                <tr>
                                    <td align="right">
                                        <label >E-mail Address </label>
                                    </td>
                                    <td>
                                        <input type="email" required autoComplete="off" value={userRegisteration.email} onChange={handleInput} name="email" id="email"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Gender </label>
                                    </td>
                                    <td>
                                        <input required type="radio" autoComplete="off" value="male" onChange={handleInput} name="gender" id="male"/><label>Male</label>
                                        <input required type="radio" autoComplete="off" value="female" onChange={handleInput} name="gender" id="female"/><label>Female</label>
                                        <input required type="radio" autoComplete="off" value="other" onChange={handleInput} name="gender" id="other"/><label>Other</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Date of Birth </label>
                                    </td>
                                    <td>
                                        <input type="date" format="YYYY-MM-DD" required autoComplete="off" value={userRegisteration.dateofbirth} onChange={handleInput} name="dateofbirth" id="dateofbirth"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">Details</td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Full Name </label>
                                    </td>
                                    <td>
                                        <input type="text" required autoComplete="off" value={userRegisteration.name} onChange={handleInput} name="name" id="name"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Phone Number </label>
                                    </td>
                                    <td>
                                        <input type="number" required autoComplete="off" value={userRegisteration.phone} onChange={handleInput} name="phone" id="phone"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Country </label>
                                    </td>
                                    <td>
                                        <input type="text" required autoComplete="off" value={userRegisteration.country} onChange={handleInput} name="country" id="country"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >City </label>
                                    </td>
                                    <td>
                                        <input type="text" required autoComplete="off" value={userRegisteration.city} onChange={handleInput} name="city" id="city"/>
                                    </td>
                                </tr> 
                                <tr>
                                    <td align="right">
                                        <label >Address </label>
                                    </td>
                                    <td>
                                        <input type="Address" autoComplete="off" value={userRegisteration.address} onChange={handleInput} name="address" id="address"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >CNIC no :-</label>
                                    </td>
                                    <td>
                                        <input type="number" required autoComplete="off" value={userRegisteration.cnic} onChange={handleInput} name="cnic" id="cnic"/>
                                    </td>
                                </tr>
                            </>:
                        (userRegisteration.role === "manager") ?
                            <>
                                <tr>
                                    <td align="right">
                                        <label >E-mail Address </label>
                                    </td>
                                    <td>
                                        <input type="email" required autoComplete="off" value={userRegisteration.email} onChange={handleInput} name="email" id="email"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Gender </label>
                                    </td>
                                    <td>
                                        <input required type="radio" autoComplete="off" value="male" onChange={handleInput} name="gender" id="male"/><label>Male</label>
                                        <input required type="radio" autoComplete="off" value="female" onChange={handleInput} name="gender" id="female"/><label>Female</label>
                                        <input required type="radio" autoComplete="off" value="other" onChange={handleInput} name="gender" id="other"/><label>Other</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Date of Birth </label>
                                    </td>
                                    <td>
                                        <input type="date" format="YYYY-MM-DD" required autoComplete="off" value={userRegisteration.dateofbirth} onChange={handleInput} name="dateofbirth" id="dateofbirth"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">Details</td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Full Name </label>
                                    </td>
                                    <td>
                                        <input type="text" required autoComplete="off" value={userRegisteration.name} onChange={handleInput} name="name" id="name"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Phone Number </label>
                                    </td>
                                    <td>
                                        <input type="number" required autoComplete="off" value={userRegisteration.phone} onChange={handleInput} name="phone" id="phone"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Country </label>
                                    </td>
                                    <td>
                                        <input type="text" required autoComplete="off" value={userRegisteration.country} onChange={handleInput} name="country" id="country"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >City </label>
                                    </td>
                                    <td>
                                        <input type="text" required autoComplete="off" value={userRegisteration.city} onChange={handleInput} name="city" id="city"/>
                                    </td>
                                </tr> 
                                <tr>
                                    <td align="right">
                                        <label >Address </label>
                                    </td>
                                    <td>
                                        <input type="Address" autoComplete="off" value={userRegisteration.address} onChange={handleInput} name="address" id="address"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >CNIC no :-</label>
                                    </td>
                                    <td>
                                        <input type="number" required autoComplete="off" value={userRegisteration.cnic} onChange={handleInput} name="cnic" id="cnic"/>
                                    </td>
                                </tr> 
                            </>:
                        (userRegisteration.role === "ngo") ?
                            <>
                                <tr>
                                    <td align="right">
                                        <label >E-mail Address </label>
                                    </td>
                                    <td>
                                        <input type="email" required autoComplete="off" value={userRegisteration.email} onChange={handleInput} name="email" id="email"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">Details</td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Name of the Organization </label>
                                    </td>
                                    <td>
                                        <input type="text" required autoComplete="off" value={userRegisteration.name} onChange={handleInput} name="name" id="name"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Phone Number </label>
                                    </td>
                                    <td>
                                        <input type="number" required autoComplete="off" value={userRegisteration.phone} onChange={handleInput} name="phone" id="phone"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Country </label>
                                    </td>
                                    <td>
                                        <input type="text" required autoComplete="off" value={userRegisteration.country} onChange={handleInput} name="country" id="country"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >City </label>
                                    </td>
                                    <td>
                                        <input type="text" required autoComplete="off" value={userRegisteration.city} onChange={handleInput} name="city" id="city"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Address </label>
                                    </td>
                                    <td>
                                        <input type="Address" autoComplete="off" value={userRegisteration.address} onChange={handleInput} name="address" id="address"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >WebSite </label>
                                    </td>
                                    <td>
                                        <input type="website" autoComplete="off" value={userRegisteration.website} onChange={handleInput} name="website" id="website"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <label >Description </label>
                                    </td>
                                    <td>
                                        <textarea rows="5" cols="50"  required autoComplete="off" value={userRegisteration.description} onChange={handleInput} name="description" id="description"/>
                                    </td>
                                </tr>
                            </>:
                            <>
                            </>
                    }
                    <tr>
                        <td align="right">
                            <label >Profile Image </label>
                        </td>
                        <td>
                            <input type="file" required autoComplete="off" value={userRegisteration.image} onChange={handleInput} name="image" id="image"/>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">

                        </td>
                        <td>
                            <button type="submit">Submit</button>
                        </td>
                    </tr>
                </tbody>
                </table>
                    
            </form>
    )
}

export default RegistrationForm
