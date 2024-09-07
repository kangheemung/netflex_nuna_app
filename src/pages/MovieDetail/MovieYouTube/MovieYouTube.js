import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { useMovieYoutubeQuery } from '../../../hook/useMovieYoutude';
import { Button } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";


const MovieYouTubeModal = (props) => {
    const { videoData } = props;
    const { id } = useParams();

    const [showTrailer, setShowTrailer] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");
    let trailer = null;

    if (videoData && videoData.results) {
        trailer = videoData.results.find((video) => video.type === "Trailer");
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    const onReady = (event) => {
        event.target.pauseVideo();
    };
      return (
        <>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-titlevcenter">
                    Movie Trailer
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {trailerKey && (
                    <YouTube videoId={trailerKey} opts={{ height: '390', width: '100%' }} />
                )}
            </Modal.Body>
        </Modal>

        {trailer && (
            <YouTube videoId={trailer.key} opts={opts} />
        )}
    </>
);
};
const MovieYouTube = () => {
    const [modalShow, setModalShow] = useState(false);
    const { id } = useParams(); // Retrieve 'id' here using useParams()
    const { data: videoData } = useMovieYoutubeQuery(id);

    if (!videoData || videoData.length === 0) {
        return <div>Loading...</div>; // Or any other desired UI for when data is loading
    }

    console.log('trailer', videoData);

    return (
        <div>
            <Button variant="danger" onClick={() => setModalShow(true)} className="btn_modal">
                Watch In Modal
            </Button>

            <MovieYouTubeModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                videoData={videoData[0]}
            />
        </div>
    );
};

export default MovieYouTube;
