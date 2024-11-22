import './catCard.css'
import cat0 from '../assets/cat0.png';
import cat1 from '../assets/cat1.png';
import cat2 from '../assets/cat2.png';
import cat3 from '../assets/cat3.png';

const catImages = {
    0: cat0,
    1: cat1,
    2: cat2,
    3: cat3,
};

const CatCard = ({ cat }) => {
    console.log(cat)

    return (
        <div className="catCard">
            <img src={catImages[cat.id % 4]}  alt={cat.name}/>
            <div style={{padding: 20}}>
                <h1> {cat.name} <span className='id'> #{cat.id} </span> </h1> 
                <p> <b>Alter:</b>          <span className='right'> {cat.age}</span></p>
                <hr/>
                <p> <b>Spezies:</b>        <span className='right'> {cat.specie}</span></p>
                <hr/>
                <p> <b>Vegan:</b>          <span className='right'> {cat.isVegan ? "Ja" : "Nein"}</span></p>
            </div>
        </div>
    )

}

const styles = {
}

export default CatCard