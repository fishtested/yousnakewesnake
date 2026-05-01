const challenges = [
    "and the snake can dash at the cost of length",
    "and you can rewind time for a few seconds",
    "and the snake leaves behind a solid trail",
    "and movement has momentum and turning delay",
    "but you control the snake using your mouse instead of arrow keys",
    "but walls occasionally move or shift",
    "but there is another snake competing for food",
    "but obstacles move around the map",
    "and the snake can briefly become invincible",
    "and you can teleport a short distance with a cooldown",
    "and you gain bonus points for risky paths",
    "but food disappears if not collected quickly",
    "and the snake speeds up the longer it survives",
    "but the snake changes direction when it hits something",
    "but food sometimes runs away",
    "but you can only see a small area around the snake head",
    "but the snake slows down every time it eats",
];

const goals = [
    "survive as long as possible",
    "eat as much food as you can",
    "stay alive while the map becomes harder over time",
    "complete the level within a time limit",
    "survive while the play area shrinks",
    "reach maximum length without touching walls",
    "survive while obstacles are moving",
    "reach all checkpoints before time runs out",
    "collect only special marked food items",
    "beat a target score",
];

function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateIdea() {
    const challenge = pick(challenges);
    const goal = pick(goals);

    return {
        challenge,
        goal,
        text: `A Snake game where your goal is to ${goal}, ${challenge}.`
    };
}

function showIdea() {
    const idea = generateIdea();
    document.getElementById("idea").textContent = idea.text;
}