import { useState, useEffect } from 'react';   //8th step employee
import axios from "axios";                      //9th step
import Employee from './models/Employee';

const AddEmployee = (props) => {                //10th step

    const [employee, setEmployee] = useState(new Employee());       //11th step

    const handleChange = (event) => {                   //15th step
        console.log(event.target.value);
        setEmployee({
            ...employee,
            [event.target.name]: event.target.value
        });
    }



const onSubmit = () => {                                    //12th step
    console.log('onSubmit');
    axios.post('http://localhost:8082/addemp', employee)
        .then((response) => {
            alert(response.data.firstName + '  successfully.');
        })
        .catch(() => {
            alert('Something is wrong!')
        }
        );
}

return (                                //13th step
    <div className="container">
        <p>view all employees</p>
        <div>
            <form>
                <input type="text" name="firstName" value={employee.firstName} placeholder="Please enter first name" onChange={handleChange} />         {/*14th step*/}
                <br />
                <input type="text" name="salary" value={employee.salary} placeholder= "salary" onChange={handleChange} />
                <br />
                <input type="submit" value="addemp" onClick={onSubmit} />
            </form>
        </div>

    </div >

)
}
export default AddEmployee;
