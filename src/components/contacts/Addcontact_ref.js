import React, { Component } from 'react'

 class Addcontact extends Component {
     constructor(props){
         super(props);
        this.nameInput=React.createRef();
        this.emailInput=React.createRef();
        this.phoneInput=React.createRef();

     }

      static defaultProps ={
          name:'mostafa',
          email:'mostaf@yahoo',
          phone:'123'
      }

    onSumbit=e=>{
        e.preventDefault();
        const constact={
            name:this.nameInput.current.value,
            email:this.emailInput.current.value,
            phone:this.phoneInput.current.value
        };

        console.log(constact)
        }


    onChange=e=>{this.setState(
        {[e.target.name]:e.target.value})}
        
    render() {
        const {name,email,phone}=this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">Add contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSumbit}>
                     <div className="form-group">
                        <label htmlFor="name">name</label>
                        <input
                        type="text"
                        name="name"
                        className="form-control from-control-lg "
                        placeholder="Enter Name"
                        defaultValue={name}
                        ref={this.nameInput}
                        
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input
                        type="email"
                        name="email"
                        className="form-control from-control-lg "
                        placeholder="Enter Email"
                        defaultValue={email}
                        ref={this.emailInput}
                        
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="Phone">Phone</label>
                        <input
                        type="phone"
                        name="phone"
                        className="form-control from-control-lg "
                        placeholder="Enter Phone"
                        defaultValue={phone}
                        ref={this.phoneInput}
                        
                        />
                     </div>
                     <input
                     type="submit"
                     value="Add Contact"
                     className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
        )
    }
}
export default Addcontact;
