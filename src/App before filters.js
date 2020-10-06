import React, { useEffect, useState } from 'react';
import movies from './Config/Movies'
import Movie from './Components/Movie'

import './App.css'

class App extends React.Component {

    state = {
        movies : [
        {
            id: '1',
            title: 'Oceans 8',
            category: 'Comedy',
            likes: 4,
            dislikes: 1
        }, {
            id: '2',
            title: 'Midnight Sun',
            category: 'Comedy',
            likes: 2,
            dislikes: 0
        }, {
            id: '3',
            title: 'Les indestructibles 2',
            category: 'Animation',
            likes: 3,
            dislikes: 1
        }, {
            id: '4',
            title: 'Sans un bruit',
            category: 'Thriller',
            likes: 6,
            dislikes: 6
        }, {
            id: '5',
            title: 'Creed II',
            category: 'Drame',
            likes: 16,
            dislikes: 2
        }, {
            id: '6',
            title: 'Pulp Fiction',
            category: 'Thriller',
            likes: 11,
            dislikes: 3
        }, {
            id: '7',
            title: 'Pulp Fiction',
            category: 'Thriller',
            likes: 12333,
            dislikes: 32
        }, {
            id: '8',
            title: 'Seven',
            category: 'Thriller',
            likes: 2,
            dislikes: 1
        }, {
            id: '9',
            title: 'Inception',
            category: 'Thriller',
            likes: 2,
            dislikes: 1
        }, {
            id: '10',
            title: 'Gone Girl',
            category: 'Thriller',
            likes: 22,
            dislikes: 12
        }]
    }
    
    handleDelete = id => {
        const movies = [...this.state.movies];
        const index = movies.findIndex(movie => movie.id === id);
        movies.splice(index, 1);
        this.setState({movies});
    }


    render() {

        return (
            <div className="App">

                <div className="heading">
                    <h3>Tarak Hentati</h3>
                    <code>Développeur web</code>
                    <h1>Galerie de films</h1>
                </div>

                <div className="movies-interface">
                    {
                        this.state.movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                props={movie}
                                onDelete={this.handleDelete}
                                likes={movie.likes}
                            />
                        ))
                    }
                </div>

            </div>
        );
    }
}

export default App;