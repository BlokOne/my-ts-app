/* eslint-disable @typescript-eslint/ban-ts-comment */
import Small_Logo from '../../../public/1/small_logo.svg';
import RoadmapGraph from './roadmapGraph';

function Roadmap() {
    return (
        <div style={{ width: '100%',padding: '30px 0px' }}>
            <img src={ Small_Logo } width={52} height={62} style={{ display: 'block', margin: '0 auto', marginBottom: '15px' }} />
            <p style={{ marginBottom: '150px', fontWeight: '700', fontSize: '30px', color: 'white', textAlign: 'center' }}>T-Project Roadmap</p>

            <RoadmapGraph />
        </div>
    );
}

export default Roadmap;