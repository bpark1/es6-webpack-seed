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

}