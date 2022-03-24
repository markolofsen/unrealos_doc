import React from 'react';

//docusaurus
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

// material
import Button from '@mui/material/Button'

// styles
import { styled, media } from '@site/src/styles/snippets'


const HeaderList = styled.ul(theme => ({
    [media.down.md]: {
        marginBottom: '1rem !important',
    },
    '& > li': {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4, 3, 2),
        '&:nth-child(1)': {
            [media.down.sm]: {
                display: 'none',
            },
        },
        '&:nth-child(3)': {

            [media.up.md]: {
                border: `solid 1px rgba(255,255,255, .1)`,
                borderBottom: 0,
                borderRadius: '10px 10px 0 0',
                backgroundColor: 'rgba(255,255,255, .05)',
            },
        },
        [media.down.sm]: {
            border: `solid 1px rgba(255,255,255, .1)`,
            borderRadius: 10,
            backgroundColor: 'rgba(255,255,255, .05)',
        },
        '& > [data-el="reccomend"]': {
            position: 'absolute',
            margin: theme.spacing(-5.5, 0, 0, -2),
            borderRadius: 100,
            color: theme.palette.primary.main,
            border: 'solid 1px',
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(.3, 1.5),
            // ...theme.typography.subtitle2,
            fontSize: 12,
            fontWeight: theme.typography.fontWeightBold,
        },
        '& > [data-el="price"]': {
            padding: theme.spacing(1, 0, 2),
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            '& > span': {
                ...theme.typography.h3,
                color: theme.palette.primary.main,
                '&[data-free="true"]': {
                    color: theme.palette.success.main,
                },
            },
            '& > small': {
                marginLeft: 10,
                opacity: .6,
            },
        },
        '& > ul': {
            flex: 1,
            '& > [data-li="description"]': {
                opacity: .7,
                marginTop: theme.spacing(2),
            }
        },
    },

    '& label': {
        ...theme.typography.h5,
    },

}))


function TableHeader({ menuIndex }) {

    const data = getTable()

    return (
        <HeaderList data-row>
            <li>
                <label>Plans</label>
            </li>
            {data.map((item, index) => (
                <li key={index} data-mobile-hidden={index !== menuIndex}>

                    {item.slug === 'business' && (
                        <div data-el="reccomend">
                            Reccomended
                        </div>
                    )}

                    <ul>
                        <li>
                            <label>{item.name}</label>
                        </li>
                        <li data-li="description">
                            {item.description}
                        </li>
                    </ul>

                    <div data-el="price">
                        <span data-free={item.price.value === 0}>
                            ${item.price.value}
                        </span>
                        <small>{item.price.text}</small>
                    </div>

                    {item.button}

                </li>
            ))}
        </HeaderList>
    )
}

export default TableHeader


const getTable = () => {
    const startUrl = useBaseUrl('docs/reactjs/installation')
    const buyUrl = useBaseUrl('community/')

    return [
        {
            slug: 'community',
            name: 'Community',
            description: 'Get started with the industry-standard UI library for building React user interfaces (open-source, MIT licensed).',
            price: {
                value: 0,
                text: '– free forever.'
            },
            button: (
                <Link
                    fullWidth
                    size="large"
                    variant="outlined"
                    color="inherit"
                    component={Button}
                    to={startUrl}>
                    Get Started
                </Link>
            )
        },
        {
            slug: 'business',
            name: 'Business',
            description: 'Suitable for professional developers building enterprise solutions for a large audience.',
            price: {
                value: 186,
                text: '/ developer.'
            },
            button: (
                <Link
                    fullWidth
                    size="large"
                    variant="contained"
                    color="primary"
                    component={Button}
                    to={buyUrl}>
                    Buy Now
                </Link>
            ),
        },
        {
            slug: 'enterprise',
            name: 'Enterprise',
            description: 'Unlock all the most advanced features and professional support.',
            price: {
                value: 599,
                text: '/ developer.'
            },
            button: (
                <Link
                    size="large"
                    variant="outlined"
                    color="inherit"
                    component={Button}
                    to={buyUrl}>
                    Request
                </Link>
            ),
        },
    ]

}
