({
    block: 'b-page',
    title: 'Sergey Polovko — jamel@yandex-team.ru',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'index.css' },
        { elem: 'css', url: 'index.ie.css', ie: 'lte IE 7' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'index.js' }
    ],
    i18n: { langs: ['ru', 'en'], lang: 'ru' },
    content: {
        block: 'b-card',
        mods: { lang: 'ru' },
        content: [
            {
                block: 'b-card-layout',
                lang: 'ru',
                info: {
                    name: 'Сергей Половко',
                    position: 'Разработчик<br>Служба разработки систем хранения и обработки данных',
                    company: {
                        country: 'Россия',
                        locality: 'Москва',
                        zip: '119021',
                        address: 'ул. Льва Толстого, д. 16',
                        site: 'www.yandex.ru'
                    },
                    person: {
                        email: 'jamel@yandex-team.ru',
                        skype: 's.polovko',
                        github: 'jamel'
                    }
                }
            },
            {
                block: 'b-card-layout',
                lang: 'en',
                info: {
                    name: 'Sergey Polovko',
                    position: 'Software Developer<br>Data Storage and Processing Systems service',
                    company: {
                        country: 'Russia',
                        locality: 'Moscow',
                        zip: '119021',
                        address: '16, Leo Tolstoy St.',
                        site: 'www.yandex.com'
                    },
                    person: {
                        email: 'jamel@yandex-team.ru',
                        skype: 's.polovko',
                        github: 'jamel'
                    }
                }
            }
        ]
    }
})
