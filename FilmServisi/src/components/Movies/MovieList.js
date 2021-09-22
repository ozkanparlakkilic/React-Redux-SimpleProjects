
import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as movieAction from '../../redux/action/movieAction';
import {Row,Col,Card,CardBody,CardImg,CardTitle,CardText} from 'reactstrap'


class MovieList extends Component {
    componentDidMount() {
        this.props.actions.getMovies();
    }
    render() {
        return (
            <div>
                <div>
                    {
                        this.props.movies.map((movie) => (
                        
                        <Card key={movie.id} className="mt-2">
                            <Row>
                                <Col className="col-3">
                                    <CardImg className="img-fluid" style = {{maxHeight:"300px",maxWidth:"300px"}} src={movie.poster} alt="Card image cap" />
                                </Col>
                                <Col className="col-9">
                                    <CardBody>
                                        <CardTitle tag="h5">{movie.title}</CardTitle>
                                        <CardText>{movie.overview}</CardText>
                                        {
                                            movie.genres.map((genre) => (
                                                <button className="mx-1 btn btn-primary">{genre}</button>
                                            ))
                                        }
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card> 
                        ))
                    }
                    
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      movies: state.movieListReducer,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        getMovies: bindActionCreators(movieAction.getMovies, dispatch),
      },
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
