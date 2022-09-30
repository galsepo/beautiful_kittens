import { Kittens } from "../../App";
import "./card.style.css";

type CardProps = {
    kitty: Kittens;
}

const Card = ({ kitty: kitty }: CardProps) => {
    const { id, name, email } = kitty;
    return (
        <div className="card-container" key={id}>
            <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={` ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
};

export default Card;


// class Card extends Component {
//     render() {
//         const { name, email, id } = this.props.monster;

//         return (
//             <div className="card-container" key="id">
//                 <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={` ${name}`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         );
//     }
// }
