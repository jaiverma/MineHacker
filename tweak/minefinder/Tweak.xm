#include "Mine.h"

%hook MinesweeperViewController

- (void)toggleFlag:(id)argument {
	BoardView *board = [self board];
	int x = [[board valueForKey: @"width"] intValue];
	int y = [[board valueForKey: @"height"] intValue];

	for (int i = 0; i < x; i++) {
		for (int j = 0; j < y; j++) {
			if ([board gridAtx: i y: j] == 17) {
				[board setGrid: 0xd x: i y: j];
			}
		}
	}
}

%end
