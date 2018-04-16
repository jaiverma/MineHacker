//
//  CustomClass.h
//  Swizzle
//
//  Created by Jai  Verma on 14/04/18.
//  Copyright © 2018 Jai  Verma. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface BoardView : UIView
- (int) gridAtx:(int)arg1 y:(int)arg2;
- (void) setGrid:(int)arg1 x:(int)arg2 y:(int)arg3;
@end

@interface CustomClass : UIViewController
- (BoardView *) board;
+ (void) sayHello;
@end
