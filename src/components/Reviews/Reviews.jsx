import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e338843fab235d92204cc1e536c80b21';

const Reviews = () => {

    const {id} = useParams();
    console.log(id);

    //const id = id;
    useEffect(() => {
        function fetchMovie() {
            fetch(`${API_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
                .then(response=> response.json())
                .then(data =>{})
        }

        fetchMovie();
    }, []);

    return (
        <section>
            <ul>
                <li>
                    <p>Author:</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, nesciunt
                        veniam. Excepturi itaque, voluptates fugiat perspiciatis quo saepe! Iste
                        eaque porro eveniet error dicta, modi ipsum hic quis minima inventore.
                    </p>
                </li>
                <li>
                    <p>Author:</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quaerat
                        illum excepturi odit doloremque, vitae quasi corporis commodi nisi quae
                        perspiciatis amet consectetur reprehenderit inventore laborum facilis
                        quia mollitia exercitationem eaque rerum dignissimos maiores, quos iure
                        blanditiis. Dolorem, nam? Aliquid sequi molestias vel, tenetur maxime
                        pariatur? Molestiae libero cum quidem.
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Reviews;