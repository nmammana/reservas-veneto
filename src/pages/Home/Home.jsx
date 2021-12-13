import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Layout from '../../components/Layout'
import './Home.scss';
import DataTable from './DataTable/DataTable';
import Loading from '../../components/Loading/Loading';

export default function Home() {
    const [reservations, setReservations] = useState([])

    useEffect(() => {
        const fetchReservationsByUser = async () => {
            const response = await axios.get(`http://${process.env.REACT_APP_API_URL}/reservation`);
            if(response.data){
                let reservationsData = [];
                response.data.forEach(dataBlock => {
                    let reservationData = {
                        date : "",
                        username: dataBlock.user.name,
                        sport: "",
                        hasIdentityNumber: "",
                        identityNumber: "",
                        hours: `${dataBlock.hours[0]} a ${dataBlock.hours[dataBlock.hours.length-1]}`,
                    }

                    if(dataBlock.date.split('/')[0].length < 2){
                        reservationData.date = "0".concat(dataBlock.date);
                    }else{
                        reservationData.date = dataBlock.date;
                    }

                    if(dataBlock.type.split('_')[0] === 'FOOTBALL'){
                        reservationData.sport = "Fútbol";
                    }else if(dataBlock.type.split('_')[0] === 'TENNIS'){
                        reservationData.sport = "Tenis";
                    }else if(dataBlock.type.split('_')[0] === 'PADDLE'){
                        reservationData.sport = "Paddle";
                    }else if(dataBlock.type.split('_')[0] === 'BOWLING'){
                        reservationData.sport = "Bochas";
                    }
                    
                    if(dataBlock.type.split('_')[1] === 'A'){
                        reservationData.sport = reservationData.sport.concat(" ","cancha 1");
                    }else if(dataBlock.type.split('_')[1] === 'B'){
                        reservationData.sport = reservationData.sport.concat(" cancha 2");
                    }else{
                        reservationData.sport = reservationData.sport.concat(" cancha 1");
                    }
                    if(dataBlock.user.identityNumber !== "0" ){
                        reservationData.identityNumber = String(dataBlock.user.identityNumber);
                        reservationData.hasIdentityNumber = "Propietario"
                    }else{
                        reservationData.identityNumber = "";
                        reservationData.hasIdentityNumber = "Inquilino"
                    }
                    reservationsData.push(reservationData)
                })
                setReservations(reservationsData)
            }
        }
        fetchReservationsByUser();
    }, [])
   
    return (
        <Layout>
            <main className="home-main">
                <div className="selection-container">
                    <div className="rectangle-container">
                        <div className="rectangle"></div>
                    </div>
                    <div className="home-main__wrapper">
                        <div className="heading-container">
                            <h3 className="title heading2">Reservas del área deportiva</h3>
                        </div>
                        {reservations?.length > 0 ? 
                            <DataTable reservations={reservations}/> 
                        :
                            <Loading/>
                        }
                    </div>
                </div>
            </main>
        </Layout>
    )
}
