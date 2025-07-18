/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const toZero = (i, j, grid) => {
        const flag = i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0';
        if (flag) return;
        // 沉岛
        grid[i][j] = '0';
        toZero(i, j + 1, grid);
        toZero(i, j - 1, grid);
        toZero(i + 1, j, grid);
        toZero(i - 1, j, grid);
    }
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                toZero(i, j, grid);
            }
        }
    }

    return count;
};