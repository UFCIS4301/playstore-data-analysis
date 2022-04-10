import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Chart, ArgumentAxis, ValueAxis, LineSeries, Title, Legend } from '@devexpress/dx-react-chart-material-ui';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { curveCatmullRom, line } from 'd3-shape';
import { scalePoint } from 'd3-scale';
import useSWR from 'swr';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { energyConsumption as data } from '../demo-data/data-vizualization';
import { avgSizeData as avgsizedata } from '../demo-data/avg-size';
import { sizeVsLaunchesData as sizevslaunchesdata } from '../demo-data/size-vs-launches';
import AppLaunch from './AppLaunches';

const PREFIX = 'Demo';

const classes = {
	title: `${PREFIX}-title`,
	chart: `${PREFIX}-chart`
};

const Line = (props) => (
	<LineSeries.Path {...props} path={line().x(({ arg }) => arg).y(({ val }) => val).curve(curveCatmullRom)} />
);

const StyledDiv = styled('div')(() => ({
	[`&.${classes.title}`]: {
		textAlign: 'center',
		width: '100%',
		marginBottom: '10px'
	}
}));

const Text = ({ text }) => {
	const [ mainText, subText ] = text.split('\\n');
	return (
		<StyledDiv className={classes.title}>
			<Typography component="h3" variant="h5">
				{mainText}
			</Typography>
			<Typography variant="subtitle1">{subText}</Typography>
		</StyledDiv>
	);
};

const Root = (props) => <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />;
const Label = (props) => <Legend.Label {...props} sx={{ mb: 1, whiteSpace: 'nowrap' }} />;
const Item = (props) => <Legend.Item {...props} sx={{ flexDirection: 'column-reverse' }} />;

const StyledChart = styled(Chart)(() => ({
	[`&.${classes.chart}`]: {
		paddingRight: '30px'
	}
}));

export default function SizeVsApp() {
	const [ data, setData ] = React.useState([]);
	const { sizeData } = useSWR('/api/avgappsizevstotalcount');
	console.log(sizeData);
	if (data.length === 0 && sizeData) {
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

		sizeData.rows.forEach((row) => {
			if (row.RELEASED_YEAR === 2021) {
				m2021.set(row.CATEGORY, row.AVGSIZE);
				m2021.set('year', '2021');
			} else if (row.RELEASED_YEAR === 2020) {
				m2020.set(row.CATEGORY, row.AVGSIZE);
				m2020.set('year', '2020');
			} else if (row.RELEASED_YEAR === 2019) {
				m2019.set(row.CATEGORY, row.AVGSIZE);
				m2019.set('year', '2019');
			} else if (row.RELEASED_YEAR === 2018) {
				m2018.set(row.CATEGORY, row.AVGSIZE);
				m2018.set('year', '2018');
			} else if (row.RELEASED_YEAR === 2017) {
				m2017.set(row.CATEGORY, row.AVGSIZE);
				m2017.set('year', '2017');
			} else if (row.RELEASED_YEAR === 2016) {
				m2016.set(row.CATEGORY, row.AVGSIZE);
				m2016.set('year', '2016');
			} else if (row.RELEASED_YEAR === 2015) {
				m2015.set(row.CATEGORY, row.AVGSIZE);
				m2015.set('year', '2015');
			} else if (row.RELEASED_YEAR === 2014) {
				m2014.set(row.CATEGORY, row.AVGSIZE);
				m2014.set('year', '2014');
			} else if (row.RELEASED_YEAR === 2013) {
				m2013.set(row.CATEGORY, row.AVGSIZE);
				m2013.set('year', '2013');
			} else if (row.RELEASED_YEAR === 2012) {
				m2012.set(row.CATEGORY, row.AVGSIZE);
				m2012.set('year', '2012');
			} else if (row.RELEASED_YEAR === 2011) {
				m2011.set(row.CATEGORY, row.AVGSIZE);
				m2011.set('year', '2011');
			} else if (row.RELEASED_YEAR === 2010) {
				m2010.set(row.CATEGORY, row.AVGSIZE);
				m2010.set('year', '2010');
			} else if (row.RELEASED_YEAR === 2009) {
				m2010.set(row.CATEGORY, row.AVGSIZE);
				m2010.set('year', '2009');
			}
		});

		const combinedSizeData = [
			// Object.fromEntries(m2009),
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
		setData(combinedSizeData);
	}
	return (
		<div className="parentdiv">
			<div className="dyk">
				<Card sx={{ maxWidth: '100%', border: 0, boxShadow: 4 }}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Do You Know?
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Google Play developers are over 388,000 in number.
						</Typography>
					</CardContent>
				</Card>
			</div>
			<Card sx={{ maxWidth: '100%', border: 0, boxShadow: 10 }}>
				<Paper>
					<StyledChart data={data} className={classes.chart}>
						<ArgumentScale factory={scalePoint} />
						<ArgumentAxis />
						<ValueAxis />

						<LineSeries name="Action" valueField="Action" argumentField="year" seriesComponent={Line} />
						<LineSeries
							name="Entertainment"
							valueField="Entertainment"
							argumentField="year"
							seriesComponent={Line}
						/>
						<LineSeries
							name="Productivity"
							valueField="Productivity"
							argumentField="year"
							seriesComponent={Line}
						/>
						<LineSeries name="Shopping" valueField="Shopping" argumentField="year" seriesComponent={Line} />
						<LineSeries name="Social" valueField="Social" argumentField="year" seriesComponent={Line} />
						<Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
						<Title text="Average Application Sizes over the Years" textComponent={Text} />
						<Animation />
					</StyledChart>

					<AppLaunch />
				</Paper>
			</Card>
			<div className="trendanalysis">
				<Card sx={{ maxWidth: '100%', border: 0, boxShadow: 10 }}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Trend Analysis
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Globally, there are more than 1 billion Google play users.
						</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
