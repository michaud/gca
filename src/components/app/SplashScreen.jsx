import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import slide from 'components/transitions/slide';

class SplashScreen extends Component {

    render () {

        const { } = this.props;

        return <NavLink className="splash" to={{ pathname: 'settings', state: slide }}>
            <svg className="splash-graph" viewBox="0 0 1600 1000" width="1600" height="1000">
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="0" dy="5" floodColor="#1e3e00" floodOpacity=".7" stdDeviation="12"/>
                    </filter>
                    <linearGradient x1="0" y1="1" x2="1" y2="0" id="svg_1">
                        <stop offset="0" stopColor="rgba(0, 191, 0, 1)"/>
                        <stop offset="1" stopColor="rgba(0, 191, 0, 0)"/>
                    </linearGradient>
                    <linearGradient x1=".5" y1="0" x2=".5" y2="1" id="svg_2">
                        <stop offset="0" stopColor="rgba(212, 255, 170,0)"/>
                        <stop offset="1" stopColor="rgba(212, 255, 170,1)"/>
                    </linearGradient>
                    <linearGradient x1="0" y1="1" x2="1" y2="0" id="svg_3">
                        <stop offset="0" stopColor="rgba(170, 255, 86, 0)"/>
                        <stop offset="1" stopColor="rgba(170, 255, 86, 1)"/>
                    </linearGradient>
                </defs>
                <g>
                    <g>
                        <ellipse ry="102" rx="102" id="svg_14" cy="461.841207" cx="800" fillOpacity="0.5" fill="#fff" />
                        <ellipse ry="102" rx="102" id="svg_8" cy="352.420144" cx="608.078165" fillOpacity="0.5" fill="#fff" />
                        <ellipse ry="102" rx="102" id="svg_7" cy="569.223594" cx="991.395672" fillOpacity="0.5" fill="#fff" />
                        <ellipse ry="102" rx="102" id="svg_6" cy="245.13591" cx="800" fillOpacity="0.5" fill="#fff" />
                        <ellipse ry="102" rx="102" id="svg_5" cy="571.458731" cx="608.078177" fillOpacity="0.5" fill="#fff" />
                        <ellipse ry="102" rx="102" id="svg_1" cy="352.420179" cx="991.395757" fillOpacity="0.5" fill="#fff" />
                        <ellipse ry="102" rx="102" id="svg_11" cy="683.213127" cx="800" fillOpacity="0.5" fill="#fff" />
                        <path d="m0,0l0,-900l1600,0l0,900l-800,473l0,0z" fillOpacity="0.6" fill="url(#svg_2)" />
                        <path d="m0,0l800,473l0,4000l-800,0l0,0z" fillOpacity="0.6" fill="url(#svg_1)" />
                        <path d="m1600,0l0,4000l-800,0l0,-3527l0,0z" fillOpacity="0.6" fill="url(#svg_3)" />
                    </g>
                    <g style={{transform: 'translate(0,-20%)' }}>
                        <text x="-20px" textAnchor="middle" alignmentBaseline="central" fill="rgba(255, 255, 255, 0.9)" style={{fontSize: '7rem', filter: 'url(#shadow)', fontWeight: 'bold', color: 'white', transform: 'translate(50%,0)' }}>
                        Golf</text>
                        <text x="-20px" y="6rem" textAnchor="middle" alignmentBaseline="central" fill="rgba(255, 255, 255, 0.9)" style={{fontSize: '7rem', filter: 'url(#shadow)', fontWeight: 'bold', color: 'white', transform: 'translate(50%,0)' }}>
                        Course</text>
                        <text x="-20px" y="13rem" textAnchor="middle" alignmentBaseline="central" fill="rgba(255, 255, 255, 0.9)" style={{fontSize: '7rem', filter: 'url(#shadow)', fontWeight: 'bold', color: 'white', transform: 'translate(50%,0)' }}>
                        Assistant
                        </text>
                    </g>
                </g>
            </svg>
        </NavLink>;
    }
}

export default SplashScreen;
