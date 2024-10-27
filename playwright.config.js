const config = {
    use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    },
    reporter: [
    ['list'],
    [
    'playwright-qase-reporter',
    {
    mode: 'testops',
    debug: false,
    testops: {
    api: {
    token: "3d885faa76452ff0346702705e27970c005b6307db3dd15756f914fbbc4282a3",
    },
    project: 'DEMO', // Replace <DEMO> with your project code
    uploadAttachments: true,
    run: {
    complete: true,
    },
    },
    },
    ],
    ],
    };
    
    module.exports = config;