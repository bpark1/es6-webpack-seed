import { Form } from './Form'

export class SurveySelect extends Form {

    constructor(question, items, validationFailMessage) {
        super(question, items, validationFailMessage);
        this.appendAnswerArea();
    }

    appendAnswerArea () {
        const items = this.items;

        const formElement = this.formElement;
        const answerInputArea = formElement.querySelector('.answer-input-area');
        const selectElement = document.createElement('select');
        const defaultSelectOption = document.createElement('option');
        defaultSelectOption.hidden = true;
        defaultSelectOption.innerText = '답을 선택하시오';
        defaultSelectOption.value = '';

        selectElement.appendChild(defaultSelectOption);

        items.forEach((item, index) => {
            const selectOption = document.createElement('option');
            selectOption.id = formElement.id + '-' + index;
            selectOption.value = item;
            selectOption.innerText = item;
            selectElement.appendChild(selectOption);
        });

        answerInputArea.appendChild(selectElement);
    }

    inputValidation(formElement) {
        let selectValue = formElement.querySelector('select').value;
        return selectValue !== '';
    }

}