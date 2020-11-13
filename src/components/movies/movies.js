import React, { Component } from "react";
import { getMovies } from "../../services/fakeMovieService";
import Like from "./like/like";
class Moveis extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((mov) => mov._id !== movie._id);
    this.setState({ movies: movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({ movies: movies });
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movie in database</p>;
    return (
      <div>
        <h3>showing {count} movies in database</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    cliked={() => this.handleLike(movie)}
                    liked={movie.liked}
                    />
                </td>
                <td>
                  {
                    <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Moveis;
