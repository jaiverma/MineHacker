@interface BoardView : NSObject
- (int) gridAtx:(int)arg1 y:(int)arg2;
- (void) setGrid:(int)arg1 x:(int)arg2 y:(int)arg3;
@end

@interface MinesweeperViewController
- (BoardView *)board;
@end
