const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const content_controller = require('/Users/neelamsoni/crackIt/crackItAPI/app/controllers/content.controller');

router.get('/', content_controller.content_list);

router.post('/create', content_controller.content_create);

router.get('/:id', content_controller.content_details);

router.put('/:id/update', content_controller.content_update);

router.delete('/:id/delete', content_controller.content_delete);


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', content_controller.test);
module.exports = router;