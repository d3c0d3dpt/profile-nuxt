/* eslint-disable max-len */

export default {
    sidebar: {
        profile: [
            'With a Bachelor\'s in Computer Engineering and an experience of 7 years in web development, I have significant command on multiple technologies and diversified topics.',
            'Self-learner, team-player, attentive to details and an enthusiast for performance improvement topics.'
        ].join('\n\n'),

        age: '{0} Years',
        birthday: 'March 5th, 1993',

        location: 'Porto, Portugal',
        locationDescription: '41°08\'58" N, -8°36\'39" W',

        contact: 'Contact me',

        locales: [
            'Portuguese (native)',
            'English (fluent)'
        ]
    },

    labels: {
        platforms: 'Platforms',
        technologies: 'Technologies'
    },

    skills: {
        title: 'Technologies',

        main: 'Main skills',

        interests: 'Keen about'
    },

    career: {
        title: 'Professional Experience',

        path: [
            {
                company: 'Jumia Group',
                companyHref: 'https://group.jumia.com/',

                role: 'Web Engineer',

                location: 'Jumia Porto Tech Center',
                locationHref: 'https://www.linkedin.com/company/porto-tech-center/',

                date: 'November 2014 - Present',

                projects: [
                    {
                        title: 'Jumia Mall',

                        href: 'https://www.jumia.com.ng/',
                        hrefLabel: 'jumia.com.ng',

                        description: [
                            'Participating in the development of Jumia Group’s e-commerce platform.',
                            'Initially dedicated to third party platform integrations (payment methods, operations platforms, etc...), and later focused on application performance improvement investigations. Contributions to the development of a new Back Office’s User Interface, making use of modern JavaScript frameworks.'
                        ].join('\n\n'),

                        platforms: [
                            'GitHub (Git)',
                            'Jenkins (CI/CD)',
                            'Bamboo (CI)',
                            'Jira (Project Management)'
                        ],

                        technologies: [
                            'PHP (Zend)',
                            'JS (Vanilla, ExtJS & Vue.js)',
                            'CSS',
                            'Docker'
                        ]
                    },

                    {
                        title: 'Internal Tools',

                        description: 'Also dedicated to the development of tools to help on the team’s daily tasks.',

                        platforms: [
                            'GitLab (Git, CI/CD)'
                        ],

                        technologies: [
                            'JS (Vanilla & Node.js)'
                        ]
                    },

                    {
                        title: 'Jumia Group Website',

                        href: 'https://group.jumia.com/',
                        hrefLabel: 'group.jumia.com',

                        description: 'Complete development of the Jumia Group’s corporate website, as well as automation of the tasks related to the same.',

                        platforms: [
                            'GitHub (Git)',
                            'Jenkins (CI/CD)',
                            'Jira (Project Management)'
                        ],

                        technologies: [
                            'JS (TypeScript & Nuxt.js)',
                            'PHP (Laravel)',
                            'CSS (Tailwind CSS)',
                            'Docker',
                            'NGINX'
                        ]
                    }
                ]
            }
        ]
    },

    projects: {
        title: 'Personal Projects',

        list: [
            {
                title: 'Cryptocurrencies trading algorithm and monitoring platform',

                description: 'Development of an algorithm to exchange cryptocurrencies with the objective of generating a return based on the price fluctuations of the markets. Connection with many exchanges API’s (using Rest and Data Streams), with implementation of variable rules for each one, as well as a real-time monitoring system based on WebSockets.',

                platforms: [
                    'GitHub (Git)',
                    'Drone CI (CI/CD)',
                    'Firebase (Static Hosting, Firestore Database & User management)',
                    'Cloudflare (DNS & Protection)'
                ],

                technologies: [
                    'JS (TypeScript, Node.js, Nuxt.js, Socket.IO)',
                    'CSS (Tailwind CSS)'
                ]
            },

            {
                title: 'Personal server network configuration',

                description: 'Configuration of diverse Docker based services, using it’s swarm mode, with a private communication network (OpenVPN based). Implementation of a monitoring and alerting system, to provide a better understanding of the status of the network services.',

                platforms: [
                    'Grafana (Monitoring)',
                    'Portainer (Docker Services Management)',
                    'Drone CI (CI/CD)'
                ],

                technologies: [
                    'Docker (Compose, Registry, Swarm & Stacks)',
                    'OpenVPN',
                    'Telegraf',
                    'InfluxDB'
                ]
            }
        ]
    },

    training: {
        title: 'Participation in Conferences and Technical Training',

        list: [
            { type: 'conference', title: 'NDC Porto', date: 'April 2020' },
            { type: 'conference', title: 'TECHinPORTO', date: 'June 2019' },
            { type: 'conference', title: 'SynfonyCon', date: 'December 2018' },
            { type: 'conference', title: 'TECHinPORTO', date: 'June 2018' },
            { type: 'training', title: 'XSS and CSRF 101', date: 'January 2018' },
            { type: 'training', title: 'SQL Injection 101', date: 'November 2017' },
            { type: 'conference', title: 'Porto Tech Hub', date: 'September 2016' }
        ]
    },

    academic: {
        title: 'Academic Path',

        path: [
            {
                title: 'Bachelor’s degree in Computer Engineering',

                location: 'Instituto Superior de Engenharia do Porto',
                locationHref: 'https://www.isep.ipp.pt/',

                date: '2011 to 2014, 2017',

                description: 'Graduated in 2017, with an average classification of 13, where skills were acquired in the planning, architecturing and developing of software projects, as well as network and server management.'
            }
        ]
    },

    contact: {
        title: 'Contact Me',

        name: 'Name',
        email: 'E-Mail Address',
        message: 'Message',

        send: 'Send',
        sendPending: 'Sending...',
        sendFailed: 'Failed. Retry',
        sendSuccessful: 'Sent'
    }
};
