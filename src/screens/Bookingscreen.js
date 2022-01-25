import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams} from 'react-router-dom';
import Loader from 'react-spinners/ClipLoader';
import moment from 'moment';

function Bookingscreen({match}) {

    


    const [rooms, setroom] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();

    const roomid =match.params.roomid
    const fromdate =  moment(match.params.fromdate , 'DD-MM-YYYY')
    const todate = moment(match.params.todate ,'DD-MM-YYYY')

    const totaldays = moment.duration(todate.diff(fromdate)).asDays()
    const [totalamount,settotalamount] = useState()
    useEffect(async () => {
        try {
            setloading(true);
            
            const data = (await axios.post('/api/rooms/getroombyid', {roomid : match.params.roomid})).data;
            
           /* settotalamount(data.rentperday * totaldays)*/
            setroom(data);
            setloading(false);
        } catch (error) {
            setloading(false);
            seterror(true);
            
            
        }
    }, []);

    async function bookRoom(){

        const bookingDetails = {
            rooms , 
            userid: JSON.parse(localStorage.getItem('currentUser'))._id,
            fromdate,
            todate,
            totalamount,
            totaldays
        }

        try {
            const result = await axios.post('/api/bookings/bookroom', bookingDetails)
        } catch (error) {
            
        }
    }


    return (
        <div className='m-5'>

            {loading ? (<h1><Loader/></h1>) : error ? (<h1>Error..</h1>) : (<div>
                <div className='row mt-5 bs'>

                    <div className='col-md-6 m-2'>
                        <h1>{rooms.name}</h1>
                        <img src ={rooms.imageurls[0]} className='bigimg'/>
                    </div>

                    <div className='col-md-6 m-2'>
                        <div>
                        <h1>Booking Details</h1>
                        <hr/>

                        <p>Name : </p>
                        <p>From Date : {match.params.fromdate} </p>
                        <p>To Date : {match.params.todate} </p>
                        <p>Max Count : {rooms.maxcount}</p>
                        </div>

                        <div>
                            <h1>Amount</h1>
                            <hr/>
                            <p>Total Days : {totaldays}</p>
                            <p>Rent Per Day : {rooms.rentperday} </p>
                            <p>Total Amount : {totalamount} </p>


                            <div style={{float:'right'}}>
                                <button className='btn btn-primary' onClick = {bookRoom}>Pay Now</button>

                            </div>
                                


                        </div>


                    </div>

                </div>
                
                
                
             </div> )}
            

        </div>
    );
}

export default Bookingscreen;