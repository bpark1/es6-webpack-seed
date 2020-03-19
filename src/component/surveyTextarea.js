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
    }

    appendAnswerArea () {

        const formElement = this.formElement;
        const answerInputArea = formElement.querySelector('.answer-input-area');

        const textareaElement = document.createElement('textarea');
        textareaElement.classList.add('survey5-textarea');

        answerInputArea.appendChild(textareaElement);

    }

}