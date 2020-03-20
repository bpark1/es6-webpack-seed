import './survey.css';

import { SurveyInputText } from './component/surveyInputText';
import { SurveyInputRadio } from './component/surveyInputRadio';
import { SurveyInputCheckbox } from './component/surveyInputCheckbox';
import { SurveySelect } from './component/surveySelect';
import { SurveyTextarea } from './component/surveyTextarea';

const execute = () => {

    const surveyInputText = new SurveyInputText('1 더하기 1은?', [], '답변을 입력하셔야합니다.');
    const surveyInputRadio = new SurveyInputRadio('100 더하기 11은?', [111, 222], '답변을 선택하셔야합니다.');
    const surveyInputCheckbox = new SurveyInputCheckbox('1보다 작은 숫자는?', [-5, -2, 0, 1, 2], '답변을 하나 이상 선택하셔야합니다.');
    const surveySelect = new SurveySelect('1 곱하기 2는?', [1, 2, 3, 4, 5], '답변을 선택하셔야합니다.');
    const surveyInputRadio1 = new SurveyInputRadio('2의 배수는?', [1, 12, 15, 21, 51], '답변을 선택하셔야합니다.');
    const surveyInputCheckbox1 = new SurveyInputCheckbox('0보다 큰 숫자는?', [-2, -1, 0, 1, 5], '답변을 하나 이상 선택하셔야합니다.');
    const surveyTextarea = new SurveyTextarea('문제가 어렵습니까?', [], '답변을 입력하셔야합니다.');
    const surveyTextarea1 = new SurveyTextarea('개선 사항을 입력하십시오.', [], '개선 사항을 입력하셔야합니다.');
};

execute();