export function getHref(tab: number) {
    var href = "";

    switch (tab) {
        case 0:
            href = "/";
            break;
        case 1:
            href = "/education";
            break;
        case 2:
            href = "/experience";
            break;
        case 3:
            href = "/portfolio";
            break;
        default:
            console.log(`Sorry, we are out of ${tab}.`);
    }

    return href;
}

export function getNumber(path: string) {
    var number = 0;

    switch (path) {
        case "/":
            number = 0;
            break;
        case "/education":
            number = 1;
            break;
        case "/experience":
            number = 2;
            break;
        case "/portfolio":
            number = 3;
            break;
        default:
            console.log(`Sorry, we are out of ${path}.`);
    }

    return number;
}