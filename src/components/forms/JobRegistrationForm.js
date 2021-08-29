import React, {useState} from 'react'


const JobRegistrationForm = () => {
    
    const [userRegisteration, setuserRegisteration] = useState({
        discipline: "",
        title: "",
        designation: "",
        salary: "",
        experience: "",
        description:"",     
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

        setuserRegisteration({discipline: "",
        title: "",
        designation: "",
        salary: "",
        experience: "",
        description:"",  
        });
    }


    
    
    return (
        <React.Fragment>
            <form action="" onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td align="right"><label htmlFor="discipline">Discipline </label></td><td> <input type="string" required autoComplete="off" value={userRegisteration.discipline} onChange={handleInput} name="discipline" id="discipline"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="title">Title </label></td><td><input type="string" required autoComplete="off" value={userRegisteration.title} onChange={handleInput} name="title" id="title"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="designation">Designation </label></td><td><input type="string" required autoComplete="off" value={userRegisteration.designation} onChange={handleInput} name="designation" id="designation"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="salary">Salary </label></td><td><input type="number" required autoComplete="off" value={userRegisteration.salary} onChange={handleInput} name="salary" id="salary"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="experience">Experience </label></td><td><input type="number" required autoComplete="off" value={userRegisteration.experience} onChange={handleInput} name="experience" id="experience"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="description">Description </label></td><td><textarea rows="5" cols="50"  required autoComplete="off" value={userRegisteration.description} onChange={handleInput} name="description" id="description"/></td>
                    </tr>
                    <tr>
                        <td align="right"></td><td><button type="submit">Submit</button></td>
                    </tr>
                </table>
            </form>
        </React.Fragment>
    )
}

export default JobRegistrationForm
