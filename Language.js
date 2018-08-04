"use strict";

/**
 * CodeManager is a static class that controls block execution. It also moves the BlockStack that the user is dragging,
 * keeps track of variables/lists, and passes messages to Blocks/Stacks/Slots/Tabs
 */
function Language() {

};


Language.lang = "US";
Language.langs = ["US", "CN", "FR", "ES"];

Language.US = {
    "CompassCalibrate":"Compass Calibrate",
    "Compass": "Compass",
    "Screen_Up": "Screen Up",
    "Screen_Down": "Screen Down",
    "Tilt_Left": "Tilt Left",
    "Tilt_Right": "Tilt Right",
    "Logo_Up": "Logo Up",
    "Logo_Down": "Logo Down",
    "Shake": "Shake",
    "Button": "Button",
    "Magnetometer": "Magnetometer",
    "Accelerometer": "Accelerometer",
    "Print": "Print",
    "Display": "Display",
    "Distance": "Distance",
    "Dial": "Dial",
    "Light": "Light",
    "Sound": "Sound",
    "Other": "Other",
    "Play_Note": "Play Note",
    "for": "for",
    "Beats": "Beats",
    "Position_Servo": "Position Servo",
    "Rotation_Servo": "Rotation Servo",
    "LED": "LED",
    "Tri_LED": "Tri-LED",
    "R": "R",
    "G": "G",
    "B": "B",
    "Servo": "Servo",
    "Vibration":"Vibration",
    "Motor":"Motor",
    "Temperature_C":"Temperature C",
    "Temperature_F":"Temperature F",
    "Knob": "Knob",
    "Device_Shaken":"Device Shaken",
    "Device_SSID":"Device SSID",
    "Device_Pressure":"Device Pressure",
    "Device_Relative_Altitude":"Device Relative Altitude",
    "Device_Orientation":"Device Orientation",
    "Device":"Device",
    "Acceleration":"Acceleration",
    "Latitude":"Latitude",
    "Longitude":"Longitude",
    "when":"when",
    "tapped":"tapped",
    "when_I_receive":"when I receive",
    "wait_until":"wait until",
    "repeat_forever":"repeat forever",
    "repeat":"repeat",
    "repeat_until":"repeat until",
    "if":"if",
    "broadcast":"broadcast",
    "and_wait":"and wait",
    "stop":"stop",
    "all":"all",
    "this_script":"this script",
    "all_but_this_script":"all but this script",
    "message":"message",
    "wait":"wait",
    "secs":"secs",
    "else":"else",
    "item":"item",
    "of":"of",
    "length":"length",
    "contains":"contains",
    "play_sound":"play sound",
    "play_sound_until_done":"play sound until done",
    "play_recording":"play recording",
    "play_recording_until_done":"play recording until done",
    "stop_all_sounds":"stop all sounds",
    "rest_for":"rest for",
    "for":"for",
    "play_note":"play note",
    "change_tempo_by":"change tempo by",
    "set_tempo_to":"set tempo to",
    "tempo":"tempo",
    "round":"round",
    "mod":"mod",
    "pick_random":"pick random",
    "to":"to",
    "and":"and",
    "or":"or",
    "not":"not",
    "true":"true",
    "false":"false",
    "letter":"letter",
    "join":"join",
    "split":"split",
    "by":"by",
    "whitespace":"whitespace",
    "number":"number",
    "text":"text",
    "boolean":"boolean",
    "list":"list",
    "invalid_number":"invalid number",
    "Edit_Text":"Edit Text",
    "is":"is",
    "a":"a",
    "reset_timer":"reset timer",
    "and_wait":"and wait",
    "ask": "ask",
    "at":"at",
    "Position":"Position",
    "current":"current",
    "year":"year",
    "month":"month",
    "date":"date",
    "hour":"hour",
    "minute":"minute",
    "second":"second",
    "day_of_the_week":"day of the week",
    "time_in_milliseconds":"time in milliseconds",
    "answer":"answer",
    "timer":"timer",
    "Record_Sounds":"Record Sound",
    "Create_Variable":"Create Variable",
    "Create_List":"Create List",
    "Zoom_in":"Zoom in",
    "Zoom_out":"Zoom out",
    "Reset_zoom":"Reset zoom",
    "Disable_snap_noise":"Disable snap noise",
    "Enable_snap_noise":"Enable snap noise",
    "Send_debug_log":"Send debug log",
    "Show_debug_menu":"Show debug menu",
    "Disconnect_Device":"Disconnect Device",
    "Connect_Device":"Connect Device",
    "Connect_Multiple":"Connect Multiple",
    "New":"New",
    "Open":"Open",
    "No_saved_programs":"No saved programs",
    "On_Device":"On Device",
    "Cloud":"Cloud",
    "Device limit reached":"Device limit reached",
    "Tap_record_to_start":"Tap record to start",
    "Done":"Done",
    "Loading":"Loading",
    "Tap":"Tap",
    "to_connect":"to connect",
    "Cancel":"Cancel",
    "Scanning_for_devices":"Scanning for devices",
    "Sign_in":"Sign_in"
};

Language.CN = {
    "CompassCalibrate":"CN",
    "Compass": "CN",
    "Screen_Up": "CN",
    "Screen_Down": "CN",
    "Tilt_Left": "CN",
    "Tilt_Right": "CN",
    "Logo_Up": "CN",
    "Logo_Down": "CN",
    "Shake": "CN",
    "Button": "CN",
    "Magnetometer": "CN",
    "Accelerometer": "CN",
    "Print": "CN",
    "Display": "CN",
    "Distance": "CN",
    "Dial": "CN",
    "Light": "CN",
    "Sound": "CN",
    "Other": "CN",
    "Play_Note": "CN",
    "for": "CN",
    "Beats": "CN",
    "Position_Servo": "CN",
    "Rotation_Servo": "CN",
    "LED": "CN",
    "Tri_LED": "CN",
    "R": "R",
    "G": "G",
    "B": "B",
    "Servo": "CN",
    "Vibration":"CN",
    "Motor":"CN",
    "Temperature_C":"CN",
    "Temperature_F":"CN",
    "Knob": "CN",
    "Device_Shaken":"CN",
    "Device_SSID":"CN",
    "Device_Pressure":"CN",
    "Device_Relative_Altitude":"CN",
    "Device_Orientation":"CN",
    "Device":"CN",
    "Acceleration":"CN",
    "Latitude":"CN",
    "Longitude":"CN",
    "when":"CN",
    "tapped":"CN",
    "when_I_receive":"CN",
    "wait_until":"CN",
    "repeat_forever":"CN",
    "repeat":"CN",
    "repeat_until":"CN",
    "if":"CN",
    "broadcast":"CN",
    "and_wait":"CN",
    "stop":"CN",
    "all":"CN",
    "this_script":"CN",
    "all_but_this_script":"CN",
    "message":"CN",
    "wait":"CN",
    "secs":"CN",
    "else":"CN",
    "item":"CN",
    "of":"CN",
    "length":"CN",
    "contains":"CN",
    "play_sound":"CN",
    "play_sound_until_done":"CN",
    "play_recording":"CN",
    "play_recording_until_done":"CN",
    "stop_all_sounds":"CN",
    "rest_for":"CN",
    "for":"CN",
    "play_note":"CN",
    "change_tempo_by":"CN",
    "set_tempo_to":"CN",
    "tempo":"CN",
    "round":"CN",
    "mod":"CN",
    "pick_random":"CN",
    "to":"CN",
    "and":"CN",
    "or":"CN",
    "not":"CN",
    "true":"CN",
    "false":"CN",
    "letter":"CN",
    "join":"CN",
    "split":"CN",
    "by":"CN",
    "whitespace":"CN",
    "number":"CN",
    "text":"CN",
    "boolean":"CN",
    "list":"CN",
    "invalid_number":"CN",
    "Edit_Text":"CN",
    "is":"CN",
    "a":"CN",
    "reset_timer":"CN",
    "and_wait":"CN",
    "ask": "CN",
    "at":"CN",
    "Position":"CN",
    "current":"CN",
    "year":"CN",
    "month":"CN",
    "date":"CN",
    "hour":"CN",
    "minute":"CN",
    "second":"CN",
    "day_of_the_week":"CN",
    "time_in_milliseconds":"CN",
    "answer":"CN",
    "timer":"CN",
    "Record_Sounds":"CN",
    "Create_Variable":"CN",
    "Create_List":"CN",
    "Zoom_in":"CN",
    "Zoom_out":"CN",
    "Reset_zoom":"CN",
    "Disable_snap_noise":"CN",
    "Enable_snap_noise":"CN",
    "Send_debug_log":"CN",
    "Show_debug_menu":"CN",
    "Disconnect_Device":"CN",
    "Connect_Device":"CN",
    "Connect_Multiple":"CN",
    "New":"CN",
    "Open":"CN",
    "No_saved_programs":"CN",
    "On_Device":"CN",
    "Cloud":"CN",
    "Device limit reached":"CN",
    "Tap_record_to_start":"CN",
    "Done":"CN",
    "Loading":"CN",
    "Tap":"CN",
    "to_connect":"CN",
    "Cancel":"CN",
    "Scanning_for_devices":"CN",
    "Sign_in":"CN"
}

Language.ES = {
    "CompassCalibrate":"ESP",
    "Compass": "ESP",
    "Screen_Up": "ESP",
    "Screen_Down": "ESP",
    "Tilt_Left": "ESP",
    "Tilt_Right": "ESP",
    "Logo_Up": "ESP",
    "Logo_Down": "ESP",
    "Shake": "ESP",
    "Button": "ESP",
    "Magnetometer": "ESP",
    "Accelerometer": "ESP",
    "Print": "ESP",
    "Display": "ESP",
    "Distance": "ESP",
    "Dial": "ESP",
    "Light": "ESP",
    "Sound": "ESP",
    "Other": "ESP",
    "Play_Note": "ESP",
    "for": "ESP",
    "Beats": "ESP",
    "Position_Servo": "ESP",
    "Rotation_Servo": "ESP",
    "LED": "ESP",
    "Tri_LED": "ESP",
    "R": "R",
    "G": "G",
    "B": "B",
    "Servo": "ESP",
    "Vibration":"ESP",
    "Motor":"ESP",
    "Temperature_C":"ESP",
    "Temperature_F":"ESP",
    "Knob": "ESP",
    "Device_Shaken":"ESP",
    "Device_SSID":"ESP",
    "Device_Pressure":"ESP",
    "Device_Relative_Altitude":"ESP",
    "Device_Orientation":"ESP",
    "Device":"ESP",
    "Acceleration":"ESP",
    "Latitude":"ESP",
    "Longitude":"ESP",
    "when":"ESP",
    "tapped":"ESP",
    "when_I_receive":"ESP",
    "wait_until":"ESP",
    "repeat_forever":"ESP",
    "repeat":"ESP",
    "repeat_until":"ESP",
    "if":"ESP",
    "broadcast":"ESP",
    "and_wait":"ESP",
    "stop":"ESP",
    "all":"ESP",
    "this_script":"ESP",
    "all_but_this_script":"ESP",
    "message":"ESP",
    "wait":"ESP",
    "secs":"ESP",
    "else":"ESP",
    "item":"ESP",
    "of":"ESP",
    "length":"ESP",
    "contains":"ESP",
    "play_sound":"ESP",
    "play_sound_until_done":"ESP",
    "play_recording":"ESP",
    "play_recording_until_done":"ESP",
    "stop_all_sounds":"ESP",
    "rest_for":"ESP",
    "for":"ESP",
    "play_note":"ESP",
    "change_tempo_by":"ESP",
    "set_tempo_to":"ESP",
    "tempo":"ESP",
    "round":"ESP",
    "mod":"ESP",
    "pick_random":"ESP",
    "to":"ESP",
    "and":"ESP",
    "or":"ESP",
    "not":"ESP",
    "true":"ESP",
    "false":"ESP",
    "letter":"ESP",
    "join":"ESP",
    "split":"ESP",
    "by":"ESP",
    "whitespace":"ESP",
    "number":"ESP",
    "text":"ESP",
    "boolean":"ESP",
    "list":"ESP",
    "invalid_number":"ESP",
    "Edit_Text":"ESP",
    "is":"ESP",
    "a":"ESP",
    "reset_timer":"ESP",
    "and_wait":"ESP",
    "ask": "ESP",
    "at":"ESP",
    "Position":"ESP",
    "current":"ESP",
    "year":"ESP",
    "month":"ESP",
    "date":"ESP",
    "hour":"ESP",
    "minute":"ESP",
    "second":"ESP",
    "day_of_the_week":"ESP",
    "time_in_milliseconds":"ESP",
    "answer":"ESP",
    "timer":"ESP",
    "Record_Sounds":"ESP",
    "Create_Variable":"ESP",
    "Create_List":"ESP",
    "Zoom_in":"ESP",
    "Zoom_out":"ESP",
    "Reset_zoom":"ESP",
    "Disable_snap_noise":"ESP",
    "Enable_snap_noise":"ESP",
    "Send_debug_log":"ESP",
    "Show_debug_menu":"ESP",
    "Disconnect_Device":"ESP",
    "Connect_Device":"ESP",
    "Connect_Multiple":"ESP",
    "New":"ESP",
    "Open":"ESP",
    "No_saved_programs":"ESP",
    "On_Device":"ESP",
    "Cloud":"ESP",
    "Device limit reached":"ESP",
    "Tap_record_to_start":"ESP",
    "Done":"ESP",
    "Loading":"ESP",
    "Tap":"ESP",
    "to_connect":"ESP",
    "Cancel":"ESP",
    "Scanning_for_devices":"ESP",
    "Sign_in":"ESP"
}

Language.FR = {
    "Calibrate":"French",
    "Compass": "French",
    "Screen_Up": "French",
    "Screen_Down": "French",
    "Tilt_Left": "French",
    "Tilt_Right": "French",
    "Logo_Up": "French",
    "Logo_Down": "French",
    "Shake": "French",
    "Button": "French",
    "Magnetometer": "French",
    "Accelerometer": "French",
    "Print": "French",
    "Display": "French",
    "Distance": "French",
    "Dial": "French",
    "Light": "French",
    "Sound": "French",
    "Other": "French",
    "Play_Note": "French",
    "for": "French",
    "Beats": "French",
    "Position_Servo": "French",
    "Rotation_Servo": "French",
    "LED": "French",
    "Tri_LED": "French",
    "R": "R",
    "G": "G",
    "B": "B",
    "Servo": "French",
    "Vibration":"French",
    "Motor":"French",
    "Temperature_C":"French",
    "Temperature_F":"French",
    "Knob": "French",
    "Device_Shaken":"French",
    "Device_SSID":"French",
    "Device_Pressure":"French",
    "Device_Relative_Altitude":"French",
    "Device_Orientation":"French",
    "Device":"French",
    "Acceleration":"French",
    "Latitude":"French",
    "Longitude":"French",
    "when":"French",
    "tapped":"French",
    "when_I_receive":"French",
    "wait_until":"French",
    "repeat_forever":"French",
    "repeat":"French",
    "repeat_until":"French",
    "if":"French",
    "broadcast":"French",
    "and_wait":"French",
    "stop":"French",
    "all":"French",
    "this_script":"French",
    "all_but_this_script":"French",
    "message":"French",
    "wait":"French",
    "secs":"French",
    "else":"French",
    "item":"French",
    "of":"French",
    "length":"French",
    "contains":"French",
    "play_sound":"French",
    "play_sound_until_done":"French",
    "play_recording":"French",
    "play_recording_until_done":"French",
    "stop_all_sounds":"French",
    "rest_for":"French",
    "for":"French",
    "play_note":"French",
    "change_tempo_by":"French",
    "set_tempo_to":"French",
    "tempo":"French",
    "round":"French",
    "mod":"French",
    "pick_random":"French",
    "to":"French",
    "and":"French",
    "or":"French",
    "not":"French",
    "true":"French",
    "false":"French",
    "letter":"French",
    "join":"French",
    "split":"French",
    "by":"French",
    "whitespace":"French",
    "number":"French",
    "text":"French",
    "boolean":"French",
    "list":"French",
    "invalid_number":"French",
    "Edit_Text":"French",
    "is":"French",
    "a":"French",
    "reset_timer":"French",
    "and_wait":"French",
    "ask": "French",
    "at":"French",
    "Position":"French",
    "current":"French",
    "year":"French",
    "month":"French",
    "date":"French",
    "hour":"French",
    "minute":"French",
    "second":"French",
    "day_of_the_week":"French",
    "time_in_milliseconds":"French",
    "answer":"French",
    "timer":"French",
    "Record_Sounds":"French",
    "Create_Variable":"French",
    "Create_List":"French",
    "Zoom_in":"French",
    "Zoom_out":"French",
    "Reset_zoom":"French",
    "Disable_snap_noise":"French",
    "Enable_snap_noise":"French",
    "Send_debug_log":"French",
    "Show_debug_menu":"French",
    "Disconnect_Device":"French",
    "Connect_Device":"French",
    "Connect_Multiple":"French",
    "New":"French",
    "Open":"French",
    "No_saved_programs":"French",
    "On_Device":"French",
    "Cloud":"French",
    "Device limit reached":"French",
    "Tap_record_to_start":"French",
    "Done":"French",
    "Loading":"French",
    "Tap":"French",
    "to_connect":"French",
    "Cancel":"French",
    "Scanning_for_devices":"French",
    "Sign_in": "French"
}


Language.setLanguage = function(lang) {
    if (Language.langs.indexOf(lang) === -1) {
        Language.lang = "US";
    } else {
        Language.lang = lang;
    }
}

Language.getLanguage = function () {
    return "Language." + Language.lang + ".";
}

Language.getStr = function(str) {
    let translatedStr = eval(Language.getLanguage() + str);
    if (translatedStr != null) {
        return translatedStr;
    } else {
        return "Translation required";
    }
}

