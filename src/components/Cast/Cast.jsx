import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCast } from "../../services/fetch-api";

import { Castlist,CharacterDescr, WrapperCharacter } from "./Cast.styled";

const placeholder = "https://via.placeholder.com/160x240";

const Cast = () => {
    const [actors, setActors] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        fetchCast(id)
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
            })
            .catch(error => console.log(error));

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
                        </li>
                    )
                })}
            </Castlist>
    );
};

Cast.propTypes = {
  actors: PropTypes.string,
};

export default Cast;