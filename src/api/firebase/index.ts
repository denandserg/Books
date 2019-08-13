import 'firebase/auth';

import app from 'firebase/app';

import config from './config';

const fireBase = app.initializeApp(config);

export default fireBase;
