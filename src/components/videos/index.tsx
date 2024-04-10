import { useMediaQuery } from "../../media/useMedia"
import Button from "../../shared/button"
import { videoStyle, container, background, iframeStyle } from "./style"

function Video() {
  const isMobile = useMediaQuery()

  return (
    <>
      {
        isMobile ?
          <div id={'docs'} style={container(isMobile)}>
            <div style={background}></div >
            <div style={videoStyle(isMobile)} >
              <iframe
                src={'https://www.youtube.com/watch?v=g1lCK8YzRwY'}
                style={iframeStyle()}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', marginTop: '-34px', zIndex: 100 }}>
              <Button onClick={() => {
                const botUrl = "https://shiner-powerful-coyote.ngrok-free.app/api/v2/file/";
                window.open(botUrl, '_blank')!.focus();
              }} width="352px">
                Download PDF Presentation
              </Button>
            </div>
          </div > :
          <div id={'docs'} style={container(isMobile)}>
            <div style={background}></div>
            <div style={videoStyle(isMobile)} >
              <iframe
                src={'https://www.youtube.com/watch?v=g1lCK8YzRwY'}
                style={iframeStyle()}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', marginTop: '-34px', zIndex: 100 }}>
              <Button onClick={() => {
                const botUrl = "https://shiner-powerful-coyote.ngrok-free.app/api/v2/file/";
                window.open(botUrl, '_blank')!.focus();
              }} width="374px">
                Download PDF Presentation
              </Button>
            </div>
          </div>
      }
    </>
  )
}

export default Video