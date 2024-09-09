import React,{useState} from "react";
import { Col, Container, Alert, Spinner, Row, Badge, Button } from 'react-bootstrap';
import './MoviesDetail.style.css';
import { useDetailsMovieQuery } from '../../hook/useMovieDetail';
import { useParams } from 'react-router-dom';
import MovieReview from "./MovieReview/MovieReview";
import MovieRecommend from "./MovieRecommend/MovieRecommend";
import MovieYouTube from "./MovieYouTube/MovieYouTube";
import YouTube from 'react-youtube';
import { useMovieYoutubeQuery } from "../../hook/useMovieYoutube";
import{useMovieGenreQuery} from "../../hook/useMovieGenre";
//vercel
//카드를 클릭하면 영화 상세페이지롤 넘어간다.
//상세 페이지 디자인
//필요한 정보 
// 영화 포스터 url을 poster_path앞에 쓰다
// 영화 제목ok
// 장르
// 영화 인기도 
// 영화 줄거리 
// 예산(,)를 붙혀주자
// 개봉일
//========
//리뷰 보여주기
//추천 영화 보여주기
//예고편 보여주기
// 영화를 인기순을 정렬
// 장르별로 필터링
// 에러 핸들링
const MoviesDetail = ({ movie }) => {

  const { id } = useParams();
  const [isOpen, setOpen] = useState(false);
  const { data: detailData, isLoading: detailIsLoading, isError: detailIsError, error: detailError } = useDetailsMovieQuery(id);
  const { data: videoData } = useMovieYoutubeQuery(id);
  const { data: genreData } = useMovieGenreQuery();
   console.log("vedeo",videoData);
  console.log("detail",detailData);

  const handleClick = () => {
    setOpen(!isOpen);
  };


  if (detailIsLoading) {
    return (
      <div className='spinner-area'>
        <Spinner animation="border" variant="danger" style={{ width: "5rem", height: "5rem" }} />
      </div>
    );
  }

  if  (detailIsError) {
    return <Alert variant="danger">{detailError.message}</Alert>;
  }

  const trailerKey = videoData?.[0]?.key ?? '';
console.log("trailerKey",trailerKey)
  return (

    <Container>
    
            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Col xs={12} md={6}>
                    <div className='MovieCard' style={{
                        height: "650px",
                        backgroundImage: detailData.poster_path ? `url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailData.poster_path})` : 'none',
                    }} />
                      <div className= "detail_text_box"style={{ textAlign: 'left' ,margin: "1em" }}>
                         <h2 style={{ textAlign: 'left' ,margin_left: "1em" }}>{detailData.title}</h2>
                        <div className="badge-container badge" style={{ display: 'flex'}}>
                            {detailData.genres.map((genre, index) => (
                                <Badge key={index} pill bg="danger" style={{ margin: "1em", padding: "1em", fontSize: "8px" }}>{genre.name}</Badge>
                            ))}
                        </div>
                        {detailData&&
                              <div  >
                                  <div className='play-button'>
                                    <Button variant='danger' onClick={() => setOpen(true)}>
                                      Preview<span className='btn-play'> ▶</span>
                                    </Button>
                                  </div>
                                    {isOpen &&<MovieYouTube
                                                movieID={trailerKey}
                                                show={isOpen}  onHide={() => setOpen(false)}
                                                className="video_area"
                                    />}
                              </div>}
                      </div>
           
                </Col>
                
                <Col xs={12} md={6}>
                    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                     
                        <div className="detailData_container">
                            <div className="detailData_container_text"><img alt='Vote Average'/> {detailData.vote_average}</div>
                            <div className="detailData_container_text"><img alt='Popularity'/> {detailData.popularity}</div>
                            <div className="detailData_container_text">{detailData.adult ? <img alt="Adult" src="adult-icon.png" /> : 'All Ages'}</div>
                        </div>
                        <div>{detailData.overview}</div>
                        <div className="detailData_number">
                            <div className="detailData_number_detail"><Badge pill bg="danger">Budget</Badge> ${detailData.budget.toLocaleString()}</div>
                            <div className="detailData_number_detail"><Badge pill bg="danger">Revenue</Badge> ${detailData.revenue.toLocaleString()}</div>
                            <div className="detailData_number_detail"><Badge pill bg="danger">Release Date</Badge> {detailData.release_date}</div>
                            <div className="detailData_number_detail"><Badge pill bg="danger">Runtime</Badge> {detailData.runtime} minutes</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <MovieRecommend id={id} />
            <MovieReview id={id} />
        </Container>

  );

};


export default MoviesDetail;
