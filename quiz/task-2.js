const func = (hour, minute) => {
  const angle = (((hour % 12) * 60 + (minute % 60)) * 5.5) % 360;

  console.log(`For input ${hour < 10 ? '0':''}${hour}:${minute < 10 ? '0':''}${minute} => angle: ${angle < 180 ? angle : 360 - angle}`);
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

