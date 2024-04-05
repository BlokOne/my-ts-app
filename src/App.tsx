import Title from "./components/home";
import TBlock from "./components/t-blocks";
import Video from "./components/videos";
import Layout from "./layout";

import Referral from "./components/referral";
import TStaking from "./components/tStaking";
import BuySell from "./components/buySell";
import Roadmap from "./components/roadmap";
import { MediaQueryProvider } from "./media";






function App() {
  return (
    <MediaQueryProvider>
      <Layout>
        <Title />
        <TBlock />
        <Video />
        <Roadmap />
        <BuySell />
        <TStaking />
        <Referral />
      </Layout>
    </MediaQueryProvider>
  )
}

export default App;
