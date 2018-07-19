import React, { Component } from 'react'; 
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {  
    render(){  
        return (
            <div className={classes.contactDataWarp} style={{textAlign: 'center'}}> 
                <div className={classes.condtactFormInner}>
                    <h3>Your Address</h3>
                    <form onSubmit={this.props.orderPlaceHandaler}>
                        <input type="text" name="name" placeholder="Your Name" onChange={this.props.inputChangeHandaler} />
                        <input type="text" name="email" placeholder="Your Email" onChange={this.props.inputChangeHandaler} />
                        <input type="text" name="address" placeholder="Your Address" onChange={this.props.inputChangeHandaler} />
                        <input type="text" name="state" placeholder="Your State" onChange={this.props.inputChangeHandaler} />
                        <input type="text" name="zipcode" placeholder="Your ZipCode" onChange={this.props.inputChangeHandaler} />
                        <div className="btn-group">
                            <Button btnType="Danger" >Cancel</Button>
                            <Button btnType="Success">Continue</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactData;