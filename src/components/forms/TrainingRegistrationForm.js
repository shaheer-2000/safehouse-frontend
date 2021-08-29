import React, {useState} from 'react'


const TrainingRegistrationForm = () => {
    
    const [userRegisteration, setuserRegisteration] = useState({
        discipline: "",
        title: "",
        duration: "",
        required_experience_level: "",
        certification: "",
        fee: "",
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
        duration: "",
        required_experience_level: "",
        certification: "",
        fee: "",
        description:"",  
        });
    }

    
    
    return (
        <React.Fragment>
            <form action="" onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td align="right">
                            <label htmlFor="discipline">Discipline </label>
                        </td>
                        <td> 
                            <input type="string" required autoComplete="off" value={userRegisteration.discipline} onChange={handleInput} name="discipline" id="discipline"/>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label htmlFor="title">Title </label>
                        </td>
                        <td>
                            <input type="string" required autoComplete="off" value={userRegisteration.title} onChange={handleInput} name="title" id="title"/>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label htmlFor="duration">Duration </label>
                        </td>
                        <td>
                            <input type="number" required autoComplete="off" value={userRegisteration.duration} onChange={handleInput} name="duration" id="duration"/>
                        </td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="required_experience_level">Required experience level </label></td><td><input type="number" required autoComplete="off" value={userRegisteration.required_experience_level} onChange={handleInput} name="required_experience_level" id="required_experience_level"/></td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label htmlFor="certification">Certification </label>
                        </td>
                        <td>
                            <input type="radio" autoComplete="off" value="available" onChange={handleInput} name="certification" id="available"/><label>Available</label>
                            <input type="radio" autoComplete="off" value="unavailable" onChange={handleInput} name="certification" id="unavailable"/><label>Unavailable</label>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label htmlFor="fee">Fee </label>
                        </td>
                        <td>
                            <input type="number" required autoComplete="off" value={userRegisteration.fee} onChange={handleInput} name="fee" id="fee"/>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label htmlFor="description">Description </label>
                        </td>
                        <td>
                            <textarea rows="5" cols="50"  required autoComplete="off" value={userRegisteration.description} onChange={handleInput} name="description" id="description"/>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">

                        </td>
                        <td>
                            <button type="submit">Submit</button>
                        </td>
                    </tr>
                </table>
            </form>
        </React.Fragment>
    )
}

export default TrainingRegistrationForm
