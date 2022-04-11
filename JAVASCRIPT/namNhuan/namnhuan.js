

// kiem tra nam nhuan
// Year % 4 la nam nhuan, tru` nhung Year % 100 ma khong % cho 400



function tinhNamNhuan() {

    let Year = Number(document.getElementById('input').value);
    if (Year % 4 == 0) {
        if (Year % 100 == 0) {
            if (Year % 400 == 0) {
                return document.getElementById('ketqua').innerHTML = 'day la nam nhuan';
            } else {
                return document.getElementById('ketqua').innerHTML = 'day ko fai la nam nhuan';
            }
        } else {
            return document.getElementById('ketqua').innerHTML = 'day la nam nhuan';
        }
    } else {
        return document.getElementById('ketqua').innerHTML = 'day ko fai la nam nhuan';

    }
}