import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, List } from 'reactstrap';

class DishDetail extends Component {

    renderComments = (comments) => {
        if (!comments) {
            return (
                <div></div>
            );
        }

        const comment = comments.map((c) => {
            return (
                <div>
                    <li>
                        {c.comment}
                    </li>
                    <li>
                        -- {c.author}, {c.date}
                    </li>
                </div>
            );
        });

        return (
            <div className="col-12 col-md-5 m-1">
                <h4>
                    Comments
                </h4>
                <List type="unstyled">
                    {comment}
                </List>
            </div>
        );
    };

    renderDish = (dish) => {
        if (dish) {

            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle tag="h5">{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComments(dish.comments)}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return this.renderDish(this.props.dish);
    }
}

export default DishDetail;