/* eslint-disable @typescript-eslint/ban-ts-comment */
import Small_Logo from '../../../public/1/small_logo.svg';

import RoadmapGraph from './roadmapGraph';

import { CONTAINER_WIDTH } from '../../shared/style';

const roadmapStyle = {
    trackContainer: {
        position: 'relative',
        width: '100%',
        height: '5px',
    },
    track: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    trackStart: {
        flexGrow: '1',
        height: '100%',
        background: 'linear-gradient(to right, rgba(39,38,40,0) 0%, rgba(39,38,40,1) 100%)',
    },
    trackEnd: {
        flexGrow: '1',
        height: '100%',
        background: 'linear-gradient(to left, rgba(39,38,40,0) 0%, rgba(39,38,40,1) 100%)',
    },
    trackMid: {
        flexShrink: '0',
        width: CONTAINER_WIDTH,
        height: '100%',
        backgroundColor: '#272628',
    },
    path: {
        position: 'absolute',
        left: '0',
        top: '0',
        display: 'flex',
        width: '33%', // mockup width
        height: '100%'
    },
    pathStart: {
        flexGrow: '1',
        background: 'linear-gradient(to right, rgba(13,246,158,0) 0%, rgba(13,246,158,1) 100%)',
    },
    pathEnd: {
        flexShrink: '0',
        width: '150px',  // mockup width
        backgroundColor: '#0df69e',
    },
};

function RoadmapContainer() {
    return (
        <div>
            {/* @ts-ignore */}
            <div style={roadmapStyle.trackContainer}>
                <div style={roadmapStyle.track}>
                    <span style={roadmapStyle.trackStart}></span>
                    <span style={roadmapStyle.trackMid}></span>
                    <span style={roadmapStyle.trackEnd}></span>
                </div>
                {/* @ts-ignore */}
                <div style={roadmapStyle.path}>
                    <span style={roadmapStyle.pathStart}></span>
                    <span style={roadmapStyle.pathEnd}></span>
                </div>
            </div>
            <div>
                <div></div>
            </div>
        </div>
    );
}


function Roadmap() {
    return (
        <div style={{ width: '100%',padding: '30px 0px' }}>
            <img src={ Small_Logo } width={52} height={62} style={{ display: 'block', margin: '0 auto', marginBottom: '15px' }} />
            <p style={{ marginBottom: '150px', fontWeight: '700', fontSize: '30px', color: 'white', textAlign: 'center' }}>T-Project Roadmap</p>

            <RoadmapGraph />
            <RoadmapContainer />
        </div>
    );
}

export default Roadmap;