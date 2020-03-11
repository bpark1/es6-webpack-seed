export class Survey3 {
    constructor(
        configuration = {}
    ) {
        this.init();
    }

    init() {
        this.setListener();
    }

    setListener() {

        document.querySelector('#survey3-before-btn').onclick = () => {

            let survey2area = document.querySelector('#survey2-area');
            let survey3area = document.querySelector('#survey3-area');
            survey2area.style.display = 'block';
            survey3area.style.display = 'none';

        };

        document.querySelector('#survey3-next-btn').onclick = () => {
            console.log('button clicked');

            let survey3Checked = document.querySelectorAll('[name="survey3"]:checked');

            if (survey3Checked.length === 0) {
                alert('답변을 하나 이상 선택하셔야합니다.');
                return;
            }

            let survey3area = document.querySelector('#survey3-area');
            let survey4area = document.querySelector('#survey4-area');
            survey3area.style.display = 'none';
            survey4area.style.display = 'block';

            console.log('문항3 완료');

        }
    }
}