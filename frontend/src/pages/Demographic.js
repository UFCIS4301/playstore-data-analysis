// import { Animation, Stack } from '@devexpress/dx-react-chart';
// import { ArgumentAxis, BarSeries, Chart, Legend, Title, ValueAxis } from '@devexpress/dx-react-chart-material-ui';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import * as React from 'react';
import useSWR from 'swr';
// // import { confidence as data } from "../../../demo-data/data-vizualization";
// import { energyConsumption as data2 } from '../demo-data/data-vizualization';
// import './Overall.css';

// const PREFIX = 'Demo';

// const classes = {
// 	chart: `${PREFIX}-chart`
// };

// const format = () => (tick) => tick;

// function Root(props) {
// 	return <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />;
// }
// function Label(props) {
// 	return <Legend.Label sx={{ pt: 1, whiteSpace: 'nowrap' }} {...props} />;
// }
// function Item(props) {
// 	return <Legend.Item sx={{ flexDirection: 'column' }} {...props} />;
// }

// function ValueLabel(props) {
// 	const { text } = props;
// 	return <ValueAxis.Label {...props} text={`${text}%`} />;
// }

// function TitleText(props) {
// 	return <Title.Text {...props} sx={{ whiteSpace: 'pre' }} />;
// }

// const StyledChart = styled(Chart)(() => ({
// 	[`&.${classes.chart}`]: {
// 		paddingRight: '20px'
// 	}
// }));

// export default function Demographic() {
// const { data, error } = useSWR('/api/demographic');
// const [ numAppData, setNumAppData ] = React.useState([]);
// console.log(data, numAppData.length);
// if (data && numAppData.length !== 0) {
// 	setNumAppData(
// 		data.rows.filter((row) => row[2] === 'Everyone 10+').map((row) => ({ year: row[1], num: row[0] }))
// 	);
// }

// 	return (
// 		<div className="main">
// 			<div className="Content">
// 				<p>Amazing Fact about Dataset</p>
// 				<p>Do you know that Google Store has.....</p>
// 			</div>
// 			<div className="chart1">
// 				<Paper>
// 					<Chart data={numAppData}>
// 						<ArgumentAxis />
// 						<ValueAxis max={8} />

// 						<BarSeries valueField="num" argumentField="year" barWidth={300} />
// 						<Title text="Number of Apps over the years" />
// 						<Animation />
// 					</Chart>
// 				</Paper>
// 			</div>
// 			<div className="chart3">
// 				<Paper>
// 					<Chart data={data2}>
// 						<ArgumentAxis />
// 						<ValueAxis max={2400} />

// 						<BarSeries name="Productivity" valueField="hydro" argumentField="size" />
// 						<BarSeries name="Entertainment" valueField="oil" argumentField="size" />
// 						<BarSeries name="Books" valueField="gas" argumentField="size" />
// 						<BarSeries name="Game" valueField="coal" argumentField="size" />
// 						<BarSeries name="Education" valueField="nuclear" argumentField="size" />
// 						<Animation />
// 						<Legend position="bottom" rootComponent={Root} labelComponent={Label} />
// 						<Title text="Ratio of Paid and Free apps over the years" />
// 						<Stack
// 							stacks={[
// 								{
// 									series: [ 'Hydro-electric', 'Oil', 'Natural gas', 'Coal', 'Nuclear' ]
// 								}
// 							]}
// 						/>
// 					</Chart>
// 				</Paper>
// 			</div>
// 		</div>
// 	);
// }

import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Title, Legend } from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';

import { energyConsumption as data } from '../demo-data/data-vizualization';
import { demographicData as demographicdata } from '../demo-data/demographic';

const Root = (props) => (
	<Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', justifyContent: 'center', flexDirection: 'row' }} />
);
const Label = (props) => <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />;

// if (data && numAppData.length !== 0) {
// 	setNumAppData(
// 		data.rows.filter((row) => row[2] === 'Everyone 10+').map((row) => ({ year: row[1], num: row[0] }))
// 	);
// }

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

demographicdata.rows.forEach((row) => {
	if (row.RELEASED_YEAR === 2021) {
		m2021.set(row.RATING, row.COUNT);
		m2021.set('year', '2021');
	} else if (row.RELEASED_YEAR === 2020) {
		m2020.set(row.RATING, row.COUNT);
		m2020.set('year', '2020');
	} else if (row.RELEASED_YEAR === 2019) {
		m2019.set(row.RATING, row.COUNT);
		m2019.set('year', '2019');
	} else if (row.RELEASED_YEAR === 2018) {
		m2018.set(row.RATING, row.COUNT);
		m2018.set('year', '2018');
	} else if (row.RELEASED_YEAR === 2017) {
		m2017.set(row.RATING, row.COUNT);
		m2017.set('year', '2017');
	} else if (row.RELEASED_YEAR === 2016) {
		m2016.set(row.RATING, row.COUNT);
		m2016.set('year', '2016');
	} else if (row.RELEASED_YEAR === 2015) {
		m2015.set(row.RATING, row.COUNT);
		m2015.set('year', '2015');
	} else if (row.RELEASED_YEAR === 2014) {
		m2014.set(row.RATING, row.COUNT);
		m2014.set('year', '2014');
	} else if (row.RELEASED_YEAR === 2013) {
		m2013.set(row.RATING, row.COUNT);
		m2013.set('year', '2013');
	} else if (row.RELEASED_YEAR === 2012) {
		m2012.set(row.RATING, row.COUNT);
		m2012.set('year', '2012');
	} else if (row.RELEASED_YEAR === 2011) {
		m2011.set(row.RATING, row.COUNT);
		m2011.set('year', '2011');
	} else if (row.RELEASED_YEAR === 2010) {
		m2010.set(row.RATING, row.COUNT);
		m2010.set('year', '2010');
	} else if (row.RELEASED_YEAR === 2009) {
		m2010.set(row.RATING, row.COUNT);
		m2010.set('year', '2009');
	}
});

const combinedVersdata = [
	Object.fromEntries(m2009),
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
// function f(){
// const { dataApi, error } = useSWR('/api/demographic');
// const [ numAppData, setNumAppData ] = React.useState([]);
// console.log(dataApi, numAppData.length);
// }

export default function Demographic() {
	// const { dataApi, error } = useSWR('/api/demographic');
	// const [ numAppData, setNumAppData ] = React.useState([]);
	// console.log(dataApi, numAppData.length);

	const response = fetch('http://localhost:5000/api/demographic');
	console.log(response);

	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		combinedVersdata
	// 	};
	// }

	// render() {
	// const { combinedVersdata: chartData } = this.state;

	// f();

	return (
		<Paper>
			<Chart data={combinedVersdata}>
				<ArgumentAxis />
				<ValueAxis />

				<BarSeries name="Everyone 10+" valueField="Everyone 10+" argumentField="year" />
				<BarSeries name="Mature 17+" valueField="Mature 17+" argumentField="year" />
				<BarSeries name="Teen" valueField="Teen" argumentField="year" />
				{/* <BarSeries
            name="Coal"
            valueField="coal"
            argumentField="country"
          />
          <BarSeries
            name="Nuclear"
            valueField="nuclear"
            argumentField="country"
          /> */}
				<Animation />
				<Legend position="bottom" rootComponent={Root} labelComponent={Label} />
				<Title text="Demographic Trend of applications over the years" />
				<Stack stacks={[ { series: [ 'Everyone 10+', 'Mature 17+', 'Teen' ] } ]} />
			</Chart>
		</Paper>
	);
	// }
}
