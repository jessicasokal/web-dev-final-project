import axios from "axios";
const MOVIE_API = 'http://localhost:4000/api/movies'

const api = axios.create({
    withCredentials: true
})

export const fetchMovieByIMDBID = async (movieIMDBID) => {
    const response = await api.get(`${MOVIE_API}/${movieIMDBID}`)
    return response.data
}

export const createMovieInDatabase = async (movieID) => {
    const response = await api.post(`${MOVIE_API}`,
        {imdbID: movieID})
    return response.data;
}

export const addLike = async (movie) => {
    await api.put(`${MOVIE_API}/${movie._id}`, {
        ...movie,
        likes: movie.likes + 1
    })
    return movie.likes + 1
}

export const addComment = async (movie, comment, profile) => {
    console.log(`CURR MOVIE: ${JSON.stringify(movie)} COMMENT: ${JSON.stringify(comment)}`)
    await api.put(`${MOVIE_API}/${movie._id}`, {
        ...movie,
        comments: [...movie.comments, {comment: comment, profile: profile}]
    })
}

export const fetchLikes = async (movieIMDBID) => {
    const response = await api.get(`${MOVIE_API}/${movieIMDBID}/likes`)
    return response.data
}

export const fetchComments = async (movieID) => {
    const response = await api.get(`${MOVIE_API}/${movieID}/comments`)
    return response.data
}


export const postComment = async (userId, imdbID, comment) => {
    const response = await api.post(`${MOVIE_API}/${imdbID}/comments/${userId}`, comment)
    return response.data
}

export const findCommentsByImdbID = async (imdbID) => {
    const response = await api.get(`${MOVIE_API}/${imdbID}/comments`)
    return response.data
}

export const findCommentsByUserId = async (userId) => {
    const response = await api.get(`http://localhost:4000/users/${userId}/comments`)
    return response.data
}