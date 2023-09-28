function calcAverageHumanAge(ages) {
    // Bước 1: Tính tuổi của chó theo tuổi của con người
    const dogAgesInHumanYears = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
    
    // Bước 2: Loại trừ chó có tuổi dưới 18
    const adultDogAges = dogAgesInHumanYears.filter(age => age >= 18);
    
    // Bước 3: Tính tuổi trung bình của các chó trưởng thành
    if (adultDogAges.length > 0) {
        const sumOfAges = adultDogAges.reduce((total, age) => total + age, 0);
        const averageAge = sumOfAges / adultDogAges.length;
        return averageAge;
    } else {
        return "Không có chó trưởng thành nào trong danh sách.";
    }
}

// TEST DATA 1
const test1 = [5, 2, 4, 1, 15, 8, 3];
const averageAge1 = calcAverageHumanAge(test1);
console.log("Tuổi trung bình của các chó trưởng thành trong TEST DATA 1 là:", averageAge1);

// TEST DATA 2
const test2 = [16, 6, 10, 5, 6, 1, 4];
const averageAge2 = calcAverageHumanAge(test2);
console.log("Tuổi trung bình của các chó trưởng thành trong TEST DATA 2 là:", averageAge2);
