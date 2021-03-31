import React from 'react';
import { Map, Marker } from "pigeon-maps";
import Navbar from '../Home/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Map height={570} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                <Marker width={50} anchor={[50.879, 4.6997]} />
            </Map>
        </div>
    );
};

export default Contact;