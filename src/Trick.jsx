import {useState} from "react";


function Trick({category, title, description}){

    const [flipped, setFlipped] = useState(false)

    function handleClick() {

        setFlipped(!flipped)

        console.log(flipped)
    }

    return (
            <div  onClick={
                ()=>{ handleClick()}
            }>
             {/*Card Front*/}
             {!flipped &&

                     <div
                         // onClick={
                         //     ()=>{ handleClick()}
                         // }
                         className='card'>


                        <div className='top'>
                            <p>{category}</p>
                            <img src='../public/vite.svg' />
                        </div>

                        <div className='bottom'>
                            <h2>{title}</h2>
                            {/*<p>{description}</p>*/}
                        </div>
                     </div>

             }

             {/*Card Back*/}
             {flipped &&
                 <div
                     // onClick={
                     //     ()=>{ handleClick()}
                     // }
                     className='card-back'>
                     <p>{description}</p>
                 </div>
             }

            </div>


    )

}
export default Trick



