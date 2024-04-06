import { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '../../media/useMedia';
import { roadmapStyle } from './style';
import { MARK_COLORS } from './style';
import { getRoadmapActiveStage, ROADMAP_API } from './api';
import roadmapData from './data.json';

type TStage =  {
    id: string,
    mark: string,
    title: string,
    content: string,
}

type TActiveStage = {
    stage: number
}

function setMarkColor(activeIndex: number, id: string) {
    return Number(id) < activeIndex ? {"--mark-color": MARK_COLORS.ACTIVE_TEAL} as CSSProperties : {"--mark-color": MARK_COLORS.BACKGROUND_GREY} as CSSProperties;
}

function setPathWidth(activeIndex: number) {
    return {width: `calc(${(100 - 17) / 3 * (activeIndex - 1)}% + 30px)`} as CSSProperties; // 30px - halwidth of marker, 17 - some magic
}

function Stage({ data, activeIndex }: {data: TStage,activeIndex: number}) {
    return (
        <div style={setMarkColor(activeIndex, data.id)}>
            <p style={roadmapStyle.stageNumber}>{data.mark}</p>
            <div style={roadmapStyle.stageMark}>
                <span style={roadmapStyle.stageMark1}></span>
                <span style={roadmapStyle.stageMark2}></span>
                <span style={roadmapStyle.stageMark3}></span>
            </div>
            <p style={roadmapStyle.stageTitle}>{data.title}</p>
            <p style={roadmapStyle.stageText}>{data.content}</p>
        </div>
    );
}

function RoadmapGraph() {
    const [activeStage, setActiveStage] = useState<number>(1)
    const isMobile = useMediaQuery();

    useEffect(() => {
        getRoadmapActiveStage(ROADMAP_API)
            .then(res => res.json())
            .then((data: TActiveStage) =>  {
                if (data.stage <= roadmapData.length) {
                    setActiveStage(data.stage)
                } else {
                    setActiveStage(roadmapData.length)
                }
            });
    }, [])

    return (
        <div style={roadmapStyle.wrapper}>
            {/* track */}
            <div style={roadmapStyle.trackContainer}>
                <div style={roadmapStyle.track}>
                    <span style={roadmapStyle.trackStart}></span>
                    <span style={roadmapStyle.trackMid}></span>
                    <span style={roadmapStyle.trackEnd}></span>
                </div>
                <div style={roadmapStyle.path}>
                    <span style={roadmapStyle.pathStart}></span>
                    <span style={roadmapStyle.pathMid}>
                        <span style={{...setPathWidth(activeStage), ...roadmapStyle.pathEnd}}></span>
                    </span>
                </div>
            </div>
            {/* stages */}
            <div style={roadmapStyle.stagesContainer}>
                {roadmapData.map((item) => {
                    return <Stage data={item} key={item.id} activeIndex={activeStage} />
                })}
            </div>
        </div>
    );
}

export default RoadmapGraph;