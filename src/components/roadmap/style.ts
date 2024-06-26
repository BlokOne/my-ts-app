import { CSSProperties } from 'react';
import { CONTAINER_WIDTH } from '../../shared/style';

const STAGES_OFFSET: string = '82.5'; // move stages container up over the track

export const MARK_COLORS: { [key: string]: string } = {
    BACKGROUND_GREY: '#272628',
    INNER_SHADOW_GREY: '#282729',
    OUTER_SHADOW_GREY: '#272628',

    FINISHED_TEAL: '#0df69e',
    INNER_SHADOW_FINISHED: '#0df69e',
    OUTER_SHADOW_FINISHED: '#0df69e',

    ACTIVE_TEAL: '#0df69e',
    INNER_SHADOW_ACTIVE: '#313032',
    OUTER_SHADOW_ACTIVE: '#313032',
};

export  const scrollbarStyle: string = `.scroll-container::-webkit-scrollbar {width: 4px;} .scroll-container::-webkit-scrollbar-track {background: transparent;} .scroll-container::-webkit-scrollbar-thumb {background-color: ${MARK_COLORS.ACTIVE_TEAL}; border-radius: 2px; border: transparent;}`;

export const roadmapStyle: { [key: string]: CSSProperties } = {
    wrapper: {
        position: 'relative',
    },

    container: {
        paddingTop: `${STAGES_OFFSET}px`,
        overflow: 'auto',
        scrollbarColor: '#0df69e transparent',
        scrollbarWidth: 'thin',
    },

    fadeBoxStart: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '15%',
        height: '100%',
        background: 'linear-gradient(90deg, rgba(20,19,22, 1) 0%, rgba(20,19,22, 0) 100%)',
    },

    fadeBoxEnd: {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '25%',
        height: '100%',
        background: 'linear-gradient(90deg, rgba(20,19,22, 0) 0%, rgba(20,19,22, 1) 100%)',
    }
};

export const trackStyle: { [key: string]: CSSProperties } = {
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
        width: '100%',
        height: '100%'
    },
    pathStart: {
        flexGrow: '0',
        width: `calc((100% - ${CONTAINER_WIDTH}) / 2)`,
        background: 'linear-gradient(to right, rgba(13,246,158,0) 0%, rgba(13,246,158,1) 100%)',
    },
    pathMid: {
        flexShrink: '0',
        width: CONTAINER_WIDTH,
    },
    pathEnd: {
        display: 'block',
        minWidth: '35px',
        height: '100%',
        backgroundColor: '#0df69e',
        transition: 'width 0.5s ease',
    },
};

export const stagesStyle: { [key: string]: CSSProperties } = {
    stagesContainer: {
        display: 'grid',
        gap: '5%',
        gridTemplateColumns: 'repeat(4, 1fr)',
        width: CONTAINER_WIDTH,
        margin: '0 auto',
        marginTop: `-${STAGES_OFFSET}px`,
        marginBottom: '50px',
        fontFamily: 'Inter',
        color: 'white',
        boxSizing: 'border-box',
    },
    stageNumber: {
        width: 'min-content',
        marginBottom: '16px',
        fontWeight: '700',
        fontSize: '30px',
        userSelect: 'none',
        transform: 'translateX(calc(-50% + 27px))', // move stage-number at the center of marker
    },
    stageMark: {
        position: 'relative',
        width: '55px',
        height: '55px',
        borderRadius: '50%',
    },
    stageMark1: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '55px',
        height: '55px',
        backgroundColor: 'var(--mark-color)',
        opacity: '0.1',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)'
    },
    stageMark2: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '45px',
        height: '45px',
        backgroundColor: 'var(--mark-color)',
        borderRadius: '50%',
        boxShadow: '0 0 20px 0 var(--outer-shadow-color)',
        opacity: '0.5',
        transform: 'translate(-50%, -50%)'
    },
    stageMark3: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '25px',
        height: '25px',
        backgroundColor: 'var(--mark-color)',
        borderRadius: '50%',
        opacity: '1',
        boxShadow: '0 0 20px 0 var(--inner-shadow-color)',
        transform: 'translate(-50%, -50%)'
    },
    stageTitle: {
        width: 'fit-content',
        marginTop: '45px',
        marginBottom: '10px',
        fontWeight: '700',
        fontSize: '18px',
    },
    stageText: {
        margin: '0',
        marginLeft: '10px',
        fontWeight: '400',
        fontSize: '14px',
        whiteSpace: 'pre-wrap'
    },
};