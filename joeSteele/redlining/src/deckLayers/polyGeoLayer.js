import React, {PureComponent} from 'react';
import DeckGL, {GeoJsonLayer} from 'deck.gl';
import {MapMode, DOT_COLORS, incMax, incMin, houseMin} from '../constants/map_constants';
import * as d3 from "d3-ease";


const LIGHT_SETTINGS = {
    lightsPosition: [ -70.1652, -30.739968, 800, -3.807751, 54.104682, 800],
    ambientRatio: 0.4,
    diffuseRatio: 0.6,
    specularRatio: 0.2,
    lightsStrength: [0.8, 0.0, 0.8, 0.0],
    numberOfLights: 3
};

const elevationScale = {min: 0.01, max: 1};


export default class PolyOverlay extends PureComponent{
    constructor(props) {
        super(props);
        console.log(props);

        this.startAnimationTimer = null;
        this.intervalTimer = null;

        this.state = {
            elevationScale: elevationScale.min
        };

        //bind here for convenience
        this._startAnimate = this._startAnimate.bind(this);
        this._animateHeight = this._animateHeight.bind(this);

    }

    componentDidMount() {
        this._animate();
    }


    //unsafe, should look for alternative
    componentWillReceiveProps(nextProps) {
        if (nextProps.props.mapMode != this.props.props.mapMode) {
            this.setState({elevationScale: elevationScale.min});
            this._animate();
        }
    }

    componentWillUnmount() {
        this._stopAnimate();
    }

    _animate() {
        this._stopAnimate();

        this.startAnimationTimer = window.setTimeout(this._startAnimate, 1000);
    }

    _startAnimate() {
        this.intervalTimer = window.setInterval(this._animateHeight, 20);
    }

    _stopAnimate() {
        window.clearTimeout(this.startAnimationTimer);
        window.clearTimeout(this.intervalTimer);
    }

    _animateHeight() {
        if (this.state.elevationScale > elevationScale.max) {
            this._stopAnimate();
        } else {
            this.setState({elevationScale: this.state.elevationScale + 0.005});
        }
    }

    _renderTooltip() {
        const {x, y, hoveredObject} = this.state;

        if (!hoveredObject) {
            return null;
        }
        const lat = hoveredObject.centroid[1];
        const lng = hoveredObject.centroid[0];
        const count = hoveredObject.points.length;

        return (
            <div className="tooltip"
                 style={{left: x, top: y}}>
                <div>{`latitude: ${Number.isFinite(lat) ? lat.toFixed(6) : ''}`}</div>
                <div>{`longitude: ${Number.isFinite(lng) ? lng.toFixed(6) : ''}`}</div>
                <div>{`${count} Accidents`}</div>
            </div>
        );
    }


    render(){
        const { polygons, mapMode, mapViewState} = this.props.props;
        const { width, height } = this.props.state;
        const layer = new GeoJsonLayer({
            id: 'poly-map',
            data: polygons,
            visible: (mapMode == MapMode.POLYHS || mapMode == MapMode.POLYINC),
            opacity: 0.25,
            stroked: false,
            filled: true,
            elevationScale : this.state.elevationScale,
            extruded: true,
            wireframe: true,
            pickable: true,
            onHover: info => console.log(info.object),
            autoHighlight: true,
            fp64: false,
            getElevation: f => (mapMode == MapMode.POLYINC ? ((f.properties.median_income - incMin) / 10): ((f.properties.housingValue - houseMin) / 100)),
            getFillColor: f => DOT_COLORS[f.properties.majorityDemo],
            getLineColor: f => [255, 255, 255],
            updateTriggers:{
                getElevation: mapMode
            },
            transitions:{
                getElevation: {
                    duration: 2000,
                    easing: d3.easeCubicInOut,
                    onStart: evt => console.log('position transition started', evt)}
            },
            lightSettings: LIGHT_SETTINGS
        });

        return (
            <DeckGL
                id="poly-overlay"
                width={width}
                height={height}
                {...mapViewState}
                layers={[layer]}
            />

        )
    }


}
