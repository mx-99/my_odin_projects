function knightMoves(start, end) {
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    let queue = [[start]];
    let visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        let path = queue.shift();
        let current = path[path.length - 1];

        if (current[0] === end[0] && current[1] === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`, path);
            return path; // returns the path taken
        }

        for (let move of moves) {
            let newPosition = [current[0] + move[0], current[1] + move[1]];

            if (isValid(newPosition) && !visited.has(newPosition.toString())) {
                visited.add(newPosition.toString());
                queue.push([...path, newPosition]);
            }
        }
    }

    return null;

    function isValid(pos) {
        return pos[0] >= 0 && pos[0] <= 7 && pos[1] >= 0 && pos[1] <= 7;
    }
}

console.log(knightMoves([3, 3], [4, 3]));
console.log(knightMoves([0, 0], [7, 7]));
console.log(knightMoves([1, 1], [2, 2]));
console.log(knightMoves([5, 5], [6, 6]));
console.log(knightMoves([7, 7], [0, 0]));