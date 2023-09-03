# margin-top 父子级塌陷
    1. border-top
    2. BFC block format context
        + position: absolute
        + display: inline-block
        + overflow: hidden
        + float: left/right

# margin 同级上下合并
    1. 加一个共同父级后，父级overflow
    2. 实际开发中，一般不用解决这个bug