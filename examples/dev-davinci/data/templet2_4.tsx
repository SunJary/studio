import {TypeDataBase} from '@idraw/types';

const data: TypeDataBase = {
    elements: [
        {
            name: "image",
            x: 0,
            y: 0,
            w: 750,
            h: 422,
            type: "image",
            angle: 0,
            desc: {
                src: '/static/cover/4-2.png'
            },
            operation: {
                lock: !0
            }
        },
        {
            name: "遮罩层",
            x: 0,
            y: 0,
            w: 750,
            h: 422,
            type: "image",
            angle: 0,
            desc: {
                src: '/static/idraw/b30.png',
            },
            operation: {
                lock: !1
            }
        },
        {
            name: "text",
            x: 36,
            y: 200,
            w: 670,
            h: 170,
            type: "text",
            angle: 0,
            desc: {
                text: "达芬奇手术机器人达芬奇手术机器人",
                color: "#ffffff",
                fontSize: 36,
                lineHeight: 54,
                fontFamily: '',
                textAlign: 'left',// | 'center' | 'right',
            },
            operation: {
                lock: !1
            }
        },
    ]
}

export default data;
