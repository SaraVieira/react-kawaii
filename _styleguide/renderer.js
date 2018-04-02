import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'joyent-react-styled-flexboxgrid';
import styled, { ThemeProvider } from 'styled-components';
import remcalc from 'remcalc';

import MainPage from './mainPage';
import theme from './theme';

const Main = styled(Row)`
  padding-top: ${remcalc(24)};
`;

const Sidebar = styled.div`
  position: sticky;
  top: 0;
  z-index: 9;
  top: ${remcalc(0)};
  margin-top: ${remcalc(-24)};
  padding: ${remcalc(24)} 0;
  margin-left: ${remcalc(10)};
  max-height: 100vh;
  overflow: auto;
  background: white;
  width: ${remcalc(234)};
  border-right: ${remcalc(1)} solid ${props => props.theme.grey};
  box-sizing: border-box;
`;

const StyleGuideRenderer = ({
  title,
  homepageUrl,
  children,
  toc,
  hasSidebar,
}) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <MainPage />
      <Grid style={{ marginLeft: 0, zIndex: 2, position: 'relative' }}>
        <Main>
          {hasSidebar && (
            <Col xs={3}>
              <Sidebar>{toc}</Sidebar>
            </Col>
          )}
          <Col xs={hasSidebar ? 9 : 12} lg={hasSidebar ? 8 : 12}>
            {children}
          </Col>
        </Main>
      </Grid>
    </Fragment>
  </ThemeProvider>
);

export default StyleGuideRenderer;
