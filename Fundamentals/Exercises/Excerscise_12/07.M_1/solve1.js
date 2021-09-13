function solve(arraSeq){
    let long_seq = []
    let ch_seq = []
    for(let i=0;i<arraSeq.length;i++){
        let first_num = arraSeq[i]
        for(let j = i;i<arraSeq.length;j++){
            if(first_num === arraSeq[j]){
                ch_seq.push(arraSeq[j])
            } else {
                i = j - 1
                if(long_seq.length < ch_seq.length){
                    long_seq = ch_seq
                    ch_seq = []
                    break;
                } else {
                    ch_seq = []
                    break;
                }
            }
        }
    }
    console.log(long_seq.join(' '))
}
 
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
solve([1, 1, 1, 2, 3, 1, 3, 3])
solve([4, 4, 4, 4])
solve([0, 1, 1, 5, 2, 2, 6, 3, 3])