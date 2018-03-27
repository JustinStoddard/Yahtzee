import React, { Fragment } from 'react';
import ScoreSection from './ScoreSection';

const Scorecard = () => (
  <Fragment>
    <ScoreSection label="Upper"/>
    <ScoreSection label="Lower"/>
  </Fragment>
)

export default Scorecard;