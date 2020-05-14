import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

  class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.renderDish=this.renderDish.bind(this)

        
    }

    renderComments(comments) {
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
    
       
    
    renderDish(dish){
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
    


    render() {
        
        
        if(this.props.dish!=null){
            


        return (
         <div className="row">
           {this.renderDish(this.props.dish)}
        <ul className="col-12 col-md-3 list-unstyled">
              <h4>Comments</h4>
            {this.renderComments(this.props.dish.comments)}
            </ul>
            
        </div>
         
        );
    
    }
    return(<div></div>)
 
}

}

export default DishDetail;