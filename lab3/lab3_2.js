function checkDogs(dogsJulia, dogsKate) {
    // Bước 1: Tạo một bản sao của mảng dogsJulia và loại bỏ tuổi mèo
    const juliaCopy = dogsJulia.slice();
    juliaCopy.shift(); // Loại bỏ tuổi của chó đầu tiên
    juliaCopy.pop(); // Loại bỏ tuổi của chó cuối cùng

    // Bước 2: Tạo một mảng chứa dữ liệu của cả Julia và Kate
    const combinedData = juliaCopy.concat(dogsKate);

    // Bước 3: Kiểm tra từng con chó trong mảng
    for (let i = 0; i < combinedData.length; i++) {
        const age = combinedData[i];
        if (age >= 3) {
            console.log(`Chó số ${i + 1} là người lớn và ${age} tuổi`);
        } else {
            console.log(`Chó số ${i + 1} vẫn là chó con và ${age} tuổi`);
        }
    }
}

// TEST DATA 1
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
checkDogs(dogsJulia1, dogsKate1);

// TEST DATA 2
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
checkDogs(dogsJulia2, dogsKate2);
