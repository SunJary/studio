import {TypeDataBase} from '@idraw/types';

const data: TypeDataBase = {
    elements: [
        {
            name: "image",
            x: 0,
            y: 0,
            w: 496,
            h: 715,
            type: "image",
            angle: 0,
            desc: {
                src: '/static/cover/15.jpg'
            },
            operation: {
                lock: !0
            }
        },
        {
            name: "text",
            x: 36,
            y: 470,
            w: 424,
            h: 170,
            type: "text",
            angle: 0,
            desc: {
                text: "达芬奇手术机器人达芬奇手术机器人",
                color: "#000000FF",
                fontSize: 36,
                lineHeight: 54,
                fontFamily: 'SourceHanBold',
                textAlign: 'left',// | 'center' | 'right',
            },
            operation: {
                lock: !1
            }
        },
    ]
}

export default data;
