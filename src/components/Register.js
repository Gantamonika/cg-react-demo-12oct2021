// import { useState, useEffect } from 'react';
// import axios from "axios";
// import AppUser from './models/AppUser';

// const Register = (props) => {

//     const [appUser, setAppUser] = useState(new AppUser());

//     const handleChange = (event) => {
//         console.log(event.target.value);
//         setAppUser({
//             ...appUser,
//             [event.target.name]: event.target.value
//         });
//     }

//     const onSubmit = () => {
//         console.log('onSubmit');
//         axios.post('http://localhost:8082/register', appUser)
//             .then((response) => {
//                 alert(response.data.userName + ' registered successfully.');
//             })
//             .catch(() => {
//                 alert('Something is wrong!')
//             }
//             );
//     }



//     return (
//         <div className="container">
//             <p>Register as a new User</p>
//             <div>
//                 <form>
//                     <input type="text" name="userName" value={appUser.userName} placeholder="Please enter user name" onChange={handleChange} />
//                     <br />
//                     <input type="password" name="password" value={appUser.password} onChange={handleChange} />
//                     <br />
//                     <input type="text" name="role" value={appUser.role} onChange={handleChange} />
//                     <br />
//                     <input type="submit" value="Register" onClick={onSubmit} />
//                 </form>
//             </div>

//         </div >

//     )
// }
// export default Register;

//-------------------------

import { useState, useEffect } from 'react';
import axios from "axios";
import AppUser from './models/AppUser';

const Register = (props) => {

    const [appUser, setAppUser] = useState(new AppUser());
    // userName, password, role 

    const handleChange = (event) => {
        console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    }

    const onSubmit = () => {
        console.log('onSubmit');
        axios.post('http://localhost:8082/register', appUser)
            .then((response) => {
                alert(response.data.userName + ' registered successfully.');
            })
            .catch(() => {
                alert('Something is wrong!')
            }
            );
    }

    // const [deleteThisVar, setDeleteThisVar] = useState('');

    // const deleteThisMethod = (e) => {
    //     console.log(e.target);
    //     setDeleteThisVar(e.target.value);
    // }

    return (
        <div className="container">
            {/* <p>Please enter some text...</p>
            <input type="text" name="deleteThisVar" value={deleteThisVar} onChange={deleteThisMethod} />
            <p>{deleteThisVar}</p> */}
            <p>Register as a new User</p>
            <div>
                <form>
                    <input type="text" name="userName" value={appUser.userName} placeholder="Please enter user name" onChange={handleChange} />
                    <br />
                    <input type="password" name="password" value={appUser.password} onChange={handleChange} />
                    <br />
                    <input type="text" name="role" value={appUser.role} onChange={handleChange} />
                    <br />
                    <input type="submit" value="Register" onClick={onSubmit} />
                </form>
            </div>

        </div >

    )
}
export default Register;

