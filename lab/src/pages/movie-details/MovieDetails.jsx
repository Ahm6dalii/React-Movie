import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import LoadingScreen from '../../components/loading/LoadingScreen'

export default function MovieDetails() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getMovieDetails()
    }, [id])

    const getMovieDetails = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b932594aaa08e98c262cc502b4484e3d`)
            setData(response.data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    if(loading){
        return <LoadingScreen></LoadingScreen>
    }

    return (
        <>
            <h2 className='text-center'>Movie Details</h2>
            <Container className="mt-5">
                {loading && <Spinner animation="border" />}
                {error && <p>Error: {error}</p>}
                {data && (
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.original_title} />
                            </Card>
                        </Col>
                        <Col md={8}>
                            <h2>{data.original_title}</h2>
                                <p> {data.overview}</p>
                            <p><strong>Release Date:</strong> {data.release_date}</p>
                            <div className='d-flex gap-2 mb-3'>
                            {data.genres && data.genres.map((genre) => (
                                <span className='p-1  bg-danger bg-opacity-50 text-white rounded'  key={genre.id}> {genre.name}</span>
                            ))}
                            </div>
                            {data.video&&<Button variant="primary">Watch Trailer</Button>}
                            
                        </Col>
                    </Row>
                )}
            </Container>
        </>
    )
}
