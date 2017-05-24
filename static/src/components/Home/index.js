import React from 'react';
import ReactDOM from 'react-dom';
import Leaflet from 'leaflet'
import { render } from 'react-dom'
import { Jumbotron, Button ,PageHeaderSection} from 'react-bootstrap';
import AutoAffix from 'react-overlays/lib/AutoAffix';
import Waypoint from 'react-waypoint';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';


import SimpleExample from './simple'


export const jumbotronInstance = (
	<div id="testThis">
  <Jumbotron>
    <h1>Hello, world!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
  </div>

);

ReactDOM.render(jumbotronInstance, document.getElementById('testThis'));
export const Home = () =>
    <section>
        <div className="container text-center">
            <h1>Hello world</h1>
                <h2>Popup with Marker</h2>
    <SimpleExample />
        </div>
    </section>;



