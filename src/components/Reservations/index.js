import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservation } from '../../redux/reserveSlice';

const Reservaion = () => {
    const dispatch = useDispatch();
    const reserved = useSelector((state) => state);

    console.log(reserved, "IIIIIIIIIIIIIIIIIIIIIII")

    useEffect(() => {
        dispatch(fetchReservation());
    }, []);

    return (
        <div>Reservaion</div>
    )
}

export default Reservaion