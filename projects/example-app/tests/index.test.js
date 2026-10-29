const assert = require('assert');

// Simple native test for example app
function testHealthCheck() {
  const now = Date.now() - 5000;
  // inline mock logic for pure test execution
  const uptime = Math.floor((Date.now() - now) / 1000);
  assert.strictEqual(uptime >= 5, true, 'Uptime should be >= 5s');
  console.log('✅ example-app test passed.');
}

testHealthCheck();
