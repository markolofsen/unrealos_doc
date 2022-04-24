import * as React from 'react';

import styled_ from 'styled-jss'

// colors
import {
    blue as primary,
    lime as secondary,
    green as success,
} from './colors/';


// const styled = (obj, cb) => styled_(obj)(({ theme }) => cb(theme))

/* Usage styled:
import {styled} from 'styles/snippets'

const RootList = styled.ul(theme => ({
  backgroundColor: 'red',
}))
*/

const shape = new class {
    constructor() {
        this.borderRadius = 10
    }

    makeRadius(...payload) {
        const radius = 10
        let res = []
        for (let i of payload) {
            if (i === 'auto') i = radius
            res.push(i)
        }
        if (res.length > 0) { return res.map(item => item + 'px').join(' '); }
        return radius;
    }
}

const shadows = new class {
    constructor() {
        this['0'] = '1px 1px 1px rgba(0,0,0,.3)'
        this['1'] = '2px 2px 2px rgba(0,0,0,.3)'
    }
}

const media = new class {

    /*
    Usage in css:
  
    root: {
      [media.down.sm]: {
        height: 28,
      },
    },
    */

    constructor() {
        this.min = (int) => `@media (min-width: ${int}px)`
        this.max = (int) => `@media (max-width: ${int}px)`
    }

    // {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536}

    get down() {
        return {
            xs: this.max(600),
            sm: this.max(900),
            md: this.max(1200),
            lg: this.max(1536),
            // xl: this.max(1536),
        };
    }
    get up() {
        return {
            xs: this.min(0),
            sm: this.min(600),
            md: this.min(900),
            lg: this.min(1200),
            xl: this.max(1536),
        };
    }
}


const theme = new class {
    constructor() {
        this.media = media
        this.shape = shape
        this.shadows = shadows
    }



    get global() {

        // let fonts = []
        // for (let [key, value] of Object.entries(this.typography)) {
        //     console.error('@value', value)
        //     fonts.push({
        //         [`& ${key}`]: value,
        //         [key]: value,
        //     })
        // }
        // console.error(fonts)
        return {
            '& ul': {
                padding: 0,
                margin: 0,
                listStyle: 'none none',
            },
            '& [data-button-primary]': {
                backgroundColor: this.palette.primary.main,
                border: 0,
                padding: this.spacing(2.5, 3.5),
                borderRadius: this.shape.borderRadius,
                color: '#fff',
                boxShadow: this.shadows[1],
                ...this.typography.button,
            },
            '& h1': this.typography.h1,
            '& h2': this.typography.h2,
            '& h3': this.typography.h3,
            '& h4': this.typography.h4,
            '& h5': this.typography.h5,
            '& h6': this.typography.h6,
            '& .body1': this.typography.body1,
            '& .body2': this.typography.body2,
            '& .subtitle1': this.typography.subtitle1,
            '& .subtitle2': this.typography.subtitle2,
            '& .caption': this.typography.caption,
        }
    }

    spacing(...args) {
        const _size = .5
        return args.map(i => {
            if (typeof i === 'number') {
                return `${i * _size}rem`
            }
            return i

        }).join(' ')

    }
    get palette() {
        return {
            background: {
                default: '#212A48',
                // paper: 'var(--ifm-color-emphasis-0)',
            },
            primary: {
                ...primary,
                light: primary[300],
                main: primary[500],
                dark: primary[700],
            },
            secondary: {
                ...secondary,
                light: secondary[300],
                main: secondary[500],
                dark: secondary[700],
            },
            success: {
                ...success,
                light: success[300],
                main: success[500],
                dark: success[700],
            },
        }
    }
    get typography() {
        const getFontSize = s => {
            let mobileSize = s * .8
            mobileSize = mobileSize < 1 ? 1 : mobileSize

            return {
                [media.down.md]: {
                    fontSize: `${mobileSize}rem`,
                },
                [media.up.md]: {
                    fontSize: `${s}rem`,
                },
            }
        }

        const hTag = (s) => {
            const fontWeight = s * (100 * 2.3)
            return {

                fontWeight: fontWeight > 500 ? fontWeight : 500,
                ...getFontSize(s),
            }
        }
        const pTag = (s) => {
            return {
                ...getFontSize(s),
            }
        }

        return {
            h1: hTag(4),
            h2: hTag(3),
            h3: hTag(2.3),
            h4: hTag(2),
            h5: hTag(1.3),
            h6: hTag(1.2),
            body1: pTag(1.1),
            body2: pTag(.9),
            subtitle1: {},
            subtitle2: {},
            caption: {},
            button: {
                ...hTag(1.1),
                textTransform: 'uppercase',
                fontWeight: 700,
                letterSpacing: '.03rem',
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': {
                    opacity: .9,
                }
            },

            fontWeightBold: 700,
        }
    }
}

const styled = new class {
    constructor() {
        this.styled = (obj, cb) => {
            return styled_(obj)(cb(theme))
        }
    }
    ul(cb) { return this.styled('ul', cb); }
    ol(cb) { return this.styled('ol', cb); }
    div(cb) { return this.styled('div', cb); }

    custom(obj, cb) { return this.styled(obj, cb); }
}

export {
    shape,
    media,
    theme,
    styled,
}

export default undefined