import { Animation, Stack } from '@devexpress/dx-react-chart';
import {
  ArgumentAxis,
  BarSeries,
  Chart,
  Legend,
  Title,
  ValueAxis
} from '@devexpress/dx-react-chart-material-ui';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
// import { confidence as data } from "../../../demo-data/data-vizualization";
import { energyConsumption as data2 } from '../demo-data/data-vizualization';
import './Overall.css';

const data1 = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.44 },
  { year: '1990', population: 5.31 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.93 }
];

const PREFIX = 'Demo';

const classes = {
  chart: `${PREFIX}-chart`
};

const format = () => (tick) => tick;

function Root(props) {
  return <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />;
}
function Label(props) {
  return <Legend.Label sx={{ pt: 1, whiteSpace: 'nowrap' }} {...props} />;
}
function Item(props) {
  return <Legend.Item sx={{ flexDirection: 'column' }} {...props} />;
}

function ValueLabel(props) {
  const { text } = props;
  return <ValueAxis.Label {...props} text={`${text}%`} />;
}

function TitleText(props) {
  return <Title.Text {...props} sx={{ whiteSpace: 'pre' }} />;
}

const StyledChart = styled(Chart)(() => ({
  [`&.${classes.chart}`]: {
    paddingRight: '20px'
  }
}));

export default class Demographic extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // data,
      data1,
      data2
    };
  }

  render() {
    // const { data: chartData } = this.state;
    const { data1: chartData1 } = this.state;
    const { data2: chartData2 } = this.state;

    return (
      <div className="main">
        <div className="Content">
          <p>Amazing Fact about Dataset</p>
          <p>Do you know that Google Store has.....</p>
        </div>
        <div className="chart1">
          <Paper>
            <Chart data={chartData1}>
              <ArgumentAxis />
              <ValueAxis max={7} />

              <BarSeries valueField="population" argumentField="year" />
              <Title text="Average Price of Apps over the years" />
              <Animation />
            </Chart>
          </Paper>
        </div>
        <div className="chart3">
          <Paper>
            <Chart data={chartData2}>
              <ArgumentAxis />
              <ValueAxis max={2400} />

              <BarSeries name="Productivity" valueField="hydro" argumentField="size" />
              <BarSeries name="Entertainment" valueField="oil" argumentField="size" />
              <BarSeries name="Books" valueField="gas" argumentField="size" />
              <BarSeries name="Game" valueField="coal" argumentField="size" />
              <BarSeries name="Education" valueField="nuclear" argumentField="size" />
              <Animation />
              <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
              <Title text="Ratio of Paid and Free apps over the years" />
              <Stack
                stacks={[
                  {
                    series: ['Hydro-electric', 'Oil', 'Natural gas', 'Coal', 'Nuclear']
                  }
                ]}
              />
            </Chart>
          </Paper>
        </div>
      </div>
    );
  }
}