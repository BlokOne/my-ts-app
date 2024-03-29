import Title from "./components/home";
import TBlock from "./components/t-blocks";
import Video from "./components/videos";
import Layout from "./layout";

const TBlocks = [
  {
    mobile: 'public/2/mobile.svg',
    logo: 'public/2/logo.svg',
    title: 'T-Staking',
    button: 'Buy TTTU',
    arrow: true,
    href1: '/',
    href2: '/',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    mobile: 'public/3/mobile.svg',
    logo: 'public/3/logo.svg',
    title: 'T-Autotrade',
    button: 'Profitability calbculator',
    arrow: false,
    href1: '/',
    href2: '/',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    mobile: 'public/4/mobile.svg',
    logo: 'public/4/logo.svg',
    title: 'T-Wallet',
    button: 'Buy TTTU',
    arrow: true,
    href1: '/',
    href2: '/',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    mobile: 'public/4/mobile.svg',
    logo: 'public/5/logo.svg',
    title: "T-Gamble",
    button: 'Buy TTTU',
    arrow: true,
    href1: '/',
    href2: '/',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    mobile: 'public/6/mobile.svg',
    title: "Our Next Products",
    button: 'RoadMap',
    arrow: true,
    href1: '/',
    href2: '/',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
]

function App() {
  return (
    <Layout>
      <Title />
      {TBlocks.map((item, i) => <TBlock
        key={i}
        mobile={item.mobile}
        logo={item.logo}
        title={item.title}
        button={item.button}
        arrow={item.arrow}
        text={item.text}
        href1={item.href1}
        href2={item.href2}
      />)}
      <Video />
    </Layout>
  )
}

export default App;
