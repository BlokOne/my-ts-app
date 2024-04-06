/* eslint-disable @typescript-eslint/ban-ts-comment */
import Small_Logo from '../../../public/1/small_logo.svg';
import RoadmapGraph from './roadmapGraph';

function Roadmap() {
    return (
        <div style={{ width: '100%', marginBottom: '300px', padding: '30px 0px' }}>
            <img src={ Small_Logo } width={52} height={62} style={{ display: 'block', margin: '0 auto', marginBottom: '15px' }} />
            <p style={{ fontWeight: '700', fontSize: '30px', color: 'white', textAlign: 'center' }}>T-Project Roadmap</p>
            <div style={{width: '100%', paddingBottom: '55px', overflow: 'auto'}}>
                <RoadmapGraph />
            </div>
        </div>
    );
}

export default Roadmap;