const to36 = (num) => { 
    let str = '';
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    while (num) { 
        str = arr[num % 36] + str;
        num = Math.floor(num / 36);
    }
    return str;
}