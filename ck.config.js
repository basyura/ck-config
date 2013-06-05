//app.Env("CYGWIN") = "nontsec";
//app.Env("LANG")   = "ja_JP.eucJP";
//app.Env("LC_ALL") = "ja_JP.eucJP";
//app.Env("LANG")   = "ja_JP.Shift_JIS";
//app.Env("LC_ALL") = "ja_JP.Shift_JIS";
//app.Env("CYGWIN") = "";
app.Env("LANG")   = "ja_JP.UTF-8";
app.Env("LC_ALL") = "ja_JP.UTF-8";


Config.tty.execute_command = "/bin/bash --login -i";
Config.tty.title = "ck";
Config.tty.savelines = 1000;
//Config.tty.input_encoding = Encoding.SJIS;
Config.tty.input_encoding = Encoding.UTF8;
Config.tty.display_encoding = Encoding.SJIS | Encoding.EUCJP | Encoding.UTF8;
//Config.tty.display_encoding = Encoding.SJIS;
Config.tty.scroll_key = 1;
Config.tty.scroll_output = 0;
Config.tty.bs_as_del = 0;
Config.tty.use_bell = 0;
Config.tty.cjk_width = 1;

//Config.accelkey.new_shell    = Keys.ShiftL | Keys.CtrlL | Keys.N;
Config.accelkey.new_shell    = Keys.Alt | Keys.N;
//Config.accelkey.new_window   = Keys.ShiftL | Keys.CtrlL | Keys.M;
//Config.accelkey.new_window   = Keys.Alt | Keys.N;
Config.accelkey.open_window  = Keys.ShiftL | Keys.CtrlL | Keys.O;
Config.accelkey.close_window = Keys.ShiftL | Keys.CtrlL | Keys.W;
//Config.accelkey.next_shell   = Keys.CtrlL | Keys.Tab;
//Config.accelkey.next_shell   = Keys.CtrlL | Keys.L;
Config.accelkey.next_shell   = Keys.CtrlL | 190
//Config.accelkey.prev_shell   = Keys.ShiftL | Keys.CtrlL | Keys.Tab;
//Config.accelkey.prev_shell   = Keys.CtrlL | Keys.H;
Config.accelkey.prev_shell   = Keys.CtrlL | 188
//Config.accelkey.paste        = Keys.ShiftL | Keys.Insert;
Config.accelkey.paste        = Keys.CtrlL | Keys.V;
Config.accelkey.popup_menu   = Keys.ShiftL | Keys.F10;
Config.accelkey.popup_sys_menu = Keys.AltR | Keys.Space;
Config.accelkey.scroll_page_up   = Keys.ShiftL | Keys.PageUp;
Config.accelkey.scroll_page_down = Keys.ShiftL | Keys.PageDown;
Config.accelkey.scroll_line_up   = Keys.None;
Config.accelkey.scroll_line_down = Keys.None;
Config.accelkey.scroll_top    = Keys.ShiftL | Keys.Home;
Config.accelkey.scroll_bottom = Keys.ShiftL | Keys.End;

Config.window.position_x = 10;
Config.window.position_y = 150;
Config.window.cols = 120;
Config.window.rows = 31;
Config.window.scrollbar_show = 1;
Config.window.scrollbar_right = 1;
Config.window.blink_cursor = 0;
Config.window.transparent = WinTransp.GrassNoEdge;
Config.window.zorder = WinZOrder.Normal;
Config.window.linespace = 5;
Config.window.border_left   = 1;
Config.window.border_top    = 1;
Config.window.border_right  = 1;
Config.window.border_bottom = 1;
Config.window.mouse_left   = MouseCmd.Select;
Config.window.mouse_middle = MouseCmd.Paste;
//Config.window.mouse_right  = MouseCmd.Menu;
Config.window.mouse_right  = MouseCmd.Paste;
//Config.window.font_name = "MeiryoKe_Gothic";
Config.window.font_name = "MS Gothic";
Config.window.font_size = 9;
Config.window.background_file = "";
Config.window.background_repeat_x = Place.Repeat;
Config.window.background_repeat_y = Place.Repeat;
Config.window.background_align_x = Align.Near;
Config.window.background_align_y = Align.Near;
//Config.window.alpha_text_border = 0x44;
Config.window.alpha_text_border = 0x4;
//Config.window.alpha_back_colorN = 0xaa;
Config.window.alpha_back_colorN = 0xff;
Config.window.color_foreground = 0xffffff;
//Config.window.color_background = 0x44003300;
Config.window.color_background = 0x000000;
//Config.window.color_selection  = 0x660000ff;
Config.window.color_selection  = 0x66ff8040;
Config.window.color_cursor     = 0xff8040
Config.window.color_imecursor  = 0xaa0000;

Config.window.color_color0 = 0x000000;
Config.window.color_color1 = 0xcd0000;
Config.window.color_color2 = 0x00cd00;
Config.window.color_color3 = 0xcdcd00;
Config.window.color_color4 = 0x0000cd;
Config.window.color_color5 = 0xcd00cd;
Config.window.color_color6 = 0x00cdcd;
Config.window.color_color7 = 0xe5e5e5;
Config.window.color_color8 = 0x4d4d4d;
Config.window.color_color9 = 0xff0000;
Config.window.color_color10 = 0x00ff00;
Config.window.color_color11 = 0xffff00;
Config.window.color_color12 = 0x0000ff;
Config.window.color_color13 = 0xff00ff;
Config.window.color_color14 = 0x00ffff;
Config.window.color_color15 = 0xffffff;

function user_cmd_ime_off(window){
	if(window.ImeState)
		window.ImeState = false;
	return false;
}
AccelKeys.add(Keys.Escape, user_cmd_ime_off);
AccelKeys.push(new ACCEL(Keys.CtrlL | Keys.J, user_cmd_ime_off));
