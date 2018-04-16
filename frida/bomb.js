var mvc = 0;
var board = 0;

// get top ViewController which is MinesweeperViewController
// get BoardView of MinesweeperViewController
function init() {
    var UIApp = ObjC.classes.UIApplication;
    var ui = UIApp.alloc();

    mvc = ui.keyWindow().rootViewController();
    board = mvc.board();
}

// mark bombs on the grid using setGrid method of BoardView
// UI changes must be done in the main thread to update automatically
// therefore use GCD
function mark(x, y) {
    ObjC.schedule(ObjC.mainQueue, function () {
        board.setGrid_x_y_(0xd, x, y);
    });
}

// function to find bombs from the grid
// all cells with value 17 are bombs
// if you press a bomb on the first try, then bombs will
// be re-shuffled
function findBombs() {
    var x = parseInt(board.valueForKey_("width").toString());
    var y = parseInt(board.valueForKey_("height").toString());

    for (var i = 0; i < x; i++)
        for (var j = 0; j < y; j++)
            if (board.gridAtx_y_(i, j) == 17)
                mark(i, j);
}

// changes implementation of -[MinesweeperViewController toggleFlag:]
function changeImpl() {
    var MinesweeperViewController = ObjC.classes.MinesweeperViewController;
    var toggleFlag = MinesweeperViewController['- toggleFlag:'];
    toggleFlag.implementation = ObjC.implement(toggleFlag, function (handle, selector) {
        init();
        findBombs();
    });
}

// changeImpl();
init();
findBombs();
