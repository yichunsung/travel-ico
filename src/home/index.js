import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './home.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Slide from '@material-ui/core/Slide';

const { useState, useEffect } = React;

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function Home() {
	const [lat, setLat] = useState(25.033032);
	const [lng, setLng] = useState(121.556926);
	const [zoom, setZoom] = useState(16);
	const position = [lat, lng];
	const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);


	let init = ()=> {
		let apiUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieWljaHVuc3VuZyIsImEiOiJjaXdkOWRoZzQwYW45MnltaGdwaXI4ajFoIn0.FGanS1NYMvt6KIug7WbL3A'
		let mymap = L.map('mapid').setView(position, zoom);
		L.tileLayer(apiUrl, {
	    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 20,
	    id: 'mapbox/streets-v11',
	    accessToken: 'your.mapbox.access.token'
		}).addTo(mymap);
		/*
		let icon = L.icon({
	    iconUrl: '../assets/img/pngguru.com.png',
	    iconSize:     [30, 30], // size of the icon
	    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		});
		let marker = L.marker(position, {icon: icon}).addTo(mymap);
		marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
		*/
		let circle = L.circle(position, {
		    color: 'red',
		    fillColor: '#f03',
		    fillOpacity: 0.5,
		    radius: 10
		}).addTo(mymap);
		circle.bindPopup("I am a circle.");
	}

	const handleClick = Transition => () => {
		setTransition(() => Transition);
    setOpen(true)
  };

  const handleClose = () => {
     setOpen(false)
  };

	useEffect(()=>{
		init();
	}, [])

	return (
		<div className="container">
		<div id="mapid" style={{
			width: '50vw',
			height: '90vh'
		}}></div>
			<div className="button-section">
				<Button variant="outlined" color="secondary" onClick={handleClick(TransitionLeft)}>
					add
				</Button>
				<Snackbar
	        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
	        open={open}
	        onClose={handleClose}
	        autoHideDuration={3000}
	        TransitionComponent={transition}
	        ContentProps={{
	          'aria-describedby': 'message-id',
	        }}
	        message={<span id="message-id">Successful</span>}
	      />
			</div>
		</div>
	)
}

export default Home