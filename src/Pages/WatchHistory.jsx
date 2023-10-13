import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteAHistory, getHistory } from '../services/allAPI'

function WatchHistory() {
  // const [deletehistory,setdeletehistory] = useState(true)
  const [history, setHistory] = useState([])
  const getallwatchHistory = async () => {
    // make api call
    const { data } = await getHistory()
    setHistory(data)
  }
  useEffect(() => {
    getallwatchHistory()
  }, [])
  console.log(history);

  const removeHistory = async (id)=>{
    // make api call
const response = await deleteAHistory(id)
// get all history
getallwatchHistory()

  }
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <h3>Watch History</h3>

        <Link className='d-flex align-items-center' to={'/home'} style={{ textDecoration: 'none', fontSize: '20px', color: 'white' }}><i class="fa-solid fa-arrow-left fa-beat"></i>Back Home</Link>
      </div>
      <table className='table mt-5 mb-5 container'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
           <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            history?.length > 0 ?
              history.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.caption}</td>
                  <td><a href={item?.embedlink}>{item?.embedlink}</a></td>
                  <td>{item?.timeStamp}</td>
                  <td><button onClick={()=>removeHistory(item?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
                </tr>

              ))
              : <p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display!!!</p>
          }
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory