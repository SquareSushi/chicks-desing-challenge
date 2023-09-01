interface ItemData {
    id: number
    name: string
    logo: string
    sale?: boolean
    price?: string
    discount?: string
    description: string
    imgURL: string
}

const DUMMY_DATA: ItemData[] = [
    {
        id: 1,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        price: '450.00',
        sale: true,
        discount: '522.50',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/e467db4b-1653-416a-9a30-4a9a3d8bdd39'
    },
    {
        id: 2,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        price: '450.00',
        sale: true,
        discount: '522.50',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/e467db4b-1653-416a-9a30-4a9a3d8bdd39'
    },
    {
        id: 3,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        price: '450.00',
        sale: true,
        discount: '522.50',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/e467db4b-1653-416a-9a30-4a9a3d8bdd39'
    },
    {
        id: 4,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        price: '450.00',
        sale: true,
        discount: '522.50',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/0b203beb-ec56-4002-84af-a8b93c2dbd3f'
    },
    {
        id: 5,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        price: '450.00',
        sale: true,
        discount: '522.50',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/0b203beb-ec56-4002-84af-a8b93c2dbd3f'
    },
    {
        id: 6,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        price: '450.00',
        sale: true,
        discount: '522.50',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/0b203beb-ec56-4002-84af-a8b93c2dbd3f'
    },
    {
        id: 7,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        price: '450.00',
        sale: true,
        discount: '522.50',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/e07d8f5a-3cf2-497a-80dc-835631865e07'
    },
    {
        id: 8,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        price: '450.00',
        sale: true,
        discount: '522.50',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/e07d8f5a-3cf2-497a-80dc-835631865e07'
    },
    {
        id: 9,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/e07d8f5a-3cf2-497a-80dc-835631865e07'
    },
    {
        id: 10,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/30038348-3605-4b41-a82a-9054668828c7'
    },
    {
        id: 11,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/30038348-3605-4b41-a82a-9054668828c7'
    },
    {
        id: 12,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/30038348-3605-4b41-a82a-9054668828c7'
    },
    {
        id: 13,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/dec1612b-5007-4535-ad6f-5f3259987277'
    },
    {
        id: 14,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/dec1612b-5007-4535-ad6f-5f3259987277'
    },
    {
        id: 15,
        name: 'Blue Partyhat',
        logo: 'https://chicks-games.s3.amazonaws.com/bdac9c66-ec75-4a46-8264-b5a61ab1b4d6',
        description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr.',
        imgURL: 'https://chicks-products.s3.amazonaws.com/dec1612b-5007-4535-ad6f-5f3259987277'
    },
];

export default DUMMY_DATA;