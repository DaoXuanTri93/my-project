


function phanLoai(){
    // debugger
    let weight = Number(document.getElementById('Weight').value);
    let height = Number(document.getElementById('height').value);
    let bmi = weight/(height^2);
    if(bmi < 18.5){
        document.getElementById('ketqua').value = 'Underweight';
    } else if (15.5 <= bmi <= 25.0){
        document.getElementById('ketqua').value = 'Normal';
    } else if (25.0 <= bmi <30.0){
        document.getElementById('ketqua').value = 'OverWeight';
    } else {
        document.getElementById('ketqua').value = 'Bese';
    }
    // document.getElementById('ketqua').value = 'Underweight';

}
