import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Legend,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation, EventTracker } from '@devexpress/dx-react-chart';
import useSWR from 'swr';

const Root = (props) => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = (props) => <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />;
const Item = (props) => <Legend.Item {...props} sx={{ flexDirection: 'column-reverse' }} />;

// const data = [
//   { year: '1950', population: 2.525 },
//   { year: '1960', population: 3.018 },
//   { year: '1970', population: 3.682 },
//   { year: '1980', population: 4.440 },
//   { year: '1990', population: 5.310 },
//   { year: '2000', population: 6.127 },
//   { year: '2010', population: 6.930 },
// ];

export default function AppLaunch() {
  const [launchData, setLaunchData] = React.useState([]);
  const { data } = useSWR('/api/avgappsizevstotalcount');
  if (launchData.length === 0 && data) {
    const m2009 = new Map();
    const m2010 = new Map();
    const m2011 = new Map();
    const m2012 = new Map();
    const m2013 = new Map();
    const m2014 = new Map();
    const m2015 = new Map();
    const m2016 = new Map();
    const m2017 = new Map();
    const m2018 = new Map();
    const m2019 = new Map();
    const m2020 = new Map();
    const m2021 = new Map();

    data.rows.forEach((row) => {
      if (row.RELEASED_YEAR === 2021) {
        m2021.set(row.CATEGORY, row.COUNT);
        m2021.set('year', '2021');
      } else if (row.RELEASED_YEAR === 2020) {
        m2020.set(row.CATEGORY, row.COUNT);
        m2020.set('year', '2020');
      } else if (row.RELEASED_YEAR === 2019) {
        m2019.set(row.CATEGORY, row.COUNT);
        m2019.set('year', '2019');
      } else if (row.RELEASED_YEAR === 2018) {
        m2018.set(row.CATEGORY, row.COUNT);
        m2018.set('year', '2018');
      } else if (row.RELEASED_YEAR === 2017) {
        m2017.set(row.CATEGORY, row.COUNT);
        m2017.set('year', '2017');
      } else if (row.RELEASED_YEAR === 2016) {
        m2016.set(row.CATEGORY, row.COUNT);
        m2016.set('year', '2016');
      } else if (row.RELEASED_YEAR === 2015) {
        m2015.set(row.CATEGORY, row.COUNT);
        m2015.set('year', '2015');
      } else if (row.RELEASED_YEAR === 2014) {
        m2014.set(row.CATEGORY, row.COUNT);
        m2014.set('year', '2014');
      } else if (row.RELEASED_YEAR === 2013) {
        m2013.set(row.CATEGORY, row.COUNT);
        m2013.set('year', '2013');
      } else if (row.RELEASED_YEAR === 2012) {
        m2012.set(row.CATEGORY, row.COUNT);
        m2012.set('year', '2012');
      } else if (row.RELEASED_YEAR === 2011) {
        m2011.set(row.CATEGORY, row.COUNT);
        m2011.set('year', '2011');
      } else if (row.RELEASED_YEAR === 2010) {
        m2010.set(row.CATEGORY, row.COUNT);
        m2010.set('year', '2010');
      } else if (row.RELEASED_YEAR === 2009) {
        m2009.set(row.CATEGORY, row.COUNT);
        m2009.set('year', '2009');
      }
    });

    const combinedVersdata = [
      //     Object.fromEntries(m2009),
      //   Object.fromEntries(m2010),
      Object.fromEntries(m2011),
      Object.fromEntries(m2012),
      Object.fromEntries(m2013),
      Object.fromEntries(m2014),
      Object.fromEntries(m2015),
      Object.fromEntries(m2016),
      Object.fromEntries(m2017),
      Object.fromEntries(m2018),
      Object.fromEntries(m2019),
      Object.fromEntries(m2020),
      Object.fromEntries(m2021)
    ];
    setLaunchData(combinedVersdata);
  }
  return (
    <Paper>
      <Chart data={launchData}>
        <ArgumentAxis />
        <ValueAxis max={8000000} />

        <BarSeries name="Action" valueField="Action" argumentField="year" />
        <BarSeries name="Entertainment" valueField="Entertainment" argumentField="year" />
        <BarSeries name="Productivity" valueField="Productivity" argumentField="year" />
        <BarSeries name="Shopping" valueField="Shopping" argumentField="year" />
        <BarSeries name="Social" valueField="Social" argumentField="year" />

        <Animation />
        <Legend
          position="bottom"
          rootComponent={Root}
          labelComponent={Label}
          itemComponent={Item}
        />
        <Title text="Number of Launches Over the Years" />
        <Stack />
        <EventTracker />
        <Tooltip />
      </Chart>
    </Paper>
  );
}
