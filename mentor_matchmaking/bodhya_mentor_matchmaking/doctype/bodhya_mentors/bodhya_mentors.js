// Copyright (c) 2025, Akshit Bhardwaj and contributors
// For license information, please see license.txt

frappe.ui.form.on("Bodhya Mentors", {
	refresh(frm) {
		frm.set_df_property("options_field", "fieldtype", "MultiSelect");
	},
});
