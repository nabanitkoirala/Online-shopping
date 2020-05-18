import React, { Component } from 'react';
import './admin.login.css';

export default class Admin extends Component {
    constructor(event){
        super();
        this.state={
            username:'',
            password:'',
            isSubmitting:false
        }
    }
    handleChange=(event)=>{
        const {name,value}=event.target;
        this.setState({
            [name]:value
        },()=>{this.checkError();})
        console.log(this.state);
    }
   

                        
                        
   
    checkError=(event)=>{
        let error=this.state.username.length>8 && this.state.password.length>8
                    ? this.setState({isSubmitting:true})
                    : this.setState({isSubmitting:false})
       
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        let btn=this.state.isSubmitting
                    ?<button className="btn btn-success"><span>Login</span></button>
                    :<button className="button-container" disabled><span>Please provide username/password</span></button>
        let countPassword=this.state.password.length>8 || this.state.password.length===0
                    ? ''
                    :<p className="text-danger">Password must contain atleast 8 character </p>            
        let countUsername=this.state.username.length>8 || this.state.username.length===0
                    ? ''
                    :<p className="text-danger">Password must contain atleast 8 character </p>                        
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact">
                            <h2>For any Query Please contact Us @:product@gmail.com</h2><br/>
                                    <p className="kot"> Koteshwor,Kathmandu</p>
                                    <p className="kot">Contact:01-44588888,01-2344444</p>
                                    <p className="kot">Hotline Numbers:980233333,9841232333</p>
                        </div>            
                    </div>
                    <div className="col-md-6">
                        <div className="login">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active text-align form-new" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register-heading">For Official Use Only</h3>
                            <div className="row register-form">
                                <div className="col-md-12">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input type="text" name="username" className="form-control" placeholder="username" onChange={this.handleChange}/>
                                        </div>
                                        {countUsername}
                                        <div className="form-group">
                                            <input type="password" name="password" className="form-control" placeholder="password" onChange={this.handleChange}/>
                                        </div>
                                        {countPassword}
                                        {btn}
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>                       
                
            </div>
 

        )
    }
}
