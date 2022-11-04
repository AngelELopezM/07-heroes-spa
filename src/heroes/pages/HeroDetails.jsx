import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getheroById";

export const HeroDetails = () => {

    const { id } = useParams();

    const hero = useMemo(()=>  getHeroById(id), [id]);

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }

    const imgURL = `../assets/heroes/${id}.jpg`;

    if (!hero) {
        return <Navigate to="/marvel" />
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    src={imgURL}
                    alt={hero.superhero}
                />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3">Charactes</h5>
                <hr />
                <p>{hero.characters}</p>
                <button
                    className="btn btn-outline-danger"
                    onClick={onNavigateBack}
                >
                    Go back
                </button>
            </div>
        </div>
    )
}
