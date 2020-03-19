import { Form } from './Form'

export class SurveyInputText extends Form {

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

    create() {

    }

    appendAnswerArea () {

        const formElement = this.formElement;
        const answerInputArea = formElement.querySelector('.answer-input-area');

        const inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');

        answerInputArea.appendChild(inputText);

    }

    inputValidation(formElement) {
        const inputText = formElement.querySelector('input').value;
        return inputText !== '';

    }

    setListener() {

        const formElement = this.formElement;

        const nextButton = formElement.querySelector('.next-button');

        nextButton.onclick = () => {

            const inputTextValidationResult = this.inputValidation(formElement);

            if (!inputTextValidationResult) {
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