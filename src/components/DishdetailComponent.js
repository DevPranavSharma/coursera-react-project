import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal,ModalHeader,ModalBody,Input, Label,Row,Col } from 'reactstrap';

import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

  

  function   RenderComments({comments}) {
       if(comments!=null){
        const comment =comments.map((comment) => {
            return (
                
              <li className="row" key={comment.id}>
                   <div className="col-12"><p>{comment.comment}</p></div>
                   <div className="col-12">- -{comment.author} {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
              
              </li>
            );
        });
        return(comment)}
        else {
            return (<div></div>)
            }
    }
    
       
    
 function  RenderDish({dish}){
        return(
        <Card className="col-12 col-md-5 m-1">
                    <CardImg   top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
        )   
}
    
class  CommentForm extends Component{
  constructor(props){
    super(props)
    this.toggleModal=this.toggleModal.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
  };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })}


    handleSubmit(values) {
      console.log('Current State is: ' + JSON.stringify(values));
      alert('Current State is: ' + JSON.stringify(values));
      // event.preventDefault();
  }
  render(){
    return(
      <React.Fragment>
      <Button outline className="btn " onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            
                            <Label htmlFor="rating"  className="Row col-12">Rating</Label>
                            <Row className="form-group">
                                <Col md={10}>
                                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                 <option value="0">0</option>
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="3">3</option>
                                 <option value="4">4</option>
                                 <option value="5">5</option>
                                </Control.select>
                                </Col>
                          
                            </Row>
                            
                            <Label htmlFor="name"  className="Row col-12">Your Name</Label>
                            <Row className="form-group">
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name" className="form-control"  validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15),
                                        }} />
                                        <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                        }}/>
                                        
                                </Col>
                              
                            </Row>

                            <Label htmlFor="comment"  className="Row col-12">Comment</Label>
                            <Row className="form-group">
                                <Col md={10}>
                                    
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                          
                            </Row>
                      

                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                            
                    </ModalBody>
                </Modal>
                </React.Fragment>
      
      
    )
  }
}


    const DishDetail =(props)=>{
        
        
        if(props.dish!=null){
            return (
                
              
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                        <div className="row col-12"><CommentForm/></div>
                    </div>
                </div>
                </div>
            
         
                  );
    
            }
        return(<div></div>)
 
}



export default DishDetail;