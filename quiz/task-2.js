const hourSlot = Math.round(360 / 12);
const minuteSlot = Math.round(360 / 60);
const hourMinuteSlot = 360 / (60 * 12);
// const speedPerMinute = 5.5


const func = (hour, minute) => {
  const hourAngle = hourSlot * (hour % 12) + hourMinuteSlot * (minute % 60);
  const minuteAngle = minuteSlot * (minute % 60);

  const angle = (hourAngle - minuteAngle) > 0 ? hourAngle - minuteAngle : minuteAngle - hourAngle;
  console.log(`For input ${hour < 10 ? '0':''}${hour}:${minute < 10 ? '0':''}${minute} => angle: ${angle}`);
};

func(0, 0);  //=>>>  0
func(12, 60);  //=>>>  0
func(6, 0);  //=>>>  180
func(3, 0);  //=>>>  90
func(3, 30);  //=>>>  75


for (let h = 0; h < 12; h++) {
  for (let m = 0; m < 60; m++) {
    func(h, m);
  }
}

