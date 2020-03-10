// Hier kann man Tests durchführen; diese Datei wird nicht kompiliert, wenn dieses Paket als Erweiterung verwendet wird.
input.onButtonPressed(Button.B, function () {
    serialLCD.ClearScreen(serialLCD.LcdColor(LCD_COLOR.White))
})
input.onButtonPressed(Button.A, function () {
    serialLCD.Dis16String(0, 0, serialLCD.LcdColor(LCD_COLOR.Red), serialLCD.LcdColor(LCD_COLOR.White), "Test16")
    serialLCD.Dis24String(0, 16, serialLCD.LcdColor(LCD_COLOR.Green), serialLCD.LcdColor(LCD_COLOR.White), "Test24")
    serialLCD.Dis32String(0, 40, serialLCD.LcdColor(LCD_COLOR.Cyan), serialLCD.LcdColor(LCD_COLOR.White), "Test40")
    serialLCD.Dis64String(0, 72, serialLCD.LcdColor(LCD_COLOR.Blue), serialLCD.LcdColor(LCD_COLOR.White), "Test64")
    for (let Index = 0; Index <= 100; Index++) {
        serialLCD.DrawPoint(Index, Index, serialLCD.LcdColor(LCD_COLOR.Magenta))
    }
    for (let Index = 0; Index <= 100; Index++) {
        serialLCD.DrawFill(Index + 100, 100 - Index, 2, 2, serialLCD.LcdColor(LCD_COLOR.Blue))
    }
})
serial.redirect(
SerialPin.P1,
SerialPin.P2,
BaudRate.BaudRate57600
)
