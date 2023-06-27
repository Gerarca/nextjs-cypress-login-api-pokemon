import React from "react";
import Image from 'next/image';

interface image{
    front_default: string
}

interface Moves{
    move: {
        name: string,
        url: string
    }
}

interface abilities{
    ability:{
        name: string,
        url: string
    }
}

interface Forms{
    name: string
}

interface Species{
    name: string
    url: string
}

interface PokemonInfo{
    id: number,
    abilities: abilities[],
    base_experience: number,
    forms: Forms[],
    game_indices: Array<object>,
    height: number,
    moves: Moves[],
    name: string,
    order: number,
    species: Species,
    sprites: image,
    weight: number
}

const PokemonInitialInfo =  {
    id: 0,
    abilities: [{
        name: '',
        url: ''
    }],
    base_experience: 0,
    forms: [{
        name: ''
    }],
    game_indices: [{}],
    height: 0,
    weight: 0,
    moves: [{
        name: '',
        url: ''
    }],
    name: '',
    order: 0,
    species: {},
    sprites: [{
        front_default: ''
    }]   
}

export default function ModalPokeInfo({
    pokemon={
        id: 0,
        abilities: [{
            ability:{
                name: '',
                url: ''
            }
        }],
        base_experience: 0,
        forms: [{
            name: ''
        }],
        game_indices: [{}],
        height: 0,
        weight: 0,
        moves: [{
            move:{
                name: '',
                url: ''
            }
        }],
        name: '',
        order: 0,
        species: {
            name: '',
            url: ''
        },
        sprites: {
            front_default: ''
        } 
    },
    setShowModal=()=>{}
}:{
    pokemon?:PokemonInfo
    setShowModal:(open: boolean) => void;
}) { 

    const handleModal = (show:boolean) => {
        setShowModal(show)
    }

    const capitalizeFirstLowercaseRest = (str: string) => {
        return (
          str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        );
      };

    const moves: Moves[] = pokemon.moves.slice(0,15)

    return(
        <div key={pokemon.id} className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-opacity-70 bg-slate-900 flex">
            <div className="relative w-full max-w-2xl max-h-full flex m-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 mx-auto">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                           {capitalizeFirstLowercaseRest(pokemon.name)}
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={()=>handleModal(false)}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only" >Close modal</span>
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="w-full flex">
                            <div className="w-1/2">
                                {
                                    //@ts-ignore
                                }
                                <img className="w-48 h-48 mx-auto" src={pokemon.sprites.front_default} alt={pokemon.name} />
                            </div>
                            <div className="w-1/2">
                                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                    Abilityes: &nbsp;   
                                        <span className="font-semibold text-gray-500 w-full">
                                            {capitalizeFirstLowercaseRest(pokemon.abilities[0].ability.name)},&nbsp;  
                                            {capitalizeFirstLowercaseRest(pokemon.abilities[1].ability.name)}
                                        </span>  
                                </p>
                                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                    Kind: &nbsp;    
                                        <span className="font-semibold text-gray-500 w-full">
                                            {capitalizeFirstLowercaseRest(pokemon.species.name)}
                                        </span>  
                                </p>
                                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                    Form: &nbsp;    
                                        <span className="font-semibold text-gray-500 w-full">
                                            {capitalizeFirstLowercaseRest(pokemon.forms[0].name)}
                                        </span>  
                                </p>
                                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                    Height: &nbsp;    
                                        <span className="font-semibold text-gray-500 w-full">
                                            {pokemon.height}
                                        </span>  
                                </p>
                                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                    Weiht: &nbsp;    
                                        <span className="font-semibold text-gray-500 w-full">
                                            {pokemon.weight}
                                        </span>  
                                </p>
                            </div>

                        </div>

                        <div className="pt-4 w-full">
                            {
                                moves.map((item:Moves, index:number) => {
                                    return(
                                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                                            #{item.move.name}
                                        </span>
                                    )
                                })                            
                            }                            
                        </div>
                    </div>
                    <div className="flex p-3 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 border w-full">
                        <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-auto" onClick={()=>handleModal(false)}> Acept</button>
                    </div>
                </div>
            </div>
        </div>
    )
}