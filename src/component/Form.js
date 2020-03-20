export class Form {
    constructor(question, items, validationFailMessage) {
        // this.stepNumber = stepNumber;
        this.question = question;
        this.items = items;
        this.validationFailMessage = validationFailMessage;

        this.createForm();
        this.setButtons();
    }

    createForm() {
        const formElement = document.createElement('div');

        this.formElement = formElement;

        // formElement.setAttribute('id', `step${this.stepNumber}`);

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
        // const titleText = `문제 ${this.stepNumber}`;
        // titleTextElement.innerText = titleText;
        titleTextElement.innerText = `문제 ${dataStepNumber}`;
        titleElement.appendChild(titleTextElement);

        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        const questionTextElement = document.createElement('p');
        // const questionText = this.question;
        // questionTextElement.innerText = questionText;
        questionTextElement.innerText = this.question;
        questionElement.appendChild(questionTextElement);

        const answerInputAreaElement = document.createElement('div');

        answerInputAreaElement.classList.add('answer-input-area');


        const buttonsAreaElement = document.createElement('div');
        buttonsAreaElement.classList.add('button-area');
        const prevButton = document.createElement(('button'));
        prevButton.classList.add('prev-button');
        prevButton.innerText = '이전';
        // if (this.stepNumber === 1) {
        //     prevButton.style.block = 'none';
        // }
        const nextButton = document.createElement(('button'));
        nextButton.classList.add('next-button');
        nextButton.innerText = '다음';
        const submitButton = document.createElement(('button'));
        submitButton.classList.add('submit-button');
        submitButton.innerText = '제출';
        // submitButton.style.display = 'none';

        buttonsAreaElement.appendChild(prevButton);
        buttonsAreaElement.appendChild(nextButton);
        buttonsAreaElement.appendChild(submitButton);

        formElement.appendChild(titleElement);
        formElement.appendChild(questionElement);
        formElement.appendChild(answerInputAreaElement);
        formElement.appendChild(buttonsAreaElement);

        const resultElement = document.querySelector('#result');
        resultElement.appendChild(formElement);



    }



    updateButtons() {

    }

    // init() {
    //     this.setListener();
    // }


    setPrevButtonListener() {

        const formElement = this.formElement;
        const prevButton = formElement.querySelector('.prev-button');

        prevButton.onclick = () => {

            alert('prevButton clicked');

            // const inputTextValidationResult = this.inputValidation(formElement);
            //
            // if (!inputTextValidationResult) {
            //     alert(this.validationFailMessage);
            //     return;
            // }

            // let survey1area = document.querySelector('#survey1-area');
            // let survey2area = document.querySelector('#survey2-area');
            // survey1area.style.display = 'none';
            // survey2area.style.display = 'block';

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
                console.log('nextButton clicked');
            }

            // let survey1area = document.querySelector('#survey1-area');
            // let survey2area = document.querySelector('#survey2-area');
            // survey1area.style.display = 'none';
            // survey2area.style.display = 'block';

        }
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
                console.log('submitButton clicked');
            }
        }
    }

    enablePrevButton(formElement, enableButton) {
        // const formElement = this.formElement;
        const prevButton = formElement.querySelector('.prev-button');

        if (enableButton) {
            prevButton.style.display = 'inline-block';
            this.setPrevButtonListener();
        } else {
            prevButton.style.display = 'none';
        }
    }

    enableNextButton(formElement, enableButton) {
        // const formElement = this.formElement;
        const nextButton = formElement.querySelector('.next-button');

        if (enableButton) {
            nextButton.style.display = 'inline-block';
            this.setNextButtonListener();
        } else {
            nextButton.style.display = 'none';
        }
    }

    enableSubmitButton(formElement, enableButton) {
        // const formElement = this.formElement;
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

        // const formElement = this.formElement;
        // const formStepNumber = parseInt(formElement.getAttribute('data-step-number'));

        formElements.forEach((formElement, index) => {
            // const formStepNumber = parseInt(formElement.getAttribute('data-step-number'));
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

        // if (formStepNumber === 1) {
        //     this.enablePrevButton(false);
        //     this.enableNextButton(true);
        //     this.enableSubmitButton(false);
        // } else if (formStepNumber === numberOfForms) {
        //     this.enablePrevButton(true);
        //     this.enableNextButton(false);
        //     this.enableSubmitButton(true);
        // } else {
        //     this.enablePrevButton(true);
        //     this.enableNextButton(true);
        //     this.enableSubmitButton(false);
        // }

    }

}