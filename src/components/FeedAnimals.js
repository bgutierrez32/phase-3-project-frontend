import FarmAnimalTimeCard from "./FarmAnimalTimeCard";
import {useState} from 'react';

function FeedAnimals(props){

    const [feedingTime, setFeedingTime] = useState("")
    
    const addNewFeedings=(e) =>{
        // console.log("In addNewfeeding")
        e.preventDefault()

        let feedingTimesObjToPost ={
            time: feedingTime,

        }
        // console.log("Hey! We're About To Post This -> ", feedingTimesObjToPost)

        fetch("http://localhost:9292/feeding_times", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(feedingTimesObjToPost)
        })
            .then(r => r.json())
            .then(postedFeedingTimes=> {
                console.log("HEY THIS IS WHAT WE POSTED ->  ", postedFeedingTimes)

                props.timeToProp(postedFeedingTimes)

            })
            e.target.reset()
    }
    const createFeedingTimes=(e)=>{
        console.log("Created A Time: ", e.target.value)
        setFeedingTime(e.target.value)
    }

    const timesThatAreGoingToBeDelete=(deleteTime)=>{
        console.log(deleteTime)
        props.timesToDelete(deleteTime)
    }

    return(<div>

        <h1>Feeding Times</h1>

        <form onSubmit={addNewFeedings}>
            <label>
                Feeding Times: <input onChange={createFeedingTimes} value={feedingTime}/>
            </label>
            <input type="submit" value="Add New Feeding Times"></input>

        </form>

    {
            props.feedingToMap.map(eachTime => {console.log(eachTime)
            
            return(
                
                
                <FarmAnimalTimeCard
                                key={eachTime.id}
                                timesToRender={eachTime}
                                handleTimeDelete={timesThatAreGoingToBeDelete}
                />

            )
            
            })
        }
    </div>)
}
export default FeedAnimals