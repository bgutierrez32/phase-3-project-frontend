import NavBar from './NavBar'
import FarmAnimals from './FarmAnimals'
import FeedAnimals from './FeedAnimals'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home(){
    // console.log("yurrr!")

    const [animal, setAnimals] = useState([])
    // console.log("Sate of Our Farm Animals: ", animal)

    const [time, setTime] = useState([])
    // console.log("State of Our Feeding Times: ", time)

    useEffect( () =>{
        fetch("http://localhost:9292/farm_animals")
        .then(r => r.json())
        .then(fetchedAnimal => {console.log(fetchedAnimal)

        setAnimals(fetchedAnimal)
        })

        fetch("http://localhost:9292/feeding_times")
        .then(r => r.json())
        .then(fetchedTime => {console.log(fetchedTime)

        setTime(fetchedTime)
        })

    }, [])


    const deleteFarmAnimals = (deleteAnimal) =>{

        fetch(`http://localhost:9292/farm_animals/${deleteAnimal.id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(animalThatWasDeleted => {console.log("Animal that Was Deleted : ", animalThatWasDeleted)})
        console.log("The URL: ", `http://localhost:9292/farm_animals/${deleteAnimal.id}`)

        let filterAnimals = animal.filter(eachAnimal => eachAnimal.id != deleteAnimal.id)
        console.log(filterAnimals)
             setAnimals([...filterAnimals])
             console.log("In DELETE : ", deleteAnimal.id)

    }

    const animalrender=(farmAnimal)=>{
        setAnimals([...animal, farmAnimal])
    }

    const timerender=(animalTime)=>{
        setTime([...time, animalTime])
    }

    const deleteAnimalTimes = (deleteTime) =>{

        fetch(`http://localhost:9292/feeding_times/${deleteTime.id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(timeThatWasDeleted => {console.log("Animal that Was Deleted : ", timeThatWasDeleted)})
        console.log("The URL: ", `http://localhost:9292/feeding_times/${deleteTime.id}`)

        let filterTime = time.filter(eachTime => eachTime.id != deleteTime.id)
        console.log(filterTime)
             setTime([...filterTime])
             console.log("In DELETE : ", deleteTime.id)

    }



    return(<div>
<BrowserRouter>
    <NavBar/>
    <Switch>
        <Route path="/farmanimals">
            <FarmAnimals animalsToMap={animal}
                        animalsToDelete={deleteFarmAnimals}
                        animalToProp={animalrender}
            />
        </Route>
        <Route path="/feedanimals">
            <FeedAnimals feedingToMap={time}
                        timeToProp={timerender}
                        timesToDelete={deleteAnimalTimes}
            />
        </Route>   
    </Switch>
</BrowserRouter>
   
    </div>)
}
export default Home