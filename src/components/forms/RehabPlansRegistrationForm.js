import React, {useState} from 'react'


const RehabPlansRegistrationForm = () => {
    
    const [userRegisteration, setuserRegisteration] = useState({
        title: "",
        duration: "",
        type: "",
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

        setuserRegisteration({title: "",
        duration: "",
        type: "",
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
                        <td align="right">
                            <label htmlFor="type">Type </label>
                        </td>
                        <td>
                            <input type="string" required autoComplete="off" value={userRegisteration.type} onChange={handleInput} name="type" id="type"/>
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

export default RehabPlansRegistrationForm
