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

; Focus File name textbox
ControlFocus("Save as", "", "Edit1")
Sleep(2000)

; Clear existing text
ControlSetText("Save as", "", "Edit1", "")
Sleep(4000)

; Type file name
ControlSetText("Save as", "", "Edit1", "Test1.txt")
Sleep(4000)

;WinWaitActive("Save as")
;Sleep(2000)
;ControlSetText("Save as", "", "Edit1", "C:\Users\Deepak Maurya\Downloads\Testing.txt")
;Sleep(2000)
Send("{ENTER}")


;ControlSetText("Save as", "", "Edit1", "C:\Users\Deepak Maurya\Downloads\Test123.txt")
;Sleep(2000)
;ControlFocus("Save as", "", "Edit1")
;Send("{ENTER}")
;Sleep(4000)
;Send("{TAB 4}")
;Sleep(2000)
;Send("{ENTER}")

