import Table from 'react-bootstrap/Table';
import { Row, Container, Col } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import './Movies.css';
import MovieDetail from './MovieDetail'

function Movies() {
    let [movies, setMovies] = useState([]);
    let [movieDetail, setDetailMovie] = useState([]);
    let [displayMovie, setDisplay] = useState(false);

    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("movies") === null) {
                setMovies("Loading...")
            } else {
                setMovies(localStorage.getItem("movies"));
            }
        } else {
            const url = new URL("https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json");
            fetch(url).then(res => res.json()).then(res => {
                setMovies(res);
                localStorage.setItem("movies", res);
            })
        }
    }, []);

    useEffect(() => {
        console.log(displayMovie);
    })
    return (<div>
        <Container fluid>
            <Row>
                <Col className="banner"><h5>Movies</h5></Col>
            </Row>
            <Row>
                <Col>
                    <Table className="moviesTable" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Directed by</th>
                                <th>Country</th>
                                <th>Budget</th>
                                <th>Release</th>
                                <th>Views</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(m => <tr onClick={() => { setDetailMovie(movies.find(element => element.id === m.id)); setDisplay(true); }}><td key={"id" + m.id}>{m.id}</td>
                                <td key={"name" + m.id}>{m.name}</td>
                                <td key={"directedBy" + m.id}>{m.directedBy}</td>
                                <td key={"country" + m.id}>{m.country}</td>
                                <td key={"budget" + m.id}>{m.budget}</td>
                                <td key={"release" + m.id}>{m.releaseDate}</td>
                                <td key={"views" + m.id}>{m.views}</td></tr>)}
                        </tbody>
                    </Table>
                </Col>
                <MovieDetail name={movieDetail.name} imagen={movieDetail.poster} desc={movieDetail.description} displayMovie={displayMovie} cast={movieDetail.cast}></MovieDetail>

            </Row>
        </Container>
    </div>);
}


export default Movies;