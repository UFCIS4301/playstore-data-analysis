import { Animation, EventTracker, Stack } from '@devexpress/dx-react-chart';
import {
  ArgumentAxis,
  BarSeries,
  Chart,
  Legend,
  Title,
  Tooltip,
  ValueAxis
} from '@devexpress/dx-react-chart-material-ui';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import useSWR from 'swr';

const Root = (props) => <Legend.Root {...props} sx={{ display: 'flex', flexDirection: 'row' }} />;
const Label = (props) => <Legend.Label {...props} sx={{ whiteSpace: 'pre-line' }} />;

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

    data.rows.forEach((row) => {
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
    <div className="parentdiv">
      <div className="dyk">
        <Card sx={{ maxWidth: '100%', border: 0, boxShadow: 4 }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Do You Know?
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Google Play Store hosts more than 3.5 million Android Apps.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Card sx={{ maxWidth: '100%', border: 0, boxShadow: 10 }}>
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
            <Title text="Year Wise Minimum Android Version App Support Trend" />
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
            <EventTracker />
            <Tooltip />
          </Chart>
        </Paper>
      </Card>
      <div className="trendanalysis">
        <Card sx={{ maxWidth: '100%', border: 0, boxShadow: 10 }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Trend Analysis
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Using the minimum version information and number of downloads from the data, this
              query demonstrates trend of how the Android versions influenced the category and
              application reach. An Android application, for example, that assumes a minimum SDK
              (Software development Kit) version of 16 will support a greater number of devices than
              SDK version 21. .
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
