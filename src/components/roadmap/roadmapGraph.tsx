import { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '../../media/useMedia';
import { MARK_COLORS, roadmapStyle, scrollbarStyle, trackStyle, stagesStyle } from './style';
import { getRoadmapActiveStage } from './api';
import roadmapData from './data.json';

type TStage = {
    id: string,
    mark: string,
    title: string,
    content: string,
}

type TActiveStage = {
    stage: number
}

function setMarkColor(activeIndex: number, id: string) {
    return Number(id) < activeIndex ? { "--mark-color": MARK_COLORS.ACTIVE_TEAL } as CSSProperties : { "--mark-color": MARK_COLORS.BACKGROUND_GREY } as CSSProperties;
}

function setPathWidth(activeIndex: number, isMobile: any) {
    const index = activeIndex > 4 ? 4 : activeIndex;
    let widthCSS = { width: `calc(${(100 - 21) / 3 * (index - 1)}% + 30px)` } as CSSProperties; // 30px - halfwidth of marker, 21 - some magic

    if (isMobile) {
        widthCSS = { width: `calc(${(100 - 31) / 3 * (index - 1)}% + 60px + 30px)` } as CSSProperties; // 30px - halfwidth of marker, 60px - padding, 31 - some magic
    }

    return widthCSS;
}

function Stage({ data, activeIndex }: { data: TStage, activeIndex: number }) {
    return (
        <div style={setMarkColor(activeIndex, data.id)}>
            <p style={stagesStyle.stageNumber}>{data.mark}</p>
            <div style={stagesStyle.stageMark}>
                <span style={stagesStyle.stageMark1}></span>
                <span style={stagesStyle.stageMark2}></span>
                <span style={stagesStyle.stageMark3}></span>
            </div>
            <p style={stagesStyle.stageTitle}>{data.title}</p>
            <p style={stagesStyle.stageText}>{data.content}</p>
        </div>
    );
}

function RoadmapGraph() {
    const [activeStage, setActiveStage] = useState<number>(2)
    const isMobile = useMediaQuery();

    useEffect(() => {
        getRoadmapActiveStage()
            .then(res => res.json())
            .then((data: TActiveStage) => {
                if (data.stage <= roadmapData.length) {
                    setActiveStage(data.stage)
                } else {
                    setActiveStage(roadmapData.length)
                }
            });
    }, [])

    return (
        <div style={{ ...roadmapStyle.wrapper, ...{ paddingTop: isMobile ? '75px' : '225px', } }}>
            {/* <style type="text/css">{scrollbarStyle}</style> */}
            <div className='scroll-container' style={roadmapStyle.container}>
                {/* track */}
                <div style={trackStyle.trackContainer}>
                    <div style={trackStyle.track}>
                        <span style={trackStyle.trackStart}></span>
                        <span style={trackStyle.trackMid}></span>
                        <span style={trackStyle.trackEnd}></span>
                    </div>
                    <div style={trackStyle.path}>
                        <span style={trackStyle.pathStart}></span>
                        <span style={trackStyle.pathMid}>
                            <span style={{ ...setPathWidth(activeStage, isMobile), ...trackStyle.pathEnd }}></span>
                        </span>
                    </div>
                </div>
                {/* stages */}
                <div style={{ ...stagesStyle.stagesContainer, padding: isMobile ? '0 60px' : 'none' }}>
                    {roadmapData.map((item) => {
                        return <Stage data={item} key={item.id} activeIndex={activeStage} />
                    })}
                </div>
            </div>
            {isMobile ? (
                <>
                    <div style={roadmapStyle.fadeBoxStart}></div>
                    <div style={roadmapStyle.fadeBoxEnd}></div>
                </>
            ) : null}
        </div>
    );
}

export default RoadmapGraph;