import React from 'react'
import { Link } from 'react-router-dom'

function WatchHistory() {
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link className='d-flex align-items-center' to={'/home'}  style={{textDecoration:'none',fontSize:'20px',color:'white'}}><i class="fa-solid fa-arrow-left fa-beat"></i>Back Home</Link>
    </div>
    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <th>Kanban</th>
          <th><a href="">https://fontawesome.com/icons/arrow-left?f=classic&s=solid&an=beat</a></th>
          <th>4/10/23</th>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default WatchHistory