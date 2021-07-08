export default {
    id: 1,
    users: [{
        id: 'u1',
        name: 'Nikodem',
        imageUri: 'https://wahtsapp-image.s3.eu-central-1.amazonaws.com/IMG_2677.jpeg',

    }, {
        id: "u2",
        name: 'Norbert',
        imageUri: 'https://wahtsapp-image.s3.eu-central-1.amazonaws.com/LaserEye.jpeg',
    }],
    messages: [{
        id: 'm1',
        content: 'How are you?',
        createdAt: '2021-06-07T16:35:00.000Z',
        user: {
            id: 'u1',
            name: 'Nikodem'
        }
    }, {
        id: 'm2',
        content: 'I am good',
        createdAt: '2021-06-07T16:36:00.000Z',
        user: {
            id: 'u2',
            name: 'Norbert',
        }
    }]


}