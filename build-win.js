const builder = require('electron-builder');

builder.build({
    platform: 'win',
    config: {
        'appId': 'local.demo.app',
        'win':{
            'target': {
                'target': 'zip',
                'arch': [
                    'ia32',
                ]
            }
        }
    }
});