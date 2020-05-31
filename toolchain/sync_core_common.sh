#!/bin/bash
# 拉取服务器上core项目的common的constant和schema
PROJECT_ROOT=$(cd "$(dirname $0)/.."; pwd)
GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
TARGET=test@10.10.5.30
DEST=${PROJECT_ROOT}/lib/core_common
mkdir -p ${DEST}

# 如果当前分支没有对应的代码,则拉取dev分支的common代码
# 当core项目切分支出来开发,且mobile这边需要用到core的新分支的common时,mobile这边也应该切到和core一样名字的分支上
if ssh $TARGET test -e /home/test/core_common/$GIT_BRANCH
then
    scp -r -p -q test@10.10.5.30:~/core_common/$GIT_BRANCH/* ${DEST}
else
    echo "no common for branch ${GIT_BRANCH}, use dev common instead"
    scp -r -p -q test@10.10.5.30:~/core_common/dev/* ${DEST}
fi
