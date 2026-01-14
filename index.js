// Code your solution in this file!
// Scuber headquarters is on 42nd Street
const HQ_BLOCK = 42;
const FEET_PER_BLOCK = 264;

// 1️⃣ distance from HQ in blocks
function distanceFromHqInBlocks(pickupBlock) {
  return Math.abs(pickupBlock - HQ_BLOCK);
}

// 2️⃣ distance from HQ in feet
function distanceFromHqInFeet(pickupBlock) {
  return distanceFromHqInBlocks(pickupBlock) * FEET_PER_BLOCK;
}

// 3️⃣ distance travelled in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * FEET_PER_BLOCK;
}

// 4️⃣ calculates fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

// ✅ Export all functions so the tests can see them
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};

