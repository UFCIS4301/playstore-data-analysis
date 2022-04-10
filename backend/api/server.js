const express = require('express');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');

const config = {
	user: 'rajdev.kapoor',
	password: 's2IRVdgCahYp7YGEnMbiLcC3',
	connectString: 'oracle.cise.ufl.edu/orcl'
};
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/appversion', async function(req, res) {
	//res.send({ express: 'Hello From Express' });
	let conn;
	try {
		conn = await oracledb.getConnection(config);

		const result = await conn.execute(
			'SELECT COUNT(Applications.AppID) as COUNT, Min_Android, Released_Year FROM "SINHA.KSHITIJ".Appdetails, "SINHA.KSHITIJ".Dates,"SINHA.KSHITIJ".Applications	Where Applications.AppID = Appdetails.ID and Applications.AppID = Dates.ID	Group BY Released_Year, Min_Android	Order by Released_YEar desc',
			{},
			{
				outFormat: oracledb.OBJECT
			}
		);

		res.send(JSON.stringify(result));
		//console.log(result);
	} catch (err) {
		console.log('Ouch!', err);
	} finally {
		if (conn) {
			// conn assignment worked, need to close
			await conn.close();
		}
	}
});

app.get('/api/category', async function(req, res) {
	//res.send({ express: 'Hello From Express' });
	let conn;
	try {
		conn = await oracledb.getConnection(config);

		const result = await conn.execute(
			'SELECT * FROM(SELECT COUNT(AppID) as category_count, Released_Year, Domain.Category, row_number() over (partition by Released_YEar order by COUNT(AppID) desc) as rank FROM "SINHA.KSHITIJ".Appdetails, "SINHA.KSHITIJ".Dates, "SINHA.KSHITIJ".Applications, "SINHA.KSHITIJ".Domain Where Applications.AppID = Appdetails.ID and Applications.AppID = Dates.ID and Applications.DomainID = Domain.Domain_ID Group BY Released_Year, Domain.Category Order by Released_YEar desc, COUNT(AppID) desc) NATURAL JOIN	(SELECT COUNT(*)as total_application , Released_YEar FROM "SINHA.KSHITIJ".Applications, "SINHA.KSHITIJ".Dates	WHERE Applications.AppID = Dates.ID	GROUP BY Released_YEAR)	WHERE rank<=5 ',
			{},
			{
				outFormat: oracledb.OBJECT
			}
		);

		res.send(JSON.stringify(result));
		//console.log(result);
	} catch (err) {
		console.log('Ouch!', err);
	} finally {
		if (conn) {
			// conn assignment worked, need to close
			await conn.close();
		}
	}
});

app.get('/api/demographic', async function(req, res) {
	//res.send({ express: 'Hello From Express' });
	let conn;
	try {
		conn = await oracledb.getConnection(config);

		const result = await conn.execute(
			'SELECT COUNT(Applications.AppID) as COUNT, Dates.Released_Year, Content_Rating.Rating FROM "SINHA.KSHITIJ".Appdetails, "SINHA.KSHITIJ".Dates, "SINHA.KSHITIJ".Applications, "SINHA.KSHITIJ".Content_Rating	Where Applications.AppID = Appdetails.ID and Applications.AppID = Dates.ID and Applications.AppID = Content_Rating.AppID and Content_Rating.Rating IN (\'Teen\', \'Mature 17+\', \'Everyone 10+\')Group BY Dates.Released_Year, Content_Rating.Rating	Order by Dates.Released_YEar desc',
			{},
			{
				outFormat: oracledb.OBJECT
			}
		);

		res.send(JSON.stringify(result));
		//console.log(result);
	} catch (err) {
		console.log('Ouch!', err);
	} finally {
		if (conn) {
			// conn assignment worked, need to close
			await conn.close();
		}
	}
});

app.get('/api/avgappsize', async function(req, res) {
	//res.send({ express: 'Hello From Express' });
	let conn;
	try {
		conn = await oracledb.getConnection(config);

		const result = await conn.execute(
			"SELECT ROUND(AVG(Appsize)) AS AVGSIZE, Released_Year, Domain.Category FROM \"SINHA.KSHITIJ\".Appdetails, \"SINHA.KSHITIJ\".Dates, \"SINHA.KSHITIJ\".Applications, \"SINHA.KSHITIJ\".Domain Where Applications.AppID = Appdetails.ID and Applications.AppID = Dates.ID and Applications.DomainID = Domain.Domain_ID and Category IN ('Action', 'Entertainment', 'Social', 'Shopping', 'Productivity') Group BY Released_Year, Domain.Category Order by Released_YEar desc",
			//'select * from "SINHA.KSHITIJ".applications',
			{},
			{
				outFormat: oracledb.OBJECT
			}
		);

		res.send(JSON.stringify(result));
		//console.log(result);
	} catch (err) {
		console.log('Ouch!', err);
	} finally {
		if (conn) {
			// conn assignment worked, need to close
			await conn.close();
		}
	}
});

app.get('/api/totalappcount', async function(req, res) {
	//res.send({ express: 'Hello From Express' });
	let conn;
	try {
		conn = await oracledb.getConnection(config);

		const result = await conn.execute(
			'SELECT COUNT(Appdetails.ID) COUNT, Released_YEar FROM "SINHA.KSHITIJ".Appdetails, "SINHA.KSHITIJ".Dates WHERE Appdetails.ID = Dates.ID Group by Released_YEar Order by Released_Year desc',
			//'select * from "SINHA.KSHITIJ".applications',
			{},
			{
				outFormat: oracledb.OBJECT
			}
		);

		res.send(JSON.stringify(result));
		//console.log(result);
	} catch (err) {
		console.log('Ouch!', err);
	} finally {
		if (conn) {
			// conn assignment worked, need to close
			await conn.close();
		}
	}
});

app.get('/api/avgappsizevstotalcount', async function(req, res) {
	//res.send({ express: 'Hello From Express' });
	let conn;
	try {
		conn = await oracledb.getConnection(config);

		const result = await conn.execute(
			'SELECT COUNT(AppID) COUNT, ROUND(AVG(Appsize)), Released_Year FROM "SINHA.KSHITIJ".Appdetails, "SINHA.KSHITIJ".Dates, "SINHA.KSHITIJ".Applications, "SINHA.KSHITIJ".Domain	Where Applications.AppID = Appdetails.ID and Applications.AppID = Dates.ID and Applications.DomainID = Domain.Domain_ID Group BY Released_Year	Order by Released_YEar desc',
			{},
			{
				outFormat: oracledb.OBJECT
			}
		);

		res.send(JSON.stringify(result));
		//console.log(result);
	} catch (err) {
		console.log('Ouch!', err);
	} finally {
		if (conn) {
			// conn assignment worked, need to close
			await conn.close();
		}
	}
});

app.get('/api/avgprice', async function(req, res) {
	//res.send({ express: 'Hello From Express' });
	let conn;
	try {
		conn = await oracledb.getConnection(config);

		const result = await conn.execute(
			'SELECT COUNT(AppID) COUNT, ROUND(AVG(Price)), Released_Year FROM "SINHA.KSHITIJ".Appdetails, "SINHA.KSHITIJ".Dates, "SINHA.KSHITIJ".Applications Where Applications.AppID = Appdetails.ID and Applications.AppID = Dates.ID and Free=\'No\' Group BY Released_Year Order by Released_YEar desc',
			{},
			{
				outFormat: oracledb.OBJECT
			}
		);

		res.send(JSON.stringify(result));
		//console.log(result);
	} catch (err) {
		console.log('Ouch!', err);
	} finally {
		if (conn) {
			// conn assignment worked, need to close
			await conn.close();
		}
	}
});

app.get('/api/paidratio', async function(req, res) {
	//res.send({ express: 'Hello From Express' });
	let conn;
	try {
		conn = await oracledb.getConnection(config);

		const result = await conn.execute(
			'SELECT ROUND((t1.Paid/t2.Free)*100) as Ratio, Released_Year FROM 			(SELECT Count(AppId) as Paid, Released_YEar			FROM "SINHA.KSHITIJ".Appdetails, "SINHA.KSHITIJ".Dates, "SINHA.KSHITIJ".Applications			Where Applications.AppID = Appdetails.ID and Applications.AppID = Dates.ID and Free=\'No\'			Group BY Released_Year) t1			NATURAL JOIN			(SELECT Count(AppId) as Free, Released_YEar			FROM "SINHA.KSHITIJ".Appdetails, "SINHA.KSHITIJ".Dates, "SINHA.KSHITIJ".Applications			Where Applications.AppID = Appdetails.ID and Applications.AppID = Dates.ID and Free=\'Yes\'			Group BY Released_Year) t2			ORDER By Released_Year DEsc',
			{},
			{
				outFormat: oracledb.OBJECT
			}
		);

		res.send(JSON.stringify(result));
		//console.log(result);
	} catch (err) {
		console.log('Ouch!', err);
	} finally {
		if (conn) {
			// conn assignment worked, need to close
			await conn.close();
		}
	}
});

app.listen(port, () => console.log(`Listening on port ${port}`));
