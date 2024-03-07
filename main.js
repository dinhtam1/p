function displayNextTime() {
    // Lấy thời gian hiện tại
    var currentTime = new Date();

    // Thêm 7 giờ 15 phút
    currentTime.setHours(currentTime.getHours() + 7);
    currentTime.setMinutes(currentTime.getMinutes() + 15);

    // Format giờ tiếp theo
    var hours = currentTime.getHours().toString().padStart(2, '0');
    var minutes = currentTime.getMinutes().toString().padStart(2, '0');
    var nextTimeString = hours + ":" + minutes;

    // Hiển thị giờ tiếp theo ra màn hình
    document.getElementById("next-time").innerText = "Giờ tiếp theo : " + nextTimeString;
}

function displayCurrentTime() {
    // Lấy thời gian hiện tại
    var currentTime = new Date();

    // Tạo một chuỗi để hiển thị giờ hiện tại
    var hours = currentTime.getHours().toString().padStart(2, '0');
    var minutes = currentTime.getMinutes().toString().padStart(2, '0');
    var currentTimeString = hours + ":" + minutes;

    // Hiển thị giờ hiện tại ra màn hình
    document.getElementById("display-time").innerText = "Giờ hiện tại : " + currentTimeString;
}

function submitTime() {
    var nextTime = document.getElementById("next-time")
    var displayTime = document.getElementById("display-time")
    // Lấy giờ từ trường nhập chop-time
    var chopTime = document.getElementById("chop-time").value;
    if (!chopTime) {
        document.getElementById("display-time").innerText = "Chưa nhập giờ";
        nextTime.innerText = null;
    }
    else {
        displayTime.innerText = null;
        var currentTime = new Date();
        var chopTimeArray = chopTime.split(":");
        var chopHour = parseInt(chopTimeArray[0]);
        var chopMinute = parseInt(chopTimeArray[1]);
        currentTime.setHours(chopHour);
        currentTime.setMinutes(chopMinute);

        // Thêm 7 giờ 15 phút
        currentTime.setHours(currentTime.getHours() + 7);
        currentTime.setMinutes(currentTime.getMinutes() + 15);

        // Format giờ tiếp theo
        var hours = currentTime.getHours().toString().padStart(2, '0');
        var minutes = currentTime.getMinutes().toString().padStart(2, '0');
        var nextTimeString = hours + ":" + minutes;

        // Hiển thị giờ tiếp theo ra màn hình
        document.getElementById("next-time").innerText = "Giờ tiếp theo : " + nextTimeString;
    }
}

