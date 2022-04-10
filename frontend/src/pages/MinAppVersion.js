import * as React from 'react';
import Paper from '@mui/material/Paper';
import useSWR from 'swr';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';

import { appVersData as appversdata } from '../demo-data/app-vers';

const Root = (props) => <Legend.Root {...props} sx={{ display: 'flex', flexDirection: 'row' }} />;
const Label = (props) => <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />;

export default function MinAppVersion() {
  const { data } = useSWR('/api/appversion');
  const [versionData, setVersionData] = React.useState([]);

  if (data && versionData.length === 0) {
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

    appversdata.rows.forEach((row) => {
      if (row.RELEASED_YEAR === 2021) {
        m2021.set(row.MIN_ANDROID.toString(), row.COUNT);
        m2021.set('year', '2021');
      } else if (row.RELEASED_YEAR === 2020) {
        m2020.set(row.MIN_ANDROID.toString(), row.COUNT);
        m2020.set('year', '2020');
      } else if (row.RELEASED_YEAR === 2019) {
        m2019.set(row.MIN_ANDROID.toString(), row.COUNT);
        m2019.set('year', '2019');
      } else if (row.RELEASED_YEAR === 2018) {
        m2018.set(row.MIN_ANDROID.toString(), row.COUNT);
        m2018.set('year', '2018');
      } else if (row.RELEASED_YEAR === 2017) {
        m2017.set(row.MIN_ANDROID.toString(), row.COUNT);
        m2017.set('year', '2017');
      } else if (row.RELEASED_YEAR === 2016) {
        m2016.set(row.MIN_ANDROID.toString(), row.COUNT);
        m2016.set('year', '2016');
      } else if (row.RELEASED_YEAR === 2015) {
        m2015.set(row.MIN_ANDROID.toString(), row.COUNT);
        m2015.set('year', '2015');
      } else if (row.RELEASED_YEAR === 2014) {
        m2014.set(row.MIN_ANDROID.toString(), row.COUNT);
        m2014.set('year', '2014');
      } else if (row.RELEASED_YEAR === 2013) {
        m2013.set(row.MIN_ANDROID.toString(), row.COUNT);
        m2013.set('year', '2013');
      } else if (row.RELEASED_YEAR === 2012) {
        m2012.set(row.MIN_ANDROID.toString(), row.COUNT);
        m2012.set('year', '2012');
      } else if (row.RELEASED_YEAR === 2011) {
        m2011.set(row.MIN_ANDROID.toString(), row.COUNT);
        m2011.set('year', '2011');
      } else if (row.RELEASED_YEAR === 2010) {
        m2010.set(row.MIN_ANDROID.toString(), row.COUNT);
        m2010.set('year', '2010');
      }
    });

    const combinedVersdata = [
      Object.fromEntries(m2010),
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
    setVersionData(combinedVersdata);
  }
  return (
    <div style={{ marginTop: '20px' }}>
      <Paper>
        <Chart rotated data={versionData}>
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries name="1" valueField="1" argumentField="year" />
          <BarSeries name="1.1" valueField="1.1" argumentField="year" />
          <BarSeries name="1.5" valueField="1.5" argumentField="year" />
          <BarSeries name="1.6" valueField="1.6" argumentField="year" />
          <BarSeries name="2" valueField="2" argumentField="year" />
          <BarSeries name="2.1" valueField="2.1" argumentField="year" />
          <BarSeries name="2.2" valueField="2.2" argumentField="year" />
          <BarSeries name="2.3" valueField="2.3" argumentField="year" />
          <BarSeries name="3" valueField="3" argumentField="year" />
          <BarSeries name="3.1" valueField="3.1" argumentField="year" />
          <BarSeries name="3.2" valueField="3.2" argumentField="year" />
          <BarSeries name="4" valueField="4" argumentField="year" />
          <BarSeries name="4.1" valueField="4.1" argumentField="year" />
          <BarSeries name="4.2" valueField="4.2" argumentField="year" />
          <BarSeries name="4.3" valueField="4.3" argumentField="year" />
          <BarSeries name="4.4" valueField="4.4" argumentField="year" />
          <BarSeries name="5" valueField="5" argumentField="year" />
          <BarSeries name="5.1" valueField="5.1" argumentField="year" />
          <BarSeries name="6" valueField="6" argumentField="year" />
          <BarSeries name="7" valueField="7" argumentField="year" />
          <BarSeries name="7.1" valueField="7.1" argumentField="year" />
          <BarSeries name="8" valueField="8" argumentField="year" />
          <BarSeries name="10" valueField="10" argumentField="year" />
          <Animation />

          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="Year wise minimum android version app support" />
          <Stack
            stacks={[
              {
                series: [
                  '1',
                  '1.1',
                  '1.5',
                  '1.6',
                  '2',
                  '2.1',
                  '2.2',
                  '2.3',
                  '3',
                  '3.1',
                  '3.2',
                  '4',
                  '4.1',
                  '4.2',
                  '4.3',
                  '4.4',
                  '5',
                  '5.1',
                  '6',
                  '7',
                  '7.1',
                  '8',
                  '10'
                ]
              }
            ]}
          />
        </Chart>
      </Paper>
    </div>
  );
}
