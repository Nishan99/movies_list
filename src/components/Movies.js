import React,{useState} from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import Data from './data' 
const Movies = () =>{
    const [data, setData] = useState(Data)
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [length, setLength] = useState("")
    const [review, setReview] = useState("")

    const deleteMovie = (id)=>{
        const toKeep = data.filter(element=>{
            return element.id !==id
        })
        setData(toKeep)
    }
   

    const addMovie =()=>{
        if(title==="" || rating==="" || length==="" || review===""){
            alert("Fields Cannot be empty")
        }
        else{

            setData([...data,{id:data.length + 1,title:title, Rating:rating,length:length,Review:review}])
            setTitle("")
            setRating("")
            setLength("")
            setReview("")
        }
        }
    return(
        <div className="container">
              <h1 className="heading">Movies List</h1> 
             
              <table className="table table-striped">

                <thead>

                  <tr>
                      <td>
                          <input type="text" required="required" placeholder="Movie Title" value={title} onChange={e=>setTitle(e.target.value)}/>
                      </td>
                      <td>
                          <input type="text" required="required" placeholder="Rating" value={rating} onChange={e=>setRating(e.target.value)}/>

                      </td>
                      <td>
                          <input type="text" required="required" placeholder="Length" value={length} onChange={e=>setLength(e.target.value)}/>

                      </td>
                      <td>
                          <input type="text" required="required" placeholder="Give a Review" value={review} onChange={e=>setReview(e.target.value)}/>

                      </td>
                      <td>
                          <button className="btn_addMovie" onClick={addMovie}>Add Movie</button>

                      </td>
                  </tr>
                  </thead>
                 
                  {data.length===0?<h1>There is no movies in database</h1>:
                  <thead className="thead-dark table__dark">


                  <tr>
                      
                      <th>Title</th>
                      <th>Rating</th>
                      <th>Length</th>
                      <th>Review</th>
                      <th>Delete List</th>
                  </tr>
                  </thead>
                    }
         
                  {data.map(each=>{
                      return <tr key={each.id} className="each_row">
                          <td><h3 className="movie__title">{each.title}</h3></td>
                          <td>{each.Rating}</td>
                          <td>{each.length}</td>
                          <td>{each.Review}</td>
                          <td><button className="btn_delete" onClick={()=>deleteMovie(each.id)}>Delete</button></td>
                      </tr>
                  })}
                 
              </table>
        </div>
    )
}

export default Movies