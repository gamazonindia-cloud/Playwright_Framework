Run("notepad.exe")
Sleep(4000)
WinWaitActive("Untitled - Notepad")
Sleep(4000)
Send("Hello")

Sleep(2000)

Send("^s")

Sleep(2000)


WinWaitActive("Save as")
Sleep(2000)
Send("!d")

Sleep(2000)

Send("C:\Users\Deepak Maurya\Downloads")
Sleep(3000)
Send("{ENTER}")
Sleep(3000)

WinWaitActive("Save as")
Sleep(3000)

ControlSetText("Save as", "", "Edit1", "")
Sleep(3000)
ControlFocus("Save as", "", "Edit1")
Sleep(3000)

Local $file = "C:\Users\Deepak Maurya\Downloads\Test1.txt"

For $i = 1 To StringLen($file)
    ControlSend("Save as", "", "Edit1", StringMid($file, $i, 1))
    Sleep(120)
Next
Sleep(4000)

Send("{ENTER}")


