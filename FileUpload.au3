; Wait for Open dialog
Sleep(3000)
WinWaitActive("Open")
Sleep(3000)
Send("!d")

Sleep(3000)

Send("C:\Users\Deepak Maurya\Downloads")
Sleep(3000)
Send("{ENTER}")
Sleep(3000)

; Type file path in File name box
ControlSetText("Open", "", "Edit1", "Hello.txt")
Sleep(3000)
; Click Open button
ControlClick("Open", "", "Button1")
Sleep(3000)