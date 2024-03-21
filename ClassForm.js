import React, { Component } from "react";

class MyForm1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                name: '',
                email: '',
                password: ''
            },
        showData: false
        };
    }

    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState(prevState => ({
            formData : {
                ...prevState.formData, 
                [name]: type === 'checkbox' ? checked : value
            },
            showData: false
        }));
    };
    

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ showData:true });
    };


    render() {
        const { formData, showData } = this.state;
    console.log(this.state.formData)
    return(
    <><head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        </head><div className="App">
                <form onSubmit={this.handleSubmit}>
                    <label className="Name" htmlFor="name">Name</label>&nbsp;&nbsp;
                    <input type="text" id="name" class="form-control" name="name" value={formData.name} placeholder="Enter Name" onChange={this.handleChange} required /><br />

                    <label className="exampleInputEmail1" htmlFor="email">Email address</label>&nbsp;&nbsp;
                    <input type="email" id="exampleInputEmail1" class="form-control" name="email" value={formData.email} placeholder="Enter email" onChange={this.handleChange} required /><br />

                    <label className="exampleInputPassword1" htmlFor="password">Password</label>&nbsp;&nbsp;
                    <input type="password" id="exampleInputPassword1" class="form-control" name="password" value={formData.password} placeholder="Password" onChange={this.handleChange} required /><br />

                    <button type="submit" className='btn btn-primary'>Submit</button><br /><br />


                </form>
                {showData && (
                    <div>
                        <h3>Submitted Data:</h3>
                        <p>Name: {formData.name}</p>
                        <p>Email: {formData.email}</p>
                        <p>Password: {formData.password}</p>
                    </div>
                )}
            </div></>
  );
      }
    }     

export default MyForm1;
