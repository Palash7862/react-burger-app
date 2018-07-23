import React, { Component } from 'react';
import Oux from '../Oux/Oux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandal = (WarappedComponent, axios) => {
    
    return class extends Component {
        state = {
            error: null
        }
        componentDidlMount(){
            axios.interceptors.request.use(req=>{
                console.log(req);
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(null,error=>{
                this.setState({error: error});
                return error;
            });
        }

        componentWillUnmount () {
            this.setState({error: null});
            axios.interceptors.request.eject( this.reqInterceptor );
            axios.interceptors.response.eject( this.resInterceptor );
        }

        errorConfirmHandaler = () => {
            this.setState({error: null});
        }

        render(){
            return (
                <Oux>
                    <Modal 
                        show={this.state.error} 
                        modalClosed={this.errorConfirmHandaler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WarappedComponent  {...this.props}/>
                </Oux>
            );
        };
    };
};

export default withErrorHandal;