import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedDetail, RemoveSelectedDetail, fetchSelectedDetails } from '../redux/actions/listAction';

const DetailsScreen = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const details = useSelector((state) => state);
    useEffect(() => {
        if (id && id !== " ") dispatch(fetchSelectedDetails(id))
    }, [id])
    if (details.selectedData !== undefined) {
        return (
            <div >
                <h3>DetailsScreen</h3>
                <div className="details-screen container" >
                    {
                        details["0"] === undefined && Object.keys(details).length === 0 ? (
                            <div>Loading...</div>
                        ) : (
                            <div className='card-body'>
                                <div className='row '>
                                    <div className='col'>ID: </div>
                                    <div className='col text-left'>{details.selectedData[0].id}</div>
                                </div>
                                <div className='row'>
                                    <div className='col'>NAME: </div>
                                    <div className='col text-left'>{details.selectedData[0].name}</div>
                                </div>
                                <div className='row'>
                                    <div className='col'>VALUE: </div>
                                    <div className='col text-left'>{details.selectedData[0].value}</div>
                                </div>
                                <div className='row'>
                                    <div className='col'>CONFIG: </div>
                                    <div className='col text-left'>{details.selectedData[0].config}</div>
                                </div>
                                <div className='row'>
                                    <div className='col'>STATUS: </div>
                                    <div className='col text-left'>{details.selectedData[0].status}</div>
                                </div>
                                <div className='row'>
                                    <div className='col'>DESCIPTION: </div>
                                    <div className='col text-left'>{details.selectedData[0].Desc}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default DetailsScreen;
