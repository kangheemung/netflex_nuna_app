import React,{useState} from "react";
import { Col, Container, Alert, Spinner, Row, Badge, Button } from 'react-bootstrap';
import './MoviesDetail.style.css';
import { useDetailsMovieQuery } from '../../hook/useMovieDetail';
import { useParams } from 'react-router-dom';
import MovieReview from "./MovieReview/MovieReview";
import MovieRecommend from "./MovieRecommend/MovieRecommend";
import MovieYouTube from "./MovieYouTube/MovieYouTube";
import { useMovieYoutubeQuery } from '../../hook/useMovieYoutude';

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
  const {data: videoData} = useMovieYoutubeQuery({id});
  console.log("detail",detailData);
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
        autoplay: 1,
    },
};
  const handleClick = () => {
    setOpen(true);
  };
  const video = (event) => {
    event.target.pauseVideo();
  };
  
   
  if (detailIsLoading) {
    return (
      <div className='spinner-area'>
        <Spinner animation="border" variant="danger" style={{ width: "5rem", height: "5rem" }} />
      </div>
    );
  }

  if (detailIsError) {
    return <Alert variant="danger">{detailError.message}</Alert>; // Corrected 'error' to 'detailError'
  }

  if (!id) {
    return <Alert variant="warning">영화 정보를 불러올 수 없습니다.</Alert>;
  }


  return (
   
    <Container>
     <div>
    {videoData && videoData.length > 0 && (
        <MovieYouTube id={videoData[0].key} opts={opts} video={video} className="video_area" />
    )}
</div>
       
            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
           
                <Col xs={12} md={6}>
                    <div className='MovieCard' style={{
                        height: "650px",
                        backgroundImage: detailData.poster_path ? `url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailData.poster_path})` : 'none',
                    }} />
                </Col>
                <Col xs={12} md={6}>
                    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <h2>{detailData.title}</h2>
                        <div className="badge-container badge">
                            {detailData.genres.map((genre, index) => (
                                <Badge key={index} pill bg="danger" style={{ margin: "1em", padding: "1em", fontSize: "12px" }}>{genre.name}</Badge>
                            ))}
                        </div>
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
                       
                        <Button onClick={handleClick}>예고</Button>
                        {isOpen && <MovieYouTube id={id} />}
                    </div>
                   
                </Col>
            </Row>

            <MovieRecommend id={id} />
            <MovieReview id={id} />
        </Container>

  );
};


export default MoviesDetail;
