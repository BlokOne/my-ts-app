import Button from "../../shared/button"
import { videoStyle, container, background, iframeStyle } from "./style"

function Video() {



  return (
    <div id={'docs'} style={container}>
      <div style={background}></div>
      <div style={videoStyle} >
        <iframe
          src={'https://www.youtube.com/embed/dQw4w9WgXcQ'}
          style={iframeStyle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', marginTop: '-34px', zIndex: 100 }}>
        <Button width="374px">
          Скачать PDF Презентацию
        </Button>
      </div>
    </div>
  )
}

export default Video