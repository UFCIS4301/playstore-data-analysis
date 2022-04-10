import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Title, Legend } from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import useSWR from 'swr';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Root = (props) => (
	<Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', justifyContent: 'center', flexDirection: 'row' }} />
);
const Label = (props) => <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />;

export default function Demographic() {
	const [ demoData, setDemoData ] = React.useState([]);
	const { data } = useSWR('/api/demographic');
	if (demoData.length === 0 && data) {
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
		setDemoData(combinedVersdata);
	}
	return (
		<Card sx={{ maxWidth: '80%' }}>
			{/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}

			<Paper>
				<Chart data={demoData}>
					<ArgumentAxis />
					<ValueAxis />
					<BarSeries name="Everyone 10+" valueField="Everyone 10+" argumentField="year" />
					<BarSeries name="Mature 17+" valueField="Mature 17+" argumentField="year" />
					<BarSeries name="Teen" valueField="Teen" argumentField="year" />
					<Animation />
					<Legend position="bottom" rootComponent={Root} labelComponent={Label} />
					<Title text="Demographic Trend of applications over the years" />
					<Stack stacks={[ { series: [ 'Everyone 10+', 'Mature 17+', 'Teen' ] } ]} />
				</Chart>
			</Paper>
		</Card>
	);
}
