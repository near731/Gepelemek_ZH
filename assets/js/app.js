var app = new Vue({
    el: '#qCard',
    data: {
        questionNumbers: [],
        currentQuestionIndex: 0,
        isRandom: true,
        isShown: false,
    },
    watch: {
        'isRandom': function () {
            this.init();
        }
    },
    computed: {
        currentImage() {
            return 'assets/questions/' + this.questionNumbers[this.currentQuestionIndex] + '.PNG';
        },
        cssClass() {
            if (!this.isShown) return 'hidden qc' + this.questionNumbers[this.currentQuestionIndex];
            return 'qc' + this.questionNumbers[this.currentQuestionIndex];
        }
    },
    methods: {
        back() {
            if (this.currentQuestionIndex != 0) {
                this.currentQuestionIndex--;
            }
            this.isShown = false;
        },
        next() {
            if (this.currentQuestionIndex < 93) {
                this.currentQuestionIndex++;
            }
            this.isShown = false;
        },
        init() {
            this.currentQuestionIndex = 0;
            this.isShown = false;
            var numbers = [];
            for (let i = 1; i <= 94; i++) { numbers.push(i); }
            if (this.isRandom) this.questionNumbers = shuffle(numbers);
            else this.questionNumbers = numbers;
        }
    },
    mounted() {
        this.init();
    }
});

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}