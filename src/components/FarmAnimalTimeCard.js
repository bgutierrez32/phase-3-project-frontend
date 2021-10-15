import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function FarmAnimalTimeCard({timesToRender, handleTimeDelete}){
    // console.log("In FarmAnimalTimeCard: ", timesToRender)
    const trash = <FontAwesomeIcon icon={faTrash} />
    const clickHandleTimeDelete=()=>{

        handleTimeDelete(timesToRender)
    }

    return(<div className="timeCard">

     <h2>{timesToRender.time}</h2>

     <button onClick={clickHandleTimeDelete}>{trash}</button>
     
        {
            timesToRender.farm_animals.map(eachAnimal => { 
            // console.log(eachAnimal)
             
            return(<div className="timeAnimals">
            
                <h2>{eachAnimal.name}</h2>
                <img src={eachAnimal.image}/>
            
                </div>)
            })
        }

    </div>)

    
    }
export default FarmAnimalTimeCard