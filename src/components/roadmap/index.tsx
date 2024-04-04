/* eslint-disable @typescript-eslint/ban-ts-comment */
import Small_Logo from '../../../public/1/small_logo.svg';
import { roadmapStyle } from './style';

function RoadmapContainer() {
    return (
        <div>
            {/* track */}
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
            {/* stages */}
            {/* @ts-ignore */}
            <div style={roadmapStyle.stagesContainer}>
                <div style={roadmapStyle.stage}>
                    {/* @ts-ignore */}
                    <p style={roadmapStyle.stageNumber}>Q1</p>
                    {/* @ts-ignore */}
                    <div style={roadmapStyle.stageMark}>
                        {/* @ts-ignore */}
                        <span style={roadmapStyle.stageMark1}></span>
                        {/* @ts-ignore */}
                        <span style={roadmapStyle.stageMark2}></span>
                        <span></span>
                    </div>
                    <p style={roadmapStyle.stageTitle}>Заголовок</p>
                    <p style={roadmapStyle.stageText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                </div>
                <div style={roadmapStyle.stage}>
                    {/* @ts-ignore */}
                    <p style={roadmapStyle.stageNumber}>Q1</p>
                    {/* @ts-ignore */}
                    <div style={roadmapStyle.stageMark}>
                        {/* @ts-ignore */}
                        <span style={roadmapStyle.stageMark1}></span>
                        {/* @ts-ignore */}
                        <span style={roadmapStyle.stageMark2}></span>
                        <span></span>
                    </div>
                    <p style={roadmapStyle.stageTitle}>Заголовок</p>
                    <p style={roadmapStyle.stageText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                </div>
                <div style={roadmapStyle.stage}>
                    {/* @ts-ignore */}
                    <p style={roadmapStyle.stageNumber}>Q1</p>
                    {/* @ts-ignore */}
                    <div style={roadmapStyle.stageMark}>
                        {/* @ts-ignore */}
                        <span style={roadmapStyle.stageMark1}></span>
                        {/* @ts-ignore */}
                        <span style={roadmapStyle.stageMark2}></span>
                        <span></span>
                    </div>
                    <p style={roadmapStyle.stageTitle}>Заголовок</p>
                    <p style={roadmapStyle.stageText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                </div>
                <div style={roadmapStyle.stage}>
                    {/* @ts-ignore */}
                    <p style={roadmapStyle.stageNumber}>Q1</p>
                    {/* @ts-ignore */}
                    <div style={roadmapStyle.stageMark}>
                        {/* @ts-ignore */}
                        <span style={roadmapStyle.stageMark1}></span>
                        {/* @ts-ignore */}
                        <span style={roadmapStyle.stageMark2}></span>
                        <span></span>
                    </div>
                    <p style={roadmapStyle.stageTitle}>Заголовок</p>
                    <p style={roadmapStyle.stageText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                </div>
            </div>
        </div>
    );
}

function Roadmap() {
    return (
        <div style={{ width: '100%',padding: '30px 0px' }}>
            <img src={ Small_Logo } width={52} height={62} style={{ display: 'block', margin: '0 auto', marginBottom: '15px' }} />
            <p style={{ marginBottom: '150px', fontWeight: '700', fontSize: '30px', color: 'white', textAlign: 'center' }}>T-Project Roadmap</p>
            <RoadmapContainer />
        </div>
    );
}

export default Roadmap;