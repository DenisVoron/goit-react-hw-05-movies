import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Castlist,CharacterDescr, WrapperCharacter } from "./Cast.styled";

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e338843fab235d92204cc1e536c80b21';
const placeholder = "https://via.placeholder.com/160x240";

const Cast = () => {
    const [actors, setActors] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        function fetchMovies() {
            fetch(`${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
                .then(response => response.json())
                .then(data => {
                    setActors(data.cast.map(({ profile_path, name, character }) => {
                        return {
                            poster: profile_path
                                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                                : placeholder,
                            name: name,
                            character: character,
                        };
                    })
                    );
                }).catch(error => console.log(error));
        };

        fetchMovies();
    }, [id]);

    return (
            <Castlist>
                {actors.map(({ poster, name, character }) => {
                    return (
                        <li key={name}>
                            <img src={poster} alt={name} width="180" height="240"/>
                            <p>{name}</p>
                            <CharacterDescr>
                                Character:
                                <WrapperCharacter>
                                    {character}
                                </WrapperCharacter>
                            </CharacterDescr>
                            <img src="https://via.placeholder.com/160x240" alt="" />
                        </li>
                    )
                })}
            </Castlist>
    );
};

export default Cast;