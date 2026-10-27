import { IKeyInfo } from "../../interfaces/IKeyInfo";

export const ANSI: IKeyInfo[][] = [
    // Row 0: Function key row
    [
        { code: "Escape", default: "Escape", withShift: "Escape" },
        { code: "F1", default: "F1", withShift: "F1" },
        { code: "F2", default: "F2", withShift: "F2" },
        { code: "F3", default: "F3", withShift: "F3" },
        { code: "F4", default: "F4", withShift: "F4" },
        { code: "F5", default: "F5", withShift: "F5" },
        { code: "F6", default: "F6", withShift: "F6" },
        { code: "F7", default: "F7", withShift: "F7" },
        { code: "F8", default: "F8", withShift: "F8" },
        { code: "F9", default: "F9", withShift: "F9" },
        { code: "F10", default: "F10", withShift: "F10" },
        { code: "F11", default: "F11", withShift: "F11" },
        { code: "F12", default: "F12", withShift: "F12" },
        { code: "PrintScreen", default: "PrintScreen", withShift: "PrintScreen" },
        { code: "ScrollLock", default: "ScrollLock", withShift: "ScrollLock" },
        { code: "Pause", default: "Pause", withShift: "Pause" }
    ],
    
    // Row 1: Number row
    [
        { code: "Backquote", default: "`", withShift: "~" },
        { code: "Digit1", default: "1", withShift: "!" },
        { code: "Digit2", default: "2", withShift: "@" },
        { code: "Digit3", default: "3", withShift: "#" },
        { code: "Digit4", default: "4", withShift: "$" },
        { code: "Digit5", default: "5", withShift: "%" },
        { code: "Digit6", default: "6", withShift: "^" },
        { code: "Digit7", default: "7", withShift: "&" },
        { code: "Digit8", default: "8", withShift: "*" },
        { code: "Digit9", default: "9", withShift: "(" },
        { code: "Digit0", default: "0", withShift: ")" },
        { code: "Minus", default: "-", withShift: "_" },
        { code: "Equal", default: "=", withShift: "+" },
        { code: "Backspace", default: "Backspace", withShift: "Backspace" }
    ],
    
    // Row 2: Top letter row
    [
        { code: "Tab", default: "Tab", withShift: "Tab" },
        { code: "KeyQ", default: "q", withShift: "Q" },
        { code: "KeyW", default: "w", withShift: "W" },
        { code: "KeyE", default: "e", withShift: "E" },
        { code: "KeyR", default: "r", withShift: "R" },
        { code: "KeyT", default: "t", withShift: "T" },
        { code: "KeyY", default: "y", withShift: "Y" },
        { code: "KeyU", default: "u", withShift: "U" },
        { code: "KeyI", default: "i", withShift: "I" },
        { code: "KeyO", default: "o", withShift: "O" },
        { code: "KeyP", default: "p", withShift: "P" },
        { code: "BracketLeft", default: "[", withShift: "{" },
        { code: "BracketRight", default: "]", withShift: "}" },
        { code: "Backslash", default: "\\", withShift: "|" }
    ],
    
    // Row 3: Home row
    [
        { code: "CapsLock", default: "CapsLock", withShift: "CapsLock" },
        { code: "KeyA", default: "a", withShift: "A" },
        { code: "KeyS", default: "s", withShift: "S" },
        { code: "KeyD", default: "d", withShift: "D" },
        { code: "KeyF", default: "f", withShift: "F" },
        { code: "KeyG", default: "g", withShift: "G" },
        { code: "KeyH", default: "h", withShift: "H" },
        { code: "KeyJ", default: "j", withShift: "J" },
        { code: "KeyK", default: "k", withShift: "K" },
        { code: "KeyL", default: "l", withShift: "L" },
        { code: "Semicolon", default: ";", withShift: ":" },
        { code: "Quote", default: "'", withShift: "\"" },
        { code: "Enter", default: "Enter", withShift: "Enter" }
    ],
    
    // Row 4: Bottom letter row
    [
        { code: "ShiftLeft", default: "Shift", withShift: "Shift" },
        { code: "KeyZ", default: "z", withShift: "Z" },
        { code: "KeyX", default: "x", withShift: "X" },
        { code: "KeyC", default: "c", withShift: "C" },
        { code: "KeyV", default: "v", withShift: "V" },
        { code: "KeyB", default: "b", withShift: "B" },
        { code: "KeyN", default: "n", withShift: "N" },
        { code: "KeyM", default: "m", withShift: "M" },
        { code: "Comma", default: ",", withShift: "<" },
        { code: "Period", default: ".", withShift: ">" },
        { code: "Slash", default: "/", withShift: "?" },
        { code: "ShiftRight", default: "Shift", withShift: "Shift" }
    ],
    
    // Row 5: Bottom row
    [
        { code: "ControlLeft", default: "Control", withShift: "Control" },
        { code: "MetaLeft", default: "Meta", withShift: "Meta" },
        { code: "AltLeft", default: "Alt", withShift: "Alt" },
        { code: "Space", default: " ", withShift: " " },
        { code: "AltRight", default: "Alt", withShift: "Alt" },
        { code: "MetaRight", default: "Meta", withShift: "Meta" },
        { code: "ContextMenu", default: "ContextMenu", withShift: "ContextMenu" },
        { code: "ControlRight", default: "Control", withShift: "Control" }
    ],
    
    // Row 6: Navigation cluster
    [
        { code: "Insert", default: "Insert", withShift: "Insert" },
        { code: "Home", default: "Home", withShift: "Home" },
        { code: "PageUp", default: "PageUp", withShift: "PageUp" }
    ],
    [
        { code: "Delete", default: "Delete", withShift: "Delete" },
        { code: "End", default: "End", withShift: "End" },
        { code: "PageDown", default: "PageDown", withShift: "PageDown" }
    ],
    
    // Row 7: Arrow keys
    [
        { code: "ArrowUp", default: "ArrowUp", withShift: "ArrowUp" }
    ],
    [
        { code: "ArrowLeft", default: "ArrowLeft", withShift: "ArrowLeft" },
        { code: "ArrowDown", default: "ArrowDown", withShift: "ArrowDown" },
        { code: "ArrowRight", default: "ArrowRight", withShift: "ArrowRight" }
    ]
];