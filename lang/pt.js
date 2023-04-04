/* eslint-disable max-len */

export default {
    meta: {
        title: 'Álvaro Ferreira - Perfil, Projectos, Carreira, Contactos',
        description: 'Web Engineer como Profissional, Melhorador de Desempenho como Entusiasta. Envie-me uma mensagem para mais detalhes ou solicitação de projectos'
    },

    sidebar: {
        profile: [
            'Com uma Licenciatura em Engenharia Informática e 7 anos de experiência profissional em desenvolvimento web, eu tenho um conhecimento significativo sobre múltiplas tecnologias e diversos tópicos.',
            'Autodidata, jogador em equipa, atento ao detalhe e entusiasta por tópicos de melhoria de performance.'
        ].join('\n\n'),

        age: '{0} Anos',
        birthday: '5 Março 1993',

        location: 'Porto, Portugal',
        locationDescription: '41°08\'58" N, -8°36\'39" W',

        contact: 'Contacta-me',

        locales: [
            'Português (nativo)',
            'Inglês (fluente)'
        ]
    },

    labels: {
        platforms: 'Plataformas',
        technologies: 'Tecnologias'
    },

    skills: {
        title: 'Tecnologias',

        main: 'Competências principais',

        interests: 'Interessado em'
    },

    career: {
        title: 'Experiência Profissional',

        path: [
            {
                company: 'Mindera',
                companyHref: 'https://mindera.com/',

                role: 'Software Developer',

                location: 'Mindera Portugal',
                locationHref: 'https://mindera.com/portugal/',

                date: 'Novembro 2021 - Presente',

                projects: [
                    {
                        title: 'Dunelm',

                        href: 'https://www.dunelm.com/',
                        hrefLabel: 'dunelm.com',

                        description: [
                            'Integrado numa equipa para o desenvolvimento e manutenção de aplicações e ferramentas de back-office'
                        ].join('\n\n'),

                        platforms: [
                            'GitLab (Git)',
                            'Jira (Gestão de Projectos)'
                        ],

                        technologies: [
                            'JS (TypeScript, Node.js & React)',
                            'AWS',
                            'GraphQL'
                        ]
                    }
                ]
            },
            {
                company: 'Jumia Group',
                companyHref: 'https://group.jumia.com/',

                role: 'Web Engineer',

                location: 'Jumia Porto Tech Center',
                locationHref: 'https://www.linkedin.com/company/porto-tech-center/',

                date: 'Novembro 2014 - Novembro 2021',

                projects: [
                    {
                        title: 'Jumia Mall',

                        href: 'https://www.jumia.com.ng/',
                        hrefLabel: 'jumia.com.ng',

                        description: [
                            'Participar no desenvolvimento da plataforma de comércio electrónico do Jumia Group.',
                            'Inicialmente dedicado à integração com plataformas de terceiros (métodos de pagamento, plataformas de operações, etc...), com foco posterior em investigações para melhoria de performance da aplicação. Contribuição no desenvolvimento de uma nova interface para a solução de Back Office, com recurso a frameworks inovativas de JavaScript.'
                        ].join('\n\n'),

                        platforms: [
                            'GitHub (Git)',
                            'Jenkins (CI/CD)',
                            'Bamboo (CI)',
                            'Jira (Gestão de Projectos)'
                        ],

                        technologies: [
                            'PHP (Zend)',
                            'JS (Vanilla, ExtJS & Vue.js)',
                            'CSS',
                            'Docker',
                            'SQL (MySQL/MariaDB)',
                            'RabbitMQ'
                        ]
                    },

                    {
                        title: 'Internal Tools',

                        description: 'Também dedicado ao desenvolvimento de ferramentas que auxiliam no dia-a-dia da equipa.',

                        platforms: [
                            'GitLab (Git, CI/CD)'
                        ],

                        technologies: [
                            'JS (Vanilla & Node.js)',
                            'SQL (SQLite)',
                            'NoSQL (Redis)'
                        ]
                    },

                    {
                        title: 'Jumia Group Website',

                        href: 'https://group.jumia.com/',
                        hrefLabel: 'group.jumia.com',

                        description: 'Desenvolvimento completo do website corporativo do Jumia Group, assim como tarefas relacionadas com automação relacionadas com o mesmo.',

                        platforms: [
                            'GitHub (Git)',
                            'Jenkins (CI/CD)',
                            'Jira (Gestão de Projectos)'
                        ],

                        technologies: [
                            'JS (TypeScript & Nuxt.js)',
                            'PHP (Laravel)',
                            'CSS (Tailwind CSS)',
                            'Docker',
                            'SQL (MySQL/MariaDB)',
                            'NGINX'
                        ]
                    }
                ]
            }
        ]
    },

    projects: {
        title: 'Projectos Pessoais',

        list: [
            {
                title: 'Algoritmo de troca de criptomoedas e plataforma de monitorização',

                description: 'Desenvolvimento de um algoritmo de câmbio de criptomoedas com o objetivo de gerar retorno baseado em flutuações nos mercados. Conexão com a API de várias exchanges (via Rest e Data Streams), e implementação de regras variáveis para cada uma, assim como sistema de monitorização em tempo real baseado em WebSockets.',

                platforms: [
                    'GitHub (Git)',
                    'Drone CI (CI/CD)',
                    'Firebase (Alojamento Estático, Base de Dados Firestore & Gestão de Utilizadores)',
                    'Cloudflare (DNS & Protecção)'
                ],

                technologies: [
                    'JS (TypeScript, Node.js, Nuxt.js, Socket.IO)',
                    'CSS (Tailwind CSS)'
                ]
            },

            {
                title: 'Configuração de rede de servidores pessoal',

                description: 'Configuração de diversos serviços baseados em Docker, usando o modo swarm do mesmo, com rede privada de comunicação (baseada em OpenVPN). Implementação de um sistema de monitorização e alertas sobre os serviços da rede.',

                platforms: [
                    'Grafana (Monitorização)',
                    'Portainer (Gestão de Serviços em Docker)',
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
        title: 'Conferências e Formações',

        list: [
            { type: 'conferência', title: 'NDC Porto', date: 'Abril 2020' },
            { type: 'conferência', title: 'TECHinPORTO', date: 'Junho 2019' },
            { type: 'conferência', title: 'SynfonyCon', date: 'Dezembro 2018' },
            { type: 'conferência', title: 'TECHinPORTO', date: 'Junho 2018' },
            { type: 'formação', title: 'XSS and CSRF 101', date: 'Janeiro 2018' },
            { type: 'formação', title: 'SQL Injection 101', date: 'Novembro 2017' },
            { type: 'conferência', title: 'Porto Tech Hub', date: 'Setembro 2016' }
        ]
    },

    academic: {
        title: 'Percurso Académico',

        path: [
            {
                title: 'Licenciatura em Engenharia Informática',

                location: 'Instituto Superior de Engenharia do Porto',
                locationHref: 'https://www.isep.ipp.pt/',

                date: '2011 a 2014, 2017',

                description: 'Licenciatura terminada em 2017, onde foram adquiridas competências no planeamento, arquitectura e desenvolvimento de projectos informáticos, assim como gestão de redes e servidores.'
            }
        ]
    },

    contact: {
        title: 'Entrar em Contacto',

        name: 'Nome',
        email: 'Endereço de E-Mail',
        message: 'Mensagem',

        send: 'Enviar',
        sendPending: 'A Enviar...',
        sendFailed: 'Falhou. Re-enviar',
        sendSuccessful: 'Enviado'
    }
};
