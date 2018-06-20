//插入排序===============================================================================
function insertSort(list){
    var Lists = isArray(list)?list:[] , tempNum
    for(let i=1;i<Lists.length;i++){
        tempNum = Lists[i] //被比较元素
        let insertNum = i-1//比较元素  即被比较元素的前一个
        while(insertNum>=0 && Lists[insertNum]>tempNum){ 
            //如果比较元素大于 被比较元素 那么比较元素后移 并将两个比较位同时向前推进一位
            Lists[insertNum+1]  = Lists[insertNum]
            insertNum -- 
        } 
        Lists[insertNum+1] = tempNum;//最后将被比较元素赋值给 剩下的位置
    }   
    return Lists
}
// 归并排序================================================================================
//递归调用 mergeSort导致 长度为N的数组最终会调用2*n-1次 排序数组长度最大为1500左右
function mergeSort(left,right){
    let re = []
    while(left.length>0 && right.length>0){
        if(left[0] < right[0]){
            re.push(left.shift())
        }else{
            re.push(right.shift())
        }
    }
    //当左右长度不相等的时候，将比较完的数组连接起来
    return re.concat(left).concat(right);
}
function merge(list){
    if(list.length == 1) return array;
    let  lists = list,left,right,mid
    mid = Math.floor(array.length/2)
    left = list.splice(0,mid)
    right = list.splice(mid)
    return mergeSort(merge(left),merge(right));
}
//=============================快速排序==============================================
function quickSort(arr){
    if(arr.length<2){return arr}
    let left=[],
        right=[],
        mid = Math.floor(arr.length/2),
        pivot = arr.splice(mid,1)[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot],quickSort(right))
}
//========================希尔排序===================================================
function shellSort(arr){
    let gap = Math.floor(arr.length/2)//步长
    while(gap>=1){//步长大于等于1 则 继续缩短步长 继续换位 完成排序
        for(let i = gap;i<arr.length;i++){ //index较大的数
            var j ,temp = arr[i]
            for(j = i - gap ; j>=0&&temp<arr[j] ; j= j-gap){
                arr[j + gap] = arr[j] //若（index-步长）的数 小于 index较大的数 换位置
            }
            arr[j+rap] = temp; //换位置
        }
        gap = Math.floor(gap/2)
    }
}
//============堆排序=================================================================
function BuildHeap(arr){
    for(let i=arr.length/2;i>=0;i--){
        changeHeap(arr,i,arr.length)
    }
}
function HeapSort(arr){
    BuildHeap(arr);
    for(var i=arr.length - 1;i>0;i--){
        var swap = arr[i];
        arr[i] = arr[0];
        arr[0] = swap;
        changeHeap(arr,0,i)
    }
}
function changeHeap(arr,pos,len){
    var swap = arr[pos];//保存当前节点
    var child = pos*2 +1; //定位到当前节点的左边子节点
    while(child < len){ 
        //判断是否有右节点，如果右节点大，就采用当前节点和右节点比较
        if(child + 1 <len && arr[child]<arr[child + 1]){
            child += 1;
        }
        //比较当前节点和最大子节点，小于就交换，并将当前节点定位到子节点上
        if(arr[pos] < arr[child]){
            arr[pos]  = arr[child] //child => pos
            pos = child
            child = pos*2 + 1
        }else{
            break;
        }
        arr[pos] = swap //pos =>child
    }
}
//=========================================================================================
isArray=(list)=>{
    return {}.toString.call(list) == "[object Array]"
}

console.log(insertSort([6,3,1,5,4]))