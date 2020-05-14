import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';



  

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
                
                     <div className="row">
                     <RenderDish dish={props.dish}/>
                     
                      <ul className="col-12 col-md-3 list-unstyled align-self-center">
                      <h4>Comments</h4>
                      <RenderComments comments={props.dish.comments}/>
                    </ul>
                    
            
                     </div>
         
                  );
    
            }
        return(<div></div>)
 
}



export default DishDetail;