import React, {useState} from 'react'


const InsurancePlanRegistrationForm = () => {
    
    const [userRegisteration, setuserRegisteration] = useState({
        title: "",
        coverage: "",
        subscriptioncharges: "",
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
        coverage: "",
        subscriptioncharges: "",
        description:"",  
        });
    }

    
    
    return (
        <React.Fragment>
            <form action="" onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td align="right"><label htmlFor="title">Title </label></td><td><input type="string" required autoComplete="off" value={userRegisteration.title} onChange={handleInput} name="title" id="title"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="coverage">Coverage in percentage </label></td><td><input type="number" required autoComplete="off" value={userRegisteration.coverage} onChange={handleInput} name="coverage" id="coverage"/></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="subscriptioncharges">Subscription Charges </label></td><td><input type="number" required autoComplete="off" value={userRegisteration.subscriptioncharges} onChange={handleInput} name="subscriptioncharges" id="subscriptioncharges"/></td>
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

export default InsurancePlanRegistrationForm
