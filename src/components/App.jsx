import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';

import { Feedback } from './FeedbackStatistis/Feedback';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle/>
      <Feedback />
    </Layout>
  );
};
