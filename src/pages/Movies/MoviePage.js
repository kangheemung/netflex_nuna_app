import React from 'react';
import './MoviePage.style.css';
import { Row, Col } from 'react-bootstrap';
import { Alert, Container, Spinner} from "react-bootstrap";
import { useSearchMovieQuery} from '../../hook/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../common/MovieCard/MovieCard';
//경로 2가지
//nav 바에서 클릭해서 온 경우 =>popularMovie 보여주기
//keyword입력해서 온경우 =>keyword와 관련된 영화들을 보여줌
//pagenation설치
//
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({keyword});
  console.log("Moviepage", data);
  if(isLoading){
    return (
        <div className='spinner-area'>
            <Spinner
            animation="border"
            variant="danger"
            style={{width: "5rem", height:"5rem"}}/>
        </div>
    );
  }
  if(isError){
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
      <Container>
        <Row></Row>
        <Row>
          <Col lg={4} xs={12}>
            {" "}
            필터{" "}
          </Col>
          <Col>
            <Row>
              {data?.results.map((movie, index) => (
                <Col key={index} lg={4} md={6} sm={8} xs={12} >
                   <div className="movie-card-wrapper">
                    <MovieCard movie={movie} />
                   </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
  );
};

export default MoviePage
