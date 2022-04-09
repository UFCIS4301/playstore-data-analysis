import { Animation, Stack } from '@devexpress/dx-react-chart';
import { ArgumentAxis, BarSeries, Chart, Legend, Title, ValueAxis } from '@devexpress/dx-react-chart-material-ui';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import useSWR from 'swr';
// import { confidence as data } from "../../../demo-data/data-vizualization";
import { energyConsumption as data2 } from '../demo-data/data-vizualization';
import './Overall.css';

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

export default function Demographic() {
	const { data, error } = useSWR('/api/demographic');
	const [ numAppData, setNumAppData ] = React.useState([]);
	console.log(data, numAppData.length);
	if (data && numAppData.length !== 0) {
		setNumAppData(
			data.rows.filter((row) => row[2] === 'Everyone 10+').map((row) => ({ year: row[1], num: row[0] }))
		);
	}

	return (
		<div className="main">
			<div className="Content">
				<p>Amazing Fact about Dataset</p>
				<p>Do you know that Google Store has.....</p>
			</div>
			<div className="chart1">
				<Paper>
					<Chart data={numAppData}>
						<ArgumentAxis />
						<ValueAxis max={8} />

						<BarSeries valueField="num" argumentField="year" barWidth={300} />
						<Title text="Number of Apps over the years" />
						<Animation />
					</Chart>
				</Paper>
			</div>
			<div className="chart3">
				<Paper>
					<Chart data={data2}>
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
									series: [ 'Hydro-electric', 'Oil', 'Natural gas', 'Coal', 'Nuclear' ]
								}
							]}
						/>
					</Chart>
				</Paper>
			</div>
		</div>
	);
}
