import { TypeTemplate } from './type';
import templet1_1 from '../../data/templet1_1';
import templet1_2 from '../../data/templet1_2';
import templet1_3 from '../../data/templet1_3';
import templet1_4 from '../../data/templet1_4';
import templet1_5 from '../../data/templet1_5';
import templet1_6 from '../../data/templet1_6';

import templet2_1 from '../../data/templet2_1';
import templet2_2 from '../../data/templet2_2';
import templet2_3 from '../../data/templet2_3';
import templet2_4 from '../../data/templet2_4';
import templet2_5 from '../../data/templet2_5';
import templet2_6 from '../../data/templet2_6';

const querystring = require('querystring')
let param = querystring.parse(window.location.search.substr(1))

const type = param.type

let templateList: TypeTemplate[] = []
if (type == 1) {
  templateList = [
    {
      name: '模板1',
      data: templet1_1,
      width: 496,
      height: 715
    },
    {
      name: '模板2',
      data: templet1_2,
      width: 496,
      height: 715
    },
    {
      name: '模板3',
      data: templet1_3,
      width: 496,
      height: 715
    },
    {
      name: '模板4',
      data: templet1_4,
      width: 496,
      height: 715
    },
    {
      name: '模板5',
      data: templet1_5,
      width: 496,
      height: 715
    },
    {
      name: '模板6',
      data: templet1_6,
      width: 496,
      height: 715
    },
  ];
} else if (type == 2) {
  templateList = [
    {
      name: '模板1',
      data: templet2_1,
      width: 750,
      height: 422
    },
    {
      name: '模板2',
      data: templet2_2,
      width: 750,
      height: 422
    },
    {
      name: '模板3',
      data: templet2_3,
      width: 750,
      height: 422
    },
    {
      name: '模板4',
      data: templet2_4,
      width: 750,
      height: 422
    },
    {
      name: '模板5',
      data: templet2_5,
      width: 750,
      height: 422
    },
    {
      name: '模板6',
      data: templet2_6,
      width: 750,
      height: 422
    },
  ];
} else {
  templateList = [
    {
      name: '模板1',
      data: templet1_1,
      width: 496,
      height: 715
    }
  ];
}

export default templateList;
