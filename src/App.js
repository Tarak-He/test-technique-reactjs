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
        }],
        searchResults: [],
        isSelected: null
    }

    categoriesTable = []
    checked = []
    
    


    checkTheBoxes = (e) => { //ici l'utilisateur coche les styles qu'il préfère
        let value = e.target.value;
        if (e.target.checked === true) {
            console.log(e.target.checked)
            this.checked.push(value);
        } else {
            console.log(e.target.checked)
            this.checked.splice(this.checked.indexOf(value), 1);
        }

        let searchResults = this.state.movies.filter((movie) => { //return un tableau en booléens
            if (this.checked.includes(movie.category) === true) { //est-ce que "checked" contient un film de cette catégorie ?
            return true;
            } else { return false; }
        });
        this.setState({searchResults : searchResults})

    }

    handleDelete = id => {
        const movies = [...this.state.searchResults];
        const index = movies.findIndex(movie => movie.id === id);
        movies.splice(index, 1);
        this.setState({searchResults : movies});
    }


    render() {

        console.log(this.state.movies)
        this.state.movies.map(movie => this.categoriesTable.push(movie.category)) //Envoie les catégories du state vers categoriesTable

        let category = this.categoriesTable.filter((item, pos, self) => { //Item -> "Thriller"       pos -> 9        self -> Array(10)
            return self.indexOf(item) === pos
        }).map((checkbox, index) => {
            return (
                <div key={index} className="checkbox">
                    <label htmlFor={`checkbox${index}`}>
                        <p>{checkbox}</p>
                    </label>
                    <input id={`checkbox${index}`} type="checkbox" value={checkbox} onChange={(e) => this.checkTheBoxes(e)} />
                </div>
            )
        })

        const ShowMovies = this.state.searchResults.map((movie) => {
            return (
            <Movie
                key={movie.id}
                props={movie}
                onDelete={this.handleDelete}
                likes={movie.likes}
            />
            )
        })
        


        return (
            <div className="App">

                <div className="heading">
                    <h3>Tarak Hentati</h3>
                    <code>Développeur web</code>
                    <h1>Galerie de films</h1>
                </div>
                <div className="checkboxes-container">
                        {category}
                </div>
                <div className="movies-interface">
                    {ShowMovies}
                </div>

            </div>
        );
    }
}

export default App;