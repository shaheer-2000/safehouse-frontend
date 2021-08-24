import React, {useState} from 'react'
import Select from 'react-select'

const clickusertype = "Manager";

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


const RegisterationForm = () => {

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
        
        const newuser = {...userRegisteration, id: new Date().getTime().toString() }
        console.log(newuser)
        setuserRecord([...userRecord, newuser]);
        console.log(newuser)

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

    const [userRecord, setuserRecord] = useState([])
    
    
    return (
        <React.Fragment>
            <form action="" onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td align="right"><label htmlFor="username">Username </label></td><td> <input type="text" required autoComplete="off" value={userRegisteration.username} onChange={handleInput} name="username" id="username"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="password">Password </label></td><td> <input type="password" required autoComplete="off" value={userRegisteration.password} onChange={handleInput} name="password" id="password"/></td>
                    </tr>
                    {(clickusertype === "NGO") ? <div></div>: <tr>
                        <td align="right"><label htmlFor="role">Role </label></td><td>{(clickusertype === "Admin") ? <div><Select required value={admintype.find(x => x.value === usertype)} onChange={handleusertype} options={admintype} getOptionLabel= {option => option.name}/></div> : (clickusertype === "Manager") ? <div><Select required value={managertype.find(x => x.value === usertype)} onChange={handleusertype} options={managertype} getOptionLabel= {option => option.name}/></div> : <div></div> }</td>
                    </tr>}
                    
                    <tr>
                        <td align="right">{ (userRegisteration.role === "ngo") ? <div></div> :<div><label htmlFor="firstname">Fisrt name </label></div> }</td><td> { (userRegisteration.role === "ngo") ? <div></div> : <div><input type="text" required autoComplete="off" value={userRegisteration.firstname} onChange={handleInput} name="firstname" id="firstname"/></div>} </td>
                    </tr>
                    <tr>
                        <td align="right">{ (userRegisteration.role === "ngo") ? <div></div> :<div><label htmlFor="lastname">Last name </label></div> }</td><td>{ (userRegisteration.role === "ngo") ? <div></div> : <div><input type="text" required autoComplete="off" value={userRegisteration.lastname} onChange={handleInput} name="lastname" id="lastname"/></div>}</td>
                    </tr>
                    <tr>
                        <td align="right">{ (userRegisteration.role === "ngo") ? <div><label htmlFor="name">Name of the Organization </label></div>:<div></div> }</td><td>{ (userRegisteration.role === "ngo") ? <div><input type="text" required autoComplete="off" value={userRegisteration.name} onChange={handleInput} name="name" id="name"/></div> : <div></div>}</td>
                    </tr>
                    <tr>
                        <td align="right">{ (userRegisteration.role === "homeless") ? <div></div>:<div><label htmlFor="email">E-mail Address </label></div> }</td><td>{ (userRegisteration.role === "homeless") ? <div></div> : <div><input type="email" required autoComplete="off" value={userRegisteration.email} onChange={handleInput} name="email" id="email"/></div> }</td>
                    </tr>
                    <tr>
                        <td align="right">{ (userRegisteration.role === "ngo") ? <div><label htmlFor="description">Description </label></div>:<div></div> }</td><td> { (userRegisteration.role === "ngo") ? <div><textarea rows="5" cols="50"  required autoComplete="off" value={userRegisteration.description} onChange={handleInput} name="description" id="description"/></div> : <div></div> }</td>
                    </tr>
                    <tr>
                        <td align="right"> { (userRegisteration.role === "ngo") ? <div><label htmlFor="website">WebSite </label></div>:<div></div> }</td><td>{ (userRegisteration.role === "ngo") ? <div><input type="website" autoComplete="off" value={userRegisteration.website} onChange={handleInput} name="website" id="website"/></div> : <div></div> }</td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="phone">Phone Number </label></td><td><input type="number" required autoComplete="off" value={userRegisteration.phone} onChange={handleInput} name="phone" id="phone"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="address">Address </label></td><td><input type="Address" autoComplete="off" value={userRegisteration.address} onChange={handleInput} name="address" id="address"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="city">City </label></td><td><input type="text" required autoComplete="off" value={userRegisteration.city} onChange={handleInput} name="city" id="city"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="country">Country </label></td><td><input type="text" required autoComplete="off" value={userRegisteration.country} onChange={handleInput} name="country" id="country"/></td>
                    </tr>
                    <tr>
                        <td align="right">{ (userRegisteration.role === "ngo") ? <div></div> : <div><label htmlFor="dateofbirth">Date of Birth </label></div> }</td><td> { (userRegisteration.role === "ngo") ? <div></div> : <div><input type="date" format="YYYY-MM-DD" required autoComplete="off" value={userRegisteration.dateofbirth} onChange={handleInput} name="dateofbirth" id="dateofbirth"/></div> }</td>
                    </tr>
                    <tr>
                        <td align="right">{ (userRegisteration.role === "ngo") ? <div></div> : <div> <label htmlFor="gender">Gender </label></div> }</td><td>{ (userRegisteration.role === "ngo") ? <div></div> : <div><input required type="radio" autoComplete="off" value="male" onChange={handleInput} name="gender" id="male"/><label>Male</label>
                        <input required type="radio" autoComplete="off" value="female" onChange={handleInput} name="gender" id="female"/><label>Female</label>
                        <input required type="radio" autoComplete="off" value="other" onChange={handleInput} name="gender" id="other"/><label>Other</label></div> }</td>
                    </tr>
                    <tr>
                        <td align="right">{ (userRegisteration.role === "ngo") ? <div></div> : <div><label htmlFor="cnic">CNIC no :-</label></div> }</td><td>{ (userRegisteration.role === "ngo") ? <div></div> : <div><input type="number" required autoComplete="off" value={userRegisteration.cnic} onChange={handleInput} name="cnic" id="cnic"/></div> }</td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="image">Profile Image </label></td><td><input type="file" required autoComplete="off" value={userRegisteration.image} onChange={handleInput} name="image" id="image"/></td>
                    </tr>
                    <tr>
                        <td align="right"></td><td><button type="submit">Submit</button></td>
                    </tr>

                </table>
            </form>
        </React.Fragment>
    )
}

export default RegisterationForm
