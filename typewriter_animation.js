
function typing_animation() {
    let text_element = document.querySelector(".text");
    let text_array = text_element.innerHTML.split("");
    let all_words = text_element.innerHTML.split(" ");
    let text_len = text_array.length;
    const word_len = all_words.map((word) => {
        return word.length;
    });
}
typing_animation();

document.querySelector(".text_cursor").animate([
    {
        opacity: 0
    },
    {
        opacity: 0, offset: 0.7
    },
    {
        opacity: 1
    }

], cursor_timings);

let cursor_timings = {
    duration: 700,
    iterations: Infinity,
    easing: 'cubic-bezier(0, .26,.44,.93)'
}

let animation = document.querySelector(".text_cursor").animate([]);
