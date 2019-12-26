import Axios from 'axios'

export default async (req, res) => {
    const { data: { data: { movies } } } = await axios.get("https://yts.lt/api/v2/list_movies.json?sort_by=rating");
    this.setState({
        movies: movies,
        isLoading: false
    });

}