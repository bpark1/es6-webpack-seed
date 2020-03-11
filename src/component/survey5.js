export class Survey5 {
    constructor(
        configuration = {}
    ) {
        this.init();
    }

    init() {
        this.setListener();
    }

    setListener() {

        let showAnswerArea = () => {
            let survey5area = document.querySelector('#survey5-area');
            let surveyAnswerArea = document.querySelector('#survey-answer-area');
            survey5area.style.display = 'none';
            surveyAnswerArea.style.display = 'block';
        };

        let surveySubmit = () => {

            let survey1Text = document.querySelector('#survey1-input').value;
            let survey2ClickedValue = document.querySelector('[name="survey2"]:checked').value;
            let survey3CheckedElements = document.querySelectorAll('[name="survey3"]:checked');
            let survey4CheckedValue = document.querySelector('#survey4').value;
            let survey5Text = document.querySelector('#survey5-textarea').value;

            document.querySelector('#survey1-input-answer').textContent = survey1Text;

            let survey2AnswerElements = document.querySelectorAll('.survey2-answer');

            survey2AnswerElements.forEach((survey2AnswerElement) => {

                if (survey2AnswerElement.value === survey2ClickedValue) {
                    survey2AnswerElement.checked = true;
                }
            });

            let survey3AnswerElements = document.querySelectorAll('[name="survey3-answer"]');

            let survey3CheckedValueArray = [];

            survey3CheckedElements.forEach((survey3CheckedElement) => {
                survey3CheckedValueArray.push(survey3CheckedElement.id);
            });

            survey3AnswerElements.forEach((survey3AnswerElement) => {

                if (survey3CheckedValueArray.includes(survey3AnswerElement.className)) {
                    survey3AnswerElement.checked = true;
                } else {
                    survey3AnswerElement.checked = false;
                }

            });

            let survey4AnswerElement = document.querySelector('#survey4-answer');

            survey4AnswerElement.value = survey4CheckedValue;

            let survey5AnswerElement = document.querySelector('#survey5-textarea-answer');

            survey5AnswerElement.innerText = survey5Text;

        };

        document.querySelector('#survey5-before-btn').onclick = () => {

            let survey4area = document.querySelector('#survey4-area');
            let survey5area = document.querySelector('#survey5-area');
            survey4area.style.display = 'block';
            survey5area.style.display = 'none';

        };

        document.querySelector('#survey5-submit-btn').onclick = () => {

            let survey5Text = document.querySelector('#survey5-textarea').value;

            if (survey5Text === '') {
                alert('개선사항을 입력하셔야합니다.');
                return;
            }

            if (confirm('제출하시겠습니까?')) {
                surveySubmit();
                showAnswerArea();
            }

        }
    }
}