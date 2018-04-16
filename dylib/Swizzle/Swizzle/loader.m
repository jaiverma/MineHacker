//
//  loader.m
//  Swizzle
//
//  Created by Jai  Verma on 14/04/18.
//  Copyright © 2018 Jai  Verma. All rights reserved.
//

#import "loader.h"
#import "CustomClass.h"
#import <objc/runtime.h>

@implementation loader
static void __attribute__((constructor)) init(void) {
    NSLog(@"hello world");
    
    id MinesweeperViewController = objc_getClass("MinesweeperViewController");
    SEL toggle = NSSelectorFromString(@"toggleFlag:");
    
    
    Method original = class_getInstanceMethod(MinesweeperViewController, toggle);
    Method replacement = class_getInstanceMethod([CustomClass self], toggle);
    
    method_exchangeImplementations(original, replacement);
}
@end
