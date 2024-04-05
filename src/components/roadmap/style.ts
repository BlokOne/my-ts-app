import { CSSProperties } from 'react';
import { CONTAINER_WIDTH } from '../../shared/style';

export const MARK_COLORS: { [key: string]: string } = {
    BACKGROUND_GREY: '#313032',
    ACTIVE_TEAL: '#0df69e',
}

export const roadmapStyle: { [key: string]: CSSProperties } = {
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
        width: '26%', // mockup width
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
    stagesContainer: {
        display: 'grid',
        gap: '11%',
        gridTemplateColumns: 'repeat(4, 1fr)',
        width: CONTAINER_WIDTH,
        margin: '0 auto',
        marginTop: '-81px',
        marginBottom: '300px',
        fontFamily: 'Inter',
        color: 'white',
    },
    stageNumber: {
        width: 'min-content',
        marginBottom: '16px',
        fontWeight: '700',
        fontSize: '30px',
        userSelect: 'none',
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
        boxShadow: '0 0 20px 0 var(--mark-color)',
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
        boxShadow: '0 0 20px 0 var(--mark-color)',
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
        // width: '67%',
        margin: '0',
        fontWeight: '400',
        fontSize: '16px',
    },
};