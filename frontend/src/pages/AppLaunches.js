import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { appLaunchData as applaunchdata } from '../demo-data/app-launches';

// const data = [
//   { year: '1950', population: 2.525 },
//   { year: '1960', population: 3.018 },
//   { year: '1970', population: 3.682 },
//   { year: '1980', population: 4.440 },
//   { year: '1990', population: 5.310 },
//   { year: '2000', population: 6.127 },
//   { year: '2010', population: 6.930 },
// ];

// const m2009 = new Map();
// const m2010 = new Map();
//     const m2011 = new Map();
//     const m2012 = new Map();
//     const m2013 = new Map();
//     const m2014 = new Map();
//     const m2015 = new Map();
//     const m2016 = new Map();
//     const m2017 = new Map();
//     const m2018 = new Map();
//     const m2019 = new Map();
//     const m2020 = new Map();
//     const m2021 = new Map();

//     applaunchdata.rows.forEach((row) => {
//       if (row.RELEASED_YEAR === 2021) {
//         m2021.set(row.MIN_ANDROID.toString(), row.COUNT);
//         m2021.set('year', '2021');
//       } else if (row.RELEASED_YEAR === 2020) {
//         m2020.set(row.MIN_ANDROID.toString(), row.COUNT);
//         m2020.set('year', '2020');
//       } else if (row.RELEASED_YEAR === 2019) {
//         m2019.set(row.MIN_ANDROID.toString(), row.COUNT);
//         m2019.set('year', '2019');
//       } else if (row.RELEASED_YEAR === 2018) {
//         m2018.set(row.MIN_ANDROID.toString(), row.COUNT);
//         m2018.set('year', '2018');
//       } else if (row.RELEASED_YEAR === 2017) {
//         m2017.set(row.MIN_ANDROID.toString(), row.COUNT);
//         m2017.set('year', '2017');
//       } else if (row.RELEASED_YEAR === 2016) {
//         m2016.set(row.MIN_ANDROID.toString(), row.COUNT);
//         m2016.set('year', '2016');
//       } else if (row.RELEASED_YEAR === 2015) {
//         m2015.set(row.MIN_ANDROID.toString(), row.COUNT);
//         m2015.set('year', '2015');
//       } else if (row.RELEASED_YEAR === 2014) {
//         m2014.set(row.MIN_ANDROID.toString(), row.COUNT);
//         m2014.set('year', '2014');
//       } else if (row.RELEASED_YEAR === 2013) {
//         m2013.set(row.MIN_ANDROID.toString(), row.COUNT);
//         m2013.set('year', '2013');
//       } else if (row.RELEASED_YEAR === 2012) {
//         m2012.set(row.MIN_ANDROID.toString(), row.COUNT);
//         m2012.set('year', '2012');
//       } else if (row.RELEASED_YEAR === 2011) {
//         m2011.set(row.MIN_ANDROID.toString(), row.COUNT);
//         m2011.set('year', '2011');
//       } else if (row.RELEASED_YEAR === 2010) {
//         m2010.set(row.MIN_ANDROID.toString(), row.COUNT);
//         m2010.set('year', '2010');
//       } else if (row.RELEASED_YEAR === 2090) {
//         m2010.set(row.MIN_ANDROID.toString(), row.COUNT);
//         m2010.set('year', '2009');
//       }

//     });

//     const combinedVersdata = [
//         Object.fromEntries(m2009),
//       Object.fromEntries(m2010),
//       Object.fromEntries(m2011),
//       Object.fromEntries(m2012),
//       Object.fromEntries(m2013),
//       Object.fromEntries(m2014),
//       Object.fromEntries(m2015),
//       Object.fromEntries(m2016),
//       Object.fromEntries(m2017),
//       Object.fromEntries(m2018),
//       Object.fromEntries(m2019),
//       Object.fromEntries(m2020),
//       Object.fromEntries(m2021)
//     ];
    

export default function AppLaunch() {

    return (
      <Paper>
        <Chart
          data={applaunchdata.rows}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="COUNT"
            argumentField="year"
          />
          <Title text="World population" />
          <Animation />
        </Chart>
      </Paper>
    );

}
