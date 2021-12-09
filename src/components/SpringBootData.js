import axios from "axios";
import { useEffect, useState } from "react";
import Employee from "./models/Employee";

const SpringBootData = () => {

    const [emp, setEmp] = useState(new Employee());
    const [newEmpObj, setNewEmpObj] = useState(new Employee());
    const [empList, setEmpList] = useState([]);
    const [displayEmpObj, setDisplayEmpObj] = useState(new Employee());         //26th


    const handleEmp = (e) => {
        setEmp({
            ...emp,
            [e.target.name]: e.target.value
        });
    }

    const handleAddEmp = (e) => {
        console.log(e.target.value);
        setNewEmpObj({
            ...newEmpObj,
            [e.target.name]: e.target.value
        });
    }

    const submitGetAllEmps = () => {
        axios.get(`http://localhost:8082/emp/getallemps`)
            .then((response) => {
                setEmpList(response.data);
                console.log(response.data);
                console.log(empList);
            })
            .catch(() => {
                alert('Something is wrong!');
            });
    }

    const submitGetEmpById = (evt) => {
        console.log(emp.eid);
        axios.get(`http://localhost:8082/emp/getempbyid/${emp.eid}`)
            .then((response) => {
                setEmp(response.data);
            })
            .catch(() => {
                setEmp({});
                alert("Employee not found.");
            });
        // evt.preventDefault();
    }

    const submitAddEmp = (evt) => {
        evt.preventDefault();                                                        //27th
        axios.post(`http://localhost:8082/emp/addemp`, newEmpObj)
            .then((response) => {
                // setNewEmpObj(response.data);                                     //replaced by below
                // alert('Employee added successfully.')
                setDisplayEmpObj(response.data);                                     //28th
                alert('Employee added successfully.');
                setNewEmpObj({ firstName: '', salary: 0 })
            })
            .catch(() => {
                alert("Employee could not be added.");
            });
      //  evt.preventDefault();                                                     //29th
    }

    return (
        <div>

            <p className="display-4">Spring Boot Data</p>
            <p>Search Employee By Id</p>
            <input type="number" id="eid" name="eid" value={emp.eid} onChange={handleEmp} placeholder="Emter eid to search" />
            <input type="submit" name="Find Employee" onClick={submitGetEmpById} />
            <p>{emp.eid} {emp.firstName} {emp.salary}</p>
            <p>----------------</p>
            <div>
                <p>Add New Employee</p>
                {/* <form onSubmit={submitAddEmp}>*/}           {/*30*/}
                <div id="addNewEmpDiv">                             {/*31*/}
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={newEmpObj.firstName}
                            onChange={handleAddEmp}
                            placeholder="Enter First Name" />
                        <input
                            type="number"
                            id="salary"
                            name="salary"
                            value={newEmpObj.salary}
                            onChange={handleAddEmp}
                            placeholder="Enter salary" />
                        <input
                            // type="button"
                            type="submit"
                            value="Add Employee"
                        // onClick={submitAddEmp} 
                        />
                    </div>
                {/* </form> */}
                {/* <p>{newEmpObj.eid} {newEmpObj.firstName} {newEmpObj.salary}</p> */}         {/*32*/}
                <p>New Employee Data: {displayEmpObj.eid} {displayEmpObj.firstName} {displayEmpObj.salary}</p>   {/*33*/}

            </div>
            <p>----------------</p>
            <div>
                <div>
                    <p>Get All Employees</p>
                    <input
                        type="button"
                        value="Search All Employees"
                        onClick={submitGetAllEmps}
                    />
                </div>
                <div>
                    <p>Eid Firstname salary</p>              {/*34*/}
                    {/* {empList} */}
                    {/* {empList.map((arg, arg2)=> { return the processed data })} */}
                    {empList.map((emp, k) => {
                        return (
                            <div k={k}>{emp.eid} {emp.firstName} {emp.salary} </div>
                        )
                    })}
                </div>

                <p>----------------</p>
            </div>

        </div>
    );
}

export default SpringBootData;



// import axios from "axios";                          //8th step  employee
// import { useEffect, useState } from "react";        //9th step employee
// import Employee from "./models/Employee";

// const SpringBootData = () => {                      //10th step get employee

//     const [emp, setEmp] = useState(new Employee());               //11th step get employee
//     const [newEmpObj, setNewEmpObj] = useState(new Employee());
//     const [empList, setEmpList] = useState();                   //18th step


//     const handleEmp = (e) => {                               //15th step get employee
//         setEmp({
//             ...emp,
//             [e.target.name]: e.target.value
//         });
//     }

//     const handleAddEmp = (e) => {
//         console.log(e.target.value);
//         setNewEmpObj({
//             ...newEmpObj,
//             [e.target.name]: e.target.value
//         });
//     }
//     const submitGetAllEmps = () => {                            //19th step
//         axios.get(`http://localhost:8082/emp/getallemps`)
//             .then((response) => {
//                 setEmpList(response.data);
//                 console.log(response.data);
//                 console.log(empList);
//             })
//             .catch(() => {
//                 alert('Something is wrong!');
//             });
//     }
//     const submitGetEmpById = () => {                               //12th step get employee
//         console.log(emp.eid);
//         // axios.get(`http://localhost:8082/emp/getempbyid/101`)
//         axios.get(`http://localhost:8082/emp/getempbyid/${emp.eid}`)
//             .then((response) => {
//                 setEmp(response.data);
//             })
//             .catch(() => {
//                 setEmp({});
//                 alert("Employee not found.");
//             });
//              // evt.preventDefault();
//     }
//     // useEffect(() => {                                        //17th step get employee
//     //     setNewEmpObj({});
//     // }, []);

//     const submitAddEmp = (evt) => {
//         axios.post(`http://localhost:8082/emp/addemp`, newEmpObj)
//             .then((response) => {
//                 setNewEmpObj(response.data);
//                 alert('Employee added successfully.')
//             })
//             .catch(() => {
//                 alert("Employee could not be added.");
//             });
//             evt.preventDefault();                   //20th step
//     }

//     return (
//         <div>

//             <p className="display-4">Spring Boot Data</p>
//             <p>Search Employee By Id</p>                              {/*13th step get employee*/}
//             <input type="number" id="eid" name="eid" value={emp.eid} onChange={handleEmp} placeholder="Emter eid to search" />     {/*14th step get employee*/}
//             <input type="submit" name="Find Employee" onClick={submitGetEmpById} />     
//             <p>{emp.eid} {emp.firstName} {emp.salary}</p>    {/*16th step get employee*/}
//             <p>----------------</p>
//             <div>
//                 <p>Add New Employee</p>
//                 <form onSubmit={submitAddEmp}>              {/*21st step*/}
//                 <div>
//                     <input
//                         type="text"
//                         id="firstName"
//                         name="firstName"
//                         value={newEmpObj.firstName}
//                         onChange={handleAddEmp}
//                         placeholder="Enter First Name" />
//                     <input
//                         type="number"
//                         id="salary"
//                         name="salary"
//                         value={newEmpObj.salary}
//                         onChange={handleAddEmp}
//                         placeholder="Enter salary" />
//                     <input
//                        // type="button"
//                        type="submit"                         //  22st step
//                         name="Add Employee"
//                      //   onClick={submitAddEmp} 
//                      />
//                 </div>
//                 </form>                              {/*23st step*/}
//                 <p>{newEmpObj.eid} {newEmpObj.firstName} {newEmpObj.salary}</p> 
//                 {/* to recieve the added data */}
//             </div>

//             <p>----------------</p>
//             <div>
//                 <div>
//                     <p>Get All Employees</p>           {/*24th step*/}
//                     <input
//                         type="button"
//                         value="Search All Employees"
//                         onClick={submitGetAllEmps}
//                     />
//                 </div>
//                 <div>
//                     {/* {empList} */}
//                     {/* {empList.map((arg, arg2)=> { return the processed data })} */}
//                     {empList.map((emp, k) => {                   {/*25th step*/}
//                         return (
//                             <div k={k}>{emp.eid} {emp.firstName} {emp.salary} </div>      //25th step  to get data from db
//                         )
//                     })}
//                 </div>

//                 <p>----------------</p>
//             </div>

//         </div>
//     );

// }

// export default SpringBootData;