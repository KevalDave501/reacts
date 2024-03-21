import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password:''
});

  const [showData, setShowData] = useState(false);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
    }));
    setShowData(false)
};

const handleSubmit = (e) => {
  e.preventDefault();
  setShowData(true);
  
};

  return (
    <>
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    </head>
    <div className="App">
      <form onSubmit={handleSubmit}>
      <label className="Name"  htmlFor="name">Name</label>&nbsp;&nbsp;
        <input type="text" id="name" class="form-control" name = "name" value={formData.name} placeholder="Enter Name" onChange={handleChange}    required/><br/>

        <label className="exampleInputEmail1"  htmlFor="email">Email address</label>&nbsp;&nbsp;
        <input type="email" id="exampleInputEmail1" class="form-control" name = "email" value={formData.email} placeholder="Enter email" onChange={handleChange}    required/><br/>

        <label className="exampleInputPassword1"  htmlFor="password">Password</label>&nbsp;&nbsp;
        <input type="password"  id="exampleInputPassword1" class="form-control" name="password" value={formData.password} placeholder="Password" onChange={handleChange}    required/><br/>

        <button  type="submit" className='btn btn-primary'>Submit</button><br/><br/>
      

      </form>
      {showData && (
      <div>
                    <h3>Submitted Data:</h3>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Password: {formData.password}</p>
                </div>
      )}
    </div>
    </>
  );
}

export default MyForm;
