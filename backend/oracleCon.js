const oracledb = require('oracledb');
const config = {
	user: 'rajdev.kapoor',
	password: 's2IRVdgCahYp7YGEnMbiLcC3',
	connectString: 'oracle.cise.ufl.edu/orcl'
};

async function getEmployee(empId) {
	let conn;

	try {
		conn = await oracledb.getConnection(config);

		const result = await conn.execute(
			'SELECT COUNT(Appdetails.ID), Released_YEar FROM "SINHA.KSHITIJ".Appdetails, "SINHA.KSHITIJ".Dates WHERE Appdetails.ID = Dates.ID Group by Released_YEar Order by Released_Year desc',
			{}
		);

		console.log(result);
	} catch (err) {
		console.log('Ouch!', err);
	} finally {
		if (conn) {
			// conn assignment worked, need to close
			await conn.close();
		}
	}
}

getEmployee(101);
