import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Chart, BarSeries, Title, ArgumentAxis, ValueAxis, Legend } from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { avgPriceData as avgpricedata } from '../demo-data/avg-price';
import { sizeVsLaunchesData as sizevslaunchesdata } from '../demo-data/size-vs-launches';
import PaidVsFree from './PaidVsFree';
import PaidApps from './PaidApps';

const Root = (props) => <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />;
const Label = (props) => <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />;
const Item = (props) => <Legend.Item {...props} sx={{ flexDirection: 'column-reverse' }} />;

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

avgpricedata.rows.forEach((row) => {
	if (row.RELEASED_YEAR === 2021) {
		m2021.set('Price', row.PRICE);
		m2021.set('year', '2021');
	} else if (row.RELEASED_YEAR === 2020) {
		m2020.set('Price', row.PRICE);
		m2020.set('year', '2020');
	} else if (row.RELEASED_YEAR === 2019) {
		m2019.set('Price', row.PRICE);
		m2019.set('year', '2019');
	} else if (row.RELEASED_YEAR === 2018) {
		m2018.set('Price', row.PRICE);
		m2018.set('year', '2018');
	} else if (row.RELEASED_YEAR === 2017) {
		m2017.set('Price', row.PRICE);
		m2017.set('year', '2017');
	} else if (row.RELEASED_YEAR === 2016) {
		m2016.set('Price', row.PRICE);
		m2016.set('year', '2016');
	} else if (row.RELEASED_YEAR === 2015) {
		m2015.set('Price', row.PRICE);
		m2015.set('year', '2015');
	} else if (row.RELEASED_YEAR === 2014) {
		m2014.set('Price', row.PRICE);
		m2014.set('year', '2014');
	} else if (row.RELEASED_YEAR === 2013) {
		m2013.set('Price', row.PRICE);
		m2013.set('year', '2013');
	} else if (row.RELEASED_YEAR === 2012) {
		m2012.set('Price', row.PRICE);
		m2012.set('year', '2012');
	} else if (row.RELEASED_YEAR === 2011) {
		m2011.set('Price', row.PRICE);
		m2011.set('year', '2011');
	} else if (row.RELEASED_YEAR === 2010) {
		m2010.set('Price', row.PRICE);
		m2010.set('year', '2010');
	} else if (row.RELEASED_YEAR === 2009) {
		m2009.set('Price', row.PRICE);
		m2009.set('year', '2009');
	}
});

const combinedVersdata = [
	//   Object.fromEntries(m2009),
	// Object.fromEntries(m2010),
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

console.log(combinedVersdata);
export default function AvgPrice() {
	return (
		<div className="parentdiv">
			<div className="dyk">
				<Card sx={{ maxWidth: '100%', border: 0, boxShadow: 4 }}>
					<CardContent>
						<Typography gutterBottom variant="h4" component="div">
							Do You Know?
						</Typography>
						<Typography variant="h6" color="text.secondary">
							98% of the Apps on the Google Play Store are free.
						</Typography>
					</CardContent>
				</Card>
			</div>
			<Card sx={{ maxWidth: '100%', border: 0, boxShadow: 10 }}>
				<Paper>
					{/* <Chart data={combinedVersdata}>
						<ArgumentAxis />
						<ValueAxis max={8000000} showLabels />

						<BarSeries name="Price" valueField="Price" argumentField="year" color="green" />

						<Animation />
						<Legend position="bottom" rootComponent={Root} labelComponent={Label} itemComponent={Item} />
						<Title text="Average Price of Applications over the Years" />
					</Chart> */}
					<PaidApps />
					<PaidVsFree />
				</Paper>
			</Card>
			<div className="trendanalysis">
				<Card sx={{ maxWidth: '100%', border: 0, boxShadow: 10 }}>
					<CardContent>
						<Typography gutterBottom variant="h4" component="div">
							Trend Analysis
						</Typography>
						<Typography variant="h6" color="text.secondary">
							This query provides us with a trend of how many free vs paid apps have been released over
							time, as well as the average price of purchased apps. Assume 100 thousand apps were released
							in 2017, and we want to demonstrate the trend of how many were free, how many were paid, and
							what the average cost of an app was that year, and how these changed over the years.
						</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
