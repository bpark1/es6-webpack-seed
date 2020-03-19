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
        const submitButton = formElement.querySelector('.submit-button');

        if (nextButton.style.display === '' || nextButton.style.display === 'inline-block') {

            nextButton.onclick = () => {
                const inputTextValidationResult = this.inputValidation(formElement);

                if (!inputTextValidationResult) {
                    alert('답변을 입력하셔야합니다.');
                    return;
                }
            }
        }

        if (submitButton.style.display === '' || submitButton.style.display === 'inline-block') {

            submitButton.onclick = () => {
                const inputTextValidationResult = this.inputValidation(formElement);

                if (!inputTextValidationResult) {
                    alert('답변을 입력하셔야합니다.');
                    return;
                }
            }
        }


    }

}