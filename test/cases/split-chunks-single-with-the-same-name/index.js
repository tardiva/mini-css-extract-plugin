import './index.css';

/* eslint-disable func-names */
// prettier-ignore
require.ensure([
  './foo'
], function (require) {
  require('./foo');
}, 'foo_chunk');
/* eslint-enable func-names */
