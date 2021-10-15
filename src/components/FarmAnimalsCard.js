import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
function FarmAnimalsCard({animalsToRender, handleAnimalDelete}){
    console.log("In FarmAnimalCard: ", animalsToRender)
   
    const trash =  <FontAwesomeIcon icon={faTrash} />
     
    const clickHandleDelete=()=>{

        handleAnimalDelete(animalsToRender)
    }


    return (<div className="cardDiv">
        <div className="card">
            <h2 className="FarmAnimalName">{animalsToRender.name}</h2>
            <img src={animalsToRender.image} className="image" />
            <h3>{animalsToRender.gender}</h3>
            <h3>{animalsToRender.birthday}</h3>
            <h3>{animalsToRender.animal_type}</h3>
            <button onClick={clickHandleDelete}> { trash }</button>

        </div>
        
    </div>)
}
export default FarmAnimalsCard

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserLock } from '@fortawesome/free-solid-svg-icons'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// const lock = <FontAwesomeIcon icon={faUserLock} />
// const wanted = <FontAwesomeIcon icon={faUserSecret} />