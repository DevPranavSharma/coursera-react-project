import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

  

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
                    </div>
                </div>
                </div>
            
         
                  );
    
            }
        return(<div></div>)
 
}



export default DishDetail;