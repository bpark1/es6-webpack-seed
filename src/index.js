import './style.css';
import './survey.css';

import { SurveyInputText } from './component/surveyInputText';
import { SurveyInputRadio } from './component/surveyInputRadio';
import { SurveyInputCheckbox } from './component/surveyInputCheckbox';
import { SurveySelect } from './component/surveySelect';
import { SurveyTextarea } from './component/surveyTextarea';

const execute = () => {

    const surveyInputText = new SurveyInputText('1 더하기 1은?', [], '답변을 입력하셔야합니다.');
    const surveyInputRadio = new SurveyInputRadio('1 더하기 1은??', [111, 222], '답변을 선택하셔야합니다.');
    const surveyInputCheckbox = new SurveyInputCheckbox('1 더하기 1은???', [-5, -2, 0, 1, 2], '답변을 하나 이상 선택하셔야합니다.');
    const surveySelect = new SurveySelect('1 더하기 1은???', [1, 2, 3, 4, 5], '답변을 선택하셔야합니다.');
    const surveyTextarea = new SurveyTextarea('1 더하기 1은???', [], '답변을 입력하셔야합니다.');
    const surveyTextarea1 = new SurveyTextarea('1 더하기 1은???', [], '답변을 입력하셔야합니다.');
};

execute();