import FarmAnimalsCard from "./FarmAnimalsCard"
import {useState} from 'react';

function FarmAnimals(props){

    const animalsThatAreGoingToBeDelete=(deleteAnimal)=>{
        console.log(deleteAnimal)
        props.animalsToDelete(deleteAnimal)
    }
    
    const[nameForAnimal, setAnimalName] = useState("")
    const[imageForAnimal, setAnimalImage] = useState("")
    const [genderForAnimal, setAnimalGender] = useState("")
    const [birthdayForAnimal, setBirthdayForAnimal] = useState("")
    const[animalTypeForAnimal, setAnimalType] = useState("")

    const addNewFarmAniamls=(e) =>{
        // console.log("In addNewFarmAnimals")
        e.preventDefault()

        let animalsObjToPost ={
            name: nameForAnimal,
            image: imageForAnimal,
            gender: genderForAnimal,
            birthday: birthdayForAnimal,
            animal_type: animalTypeForAnimal 

        }
        console.log("Hey! We're About To Post This -> ", animalsObjToPost)

        fetch("http://localhost:9292/farm_animals", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(animalsObjToPost)
        })
            .then(r => r.json())
            .then(postedAnimals => {
                console.log("HEY THIS IS WHAT WE POSTED ->  ", postedAnimals)

                props.animalToProp(postedAnimals)



            })
                formreset()
    }
    
    const formreset = () => {
        document.getElementById("forms").reset()
        
    }
        
    const createAnimalName=(e)=>{
        console.log("Created A Name: ", e.target.value)
        setAnimalName(e.target.value)
    }
    
    const createAnimalImage=(e)=>{
        console.log("Created A Image: ", e.target.value)
        setAnimalImage(e.target.value)
    }
    
    const createAnimalGender = (e) => {
        console.log("Created A Gender: ", e.target.value)
        setAnimalGender(e.target.value)
    }

    const createAnimalBirthday=(e)=>{
        console.log("Created A Birthday: ", e.target.value)
        setBirthdayForAnimal(e.target.value)
    }
    const createAnimalType=(e)=>{
        console.log("Created A Type: ", e.target.value)
        setAnimalType(e.target.value)
    }
    
    const [showForm, setShowForm] = useState(false);
    const form =  <div className="formContainer">
        <form id="forms" onSubmit={addNewFarmAniamls} >
            <label>
                    Name: <input onChange={createAnimalName} value={nameForAnimal} type="text"/>
            </label>
            <label>
                    Image: <input onChange={createAnimalImage} value={imageForAnimal} type="text"/>
            </label>
            <label>
                    Gender: <input onChange={createAnimalGender} value={genderForAnimal} type="text"/>
            </label>
            <label>
                    Birthday: <input onChange={createAnimalBirthday} value={birthdayForAnimal} type="text"/>
            </label>
            <label>
                    Animal Type: <input onChange={createAnimalType} value={animalTypeForAnimal} type="text"/>
            </label>
            <input type="submit" value="Add New Farm Animal"></input>
        </form>
    </div>;

    return (<div>
        <h1>My Farm Animals</h1>
       
        <div  >

            <button onClick={() => setShowForm(!showForm)}>Create Farm Animal</button>
             {showForm ? form : ''}
             
        </div>
        

        {
            props.animalsToMap.map(eachAnimal => { 
                // console.log(eachAnimal)
                 
            return(
                
                
                <FarmAnimalsCard
                                key={eachAnimal.id}
                                animalsToRender={eachAnimal}
                                handleAnimalDelete={animalsThatAreGoingToBeDelete}
                />

            )
            
            })
        }
    
    </div>)
}
export default FarmAnimals