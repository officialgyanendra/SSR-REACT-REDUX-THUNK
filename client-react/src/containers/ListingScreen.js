import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setData, fetchData } from '../redux/actions/listAction';

const ListingScreen = () => {

  const dataList = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData())
  }, []);

  return (
    <div>
      <h3>Listing Screen</h3>
      <div className='table-container'>
        <table className="table table-striped">
          <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dataList && dataList.length > 0 && dataList.map((data, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Link to={`/details/${data.id}`}>
                      {data.id}
                    </Link>
                  </td>
                  <td>{data.name}</td>
                  <td>{data.status}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListingScreen