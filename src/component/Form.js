export class Form {
    constructor(question, items, validationFailMessage) {
        this.question = question;
        this.items = items;
        this.validationFailMessage = validationFailMessage;

        this.createForm();
        this.setFormElementVisibility();
        this.setButtons();
    }

    createForm() {
        const formElement = document.createElement('div');

        this.formElement = formElement;

        formElement.classList.add('form-element');
        formElement.classList.add('survey');
        const formElements = document.querySelectorAll('.form-element');
        const numberOfForms = formElements.length;
        const dataStepNumber = numberOfForms + 1;
        formElement.id = `step${dataStepNumber}`;
        formElement.setAttribute('data-step-number', dataStepNumber);

        const titleElement = document.createElement('div');
        titleElement.classList.add('title');
        const titleTextElement = document.createElement('p');

        titleTextElement.innerText = `문제 ${dataStepNumber}`;
        titleElement.appendChild(titleTextElement);

        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        const questionTextElement = document.createElement('p');

        questionTextElement.innerText = this.question;
        questionElement.appendChild(questionTextElement);

        const answerInputAreaElement = document.createElement('div');
        answerInputAreaElement.classList.add('answer-input-area');

        const buttonsAreaElement = document.createElement('div');
        buttonsAreaElement.classList.add('button-area');
        const prevButton = document.createElement(('button'));
        prevButton.classList.add('prev-button');
        prevButton.innerText = '이전';

        const nextButton = document.createElement(('button'));
        nextButton.classList.add('next-button');
        nextButton.innerText = '다음';
        const submitButton = document.createElement(('button'));
        submitButton.classList.add('submit-button');
        submitButton.innerText = '제출';

        buttonsAreaElement.appendChild(prevButton);
        buttonsAreaElement.appendChild(nextButton);
        buttonsAreaElement.appendChild(submitButton);

        const formInnerAreaElement = document.createElement('div');
        formInnerAreaElement.classList.add('survey-inner-area');

        formInnerAreaElement.appendChild(titleElement);
        formInnerAreaElement.appendChild(questionElement);
        formInnerAreaElement.appendChild(answerInputAreaElement);

        formElement.appendChild(formInnerAreaElement);
        formElement.appendChild(buttonsAreaElement);

        const resultElement = document.querySelector('#result');
        resultElement.appendChild(formElement);

    }

    getFormElementByStepNumber(stepNumber) {
        const formElementReturn = document.querySelector(`#step${stepNumber}`);
        return formElementReturn;
    }

    setPrevButtonListener() {
        const formElement = this.formElement;
        const prevButton = formElement.querySelector('.prev-button');

        prevButton.onclick = () => {
            const curStepNumber = parseInt(formElement.getAttribute('data-step-number'));
            const prevStepNumber = curStepNumber - 1;
            const prevStepFormElement = this.getFormElementByStepNumber(prevStepNumber);
            formElement.style.display = 'none';
            prevStepFormElement.style.display = 'block';

        }
    }

    setNextButtonListener() {
        const formElement = this.formElement;
        const nextButton = formElement.querySelector('.next-button');

        nextButton.onclick = () => {
            const inputTextValidationResult = this.inputValidation(formElement);

            if (!inputTextValidationResult) {
                alert(this.validationFailMessage);
                return;
            } else {
                const curStepNumber = parseInt(formElement.getAttribute('data-step-number'));
                const nextStepNumber = curStepNumber + 1;
                const nextStepFormElement = this.getFormElementByStepNumber(nextStepNumber);

                formElement.style.display = 'none';
                nextStepFormElement.style.display = 'block';
            }
        }
    }

    showSurveyResult() {
        const formElements = document.querySelectorAll('.form-element');

        formElements.forEach((formElement, index) => {

            formElement.style.display = 'block';
            formElement.querySelector('.button-area').style.display = 'none';
            formElement.querySelectorAll('input').forEach((inputElement) => {
                inputElement.disabled = true;
            });

            formElement.querySelectorAll('select').forEach((selectElement) => {
                selectElement.disabled = true;
            });

            formElement.querySelectorAll('textarea').forEach((textareaElement) => {
                textareaElement.disabled = true;
            });

        });
    }

    setSubmitButtonListener() {
        const formElement = this.formElement;
        const submitButton = formElement.querySelector('.submit-button');

        submitButton.onclick = () => {
            const inputTextValidationResult = this.inputValidation(formElement);

            if (!inputTextValidationResult) {
                alert(this.validationFailMessage);
                return;
            } else {
                if (confirm('제출하시겠습니까?')) {
                    this.showSurveyResult();
                }
            }
        }
    }

    enablePrevButton(formElement, enableButton) {
        const prevButton = formElement.querySelector('.prev-button');

        if (enableButton) {
            prevButton.style.display = 'inline-block';
            this.setPrevButtonListener();
        } else {
            prevButton.style.display = 'none';
        }
    }

    enableNextButton(formElement, enableButton) {
        const nextButton = formElement.querySelector('.next-button');

        if (enableButton) {
            nextButton.style.display = 'inline-block';
            this.setNextButtonListener();
        } else {
            nextButton.style.display = 'none';
        }
    }

    enableSubmitButton(formElement, enableButton) {
        const submitButton = formElement.querySelector('.submit-button');

        if (enableButton) {
            submitButton.style.display = 'inline-block';
            this.setSubmitButtonListener();
        } else {
            submitButton.style.display = 'none';
        }
    }

    setButtons() {
        const formElements = document.querySelectorAll('.form-element');
        const numberOfForms = formElements.length;

        formElements.forEach((formElement, index) => {
            const formStepNumber = index + 1;

            if (formStepNumber === 1) {
                this.enablePrevButton(formElement, false);
                this.enableNextButton(formElement, true);
                this.enableSubmitButton(formElement, false);
            } else if (formStepNumber === numberOfForms) {
                this.enablePrevButton(formElement, true);
                this.enableNextButton(formElement, false);
                this.enableSubmitButton(formElement, true);
            } else {
                this.enablePrevButton(formElement, true);
                this.enableNextButton(formElement, true);
                this.enableSubmitButton(formElement, false);
            }
        });

    }

    setFormElementVisibility() {
        const formElements = document.querySelectorAll('.form-element');

        formElements.forEach((formElement, index) => {
            const formStepNumber = index + 1;

            if (formStepNumber === 1) {
                formElement.style.display = 'block';
            } else {
                formElement.style.display = 'none';
            }
        });
    }

}