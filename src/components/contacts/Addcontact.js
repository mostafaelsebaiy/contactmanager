import React, { Component } from 'react';
import {Consumer} from '../../Context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

 class Addcontact extends Component {
        state={
            name:'',
            email:'',
            phone:'',
            errors:{}
        }

    onSumbit=async(dispatch,e)=>{
        e.preventDefault()
        const {email,name,phone} =this.state ;

        if(name===''){
            this.setState(
             {errors:{name:'Name is requiured'}})
             return;
        }
        if(email===''){
            this.setState(
             {errors:{email:'Email is requiured'}})
             return;
        }
        if(phone===''){
            this.setState(
             {errors:{phone:'Phone is requiured'}})
             return;
        }


        const newContact={
            email,
            name,
            phone
        };

        const res = await axios.post('https://jsonplaceholder.typicode.com/users',newContact)
        dispatch({type:'Add_CONTACT' ,payload:res.data});
        
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        })
        this.props.history.push('/')
        }


    onChange=e=>{this.setState(
        {[e.target.name]:e.target.value})}

    render() {
        const {name,email,phone,errors}=this.state;

        return(
     <Consumer>
                {value =>{
                    const {dispatch} =value;
                    return(
            <div className="card mb-3">
                <div className="card-header">Add contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSumbit.bind(this,dispatch)}>
                     <TextInputGroup
                        label="Name"
                        name='name'
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.onChange}
                        error={errors.name}
                     />
                      <TextInputGroup
                        label="Email"
                        name='email'
                        type='email'
                        placeholder="Enter Email"
                        value={email}
                        onChange={this.onChange}
                        error={errors.email}
                     />
                      <TextInputGroup
                        label="Phone"
                        name='phone'
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={this.onChange}
                        error={errors.phone}
                     />
   
                     <input
                     type="submit"
                     value="Add Contact"
                     className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
                    )
                }}
     </Consumer>
        )

    }
}
export default Addcontact;
