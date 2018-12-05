let nums = prompt('Enter 2 Number').split (' '),
first = +nums[0],
second = +nums[1];
sum = 0;

if((first<= 0 || second<=0) || (first >= 1000 || second >= 1000) || first>= second){
    alert('არასწორი შუალედი'); 
} else {
    for (first; first<=second; first++){
        sum +=first
    }
    alert(sum);
}