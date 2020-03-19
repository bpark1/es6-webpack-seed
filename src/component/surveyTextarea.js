import { Form } from './Form'

export class SurveyTextarea extends Form {

    constructor(question, items) {
        super(question, items);
        // this.stepNumber = stepNumber;
        // this.question = question;
        // this.items = items;
        //
        // this.createForm();
        //
        // // this.updateButtons();
        // // this.init();

        this.appendAnswerArea();
        this.setListener();
    }

    appendAnswerArea () {

        const formElement = this.formElement;
        const answerInputArea = formElement.querySelector('.answer-input-area');

        const textareaElement = document.createElement('textarea');
        textareaElement.classList.add('survey5-textarea');

        answerInputArea.appendChild(textareaElement);

    }

    setListener() {

        const formElement = this.formElement;

        const submitButton = formElement.querySelector('.submit-button');
        const textareaElement = formElement.querySelector('textarea');


        submitButton.onclick = () => {

            let textareaValue = textareaElement.value;

            if (textareaValue === '') {
                alert('답변을 입력하셔야합니다.');
                return;
            }

            // let survey1area = document.querySelector('#survey1-area');
            // let survey2area = document.querySelector('#survey2-area');
            // survey1area.style.display = 'none';
            // survey2area.style.display = 'block';

        }
    }

}