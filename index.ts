(function(){

const API_URL: string = 'https://pokeapi.co/api/v2/';
const POKEMON: string = 'pokemon/:id/';

function obtenerPokemon(id: number): Promise<void> {
    const url: string = `${API_URL}${POKEMON.replace( ':id', id.toString() )}`;

    const showPokemon = pokemon => {
        console.log( `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`,
                        pokemon.id,
                        pokemon )
        return Promise.resolve( pokemon )
    }

    return fetch( url, { method: 'GET' } )
            .then( data => {
                Promise.resolve( data )
                return data.json()} )
            /* .then( showPokemon ) */
            .catch( error => Promise.reject( error ) )

};

/* let accum = 0;
const numberRandom = () => {
    accum++;
    return accum
} */


/* obtenerPokemon( numberRandom() )
.then( () => obtenerPokemon( numberRandom() ) )
.then( () => obtenerPokemon( numberRandom() ) )
.then( () => obtenerPokemon( numberRandom() ) )
.then( () => obtenerPokemon( numberRandom() ) )
.then( () => obtenerPokemon( numberRandom() ) )
.catch( onError ) ;
*/


const onError = (error: any) => {
    console.error( error )
}


async function obtenerPokemones(){
    const ids = []
    for (let i = 1; i <= 200; i++) {
        ids.push(i)
    }

    const promises = ids.map(id => obtenerPokemon(id))
    try{
        const pokemones = await Promise.all(promises)
        console.log(pokemones)
    } catch( id ){
        onError( id )
    }
}

obtenerPokemones();
}());

