import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../Context';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Contact extends Component {
    state={
        showContactInfo:false
    };


    onShowClick=(e)=>{
     this.setState({showContactInfo:!this.state.showContactInfo})};

    onDeleteClick= async (id,dispatch)=>{
      try{ await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type:'DELETE_CONTACT',payload:id})}
        catch{
            dispatch({type:'DELETE_CONTACT',payload:id})
        }
    }


    render() {
        const {id,email,name,phone}=this.props.contact;
        const {showContactInfo}=this.state;
        return (
         <Consumer>
                {vlaue =>{
                    const {dispatch} =vlaue
                  return(
            <div className="card card-body mb-3">
                <h1>{name}{'  '}
                    <i 
                    onClick={this.onShowClick}
                    className="fas fa-sort-down"
                    style={{cursor:'pointer'}}
                    /> 
                    <i 
                    className="fas fa-times"
                    style={{cursor:'pointer',float:'right',color:'red'}}
                    onClick={this.onDeleteClick.bind(this,id,dispatch)}
                    />
                    <Link to={`/edit/contact/${id}`}>
                    <i className="fas fa-pencil-alt"
                        style={{
                            color:'black',
                            cursor:'pointer',
                            float:'right',
                            marginRight:'1 rem'
                        }}/>

                    </Link>
                </h1>
                {showContactInfo ? (
                    <ul className='list-group'>
                     <li className='list-group-item'>Email:{email}</li>
                     <li className='list-group-item'>Phone:{phone}</li>
                  </ul>
                ): null}   
            </div>
                  )
                }}
          </Consumer>

            
        )
    }
}

Contact.propTypes={
    contact:PropTypes.object.isRequired,
    }

export default Contact;