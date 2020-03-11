export class Survey2 {
    constructor(
        configuration = {}
    ) {
        this.init();
    }

    init() {
        this.setListener();
    }

    setListener() {

        document.querySelector('#survey2-before-btn').onclick = () => {

            let survey1area = document.querySelector('#survey1-area');
            let survey2area = document.querySelector('#survey2-area');
            survey1area.style.display = 'block';
            survey2area.style.display = 'none';

        };

        document.querySelector('#survey2-next-btn').onclick = () => {

            let survey2Clicked = document.querySelector('[name="survey2"]:checked');

            if (survey2Clicked === null) {
                alert('답변을 선택하셔야합니다.');
                return;
            }

            let survey2ClickedValue = survey2Clicked.value;
            let survey2area = document.querySelector('#survey2-area');
            let survey3area = document.querySelector('#survey3-area');
            survey2area.style.display = 'none';
            survey3area.style.display = 'block';

        };
    }
}