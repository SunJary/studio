import {TypeDataBase} from '@idraw/types';

const data: TypeDataBase = {
    elements: [
        {
            name: "image",
            x: 0,
            y: 0,
            w: 496,
            h: 716,
            type: "image",
            angle: 0,
            desc: {
                src: '/static/cover/2-3.png'
            },
            operation: {
                lock: !0
            }
        },
        {
            name: "text",
            x: 25,
            y: 125,
            w: 440,
            h: 95,
            type: "text",
            angle: 0,
            desc: {
                text: "达芬奇手术机器人",
                color: "#191eb8",
                fontSize: 46,
                lineHeight: 54,
                fontFamily: 'SourceHanBold',
                textAlign: 'left',// | 'center' | 'right',
            },
            operation: {
                lock: !1
            }
        },
        {
            name: "text",
            x: 25,
            y: 200,
            w: 420,
            h: 115,
            type: "text",
            angle: 0,
            desc: {
                text: "达芬奇手术机器人达芬奇手术机器人达芬奇手术机器人达芬奇手术机器人",
                color: "#191eb8",
                fontSize: 26,
                lineHeight: 42,
                fontFamily: 'SourceHanBold',
                textAlign: 'left',// | 'center' | 'right',
            },
            operation: {
                lock: !1
            }
        },
        {
            name: "text",
            x: 39,
            y: 652,
            w: 401,
            h: 49,
            type: "text",
            angle: 0,
            desc: {
                text: "00/00 00:00-00:00",
                color: "#191eb8",
                fontSize: 31,
                lineHeight: 42,
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
