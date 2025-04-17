articles = document.getElementsByTagName("article");

selected = -1;

n = 7;

colors = ["#ff5959", "#76ff84", "#8efff6", "#9185ff", "#e883ff", "#ff83e4"];

for (i = 1; i <= n; i++) {
    // const size = (100 / n) * i;
    const size = 60 + i * 5;
    //const s = size <= 85 && size + 10;
    const div = document.createElement("div");
    div.id = i;
    div.style.background = colors[i - 1];
    div.style.width = size + "%";
    div.textContent = i;

    articles[0].appendChild(div);
}

[...articles].forEach((article, index) => {
    article.addEventListener("click", () => {
        if (selected === index) {
            article.children[0].classList = "";
            selected = -1;
        } else if (selected === -1 && article.children.length > 0) {
            [...articles].forEach((a, i) => {
                a.children.length > 0 &&
                    (a.children[0].classList = i === index ? "selected" : "");
            });
            selected = index;
        } else if (
            selected != -1 &&
            (article.children[0] ? article.children[0].id : n + 1) >
                articles[selected].children[0].id
        ) {
            [...articles].forEach((a, i) => {
                a.children.length > 0 &&
                    a.children.length > 0 &&
                    (a.children[0].classList = "");
            });
            article.insertBefore(
                articles[selected].children[0],
                article.children[0]
            );
            selected = -1;
        } else {
            // [...articles].forEach((a, i) => {
            //   a.children.length > 0 &&
            //     a.children.length > 0 &&
            //     (a.children[0].classList = '');
            // });
            document.body.style.animation = "error 0.4s ease-in";
            document.body.addEventListener(
                "animationend",
                () => (document.body.style.animation = "")
            );
            // selected = -1;
        }
    });
});

const A = [7, 6, 5, 4, 3, 2, 1],
    B = [],
    C = [];

function moveArr(n, x, y, z) {
    // x start | y end | z placeholder
    if (n <= 0) return;
    moveArr(n - 1, x, z, y);
    y.push(x.pop());
    moveArr(n - 1, z, y, x);
}

console.log(A);
console.log(B);
console.log(C);
moveArr(7, A, C, B);
console.log(A);
console.log(B);
console.log(C);
