import { useState, useEffect } from "react"
import Api from "../../utils/api"
import './cats.css'
import CatCard from "../../components/catCard"

/**
 * Seite die alle Katzen anzeigt
 * @returns Kadsen
 */
const Cats = () => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const fetchCats = async () => {
            const data = await Api.getAllCats()
            setCats(data);
        };

        console.log(cats)
        fetchCats()
    }, []);

    return (
        <>
            <h2>Hier sind alle Kadsen :3</h2>
            
            {cats.map((cat) => (
                <CatCard key={cat.id} cat={cat} />
            ))}

            <br/><br/><br/><h1>+</h1><br/><br/><br/>
        </>
    )
}

export default Cats