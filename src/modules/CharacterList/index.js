import React,{useEffect} from 'react'
import { getCharacters } from '../../apis';

const CharacterList = () => {

    useEffect(() => {
        getCharacters();
    }, [])

    return (
        <div>
            Blablabla
        </div>
    )
}

export default CharacterList
