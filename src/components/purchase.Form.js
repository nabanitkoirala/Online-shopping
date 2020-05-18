import React, { Component } from 'react';
import './purchase.Form.css';
import { Link } from 'react-router-dom';

export default class PurchaseForm extends Component {
    constructor(event){
        super(event);
        this.state={
            name:'',
            address:'',
            phonenumber:'',
            isSubmitting:false,
            cartList:[],
            iscartList:false
        }
        
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }

    Purchase=(value)=>{

    }

    handleChange=(event)=>{
        const {name,value}= event.target;
        this.setState({
            [name]:value  
        },()=>{this.checkValue();})
    }
    checkValue=(event)=>{
        let Value=this.state.name.length>5 && this.state.address.length>5 && this.state.phonenumber.length>9 && this.state.phonenumber.length<11
                ? this.setState({isSubmitting:true})
                : this.setState({isSubmitting:false})
           }
   

    render() {
        let btn=this.state.isSubmitting 
                ?<Link to="/"><button  className="btn btn-success" type="submit">submit</button></Link>
                :<button type="submit" disabled>Please fill the informations to continue</button>
        let CheckfeedbackName=this.state.name.length>5
                ?<p className="text-success">Valid Name</p>
                :<p className="text-danger">Fullname must be greater than 6 digits</p>    
        let CheckfeedbackAddress=this.state.address.length>5
                ?<p className="text-success">Valid Address</p>
                :<p className="text-danger">Address must be greater than 6 digits</p>
        let CheckfeedbackPhonenumber=this.state.phonenumber.length>9 && this.state.phonenumber.length<11
                ?<p className="text-success">Valid Phone Number</p>
                :<p className="text-danger">Phone Number must be 10 digits number</p> 

        return (
            <div>
                <form onClick={ this.handleSubmit }>
                <div className="container contact">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="contact-info">
                                <img src="https://image.ibb.co/kUASdV/contact-image.png" alt=""/>
                                <h2>Information Form</h2>
                                <h4>Please provide us your valid information,so we can deliver the product to your Door Step.Thankyou</h4>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="contact-form">
                               <div className="form-group">
                                        <label className="control-label col-sm-2" htmlFor ="fullname">Full Name:</label>
                                   <div className="col-sm-10">          
                                        <input type="text" className="form-control" id="fname" placeholder="Enter Full Name" name="name" onChange={this.handleChange}/>
                                        { CheckfeedbackName } 
                                    </div> 
                                    </div> 
                                    
                                    <div className="form-group">
                                        <label className="control-label col-sm-2" htmlFor ="address">Address:</label>
                                   <div className="col-sm-10">          
                                        <input type="text" className="form-control" id="fname" placeholder="Enter full address" name="address" onChange={this.handleChange}/>
                                        { CheckfeedbackAddress }
                                    </div>
                                    </div> 
                                    
                                    <div className="form-group">
                                        <label className="control-label col-sm-2" htmlFor="fname">Mobile Number:</label>
                                   <div className="col-sm-10">          
                                        <input type="number" className="form-control" id="fname" placeholder="Enter Mobile Number" name="phonenumber" onChange={this.handleChange}/>
                                        { CheckfeedbackPhonenumber }
                                    </div>   
                                    </div>        
                                    
                               {btn}
                            </div>
                        
                        </div>
                    </div>
                </div>
                </form>
            </div>      
           
        )
    }
}
