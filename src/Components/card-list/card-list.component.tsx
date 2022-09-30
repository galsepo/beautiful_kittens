import Card from "../card/card.component";
import "./card-list.style.css";
import { Kittens } from '../../App'

type CardListProps = {
    kittens: Kittens[];
}

const CardList = ({ kittens: kittens }: CardListProps) => (

    <div className="card-list">
        {kittens.map((kitty) => {
            return <Card key={kitty.id} kitty={kitty} />;
        })}
    </div>
)

export default CardList; 