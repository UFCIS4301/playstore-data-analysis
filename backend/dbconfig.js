require('dotenv').config();

module.exports = {
	user: 'rajdev.kapoor',

	password: 'UY6Jwsujq50QPROZpBbrkKdt',

	connectionString: 'localhost/XE',

	externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};
