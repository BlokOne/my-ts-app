import { roadmapStyle } from './style';
import roadmapData from './data.json';
import { useEffect, useState } from 'react';
import { getRoadmapActiveStage, ROADMAP_API } from './api';

type TStage =  {
    id: string,
    mark: string,
    title: string,
    content: string,
}

type TActiveStage = {
    stage: number
}

function Stage({ data }: {data: TStage}) {
    return (
        <div style={roadmapStyle.stage}>
            {/* @ts-expect-error ignore position in styles */}
            <p style={roadmapStyle.stageNumber}>{data.mark}</p>
            {/* @ts-expect-error ignore position in styles */}
            <div style={roadmapStyle.stageMark}>
                {/* @ts-expect-error ignore position in styles */}
                <span style={roadmapStyle.stageMark1}></span>
                {/* @ts-expect-error ignore position in styles */}
                <span style={roadmapStyle.stageMark2}></span>
                <span></span>
            </div>
            <p style={roadmapStyle.stageTitle}>{data.title}</p>
            <p style={roadmapStyle.stageText}>{data.content}</p>
        </div>
    );
}

function RoadmapGraph() {
    const [activeStage, setActiveStage] = useState<number>(1)

    useEffect(() => {
        getRoadmapActiveStage(ROADMAP_API).then(res => res.json()).then((data: TActiveStage) => setActiveStage(data.stage));
    }, [])

    return (
        <div>
            {/* track */}
            {/* @ts-expect-error null */}
            <div style={roadmapStyle.trackContainer}>
                <div style={roadmapStyle.track}>
                    <span style={roadmapStyle.trackStart}></span>
                    <span style={roadmapStyle.trackMid}></span>
                    <span style={roadmapStyle.trackEnd}></span>
                </div>
                {/* @ts-expect-error null */}
                <div style={roadmapStyle.path}>
                    <span style={roadmapStyle.pathStart}></span>
                    <span style={roadmapStyle.pathEnd}></span>
                </div>
            </div>
            {/* stages */}
            <div style={roadmapStyle.stagesContainer}>
                {roadmapData.map((item) => {
                    return <Stage data={item} key={item.id} />
                })}
            </div>
        </div>
    );
}

export default RoadmapGraph;