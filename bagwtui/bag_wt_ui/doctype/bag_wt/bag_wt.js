// Copyright (c) 2023, Aerele and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bag WT', {
	setup: function (frm) {
		cur_frm.trigger("add_row")
	},
	add_row: function (frm) {
		if (!frm.doc.bag_size) {
			cur_frm.add_child("bag_size")
			cur_frm.refresh_fields("bag_size")
		}
		if (!frm.doc.webbing_type) {
			cur_frm.add_child("webbing_type")
			cur_frm.refresh_fields("webbing_type")
		}
		if (!frm.doc.tunnel_attachment_type) {
			cur_frm.add_child("tunnel_attachment_type")
			cur_frm.refresh_fields("tunnel_attachment_type")
		}
		if (!frm.doc.linear_type) {
			cur_frm.add_child("linear_type")
			cur_frm.refresh_fields("linear_type")
		}
		if (!frm.doc.webbing_add_ons) {
			cur_frm.add_child("webbing_add_ons")
			cur_frm.refresh_fields("webbing_add_ons")
		}
		if (!frm.doc.categories) {
			cur_frm.add_child("categories")
			cur_frm.refresh_fields("categories")
		}
		if (!frm.doc.extras_desc) {
			cur_frm.add_child("extras_desc")
			cur_frm.refresh_fields("extras_desc")
		}
		if (!frm.doc.body_fabric) {
			cur_frm.add_child("body_fabric")
			cur_frm.refresh_fields("body_fabric")
		}
		if (!frm.doc.accessories) {
			cur_frm.add_child("accessories")
			cur_frm.refresh_fields("accessories")
		}
		if (!frm.doc.top_attachment_type) {
			cur_frm.add_child("top_attachment_type")
			cur_frm.refresh_fields("top_attachment_type")
		}
		if (!frm.doc.bottom_attachment_type) {
			cur_frm.add_child("bottom_attachment_type")
			cur_frm.refresh_fields("bottom_attachment_type")
		}
		if (!frm.doc.secondary_top) {
			cur_frm.add_child("secondary_top")
			cur_frm.refresh_fields("secondary_top")
		}
		if (!frm.doc.secondary_bottom) {
			cur_frm.add_child("secondary_bottom")
			cur_frm.refresh_fields("secondary_bottom")
		}
		if (!frm.doc.top_attachment_addons) {
			cur_frm.add_child("top_attachment_addons")
			cur_frm.refresh_fields("top_attachment_addons")
		}
		if (!frm.doc.bottom_attachment_addons) {
			cur_frm.add_child("bottom_attachment_addons")
			cur_frm.refresh_fields("bottom_attachment_addons")
		}
		if (!frm.doc.top_attachment_addons_type) {
			cur_frm.add_child("top_attachment_addons_type")
			cur_frm.refresh_fields("top_attachment_addons_type")
		}
		if (!frm.doc.bottom_attachment_addons_type) {
			cur_frm.add_child("bottom_attachment_addons_type")
			cur_frm.refresh_fields("bottom_attachment_addons_type")
		}
	},
	// })
	refresh: function (frm) {
		// replace the default body content
		changeBody(frm);

		//render values 
		cur_frm.trigger("render_values")

	},
	onload: function (frm) {
		//add missing table rows
		cur_frm.trigger("add_row")
	},
	before_save: async function (frm) {
		let eng_no = document.getElementById("eng_no").value
		cur_frm.set_value("eng_no", eng_no)
		let eng_name = document.getElementById("eng_name").value
		cur_frm.set_value("eng_name", eng_name)
		let bag_type = document.getElementById("bag_type").value
		cur_frm.set_value("bag_type", bag_type)

		let bag_wt = document.getElementById("bag_wt").value
		cur_frm.set_value("bag_wt", bag_wt)
		let no_of_bags = document.getElementById("no_of_bags").value
		cur_frm.set_value("no_of_bags", no_of_bags)
		let po_no = document.getElementById("po_no").value
		cur_frm.set_value("po_no", po_no)
		let po_date = document.getElementById("po_date").value
		cur_frm.set_value("po_date", po_date)

		// set data into form
		await set_bag_size_values(frm)

		await set_webing_type_values(frm)

		await set_tunnel_attachment_type_values(frm)

		await set_linear_type_values(frm)

		await set_webbing_add_ons_values(frm)

		await set_body_fabric_values(frm)

		await set_accessories_values(frm)

		await set_top_attachment_type_values(frm)

		await set_bottom_attachment_type_values(frm)

		await set_secondary_bottom_values(frm)

		await set_secondary_top_values(frm)

		await set_bottom_attachment_addons_values(frm)

		await set_top_attachment_addons_values(frm)

		await set_bottom_attachment_addons_type_values(frm)

		await set_top_attachment_addons_type_values(frm)

		await set_categories_values(frm)

		await set_extras_desc_values(frm)

		cur_frm.dirty()
	},
	render_values: async function (frm) {
		var eng_no = document.getElementById("eng_no")
		eng_no.value = cur_frm.doc.eng_no || ""
		var eng_name = document.getElementById("eng_name")
		eng_name.value = cur_frm.doc.eng_name || ""
		var bag_type = document.getElementById("bag_type")
		bag_type.value = cur_frm.doc.bag_type || "Circular"

		var bag_wt = document.getElementById("bag_wt")
		bag_wt.value = cur_frm.doc.bag_wt || ""
		var no_of_bags = document.getElementById("no_of_bags")
		no_of_bags.value = cur_frm.doc.no_of_bags || ""
		var po_no = document.getElementById("po_no")
		po_no.value = cur_frm.doc.po_no || ""
		var po_date = document.getElementById("po_date")
		po_date.value = cur_frm.doc.po_date

		// get data from form
		await get_bag_size_values()

		await get_webing_type_values()

		await get_tunnel_attachment_type_values()

		await get_linear_type_values()

		await get_webbing_add_ons_values()

		await get_body_fabric_values()

		await get_accessories_values()

		await get_top_attachment_type_values()

		await get_bottom_attachment_type_values()

		await get_secondary_bottom_values()

		await get_secondary_top_values()

		await get_bottom_attachment_addons_values()

		await get_top_attachment_addons_values()

		await get_bottom_attachment_addons_type_values()

		await get_top_attachment_addons_type_values()

		await get_categories_values()

		await get_extras_desc_values()
	},
});

function get_extras_desc_values() {
	var yarn = document.getElementById("yarn")
	yarn.value = cur_frm.doc.extras_desc[0].yarn || ""
	var yarn_yes_no = document.getElementById("yarn_yes_no")
	yarn_yes_no.value = cur_frm.doc.extras_desc[0].yarn_yes_no
	var yarn_denier = document.getElementById("yarn_denier")
	yarn_denier.value = cur_frm.doc.extras_desc[0].yarn_denier
	var yarn_grams1 = document.getElementById("yarn_grams1")
	yarn_grams1.value = cur_frm.doc.extras_desc[0].yarn_grams1 || ""
	var yarn_grams2 = document.getElementById("yarn_grams2")
	yarn_grams2.value = cur_frm.doc.extras_desc[0].yarn_grams2 || ""

	var b_lock = document.getElementById("b_lock")
	b_lock.value = cur_frm.doc.extras_desc[0].b_lock || ""
	var b_lock_yes_no = document.getElementById("b_lock_yes_no")
	b_lock_yes_no.value = cur_frm.doc.extras_desc[0].b_lock_yes_no 
	var b_lock_grams1 = document.getElementById("b_lock_grams1")
	b_lock_grams1.value = cur_frm.doc.extras_desc[0].b_lock_grams1 || ""

	var extra1_no = document.getElementById("extra1_no")
	extra1_no.value = cur_frm.doc.extras_desc[0].extra1_no || ""
	var extra1_width = document.getElementById("extra1_width")
	extra1_width.value = cur_frm.doc.extras_desc[0].extra1_width || ""
	var extra1_gsm = document.getElementById("extra1_gsm")
	extra1_gsm.value = cur_frm.doc.extras_desc[0].extra1_gsm || ""
	var extra1_cut_length = document.getElementById("extra1_cut_length")
	extra1_cut_length.value = cur_frm.doc.extras_desc[0].extra1_cut_length || ""
	var extra1_weight = document.getElementById("extra1_weight")
	extra1_weight.value = cur_frm.doc.extras_desc[0].extra1_weight || ""

	var extra2_no = document.getElementById("extra2_no")
	extra2_no.value = cur_frm.doc.extras_desc[0].extra2_no || ""
	var extra2_width = document.getElementById("extra2_width")
	extra2_width.value = cur_frm.doc.extras_desc[0].extra2_width || ""
	var extra2_gsm = document.getElementById("extra2_gsm")
	extra2_gsm.value = cur_frm.doc.extras_desc[0].extra2_gsm || ""
	var extra2_cut_length = document.getElementById("extra2_cut_length")
	extra2_cut_length.value = cur_frm.doc.extras_desc[0].extra2_cut_length || ""
	var extra2_weight = document.getElementById("extra2_weight")
	extra2_weight.value = cur_frm.doc.extras_desc[0].extra2_weight || ""

	var extra3_no = document.getElementById("extra3_no")
	extra3_no.value = cur_frm.doc.extras_desc[0].extra3_no || ""
	var extra3_width = document.getElementById("extra3_width")
	extra3_width.value = cur_frm.doc.extras_desc[0].extra3_width || ""
	var extra3_gsm = document.getElementById("extra3_gsm")
	extra3_gsm.value = cur_frm.doc.extras_desc[0].extra3_gsm || ""
	var extra3_cut_length = document.getElementById("extra3_cut_length")
	extra3_cut_length.value = cur_frm.doc.extras_desc[0].extra3_cut_length || ""
	var extra3_weight = document.getElementById("extra3_weight")
	extra3_weight.value = cur_frm.doc.extras_desc[0].extra3_weight || ""
}

function set_extras_desc_values(frm) {
	var yarn = document.getElementById("yarn").value
	cur_frm.doc.extras_desc[0].yarn = yarn
	var yarn_yes_no = document.getElementById("yarn_yes_no").value
	cur_frm.doc.extras_desc[0].yarn_yes_no = yarn_yes_no
	var yarn_denier = document.getElementById("yarn_denier").value
	cur_frm.doc.extras_desc[0].yarn_denier = yarn_denier
	var yarn_grams1 = document.getElementById("yarn_grams1").value
	cur_frm.doc.extras_desc[0].yarn_grams1 = yarn_grams1
	var yarn_grams2 = document.getElementById("yarn_grams2").value
	cur_frm.doc.extras_desc[0].yarn_grams2 = yarn_grams2

	var b_lock = document.getElementById("b_lock").value
	cur_frm.doc.extras_desc[0].b_lock = b_lock
	var b_lock_yes_no = document.getElementById("b_lock_yes_no").value
	cur_frm.doc.extras_desc[0].b_lock_yes_no = b_lock_yes_no
	var b_lock_grams1 = document.getElementById("b_lock_grams1").value
	cur_frm.doc.extras_desc[0].b_lock_grams1 = b_lock_grams1

	var extra1_no = document.getElementById("extra1_no").value
	cur_frm.doc.extras_desc[0].extra1_no = extra1_no
	var extra1_width = document.getElementById("extra1_width").value
	cur_frm.doc.extras_desc[0].extra1_width = extra1_width
	var extra1_gsm = document.getElementById("extra1_gsm").value
	cur_frm.doc.extras_desc[0].extra1_gsm = extra1_gsm
	var extra1_cut_length = document.getElementById("extra1_cut_length").value
	cur_frm.doc.extras_desc[0].extra1_cut_length = extra1_cut_length
	var extra1_weight = document.getElementById("extra1_weight").value
	cur_frm.doc.extras_desc[0].extra1_weight = extra1_weight

	var extra2_no = document.getElementById("extra2_no").value
	cur_frm.doc.extras_desc[0].extra2_no = extra2_no
	var extra2_width = document.getElementById("extra2_width").value
	cur_frm.doc.extras_desc[0].extra2_width = extra2_width
	var extra2_gsm = document.getElementById("extra2_gsm").value
	cur_frm.doc.extras_desc[0].extra2_gsm = extra2_gsm
	var extra2_cut_length = document.getElementById("extra2_cut_length").value
	cur_frm.doc.extras_desc[0].extra2_cut_length = extra2_cut_length
	var extra2_weight = document.getElementById("extra2_weight").value
	cur_frm.doc.extras_desc[0].extra2_weight = extra2_weight

	var extra3_no = document.getElementById("extra3_no").value
	cur_frm.doc.extras_desc[0].extra3_no = extra3_no
	var extra3_width = document.getElementById("extra3_width").value
	cur_frm.doc.extras_desc[0].extra3_width = extra3_width
	var extra3_gsm = document.getElementById("extra3_gsm").value
	cur_frm.doc.extras_desc[0].extra3_gsm = extra3_gsm
	var extra3_cut_length = document.getElementById("extra3_cut_length").value
	cur_frm.doc.extras_desc[0].extra3_cut_length = extra3_cut_length
	var extra3_weight = document.getElementById("extra3_weight").value
	cur_frm.doc.extras_desc[0].extra3_weight = extra3_weight

}

function get_categories_values() {
	var dust_proof = document.getElementById("dust_proof")
	dust_proof.value = cur_frm.doc.categories[0].dust_proof
	var dust_proof_body = document.getElementById("dust_proof_body")
	dust_proof_body.value = cur_frm.doc.categories[0].dust_proof_body
	var dust_proof_baffle = document.getElementById("dust_proof_baffle")
	dust_proof_baffle.value = cur_frm.doc.categories[0].dust_proof_baffle
	var dust_proof_att = document.getElementById("dust_proof_att")
	dust_proof_att.value = cur_frm.doc.categories[0].dust_proof_att
	var dust_proof_nos = document.getElementById("dust_proof_nos")
	dust_proof_nos.value = cur_frm.doc.categories[0].dust_proof_nos
	var dust_proof_gsm = document.getElementById("dust_proof_gsm")
	dust_proof_gsm.value = cur_frm.doc.categories[0].dust_proof_gsm

	var felt = document.getElementById("felt")
	felt.value = cur_frm.doc.categories[0].felt
	var felt_body = document.getElementById("felt_body")
	felt_body.value = cur_frm.doc.categories[0].felt_body
	var felt_baffle = document.getElementById("felt_baffle")
	felt_baffle.value = cur_frm.doc.categories[0].felt_baffle
	var felt_att = document.getElementById("felt_att")
	felt_att.value = cur_frm.doc.categories[0].felt_att
	var felt_nos = document.getElementById("felt_nos")
	felt_nos.value = cur_frm.doc.categories[0].felt_nos
	var felt_gsm = document.getElementById("felt_gsm")
	felt_gsm.value = cur_frm.doc.categories[0].felt_gsm
}

function set_categories_values(frm) {
	var dust_proof = document.getElementById("dust_proof").value
	cur_frm.doc.categories[0].dust_proof = dust_proof
	var dust_proof_body = document.getElementById("dust_proof_body").value
	cur_frm.doc.categories[0].dust_proof_body = dust_proof_body
	var dust_proof_baffle = document.getElementById("dust_proof_baffle").value
	cur_frm.doc.categories[0].dust_proof_baffle = dust_proof_baffle
	var dust_proof_att = document.getElementById("dust_proof_att").value
	cur_frm.doc.categories[0].dust_proof_att = dust_proof_att
	var dust_proof_nos = document.getElementById("dust_proof_nos").value
	cur_frm.doc.categories[0].dust_proof_nos = dust_proof_nos
	var dust_proof_gsm = document.getElementById("dust_proof_gsm").value
	cur_frm.doc.categories[0].dust_proof_gsm = dust_proof_gsm

	var felt = document.getElementById("felt").value
	cur_frm.doc.categories[0].felt = felt
	var felt_body = document.getElementById("felt_body").value
	cur_frm.doc.categories[0].felt_body = felt_body
	var felt_baffle = document.getElementById("felt_baffle").value
	cur_frm.doc.categories[0].felt_baffle = felt_baffle
	var felt_att = document.getElementById("felt_att").value
	cur_frm.doc.categories[0].felt_att = felt_att
	var felt_nos = document.getElementById("felt_nos").value
	cur_frm.doc.categories[0].felt_nos = felt_nos
	var felt_gsm = document.getElementById("felt_gsm").value
	cur_frm.doc.categories[0].felt_gsm = felt_gsm
}

function get_top_attachment_addons_type_values() {
	var tp_outer_tie_width = document.getElementById("tp_outer_tie_width")
	tp_outer_tie_width.value = cur_frm.doc.top_attachment_addons_type[0].tp_outer_tie_width
	var tp_outer_tie_gsm = document.getElementById("tp_outer_tie_gsm")
	tp_outer_tie_gsm.value = cur_frm.doc.top_attachment_addons_type[0].tp_outer_tie_gsm
	var tp_outer_tie_color = document.getElementById("tp_outer_tie_color")
	tp_outer_tie_color.value = cur_frm.doc.top_attachment_addons_type[0].tp_outer_tie_color
	var tp_inner_tie_ds_width = document.getElementById("tp_inner_tie_ds_width")
	tp_inner_tie_ds_width.value = cur_frm.doc.top_attachment_addons_type[0].tp_inner_tie_ds_width
	var tp_inner_tie_ds_gsm = document.getElementById("tp_inner_tie_ds_gsm")
	tp_inner_tie_ds_gsm.value = cur_frm.doc.top_attachment_addons_type[0].tp_inner_tie_ds_gsm
	var tp_inner_tie_ds_color = document.getElementById("tp_inner_tie_ds_color")
	tp_inner_tie_ds_color.value = cur_frm.doc.top_attachment_addons_type[0].tp_inner_tie_ds_color
	var tp_petal_rope_width = document.getElementById("tp_petal_rope_width")
	tp_petal_rope_width.value = cur_frm.doc.top_attachment_addons_type[0].tp_petal_rope_width
	var tp_petal_rope_gsm = document.getElementById("tp_petal_rope_gsm")
	tp_petal_rope_gsm.value = cur_frm.doc.top_attachment_addons_type[0].tp_petal_rope_gsm
	var tp_petal_rope_color = document.getElementById("tp_petal_rope_color")
	tp_petal_rope_color.value = cur_frm.doc.top_attachment_addons_type[0].tp_petal_rope_color
	var tp_hose_pipe_width = document.getElementById("tp_hose_pipe_width")
	tp_hose_pipe_width.value = cur_frm.doc.top_attachment_addons_type[0].tp_hose_pipe_width
	var tp_hose_pipe_gsm = document.getElementById("tp_hose_pipe_gsm")
	tp_hose_pipe_gsm.value = cur_frm.doc.top_attachment_addons_type[0].tp_hose_pipe_gsm
	var tp_hose_pipe_color = document.getElementById("tp_hose_pipe_color")
	tp_hose_pipe_color.value = cur_frm.doc.top_attachment_addons_type[0].tp_hose_pipe_color
}

function set_top_attachment_addons_type_values(frm) {
	var tp_outer_tie_width = document.getElementById("tp_outer_tie_width").value
	cur_frm.doc.top_attachment_addons_type[0].tp_outer_tie_width = tp_outer_tie_width
	var tp_outer_tie_gsm = document.getElementById("tp_outer_tie_gsm").value
	cur_frm.doc.top_attachment_addons_type[0].tp_outer_tie_gsm = tp_outer_tie_gsm
	var tp_outer_tie_color = document.getElementById("tp_outer_tie_color").value
	cur_frm.doc.top_attachment_addons_type[0].tp_outer_tie_color = tp_outer_tie_color
	var tp_inner_tie_ds_width = document.getElementById("tp_inner_tie_ds_width").value
	cur_frm.doc.top_attachment_addons_type[0].tp_inner_tie_ds_width = tp_inner_tie_ds_width
	var tp_inner_tie_ds_gsm = document.getElementById("tp_inner_tie_ds_gsm").value
	cur_frm.doc.top_attachment_addons_type[0].tp_inner_tie_ds_gsm = tp_inner_tie_ds_gsm
	var tp_inner_tie_ds_color = document.getElementById("tp_inner_tie_ds_color").value
	cur_frm.doc.top_attachment_addons_type[0].tp_inner_tie_ds_color = tp_inner_tie_ds_color
	var tp_petal_rope_width = document.getElementById("tp_petal_rope_width").value
	cur_frm.doc.top_attachment_addons_type[0].tp_petal_rope_width = tp_petal_rope_width
	var tp_petal_rope_gsm = document.getElementById("tp_petal_rope_gsm").value
	cur_frm.doc.top_attachment_addons_type[0].tp_petal_rope_gsm = tp_petal_rope_gsm
	var tp_petal_rope_color = document.getElementById("tp_petal_rope_color").value
	cur_frm.doc.top_attachment_addons_type[0].tp_petal_rope_color = tp_petal_rope_color
	var tp_hose_pipe_width = document.getElementById("tp_hose_pipe_width").value
	cur_frm.doc.top_attachment_addons_type[0].tp_hose_pipe_width = tp_hose_pipe_width
	var tp_hose_pipe_gsm = document.getElementById("tp_hose_pipe_gsm").value
	cur_frm.doc.top_attachment_addons_type[0].tp_hose_pipe_gsm = tp_hose_pipe_gsm
	var tp_hose_pipe_color = document.getElementById("tp_hose_pipe_color").value
	cur_frm.doc.top_attachment_addons_type[0].tp_hose_pipe_color = tp_hose_pipe_color
}

function get_bottom_attachment_addons_type_values() {
	var bt_outer_tie_width = document.getElementById("bt_outer_tie_width")
	bt_outer_tie_width.value = cur_frm.doc.bottom_attachment_addons_type[0].bt_outer_tie_width
	var bt_outer_tie_gsm = document.getElementById("bt_outer_tie_gsm")
	bt_outer_tie_gsm.value = cur_frm.doc.bottom_attachment_addons_type[0].bt_outer_tie_gsm
	var bt_outer_tie_color = document.getElementById("bt_outer_tie_color")
	bt_outer_tie_color.value = cur_frm.doc.bottom_attachment_addons_type[0].bt_outer_tie_color
	var bt_inner_tie_ds_width = document.getElementById("bt_inner_tie_ds_width")
	bt_inner_tie_ds_width.value = cur_frm.doc.bottom_attachment_addons_type[0].bt_inner_tie_ds_width
	var bt_inner_tie_ds_gsm = document.getElementById("bt_inner_tie_ds_gsm")
	bt_inner_tie_ds_gsm.value = cur_frm.doc.bottom_attachment_addons_type[0].bt_inner_tie_ds_gsm
	var bt_inner_tie_ds_color = document.getElementById("bt_inner_tie_ds_color")
	bt_inner_tie_ds_color.value = cur_frm.doc.bottom_attachment_addons_type[0].bt_inner_tie_ds_color
	var bt_petal_rope_width = document.getElementById("bt_petal_rope_width")
	bt_petal_rope_width.value = cur_frm.doc.bottom_attachment_addons_type[0].bt_petal_rope_width
	var bt_petal_rope_gsm = document.getElementById("bt_petal_rope_gsm")
	bt_petal_rope_gsm.value = cur_frm.doc.bottom_attachment_addons_type[0].bt_petal_rope_gsm
	var bt_petal_rope_color = document.getElementById("bt_petal_rope_color")
	bt_petal_rope_color.value = cur_frm.doc.bottom_attachment_addons_type[0].bt_petal_rope_color
	var bt_hose_pipe_width = document.getElementById("bt_hose_pipe_width")
	bt_hose_pipe_width.value = cur_frm.doc.bottom_attachment_addons_type[0].bt_hose_pipe_width
	var bt_hose_pipe_gsm = document.getElementById("bt_hose_pipe_gsm")
	bt_hose_pipe_gsm.value = cur_frm.doc.bottom_attachment_addons_type[0].bt_hose_pipe_gsm
	var bt_hose_pipe_color = document.getElementById("bt_hose_pipe_color")
	bt_hose_pipe_color.value = cur_frm.doc.bottom_attachment_addons_type[0].bt_hose_pipe_color
}

function set_bottom_attachment_addons_type_values(frm) {
	var bt_outer_tie_width = document.getElementById("bt_outer_tie_width").value
	cur_frm.doc.bottom_attachment_addons_type[0].bt_outer_tie_width = bt_outer_tie_width
	var bt_outer_tie_gsm = document.getElementById("bt_outer_tie_gsm").value
	cur_frm.doc.bottom_attachment_addons_type[0].bt_outer_tie_gsm = bt_outer_tie_gsm
	var bt_outer_tie_color = document.getElementById("bt_outer_tie_color").value
	cur_frm.doc.bottom_attachment_addons_type[0].bt_outer_tie_color = bt_outer_tie_color
	var bt_inner_tie_ds_width = document.getElementById("bt_inner_tie_ds_width").value
	cur_frm.doc.bottom_attachment_addons_type[0].bt_inner_tie_ds_width = bt_inner_tie_ds_width
	var bt_inner_tie_ds_gsm = document.getElementById("bt_inner_tie_ds_gsm").value
	cur_frm.doc.bottom_attachment_addons_type[0].bt_inner_tie_ds_gsm = bt_inner_tie_ds_gsm
	var bt_inner_tie_ds_color = document.getElementById("bt_inner_tie_ds_color").value
	cur_frm.doc.bottom_attachment_addons_type[0].bt_inner_tie_ds_color = bt_inner_tie_ds_color
	var bt_petal_rope_width = document.getElementById("bt_petal_rope_width").value
	cur_frm.doc.bottom_attachment_addons_type[0].bt_petal_rope_width = bt_petal_rope_width
	var bt_petal_rope_gsm = document.getElementById("bt_petal_rope_gsm").value
	cur_frm.doc.bottom_attachment_addons_type[0].bt_petal_rope_gsm = bt_petal_rope_gsm
	var bt_petal_rope_color = document.getElementById("bt_petal_rope_color").value
	cur_frm.doc.bottom_attachment_addons_type[0].bt_petal_rope_color = bt_petal_rope_color
	var bt_hose_pipe_width = document.getElementById("bt_hose_pipe_width").value
	cur_frm.doc.bottom_attachment_addons_type[0].bt_hose_pipe_width = bt_hose_pipe_width
	var bt_hose_pipe_gsm = document.getElementById("bt_hose_pipe_gsm").value
	cur_frm.doc.bottom_attachment_addons_type[0].bt_hose_pipe_gsm = bt_hose_pipe_gsm
	var bt_hose_pipe_color = document.getElementById("bt_hose_pipe_color").value
	cur_frm.doc.bottom_attachment_addons_type[0].bt_hose_pipe_color = bt_hose_pipe_color
}

function get_top_attachment_addons_values() {
	var tp_outer_tie = document.getElementById("tp_outer_tie")
	tp_outer_tie.value = cur_frm.doc.top_attachment_addons[0].tp_outer_tie
	var tp_inner_tie_ds = document.getElementById("tp_inner_tie_ds")
	tp_inner_tie_ds.value = cur_frm.doc.top_attachment_addons[0].tp_inner_tie_ds
	var tp_petal_closure = document.getElementById("tp_petal_closure")
	tp_petal_closure.value = cur_frm.doc.top_attachment_addons[0].tp_petal_closure
	var tp_skirt_open_corner = document.getElementById("tp_skirt_open_corner")
	tp_skirt_open_corner.value = cur_frm.doc.top_attachment_addons[0].tp_skirt_open_corner
}

function set_top_attachment_addons_values(frm) {
	var tp_outer_tie = document.getElementById("tp_outer_tie").value
	cur_frm.doc.top_attachment_addons[0].tp_outer_tie = tp_outer_tie
	var tp_inner_tie_ds = document.getElementById("tp_inner_tie_ds").value
	cur_frm.doc.top_attachment_addons[0].tp_inner_tie_ds = tp_inner_tie_ds
	var tp_petal_closure = document.getElementById("tp_petal_closure").value
	cur_frm.doc.top_attachment_addons[0].tp_petal_closure = tp_petal_closure
	var tp_skirt_open_corner = document.getElementById("tp_skirt_open_corner").value
	cur_frm.doc.top_attachment_addons[0].tp_skirt_open_corner = tp_skirt_open_corner
}

function get_bottom_attachment_addons_values() {
	var bt_outer_tie = document.getElementById("bt_outer_tie")
	bt_outer_tie.value = cur_frm.doc.bottom_attachment_addons[0].bt_outer_tie
	var bt_inner_tie_ds = document.getElementById("bt_inner_tie_ds")
	bt_inner_tie_ds.value = cur_frm.doc.bottom_attachment_addons[0].bt_inner_tie_ds
	var bt_petal_closure = document.getElementById("bt_petal_closure")
	bt_petal_closure.value = cur_frm.doc.bottom_attachment_addons[0].bt_petal_closure
	var bt_skirt_open_corner = document.getElementById("bt_skirt_open_corner")
	bt_skirt_open_corner.value = cur_frm.doc.bottom_attachment_addons[0].bt_skirt_open_corner
}

function set_bottom_attachment_addons_values(frm) {
	var bt_outer_tie = document.getElementById("bt_outer_tie").value
	cur_frm.doc.bottom_attachment_addons[0].bt_outer_tie = bt_outer_tie
	var bt_inner_tie_ds = document.getElementById("bt_inner_tie_ds").value
	cur_frm.doc.bottom_attachment_addons[0].bt_inner_tie_ds = bt_inner_tie_ds
	var bt_petal_closure = document.getElementById("bt_petal_closure").value
	cur_frm.doc.bottom_attachment_addons[0].bt_petal_closure = bt_petal_closure
	var bt_skirt_open_corner = document.getElementById("bt_skirt_open_corner").value
	cur_frm.doc.bottom_attachment_addons[0].bt_skirt_open_corner = bt_skirt_open_corner
}

function get_secondary_top_values() {
	var st_top_flap = document.getElementById("st_top_flap")
	st_top_flap.value = cur_frm.doc.secondary_top[0].st_top_flap
	var st_top_flap_type = document.getElementById("st_top_flap_type")
	st_top_flap_type.value = cur_frm.doc.secondary_top[0].st_top_flap_type
	var st_top_flap_l = document.getElementById("st_top_flap_l")
	st_top_flap_l.value = cur_frm.doc.secondary_top[0].st_top_flap_l
	var st_top_flap_w = document.getElementById("st_top_flap_w")
	st_top_flap_w.value = cur_frm.doc.secondary_top[0].st_top_flap_w
	var st_top_flap_gsm = document.getElementById("st_top_flap_gsm")
	st_top_flap_gsm.value = cur_frm.doc.secondary_top[0].st_top_flap_gsm
	var st_top_flap_coated = document.getElementById("st_top_flap_coated")
	st_top_flap_coated.value = cur_frm.doc.secondary_top[0].st_top_flap_coated
	var st_top_flap_total = document.getElementById("st_top_flap_total")
	st_top_flap_total.value = cur_frm.doc.secondary_top[0].st_top_flap_total
	var st_top_flap_color = document.getElementById("st_top_flap_color")
	st_top_flap_color.value = cur_frm.doc.secondary_top[0].st_top_flap_color
	var st_extra_l = document.getElementById("st_extra_l")
	st_extra_l.value = cur_frm.doc.secondary_top[0].st_extra_l
	var st_extra_w = document.getElementById("st_extra_w")
	st_extra_w.value = cur_frm.doc.secondary_top[0].st_extra_w
}

function set_secondary_top_values(frm) {
	var st_top_flap = document.getElementById("st_top_flap").value
	cur_frm.doc.secondary_top[0].st_top_flap = st_top_flap
	var st_top_flap_type = document.getElementById("st_top_flap_type").value
	cur_frm.doc.secondary_top[0].st_top_flap_type = st_top_flap_type
	var st_top_flap_l = document.getElementById("st_top_flap_l").value
	cur_frm.doc.secondary_top[0].st_top_flap_l = st_top_flap_l
	var st_top_flap_w = document.getElementById("st_top_flap_w").value
	cur_frm.doc.secondary_top[0].st_top_flap_w = st_top_flap_w
	var st_top_flap_gsm = document.getElementById("st_top_flap_gsm").value
	cur_frm.doc.secondary_top[0].st_top_flap_gsm = st_top_flap_gsm
	var st_top_flap_coated = document.getElementById("st_top_flap_coated").value
	cur_frm.doc.secondary_top[0].st_top_flap_coated = st_top_flap_coated
	var st_top_flap_total = document.getElementById("st_top_flap_total").value
	cur_frm.doc.secondary_top[0].st_top_flap_total = st_top_flap_total
	var st_top_flap_color = document.getElementById("st_top_flap_color").value
	cur_frm.doc.secondary_top[0].st_top_flap_color = st_top_flap_color
	var st_extra_l = document.getElementById("st_extra_l").value
	cur_frm.doc.secondary_top[0].st_extra_l = st_extra_l
	var st_extra_w = document.getElementById("st_extra_w").value
	cur_frm.doc.secondary_top[0].st_extra_w = st_extra_w
}

function get_secondary_bottom_values() {
	var sb_bottom_flap = document.getElementById("sb_bottom_flap")
	sb_bottom_flap.value = cur_frm.doc.secondary_bottom[0].sb_bottom_flap
	var sb_bottom_flap_type = document.getElementById("sb_bottom_flap_type")
	sb_bottom_flap_type.value = cur_frm.doc.secondary_bottom[0].sb_bottom_flap_type
	var sb_bottom_flap_l = document.getElementById("sb_bottom_flap_l")
	sb_bottom_flap_l.value = cur_frm.doc.secondary_bottom[0].sb_bottom_flap_l
	var sb_bottom_flap_w = document.getElementById("sb_bottom_flap_w")
	sb_bottom_flap_w.value = cur_frm.doc.secondary_bottom[0].sb_bottom_flap_w
	var sb_bottom_flap_gsm = document.getElementById("sb_bottom_flap_gsm")
	sb_bottom_flap_gsm.value = cur_frm.doc.secondary_bottom[0].sb_bottom_flap_gsm
	var sb_bottom_flap_coated = document.getElementById("sb_bottom_flap_coated")
	sb_bottom_flap_coated.value = cur_frm.doc.secondary_bottom[0].sb_bottom_flap_coated
	var sb_bottom_flap_total = document.getElementById("sb_bottom_flap_total")
	sb_bottom_flap_total.value = cur_frm.doc.secondary_bottom[0].sb_bottom_flap_total
	var sb_bottom_flap_color = document.getElementById("sb_bottom_flap_color")
	sb_bottom_flap_color.value = cur_frm.doc.secondary_bottom[0].sb_bottom_flap_color
	var sb_extra_l = document.getElementById("sb_extra_l")
	sb_extra_l.value = cur_frm.doc.secondary_bottom[0].sb_extra_l
	var sb_extra_w = document.getElementById("sb_extra_w")
	sb_extra_w.value = cur_frm.doc.secondary_bottom[0].sb_extra_w
}

function set_secondary_bottom_values(frm) {
	var sb_bottom_flap = document.getElementById("sb_bottom_flap").value
	cur_frm.doc.secondary_bottom[0].sb_bottom_flap = sb_bottom_flap
	var sb_bottom_flap_type = document.getElementById("sb_bottom_flap_type").value
	cur_frm.doc.secondary_bottom[0].sb_bottom_flap_type = sb_bottom_flap_type
	var sb_bottom_flap_l = document.getElementById("sb_bottom_flap_l").value
	cur_frm.doc.secondary_bottom[0].sb_bottom_flap_l = sb_bottom_flap_l
	var sb_bottom_flap_w = document.getElementById("sb_bottom_flap_w").value
	cur_frm.doc.secondary_bottom[0].sb_bottom_flap_w = sb_bottom_flap_w
	var sb_bottom_flap_gsm = document.getElementById("sb_bottom_flap_gsm").value
	cur_frm.doc.secondary_bottom[0].sb_bottom_flap_gsm = sb_bottom_flap_gsm
	var sb_bottom_flap_coated = document.getElementById("sb_bottom_flap_coated").value
	cur_frm.doc.secondary_bottom[0].sb_bottom_flap_coated = sb_bottom_flap_coated
	var sb_bottom_flap_total = document.getElementById("sb_bottom_flap_total").value
	cur_frm.doc.secondary_bottom[0].sb_bottom_flap_total = sb_bottom_flap_total
	var sb_bottom_flap_color = document.getElementById("sb_bottom_flap_color").value
	cur_frm.doc.secondary_bottom[0].sb_bottom_flap_color = sb_bottom_flap_color
	var sb_extra_l = document.getElementById("sb_extra_l").value
	cur_frm.doc.secondary_bottom[0].sb_extra_l = sb_extra_l
	var sb_extra_w = document.getElementById("sb_extra_w").value
	cur_frm.doc.secondary_bottom[0].sb_extra_w = sb_extra_w
}

function get_bottom_attachment_type_values() {
	var bottom_attachment_type = document.getElementById("bottom_attachment_type")
	bottom_attachment_type.value = cur_frm.doc.bottom_attachment_type[0].bottom_attachment_type

	if (bottom_attachment_type.value === "Spout") {
		var bt_spout_fab_type = document.getElementById("bt_fab_type")
		bt_spout_fab_type.value = cur_frm.doc.bottom_attachment_type[0].bt_spout_fab_type
		var bt_spout_gsm = document.getElementById("bt_gsm")
		bt_spout_gsm.value = cur_frm.doc.bottom_attachment_type[0].bt_spout_gsm
		var bt_spout_coated = document.getElementById("bt_coated")
		bt_spout_coated.value = cur_frm.doc.bottom_attachment_type[0].bt_spout_coated
		var bt_spout_total = document.getElementById("bt_total")
		bt_spout_total.value = cur_frm.doc.bottom_attachment_type[0].bt_spout_total
		var bt_spout_dia = document.getElementById("bt_dia")
		bt_spout_dia.value = cur_frm.doc.bottom_attachment_type[0].bt_spout_dia
		var bt_spout_height = document.getElementById("bt_height")
		bt_spout_height.value = cur_frm.doc.bottom_attachment_type[0].bt_spout_height
		var bt_spout_color = document.getElementById("bt_color")
		bt_spout_color.value = cur_frm.doc.bottom_attachment_type[0].bt_spout_color
	}
	else if (bottom_attachment_type.value === "Skirt") {
		var bt_skirt_fab_type = document.getElementById("bt_fab_type")
		bt_skirt_fab_type.value = cur_frm.doc.bottom_attachment_type[0].bt_skirt_fab_type
		var bt_skirt_gsm = document.getElementById("bt_gsm")
		bt_skirt_gsm.value = cur_frm.doc.bottom_attachment_type[0].bt_skirt_gsm
		var bt_skirt_coated = document.getElementById("bt_coated")
		bt_skirt_coated.value = cur_frm.doc.bottom_attachment_type[0].bt_skirt_coated
		var bt_skirt_total = document.getElementById("bt_total")
		bt_skirt_total.value = cur_frm.doc.bottom_attachment_type[0].bt_skirt_total
		var bt_skirt_dia = document.getElementById("bt_dia")
		bt_skirt_dia.value = cur_frm.doc.bottom_attachment_type[0].bt_skirt_dia
		var bt_skirt_height = document.getElementById("bt_height")
		bt_skirt_height.value = cur_frm.doc.bottom_attachment_type[0].bt_skirt_height
		var bt_skirt_color = document.getElementById("bt_color")
		bt_skirt_color.value = cur_frm.doc.bottom_attachment_type[0].bt_skirt_color
	}
	else {
		var bt_na_fab_type = document.getElementById("bt_fab_type")
		bt_na_fab_type.value = cur_frm.doc.bottom_attachment_type[0].bt_na_fab_type
		var bt_na_gsm = document.getElementById("bt_gsm")
		bt_na_gsm.value = cur_frm.doc.bottom_attachment_type[0].bt_na_gsm
		var bt_na_coated = document.getElementById("bt_coated")
		bt_na_coated.value = cur_frm.doc.bottom_attachment_type[0].bt_na_coated
		var bt_na_total = document.getElementById("bt_total")
		bt_na_total.value = cur_frm.doc.bottom_attachment_type[0].bt_na_total
		var bt_na_dia = document.getElementById("bt_dia")
		bt_na_dia.value = cur_frm.doc.bottom_attachment_type[0].bt_na_dia
		var bt_na_height = document.getElementById("bt_height")
		bt_na_height.value = cur_frm.doc.bottom_attachment_type[0].bt_na_height
		var bt_na_color = document.getElementById("bt_color")
		bt_na_color.value = cur_frm.doc.bottom_attachment_type[0].bt_na_color
	}

	var bt_hemming_fab_type = document.getElementById("bt_hemming_fab_type")
	bt_hemming_fab_type.value = cur_frm.doc.bottom_attachment_type[0].bt_hemming_fab_type

	var bt_bottom_panel_type = document.getElementById("bt_bottom_panel_type")
	bt_bottom_panel_type.value = cur_frm.doc.bottom_attachment_type[0].bt_bottom_panel_type
	var bt_bottom_panel_gsm = document.getElementById("bt_bottom_panel_gsm")
	bt_bottom_panel_gsm.value = cur_frm.doc.bottom_attachment_type[0].bt_bottom_panel_gsm
	var bt_bottom_panel_coated = document.getElementById("bt_bottom_panel_coated")
	bt_bottom_panel_coated.value = cur_frm.doc.bottom_attachment_type[0].bt_bottom_panel_coated
	var bt_bottom_panel_total = document.getElementById("bt_bottom_panel_total")
	bt_bottom_panel_total.value = cur_frm.doc.bottom_attachment_type[0].bt_bottom_panel_total
	var bt_bottom_panel_dia = document.getElementById("bt_bottom_panel_dia")
	bt_bottom_panel_dia.value = cur_frm.doc.bottom_attachment_type[0].bt_bottom_panel_dia
	var bt_bottom_panel_height = document.getElementById("bt_bottom_panel_height")
	bt_bottom_panel_height.value = cur_frm.doc.bottom_attachment_type[0].bt_bottom_panel_height
}

function set_bottom_attachment_type_values(frm) {
	var bottom_attachment_type = document.getElementById("bottom_attachment_type").value
	cur_frm.doc.bottom_attachment_type[0].bottom_attachment_type = bottom_attachment_type

	if (bottom_attachment_type === "Spout") {
		var bt_spout_fab_type = document.getElementById("bt_fab_type").value
		cur_frm.doc.bottom_attachment_type[0].bt_spout_fab_type = bt_spout_fab_type
		var bt_spout_gsm = document.getElementById("bt_gsm").value
		cur_frm.doc.bottom_attachment_type[0].bt_spout_gsm = bt_spout_gsm
		var bt_spout_coated = document.getElementById("bt_coated").value
		cur_frm.doc.bottom_attachment_type[0].bt_spout_coated = bt_spout_coated
		var bt_spout_total = document.getElementById("bt_total").value
		cur_frm.doc.bottom_attachment_type[0].bt_spout_total = bt_spout_total
		var bt_spout_dia = document.getElementById("bt_dia").value
		cur_frm.doc.bottom_attachment_type[0].bt_spout_dia = bt_spout_dia
		var bt_spout_height = document.getElementById("bt_height").value
		cur_frm.doc.bottom_attachment_type[0].bt_spout_height = bt_spout_height
		var bt_spout_color = document.getElementById("bt_color").value
		cur_frm.doc.bottom_attachment_type[0].bt_spout_color = bt_spout_color
	}
	else if (bottom_attachment_type === "Skirt") {
		var bt_skirt_fab_type = document.getElementById("bt_fab_type").value
		cur_frm.doc.bottom_attachment_type[0].bt_skirt_fab_type = bt_skirt_fab_type
		var bt_skirt_gsm = document.getElementById("bt_gsm").value
		cur_frm.doc.bottom_attachment_type[0].bt_skirt_gsm = bt_skirt_gsm
		var bt_skirt_coated = document.getElementById("bt_coated").value
		cur_frm.doc.bottom_attachment_type[0].bt_skirt_coated = bt_skirt_coated
		var bt_skirt_total = document.getElementById("bt_total").value
		cur_frm.doc.bottom_attachment_type[0].bt_skirt_total = bt_skirt_total
		var bt_skirt_dia = document.getElementById("bt_dia").value
		cur_frm.doc.bottom_attachment_type[0].bt_skirt_dia = bt_skirt_dia
		var bt_skirt_height = document.getElementById("bt_height").value
		cur_frm.doc.bottom_attachment_type[0].bt_skirt_height = bt_skirt_height
		var bt_skirt_color = document.getElementById("bt_color").value
		cur_frm.doc.bottom_attachment_type[0].bt_skirt_color = bt_skirt_color
	}
	else {
		var bt_na_fab_type = document.getElementById("bt_fab_type").value
		cur_frm.doc.bottom_attachment_type[0].bt_na_fab_type = bt_na_fab_type
		var bt_na_gsm = document.getElementById("bt_gsm").value
		cur_frm.doc.bottom_attachment_type[0].bt_na_gsm = bt_na_gsm
		var bt_na_coated = document.getElementById("bt_coated").value
		cur_frm.doc.bottom_attachment_type[0].bt_na_coated = bt_na_coated
		var bt_na_total = document.getElementById("bt_total").value
		cur_frm.doc.bottom_attachment_type[0].bt_na_total = bt_na_total
		var bt_na_dia = document.getElementById("bt_dia").value
		cur_frm.doc.bottom_attachment_type[0].bt_na_dia = bt_na_dia
		var bt_na_height = document.getElementById("bt_height").value
		cur_frm.doc.bottom_attachment_type[0].bt_na_height = bt_na_height
		var bt_na_color = document.getElementById("bt_color").value
		cur_frm.doc.bottom_attachment_type[0].bt_na_color = bt_na_color
	}

	var bt_hemming_fab_type = document.getElementById("bt_hemming_fab_type").value
	cur_frm.doc.bottom_attachment_type[0].bt_hemming_fab_type = bt_hemming_fab_type

	var bt_bottom_panel_type = document.getElementById("bt_bottom_panel_type").value
	cur_frm.doc.bottom_attachment_type[0].bt_bottom_panel_type = bt_bottom_panel_type
	var bt_bottom_panel_gsm = document.getElementById("bt_bottom_panel_gsm").value
	cur_frm.doc.bottom_attachment_type[0].bt_bottom_panel_gsm = bt_bottom_panel_gsm
	var bt_bottom_panel_coated = document.getElementById("bt_bottom_panel_coated").value
	cur_frm.doc.bottom_attachment_type[0].bt_bottom_panel_coated = bt_bottom_panel_coated
	var bt_bottom_panel_total = document.getElementById("bt_bottom_panel_total").value
	cur_frm.doc.bottom_attachment_type[0].bt_bottom_panel_total = bt_bottom_panel_total
	var bt_bottom_panel_dia = document.getElementById("bt_bottom_panel_dia").value
	cur_frm.doc.bottom_attachment_type[0].bt_bottom_panel_dia = bt_bottom_panel_dia
	var bt_bottom_panel_height = document.getElementById("bt_bottom_panel_height").value
	cur_frm.doc.bottom_attachment_type[0].bt_bottom_panel_height = bt_bottom_panel_height

}

function get_top_attachment_type_values() {
	var top_attachment_type = document.getElementById("top_attachment_type")
	top_attachment_type.value = cur_frm.doc.top_attachment_type[0].top_attachment_type

	if (top_attachment_type.value === "Spout") {
		var tp_spout_fab_type = document.getElementById("tp_fab_type")
		tp_spout_fab_type.value = cur_frm.doc.top_attachment_type[0].tp_spout_fab_type
		var tp_spout_gsm = document.getElementById("tp_gsm")
		tp_spout_gsm.value = cur_frm.doc.top_attachment_type[0].tp_spout_gsm
		var tp_spout_coated = document.getElementById("tp_coated")
		tp_spout_coated.value = cur_frm.doc.top_attachment_type[0].tp_spout_coated
		var tp_spout_total = document.getElementById("tp_total")
		tp_spout_total.value = cur_frm.doc.top_attachment_type[0].tp_spout_total
		var tp_spout_dia = document.getElementById("tp_dia")
		tp_spout_dia.value = cur_frm.doc.top_attachment_type[0].tp_spout_dia
		var tp_spout_height = document.getElementById("tp_height")
		tp_spout_height.value = cur_frm.doc.top_attachment_type[0].tp_spout_height
		var tp_spout_color = document.getElementById("tp_color")
		tp_spout_color.value = cur_frm.doc.top_attachment_type[0].tp_spout_color
	}
	else if (top_attachment_type.value === "Skirt") {
		var tp_skirt_fab_type = document.getElementById("tp_fab_type")
		tp_skirt_fab_type.value = cur_frm.doc.top_attachment_type[0].tp_skirt_fab_type
		var tp_skirt_gsm = document.getElementById("tp_gsm")
		tp_skirt_gsm.value = cur_frm.doc.top_attachment_type[0].tp_skirt_gsm
		var tp_skirt_coated = document.getElementById("tp_coated")
		tp_skirt_coated.value = cur_frm.doc.top_attachment_type[0].tp_skirt_coated
		var tp_skirt_total = document.getElementById("tp_total")
		tp_skirt_total.value = cur_frm.doc.top_attachment_type[0].tp_skirt_total
		var tp_skirt_dia = document.getElementById("tp_dia")
		tp_skirt_dia.value = cur_frm.doc.top_attachment_type[0].tp_skirt_dia
		var tp_skirt_height = document.getElementById("tp_height")
		tp_skirt_height.value = cur_frm.doc.top_attachment_type[0].tp_skirt_height
		var tp_skirt_color = document.getElementById("tp_color")
		tp_skirt_color.value = cur_frm.doc.top_attachment_type[0].tp_skirt_color
	}
	else {
		var tp_na_fab_type = document.getElementById("tp_fab_type")
		tp_na_fab_type.value = cur_frm.doc.top_attachment_type[0].tp_na_fab_type
		var tp_na_gsm = document.getElementById("tp_gsm")
		tp_na_gsm.value = cur_frm.doc.top_attachment_type[0].tp_na_gsm
		var tp_na_coated = document.getElementById("tp_coated")
		tp_na_coated.value = cur_frm.doc.top_attachment_type[0].tp_na_coated
		var tp_na_total = document.getElementById("tp_total")
		tp_na_total.value = cur_frm.doc.top_attachment_type[0].tp_na_total
		var tp_na_dia = document.getElementById("tp_dia")
		tp_na_dia.value = cur_frm.doc.top_attachment_type[0].tp_na_dia
		var tp_na_height = document.getElementById("tp_height")
		tp_na_height.value = cur_frm.doc.top_attachment_type[0].tp_na_height
		var tp_na_color = document.getElementById("tp_color")
		tp_na_color.value = cur_frm.doc.top_attachment_type[0].tp_na_color
	}
	var tp_hemming_fab_type = document.getElementById("tp_hemming_fab_type")
	tp_hemming_fab_type.value = cur_frm.doc.top_attachment_type[0].tp_hemming_fab_type

	var tp_bottom_panel_type = document.getElementById("tp_bottom_panel_type")
	tp_bottom_panel_type.value = cur_frm.doc.top_attachment_type[0].tp_bottom_panel_type
	var tp_bottom_panel_gsm = document.getElementById("tp_bottom_panel_gsm")
	tp_bottom_panel_gsm.value = cur_frm.doc.top_attachment_type[0].tp_bottom_panel_gsm
	var tp_bottom_panel_coated = document.getElementById("tp_bottom_panel_coated")
	tp_bottom_panel_coated.value = cur_frm.doc.top_attachment_type[0].tp_bottom_panel_coated
	var tp_bottom_panel_total = document.getElementById("tp_bottom_panel_total")
	tp_bottom_panel_total.value = cur_frm.doc.top_attachment_type[0].tp_bottom_panel_total
	var tp_bottom_panel_dia = document.getElementById("tp_bottom_panel_dia")
	tp_bottom_panel_dia.value = cur_frm.doc.top_attachment_type[0].tp_bottom_panel_dia
	var tp_bottom_panel_height = document.getElementById("tp_bottom_panel_height")
	tp_bottom_panel_height.value = cur_frm.doc.top_attachment_type[0].tp_bottom_panel_height
}

function set_top_attachment_type_values(frm) {
	var top_attachment_type = document.getElementById("top_attachment_type").value
	cur_frm.doc.top_attachment_type[0].top_attachment_type = top_attachment_type

	if (top_attachment_type === "Spout") {
		var tp_spout_fab_type = document.getElementById("tp_fab_type").value
		cur_frm.doc.top_attachment_type[0].tp_spout_fab_type = tp_spout_fab_type
		var tp_spout_gsm = document.getElementById("tp_gsm").value
		cur_frm.doc.top_attachment_type[0].tp_spout_gsm = tp_spout_gsm
		var tp_spout_coated = document.getElementById("tp_coated").value
		cur_frm.doc.top_attachment_type[0].tp_spout_coated = tp_spout_coated
		var tp_spout_total = document.getElementById("tp_total").value
		cur_frm.doc.top_attachment_type[0].tp_spout_total = tp_spout_total
		var tp_spout_dia = document.getElementById("tp_dia").value
		cur_frm.doc.top_attachment_type[0].tp_spout_dia = tp_spout_dia
		var tp_spout_height = document.getElementById("tp_height").value
		cur_frm.doc.top_attachment_type[0].tp_spout_height = tp_spout_height
		var tp_spout_color = document.getElementById("tp_color").value
		cur_frm.doc.top_attachment_type[0].tp_spout_color = tp_spout_color
	}
	else if (top_attachment_type === "Skirt") {
		var tp_skirt_fab_type = document.getElementById("tp_fab_type").value
		cur_frm.doc.top_attachment_type[0].tp_skirt_fab_type = tp_skirt_fab_type
		var tp_skirt_gsm = document.getElementById("tp_gsm").value
		cur_frm.doc.top_attachment_type[0].tp_skirt_gsm = tp_skirt_gsm
		var tp_skirt_coated = document.getElementById("tp_coated").value
		cur_frm.doc.top_attachment_type[0].tp_skirt_coated = tp_skirt_coated
		var tp_skirt_total = document.getElementById("tp_total").value
		cur_frm.doc.top_attachment_type[0].tp_skirt_total = tp_skirt_total
		var tp_skirt_dia = document.getElementById("tp_dia").value
		cur_frm.doc.top_attachment_type[0].tp_skirt_dia = tp_skirt_dia
		var tp_skirt_height = document.getElementById("tp_height").value
		cur_frm.doc.top_attachment_type[0].tp_skirt_height = tp_skirt_height
		var tp_skirt_color = document.getElementById("tp_color").value
		cur_frm.doc.top_attachment_type[0].tp_skirt_color = tp_skirt_color
	}
	else {
		var tp_na_fab_type = document.getElementById("tp_fab_type").value
		cur_frm.doc.top_attachment_type[0].tp_na_fab_type = tp_na_fab_type
		var tp_na_gsm = document.getElementById("tp_gsm").value
		cur_frm.doc.top_attachment_type[0].tp_na_gsm = tp_na_gsm
		var tp_na_coated = document.getElementById("tp_coated").value
		cur_frm.doc.top_attachment_type[0].tp_na_coated = tp_na_coated
		var tp_na_total = document.getElementById("tp_total").value
		cur_frm.doc.top_attachment_type[0].tp_na_total = tp_na_total
		var tp_na_dia = document.getElementById("tp_dia").value
		cur_frm.doc.top_attachment_type[0].tp_na_dia = tp_na_dia
		var tp_na_height = document.getElementById("tp_height").value
		cur_frm.doc.top_attachment_type[0].tp_na_height = tp_na_height
		var tp_na_color = document.getElementById("tp_color").value
		cur_frm.doc.top_attachment_type[0].tp_na_color = tp_na_color
	}

	var tp_hemming_fab_type = document.getElementById("tp_hemming_fab_type").value
	cur_frm.doc.top_attachment_type[0].tp_hemming_fab_type = tp_hemming_fab_type

	var tp_bottom_panel_type = document.getElementById("tp_bottom_panel_type").value
	cur_frm.doc.top_attachment_type[0].tp_bottom_panel_type = tp_bottom_panel_type
	var tp_bottom_panel_gsm = document.getElementById("tp_bottom_panel_gsm").value
	cur_frm.doc.top_attachment_type[0].tp_bottom_panel_gsm = tp_bottom_panel_gsm
	var tp_bottom_panel_coated = document.getElementById("tp_bottom_panel_coated").value
	cur_frm.doc.top_attachment_type[0].tp_bottom_panel_coated = tp_bottom_panel_coated
	var tp_bottom_panel_total = document.getElementById("tp_bottom_panel_total").value
	cur_frm.doc.top_attachment_type[0].tp_bottom_panel_total = tp_bottom_panel_total
	var tp_bottom_panel_dia = document.getElementById("tp_bottom_panel_dia").value
	cur_frm.doc.top_attachment_type[0].tp_bottom_panel_dia = tp_bottom_panel_dia
	var tp_bottom_panel_height = document.getElementById("tp_bottom_panel_height").value
	cur_frm.doc.top_attachment_type[0].tp_bottom_panel_height = tp_bottom_panel_height

}

function get_accessories_values() {
	var body1_printing = document.getElementById("body1_printing")
	body1_printing.value = cur_frm.doc.accessories[0].body1_printing || ""
	var body2_sp_printing = document.getElementById("body2_sp_printing")
	body2_sp_printing.value = cur_frm.doc.accessories[0].body2_sp_printing || ""
	var color_printing = document.getElementById("color_printing")
	color_printing.value = cur_frm.doc.accessories[0].color_printing || ""
	var others1_printing = document.getElementById("others1_printing")
	others1_printing.value = cur_frm.doc.accessories[0].others1_printing || ""
	var others2_printing = document.getElementById("others2_printing")
	others2_printing.value = cur_frm.doc.accessories[0].others2_printing || ""

	var body1_doc_pocket = document.getElementById("body1_doc_pocket")
	body1_doc_pocket.value = cur_frm.doc.accessories[0].body1_doc_pocket
	var body2_sp_doc_pocket = document.getElementById("body2_sp_doc_pocket")
	body2_sp_doc_pocket.value = cur_frm.doc.accessories[0].body2_sp_doc_pocket
	var color_doc_pocket = document.getElementById("color_doc_pocket")
	color_doc_pocket.value = cur_frm.doc.accessories[0].color_doc_pocket
	var others1_doc_pocket = document.getElementById("others1_doc_pocket")
	others1_doc_pocket.value = cur_frm.doc.accessories[0].others1_doc_pocket
	var others2_doc_pocket = document.getElementById("others2_doc_pocket")
	others2_doc_pocket.value = cur_frm.doc.accessories[0].others2_doc_pocket

	var body1_label = document.getElementById("body1_label")
	body1_label.value = cur_frm.doc.accessories[0].body1_label
	var body2_sp_label = document.getElementById("body2_sp_label")
	body2_sp_label.value = cur_frm.doc.accessories[0].body2_sp_label
	var color_label = document.getElementById("color_label")
	color_label.value = cur_frm.doc.accessories[0].color_label
	var others1_label = document.getElementById("others1_label")
	others1_label.value = cur_frm.doc.accessories[0].others1_label
	var others2_label = document.getElementById("others2_label")
	others2_label.value = cur_frm.doc.accessories[0].others2_label
}

function set_accessories_values(frm) {
	var body1_printing = document.getElementById("body1_printing").value
	cur_frm.doc.accessories[0].body1_printing = body1_printing
	var body2_sp_printing = document.getElementById("body2_sp_printing").value
	cur_frm.doc.accessories[0].body2_sp_printing = body2_sp_printing
	var color_printing = document.getElementById("color_printing").value
	cur_frm.doc.accessories[0].color_printing = color_printing
	var others1_printing = document.getElementById("others1_printing").value
	cur_frm.doc.accessories[0].others1_printing = others1_printing
	var others2_printing = document.getElementById("others2_printing").value
	cur_frm.doc.accessories[0].others2_printing = others2_printing

	var body1_doc_pocket = document.getElementById("body1_doc_pocket").value
	cur_frm.doc.accessories[0].body1_doc_pocket = body1_doc_pocket
	var body2_sp_doc_pocket = document.getElementById("body2_sp_doc_pocket").value
	cur_frm.doc.accessories[0].body2_sp_doc_pocket = body2_sp_doc_pocket
	var color_doc_pocket = document.getElementById("color_doc_pocket").value
	cur_frm.doc.accessories[0].color_doc_pocket = color_doc_pocket
	var others1_doc_pocket = document.getElementById("others1_doc_pocket").value
	cur_frm.doc.accessories[0].others1_doc_pocket = others1_doc_pocket
	var others2_doc_pocket = document.getElementById("others2_doc_pocket").value
	cur_frm.doc.accessories[0].others2_doc_pocket = others2_doc_pocket

	var body1_label = document.getElementById("body1_label").value
	cur_frm.doc.accessories[0].body1_label = body1_label
	var body2_sp_label = document.getElementById("body2_sp_label").value
	cur_frm.doc.accessories[0].body2_sp_label = body2_sp_label
	var color_label = document.getElementById("color_label").value
	cur_frm.doc.accessories[0].color_label = color_label
	var others1_label = document.getElementById("others1_label").value
	cur_frm.doc.accessories[0].others1_label = others1_label
	var others2_label = document.getElementById("others2_label").value
	cur_frm.doc.accessories[0].others2_label = others2_label
}

function get_body_fabric_values() {
	var fabric_type = document.getElementById("fabric_type")
	fabric_type.value = cur_frm.doc.body_fabric[0].fabric_type
	var fabric_gsm = document.getElementById("fabric_gsm")
	fabric_gsm.value = cur_frm.doc.body_fabric[0].fabric_gsm
	var fabric_rf = document.getElementById("fabric_rf")
	fabric_rf.value = cur_frm.doc.body_fabric[0].fabric_rf
	var fabric_coated = document.getElementById("fabric_coated")
	fabric_coated.value = cur_frm.doc.body_fabric[0].fabric_coated
	var fabric_total = document.getElementById("fabric_total")
	fabric_total.value = cur_frm.doc.body_fabric[0].fabric_total
	var fabric_color = document.getElementById("fabric_color")
	fabric_color.value = cur_frm.doc.body_fabric[0].fabric_color

	var fabric_sp_type = document.getElementById("fabric_sp_type")
	fabric_sp_type.value = cur_frm.doc.body_fabric[0].fabric_sp_type
	var fabric_sp_gsm = document.getElementById("fabric_sp_gsm")
	fabric_sp_gsm.value = cur_frm.doc.body_fabric[0].fabric_sp_gsm
	var fabric_sp_rf = document.getElementById("fabric_sp_rf")
	fabric_sp_rf.value = cur_frm.doc.body_fabric[0].fabric_sp_rf
	var fabric_sp_coated = document.getElementById("fabric_sp_coated")
	fabric_sp_coated.value = cur_frm.doc.body_fabric[0].fabric_sp_coated
	var fabric_sp_total = document.getElementById("fabric_sp_total")
	fabric_sp_total.value = cur_frm.doc.body_fabric[0].fabric_sp_total
	var fabric_sp_color = document.getElementById("fabric_sp_color")
	fabric_sp_color.value = cur_frm.doc.body_fabric[0].fabric_sp_color

	var base_gsm__4p_type = document.getElementById("base_gsm__4p_type")
	base_gsm__4p_type.value = cur_frm.doc.body_fabric[0].base_gsm__4p_type
	var base_gsm__4p_gsm = document.getElementById("base_gsm__4p_gsm")
	base_gsm__4p_gsm.value = cur_frm.doc.body_fabric[0].base_gsm__4p_gsm
	var base_gsm__4p_rf = document.getElementById("base_gsm__4p_rf")
	base_gsm__4p_rf.value = cur_frm.doc.body_fabric[0].base_gsm__4p_rf
	var base_gsm__4p_coated = document.getElementById("base_gsm__4p_coated")
	base_gsm__4p_coated.value = cur_frm.doc.body_fabric[0].base_gsm__4p_coated
	var base_gsm__4p_total = document.getElementById("base_gsm__4p_total")
	base_gsm__4p_total.value = cur_frm.doc.body_fabric[0].base_gsm__4p_total
	var base_gsm__4p_color = document.getElementById("base_gsm__4p_color")
	base_gsm__4p_color.value = cur_frm.doc.body_fabric[0].base_gsm__4p_color

	var body_attachment_type = document.getElementById("body_attachment_type")
	body_attachment_type.value = cur_frm.doc.body_fabric[0].body_attachment_type
	var body_attachment_gsm = document.getElementById("body_attachment_gsm")
	body_attachment_gsm.value = cur_frm.doc.body_fabric[0].body_attachment_gsm
	var body_attachment_rf = document.getElementById("body_attachment_rf")
	body_attachment_rf.value = cur_frm.doc.body_fabric[0].body_attachment_rf
	var body_attachment_coated = document.getElementById("body_attachment_coated")
	body_attachment_coated.value = cur_frm.doc.body_fabric[0].body_attachment_coated
	var body_attachment_total = document.getElementById("body_attachment_total")
	body_attachment_total.value = cur_frm.doc.body_fabric[0].body_attachment_total
	var body_attachment_color = document.getElementById("body_attachment_color")
	body_attachment_color.value = cur_frm.doc.body_fabric[0].body_attachment_color

	var extra_base_type = document.getElementById("extra_base_type")
	extra_base_type.value = cur_frm.doc.body_fabric[0].extra_base_type
	var extra_base_nos = document.getElementById("extra_base_nos")
	extra_base_nos.value = cur_frm.doc.body_fabric[0].extra_base_nos
}

function set_body_fabric_values(frm) {
	var fabric_type = document.getElementById("fabric_type").value
	cur_frm.doc.body_fabric[0].fabric_type = fabric_type
	var fabric_gsm = document.getElementById("fabric_gsm").value
	cur_frm.doc.body_fabric[0].fabric_gsm = fabric_gsm
	var fabric_rf = document.getElementById("fabric_rf").value
	cur_frm.doc.body_fabric[0].fabric_rf = fabric_rf
	var fabric_coated = document.getElementById("fabric_coated").value
	cur_frm.doc.body_fabric[0].fabric_coated = fabric_coated
	var fabric_total = document.getElementById("fabric_total").value
	cur_frm.doc.body_fabric[0].fabric_total = fabric_total
	var fabric_color = document.getElementById("fabric_color").value
	cur_frm.doc.body_fabric[0].fabric_color = fabric_color

	var fabric_sp_type = document.getElementById("fabric_sp_type").value
	cur_frm.doc.body_fabric[0].fabric_sp_type = fabric_sp_type
	var fabric_sp_gsm = document.getElementById("fabric_sp_gsm").value
	cur_frm.doc.body_fabric[0].fabric_sp_gsm = fabric_sp_gsm
	var fabric_sp_rf = document.getElementById("fabric_sp_rf").value
	cur_frm.doc.body_fabric[0].fabric_sp_rf = fabric_sp_rf
	var fabric_sp_coated = document.getElementById("fabric_sp_coated").value
	cur_frm.doc.body_fabric[0].fabric_sp_coated = fabric_sp_coated
	var fabric_sp_total = document.getElementById("fabric_sp_total").value
	cur_frm.doc.body_fabric[0].fabric_sp_total = fabric_sp_total
	var fabric_sp_color = document.getElementById("fabric_sp_color").value
	cur_frm.doc.body_fabric[0].fabric_sp_color = fabric_sp_color

	var base_gsm__4p_type = document.getElementById("base_gsm__4p_type").value
	cur_frm.doc.body_fabric[0].base_gsm__4p_type = base_gsm__4p_type
	var base_gsm__4p_gsm = document.getElementById("base_gsm__4p_gsm").value
	cur_frm.doc.body_fabric[0].base_gsm__4p_gsm = base_gsm__4p_gsm
	var base_gsm__4p_rf = document.getElementById("base_gsm__4p_rf").value
	cur_frm.doc.body_fabric[0].base_gsm__4p_rf = base_gsm__4p_rf
	var base_gsm__4p_coated = document.getElementById("base_gsm__4p_coated").value
	cur_frm.doc.body_fabric[0].base_gsm__4p_coated = base_gsm__4p_coated
	var base_gsm__4p_total = document.getElementById("base_gsm__4p_total").value
	cur_frm.doc.body_fabric[0].base_gsm__4p_total = base_gsm__4p_total
	var base_gsm__4p_color = document.getElementById("base_gsm__4p_color").value
	cur_frm.doc.body_fabric[0].base_gsm__4p_color = base_gsm__4p_color

	var body_attachment_type = document.getElementById("body_attachment_type").value
	cur_frm.doc.body_fabric[0].body_attachment_type = body_attachment_type
	var body_attachment_gsm = document.getElementById("body_attachment_gsm").value
	cur_frm.doc.body_fabric[0].body_attachment_gsm = body_attachment_gsm
	var body_attachment_rf = document.getElementById("body_attachment_rf").value
	cur_frm.doc.body_fabric[0].body_attachment_rf = body_attachment_rf
	var body_attachment_coated = document.getElementById("body_attachment_coated").value
	cur_frm.doc.body_fabric[0].body_attachment_coated = body_attachment_coated
	var body_attachment_total = document.getElementById("body_attachment_total").value
	cur_frm.doc.body_fabric[0].body_attachment_total = body_attachment_total
	var body_attachment_color = document.getElementById("body_attachment_color").value
	cur_frm.doc.body_fabric[0].body_attachment_color = body_attachment_color

	var extra_base_type = document.getElementById("extra_base_type").value
	cur_frm.doc.body_fabric[0].extra_base_type = extra_base_type
	var extra_base_nos = document.getElementById("extra_base_nos").value
	cur_frm.doc.body_fabric[0].extra_base_nos = extra_base_nos
}

function get_webbing_add_ons_values() {
	var full_loop_type = document.getElementById("full_loop_type")
	full_loop_type.value = cur_frm.doc.webbing_add_ons[0].full_loop_type
	var full_loop_color = document.getElementById("full_loop_color")
	full_loop_color.value = cur_frm.doc.webbing_add_ons[0].full_loop_color
	var full_loop_size = document.getElementById("full_loop_size")
	full_loop_size.value = cur_frm.doc.webbing_add_ons[0].full_loop_size
	var full_loop_gsm = document.getElementById("full_loop_gsm")
	full_loop_gsm.value = cur_frm.doc.webbing_add_ons[0].full_loop_gsm

	var stevedor_type = document.getElementById("stevedor_type")
	stevedor_type.value = cur_frm.doc.webbing_add_ons[0].stevedor_type
	var top_band_color = document.getElementById("top_band_color")
	top_band_color.value = cur_frm.doc.webbing_add_ons[0].top_band_color
	var top_band_size = document.getElementById("top_band_size")
	top_band_size.value = cur_frm.doc.webbing_add_ons[0].top_band_size
	var top_band_gsm = document.getElementById("top_band_gsm")
	top_band_gsm.value = cur_frm.doc.webbing_add_ons[0].top_band_gsm

	var top_band_type = document.getElementById("top_band_type")
	top_band_type.value = cur_frm.doc.webbing_add_ons[0].top_band_type
	var stevedor_color = document.getElementById("stevedor_color")
	stevedor_color.value = cur_frm.doc.webbing_add_ons[0].stevedor_color
	var stevedor_size = document.getElementById("stevedor_size")
	stevedor_size.value = cur_frm.doc.webbing_add_ons[0].stevedor_size
	var stevedor_gsm = document.getElementById("stevedor_gsm")
	stevedor_gsm.value = cur_frm.doc.webbing_add_ons[0].stevedor_gsm

	var sleeve_type = document.getElementById("sleeve_type")
	sleeve_type.value = cur_frm.doc.webbing_add_ons[0].sleeve_type
	var sleeve_color = document.getElementById("sleeve_color")
	sleeve_color.value = cur_frm.doc.webbing_add_ons[0].sleeve_color
	var sleeve_size = document.getElementById("sleeve_size")
	sleeve_size.value = cur_frm.doc.webbing_add_ons[0].sleeve_size
	var sleeve_gsm = document.getElementById("sleeve_gsm")
	sleeve_gsm.value = cur_frm.doc.webbing_add_ons[0].sleeve_gsm


	var patch_type = document.getElementById("patch_type")
	patch_type.value = cur_frm.doc.webbing_add_ons[0].patch_type

	if (patch_type.value === "Felt Patch") {
		var felt_patch_type = document.getElementById("ft_type")
		felt_patch_type.value = cur_frm.doc.webbing_add_ons[0].felt_patch_type
		var felt_patch_color = document.getElementById("ft_color")
		felt_patch_color.value = cur_frm.doc.webbing_add_ons[0].felt_patch_color
		var felt_patch_size = document.getElementById("ft_size")
		felt_patch_size.value = cur_frm.doc.webbing_add_ons[0].felt_patch_size
		var felt_patch_gsm = document.getElementById("ft_gsm")
		felt_patch_gsm.value = cur_frm.doc.webbing_add_ons[0].felt_patch_gsm
	}
}

function set_webbing_add_ons_values(frm) {
	var full_loop_type = document.getElementById("full_loop_type").value
	cur_frm.doc.webbing_add_ons[0].full_loop_type = full_loop_type
	var full_loop_color = document.getElementById("full_loop_color").value
	cur_frm.doc.webbing_add_ons[0].full_loop_color = full_loop_color
	var full_loop_size = document.getElementById("full_loop_size").value
	cur_frm.doc.webbing_add_ons[0].full_loop_size = full_loop_size
	var full_loop_gsm = document.getElementById("full_loop_gsm").value
	cur_frm.doc.webbing_add_ons[0].full_loop_gsm = full_loop_gsm

	var stevedor_type = document.getElementById("stevedor_type").value
	cur_frm.doc.webbing_add_ons[0].stevedor_type = stevedor_type
	var top_band_color = document.getElementById("top_band_color").value
	cur_frm.doc.webbing_add_ons[0].top_band_color = top_band_color
	var top_band_size = document.getElementById("top_band_size").value
	cur_frm.doc.webbing_add_ons[0].top_band_size = top_band_size
	var top_band_gsm = document.getElementById("top_band_gsm").value
	cur_frm.doc.webbing_add_ons[0].top_band_gsm = top_band_gsm

	var top_band_type = document.getElementById("top_band_type").value
	cur_frm.doc.webbing_add_ons[0].top_band_type = top_band_type
	var stevedor_color = document.getElementById("stevedor_color").value
	cur_frm.doc.webbing_add_ons[0].stevedor_color = stevedor_color
	var stevedor_size = document.getElementById("stevedor_size").value
	cur_frm.doc.webbing_add_ons[0].stevedor_size = stevedor_size
	var stevedor_gsm = document.getElementById("stevedor_gsm").value
	cur_frm.doc.webbing_add_ons[0].stevedor_gsm = stevedor_gsm

	var sleeve_type = document.getElementById("sleeve_type").value
	cur_frm.doc.webbing_add_ons[0].sleeve_type = sleeve_type
	var sleeve_color = document.getElementById("sleeve_color").value
	cur_frm.doc.webbing_add_ons[0].sleeve_color = sleeve_color
	var sleeve_size = document.getElementById("sleeve_size").value
	cur_frm.doc.webbing_add_ons[0].sleeve_size = sleeve_size
	var sleeve_gsm = document.getElementById("sleeve_gsm").value
	cur_frm.doc.webbing_add_ons[0].sleeve_gsm = sleeve_gsm


	var patch_type = document.getElementById("patch_type").value
	cur_frm.doc.webbing_add_ons[0].patch_type = patch_type

	if (patch_type === "Felt Patch") {
		var felt_patch_type = document.getElementById("ft_type").value
		cur_frm.doc.webbing_add_ons[0].felt_patch_type = felt_patch_type
		var felt_patch_color = document.getElementById("ft_color").value
		cur_frm.doc.webbing_add_ons[0].felt_patch_color = felt_patch_color
		var felt_patch_size = document.getElementById("ft_size").value
		cur_frm.doc.webbing_add_ons[0].felt_patch_size = felt_patch_size
		var felt_patch_gsm = document.getElementById("ft_gsm").value
		cur_frm.doc.webbing_add_ons[0].felt_patch_gsm = felt_patch_gsm
	}
}

function get_linear_type_values() {
	var linear_type = document.getElementById("linear_type")
	linear_type.value = cur_frm.doc.linear_type[0].linear_type

	if (linear_type.value === "Normal") {
		var normal_nos = document.getElementById("lt_nos")
		normal_nos.value = cur_frm.doc.linear_type[0].normal_nos || ""
		var normal_yes_no = document.getElementById("lt_yes_no")
		normal_yes_no.value = cur_frm.doc.linear_type[0].normal_yes_no
		var normal_micron = document.getElementById("lt_micron")
		normal_micron.value = cur_frm.doc.linear_type[0].normal_micron
		var normal_excess_ht = document.getElementById("lt_excess_ht")
		normal_excess_ht.value = cur_frm.doc.linear_type[0].normal_excess_ht
		var normal_excess_wd = document.getElementById("lt_excess_wd")
		normal_excess_wd.value = cur_frm.doc.linear_type[0].normal_excess_wd
		var normal_gluing = document.getElementById("lt_gluing")
		normal_gluing.value = cur_frm.doc.linear_type[0].normal_gluing
		var normal_tabbing = document.getElementById("lt_tabbing")
		normal_tabbing.value = cur_frm.doc.linear_type[0].normal_tabbing
		var normal_tabbing_nos = document.getElementById("lt_tabbing_nos")
		normal_tabbing_nos.value = cur_frm.doc.linear_type[0].normal_tabbing_nos
		var normal_color = document.getElementById("lt_color")
		normal_color.value = cur_frm.doc.linear_type[0].normal_color
	}
}

function set_linear_type_values(frm) {
	var linear_type = document.getElementById("linear_type").value
	cur_frm.doc.linear_type[0].linear_type = linear_type

	if (linear_type === "Normal") {
		var normal_nos = document.getElementById("lt_nos").value
		cur_frm.doc.linear_type[0].normal_nos = normal_nos
		var normal_yes_no = document.getElementById("lt_yes_no").value
		cur_frm.doc.linear_type[0].normal_yes_no = normal_yes_no
		var normal_micron = document.getElementById("lt_micron").value
		cur_frm.doc.linear_type[0].normal_micron = normal_micron
		var normal_excess_ht = document.getElementById("lt_excess_ht").value
		cur_frm.doc.linear_type[0].normal_excess_ht = normal_excess_ht
		var normal_excess_wd = document.getElementById("lt_excess_wd").value
		cur_frm.doc.linear_type[0].normal_excess_wd = normal_excess_wd
		var normal_gluing = document.getElementById("lt_gluing").value
		cur_frm.doc.linear_type[0].normal_gluing = normal_gluing
		var normal_tabbing = document.getElementById("lt_tabbing").value
		cur_frm.doc.linear_type[0].normal_tabbing = normal_tabbing
		var normal_color = document.getElementById("lt_color").value
		cur_frm.doc.linear_type[0].normal_color = normal_color
		var normal_tabbing_nos = document.getElementById("lt_tabbing_nos").value
		cur_frm.doc.linear_type[0].normal_tabbing_nos = normal_tabbing_nos
	}
}

function get_tunnel_attachment_type_values() {
	var tunnel_attachment_type = document.getElementById("tunnel_attachment_type")
	tunnel_attachment_type.value = cur_frm.doc.tunnel_attachment_type[0].tunnel_attachment_type

	if (tunnel_attachment_type.value === "Baffle") {
		var gsm = document.getElementById("gsm")
		gsm.value = cur_frm.doc.tunnel_attachment_type[0].baffle_gsm
		var coated = document.getElementById("coated")
		coated.value = cur_frm.doc.tunnel_attachment_type[0].baffle_coated
		var width = document.getElementById("width")
		width.value = cur_frm.doc.tunnel_attachment_type[0].baffle_width
		var length = document.getElementById("length")
		length.value = cur_frm.doc.tunnel_attachment_type[0].baffle_length
		var color = document.getElementById("color")
		color.value = cur_frm.doc.tunnel_attachment_type[0].baffle_color
	}
	else if (tunnel_attachment_type.value === "Net Baffle") {
		var gsm = document.getElementById("gsm")
		gsm.value = cur_frm.doc.tunnel_attachment_type[0].net_baffle_gsm
		var coated = document.getElementById("coated")
		coated.value = cur_frm.doc.tunnel_attachment_type[0].net_baffle_coated
		var width = document.getElementById("width")
		width.value = cur_frm.doc.tunnel_attachment_type[0].net_baffle_width
		var length = document.getElementById("length")
		length.value = cur_frm.doc.tunnel_attachment_type[0].net_baffle_length
		var color = document.getElementById("color")
		color.value = cur_frm.doc.tunnel_attachment_type[0].net_baffle_color
	}
	else {
		var gsm = document.getElementById("gsm")
		gsm.value = cur_frm.doc.tunnel_attachment_type[0].na_gsm
		var coated = document.getElementById("coated")
		coated.value = cur_frm.doc.tunnel_attachment_type[0].na_coated
		var width = document.getElementById("width")
		width.value = cur_frm.doc.tunnel_attachment_type[0].na_width
		var length = document.getElementById("length")
		length.value = cur_frm.doc.tunnel_attachment_type[0].na_length
		var color = document.getElementById("color")
		color.value = cur_frm.doc.tunnel_attachment_type[0].na_color
	}

}

function set_tunnel_attachment_type_values(frm) {
	var tunnel_attachment_type = document.getElementById("tunnel_attachment_type").value
	cur_frm.doc.tunnel_attachment_type[0].tunnel_attachment_type = tunnel_attachment_type
	if (tunnel_attachment_type === "Baffle") {
		var gsm = document.getElementById("gsm").value
		cur_frm.doc.tunnel_attachment_type[0].baffle_gsm = gsm
		var coated = document.getElementById("coated").value
		cur_frm.doc.tunnel_attachment_type[0].baffle_coated = coated
		var width = document.getElementById("width").value
		cur_frm.doc.tunnel_attachment_type[0].baffle_width = width
		var length = document.getElementById("length").value
		cur_frm.doc.tunnel_attachment_type[0].baffle_length = length
		var color = document.getElementById("color").value
		cur_frm.doc.tunnel_attachment_type[0].baffle_color = color
	}
	else if (tunnel_attachment_type === "Net Baffle") {
		var gsm = document.getElementById("gsm").value
		cur_frm.doc.tunnel_attachment_type[0].net_baffle_gsm = gsm
		var coated = document.getElementById("coated").value
		cur_frm.doc.tunnel_attachment_type[0].net_baffle_coated = coated
		var width = document.getElementById("width").value
		cur_frm.doc.tunnel_attachment_type[0].net_baffle_width = width
		var length = document.getElementById("length").value
		cur_frm.doc.tunnel_attachment_type[0].net_baffle_length = length
		var color = document.getElementById("color").value
		cur_frm.doc.tunnel_attachment_type[0].net_baffle_color = color
	}
	else {
		var gsm = document.getElementById("gsm").value
		cur_frm.doc.tunnel_attachment_type[0].na_gsm = gsm
		var coated = document.getElementById("coated").value
		cur_frm.doc.tunnel_attachment_type[0].na_coated = coated
		var width = document.getElementById("width").value
		cur_frm.doc.tunnel_attachment_type[0].na_width = width
		var length = document.getElementById("length").value
		cur_frm.doc.tunnel_attachment_type[0].na_length = length
		var color = document.getElementById("color").value
		cur_frm.doc.tunnel_attachment_type[0].na_color = color
	}
}

function get_webing_type_values() {
	var pp_or_nylon = document.getElementById("pp_or_nylon")
	pp_or_nylon.value = cur_frm.doc.webbing_type[0].pp_or_nylon

	if (pp_or_nylon.value === "PP") {
		var pp_gsm = document.getElementById("pp_or_nylon_gsm")
		pp_gsm.value = cur_frm.doc.webbing_type[0].pp_gsm
		var pp_width = document.getElementById("pp_or_nylon_width")
		pp_width.value = cur_frm.doc.webbing_type[0].pp_width
		var pp_color = document.getElementById("pp_or_nylon_color")
		pp_color.value = cur_frm.doc.webbing_type[0].pp_color
	}
	else {
		var nylon_gsm = document.getElementById("pp_or_nylon_gsm")
		nylon_gsm.value = cur_frm.doc.webbing_type[0].nylon_gsm
		var nylon_width = document.getElementById("pp_or_nylon_width")
		nylon_width.value = cur_frm.doc.webbing_type[0].nylon_width
		var nylon_color = document.getElementById("pp_or_nylon_color")
		nylon_color.value = cur_frm.doc.webbing_type[0].nylon_color
	}
	var open_loop = document.getElementById("open_loop")
	open_loop.value = cur_frm.doc.webbing_type[0].open_loop
	var ol_short_leg = document.getElementById("ol_short_leg")
	ol_short_leg.value = cur_frm.doc.webbing_type[0].ol_short_leg
	var ol_long_leg = document.getElementById("ol_long_leg")
	ol_long_leg.value = cur_frm.doc.webbing_type[0].ol_long_leg

	var double_loop = document.getElementById("double_loop")
	double_loop.value = cur_frm.doc.webbing_type[0].double_loop
	var dl_short_leg = document.getElementById("dl_short_leg")
	dl_short_leg.value = cur_frm.doc.webbing_type[0].dl_short_leg
	var dl_long_leg = document.getElementById("dl_long_leg")
	dl_long_leg.value = cur_frm.doc.webbing_type[0].dl_long_leg
}

function set_webing_type_values(frm) {
	var pp_or_nylon = document.getElementById("pp_or_nylon").value || ""
	cur_frm.doc.webbing_type[0].pp_or_nylon = pp_or_nylon

	if (pp_or_nylon === "PP") {
		var pp_gsm = document.getElementById("pp_or_nylon_gsm").value
		cur_frm.doc.webbing_type[0].pp_gsm = pp_gsm
		var pp_width = document.getElementById("pp_or_nylon_width").value
		cur_frm.doc.webbing_type[0].pp_width = pp_width
		var pp_color = document.getElementById("pp_or_nylon_color").value
		cur_frm.doc.webbing_type[0].pp_color = pp_color
	}
	else {
		var nylon_gsm = document.getElementById("pp_or_nylon_gsm").value
		cur_frm.doc.webbing_type[0].nylon_gsm = nylon_gsm
		var nylon_width = document.getElementById("pp_or_nylon_width").value
		cur_frm.doc.webbing_type[0].nylon_width = nylon_width
		var nylon_color = document.getElementById("pp_or_nylon_color").value
		cur_frm.doc.webbing_type[0].nylon_color = nylon_color
	}
	var open_loop = document.getElementById("open_loop").value
	cur_frm.doc.webbing_type[0].open_loop = open_loop
	var ol_short_leg = document.getElementById("ol_short_leg").value
	cur_frm.doc.webbing_type[0].ol_short_leg = ol_short_leg
	var ol_long_leg = document.getElementById("ol_long_leg").value
	cur_frm.doc.webbing_type[0].ol_long_leg = ol_long_leg

	var double_loop = document.getElementById("double_loop").value
	cur_frm.doc.webbing_type[0].double_loop = double_loop
	var dl_short_leg = document.getElementById("dl_short_leg").value
	cur_frm.doc.webbing_type[0].dl_short_leg = dl_short_leg
	var dl_long_leg = document.getElementById("dl_long_leg").value
	cur_frm.doc.webbing_type[0].dl_long_leg = dl_long_leg
}

function get_bag_size_values() {
	var od_or_id = document.getElementById("od_or_id")
	od_or_id.value = cur_frm.doc.bag_size[0].od_or_id || "OD"

	if (od_or_id.value === "OD") {
		var od_layers = document.getElementById("od_or_id_layers")
		od_layers.value = cur_frm.doc.bag_size[0].od_layers
		var od_l = document.getElementById("od_or_id_l")
		od_l.value = cur_frm.doc.bag_size[0].od_l
		var od_wsp = document.getElementById("od_or_id_wsp")
		od_wsp.value = cur_frm.doc.bag_size[0].od_wsp
		var od_h = document.getElementById("od_or_id_h")
		od_h.value = cur_frm.doc.bag_size[0].od_h
	}
	else {
		var id_layers = document.getElementById("od_or_id_layers")
		id_layers.value = cur_frm.doc.bag_size[0].id_layers
		var id_l = document.getElementById("od_or_id_l")
		id_l.value = cur_frm.doc.bag_size[0].id_l
		var id_wsp = document.getElementById("od_or_id_wsp")
		id_wsp.value = cur_frm.doc.bag_size[0].id_wsp
		var id_h = document.getElementById("od_or_id_h")
		id_h.value = cur_frm.doc.bag_size[0].id_h
	}
	var extra_fold_l = document.getElementById("extra_fold_l")
	extra_fold_l.value = cur_frm.doc.bag_size[0].extra_fold_l
	var extra_fold_wsp = document.getElementById("extra_fold_wsp")
	extra_fold_wsp.value = cur_frm.doc.bag_size[0].extra_fold_wsp
	var extra_fold_h = document.getElementById("extra_fold_h")
	extra_fold_h.value = cur_frm.doc.bag_size[0].extra_fold_h

	var cross_corner_layers = document.getElementById("cross_corner_layers")
	cross_corner_layers.value = cur_frm.doc.bag_size[0].cross_corner_layers

	var butterfly_fold_layers = document.getElementById("butterfly_fold_layers")
	butterfly_fold_layers.value = cur_frm.doc.bag_size[0].butterfly_fold_layers
	var butterfly_fold_h = document.getElementById("butterfly_fold_h")
	butterfly_fold_h.value = cur_frm.doc.bag_size[0].butterfly_fold_h

	var nett_total_l = document.getElementById("nett_total_l")
	nett_total_l.value = cur_frm.doc.bag_size[0].nett_total_l
	var nett_total_w_sp = document.getElementById("nett_total_w_sp")
	nett_total_w_sp.value = cur_frm.doc.bag_size[0].nett_total_w_sp
	var nett_total_h = document.getElementById("nett_total_h")
	nett_total_h.value = cur_frm.doc.bag_size[0].nett_total_h

	var sf = document.getElementById("sf")
	sf.value = cur_frm.doc.bag_size[0].sf
	var swl = document.getElementById("swl")
	swl.value = cur_frm.doc.bag_size[0].swl || ""

}
function set_bag_size_values(frm) {
	var od_or_id = document.getElementById("od_or_id").value
	cur_frm.doc.bag_size[0].od_or_id = od_or_id
	if (od_or_id === "OD") {
		var od_layers = document.getElementById("od_or_id_layers").value
		var od_l = document.getElementById("od_or_id_l").value
		var od_wsp = document.getElementById("od_or_id_wsp").value
		var od_h = document.getElementById("od_or_id_h").value

		cur_frm.doc.bag_size[0].od_layers = od_layers
		frappe.model.set_value(cur_frm.doc.bag_size[0].doctype, cur_frm.doc.bag_size[0].name, "od_layers", od_layers)
		cur_frm.doc.bag_size[0].od_l = od_l
		cur_frm.doc.bag_size[0].od_wsp = od_wsp
		cur_frm.doc.bag_size[0].od_h = od_h
	}
	else {
		var id_layers = document.getElementById("od_or_id_layers").value
		var id_l = document.getElementById("od_or_id_l").value
		var id_wsp = document.getElementById("od_or_id_wsp").value
		var id_h = document.getElementById("od_or_id_h").value

		cur_frm.doc.bag_size[0].id_layers = id_layers
		cur_frm.doc.bag_size[0].id_l = id_l
		cur_frm.doc.bag_size[0].id_wsp = id_wsp
		cur_frm.doc.bag_size[0].id_h = id_h
	}
	var extra_fold_l = document.getElementById("extra_fold_l").value
	var extra_fold_wsp = document.getElementById("extra_fold_wsp").value
	var extra_fold_h = document.getElementById("extra_fold_h").value

	cur_frm.doc.bag_size[0].extra_fold_l = extra_fold_l
	cur_frm.doc.bag_size[0].extra_fold_wsp = extra_fold_wsp
	cur_frm.doc.bag_size[0].extra_fold_h = extra_fold_h

	var cross_corner_layers = document.getElementById("cross_corner_layers").value

	cur_frm.doc.bag_size[0].cross_corner_layers = cross_corner_layers

	var butterfly_fold_layers = document.getElementById("butterfly_fold_layers").value
	var butterfly_fold_h = document.getElementById("butterfly_fold_h").value

	cur_frm.doc.bag_size[0].butterfly_fold_layers = butterfly_fold_layers
	cur_frm.doc.bag_size[0].butterfly_fold_h = butterfly_fold_h

	var nett_total_l = document.getElementById("nett_total_l").value
	var nett_total_w_sp = document.getElementById("nett_total_w_sp").value
	var nett_total_h = document.getElementById("nett_total_h").value

	cur_frm.doc.bag_size[0].nett_total_l = nett_total_l
	cur_frm.doc.bag_size[0].nett_total_w_sp = nett_total_w_sp
	cur_frm.doc.bag_size[0].nett_total_h = nett_total_h

	var sf = document.getElementById("sf").value
	var swl = document.getElementById("swl").value

	cur_frm.doc.bag_size[0].sf = sf
	cur_frm.doc.bag_size[0].swl = swl
	cur_frm.refresh_fields("bag_size")
}

// function _getHtml() {
// 	let body = `
// 	<style>
// 		.no-border {
// 			border: none;
// 			outline: none;
// 		}
// 		.left-side {
// 			float: left;
// 			width: 50%;
// 		}
    
// 		.right-side {
// 			float: right;
// 			width: 50%;
// 		}
		
// 		@media (max-width: 200px) {
// 			.left-side, .right-side {
// 				float: none;
// 				width: 80%;
// 			}
// 		}
// 	</style>
	
// 	<div class= "left-side">
// 		${tab_bag_size()}
// 	</div>
// 	<div class= "left-side">
// 		<table width="85%" border="1" cellspacing="0" cellpadding="0">
// 			<tr>
// 				<td style="border:1px solid black;width:120px">Bag Wt: </td>
// 				<td style="border:1px solid black;width:30px">
// 					<input type="text" id= "bag_wt" style= "width: 65px">
// 				</td>
// 				<td style="border:1px solid black;width:160px;">No of bags: </td>
// 				<td style="border:1px solid black;width: 10px">
// 					<input type="number" min="0" step="1" id= "no_of_bags" style= "width: 100px" class= "no-border">
// 				</td>
// 				<td style="border:1px solid black;width:80px">Po No: </td>
// 				<td style="border:1px solid black;width:40px" colspan= 2>
// 					<input type="text" id= "po_no" class= "no-border" style= "width: 80px">
// 				</td>
// 				<td style="border:1px solid black;width:120px">Po Date: </td>
// 				<td style="border:1px solid black;width:40px" colspan= 2> 
// 					<input type="Date" id= "po_date" class= "no-border" style= "width: 110px">
// 				</td>
// 			</tr>
// 		</table>
// 	</div>
// 	<div class= "left-side">
// 		${tab_webbing_type()}
// 	</div>
// 	<div class= "left-side" style= "margin-top: 15px">
// 		${tab_tunnel_attachment_type()}
// 	</div>
// 	<div>
// 		${tab_webbing_add_ons()}
// 	</div>
// 	<div>
// 		${tab_linear_type()}
// 	</div>
// 	<div  class= "right-side" style= "margin-top: 15px" >
// 		${tab_accessories()}
// 	</div>
// 	<div>
// 		${tab_body_fabric()}
// 	</div>
// 	<div>
// 		${tab_extras_desc()}
// 	</div>
// 	<div>
// 		${tab_categories()}
// 	</div>
// 	<div>
// 		${tab_top_attachment_type()}
// 	</div>
// 	<div>
// 		${tab_bottom_attachment_type()}
// 	</div>
// 	<div>
// 		${tab_secondary_top()}
// 	</div>
// 	<div>
// 		${tab_secondary_bottom()}
// 	</div>
// 	<div>
// 		${left_attachment()}
// 	</div>
// 	<div>
// 		${right_attachment()}
// 	</div>
// 	`
// 	return body
// }

function tab_bag_size() {
	let bag_size = `
	<table style="margin-top:10px;" id="">
		<tr>
			<td style="border:1px solid black;width:120px">Eng No.</td>
			<td style="border:1px solid black;width:30px">
				<input type="text" id= "eng_no" class= "no-border" style= "width: 40px" value= '${cur_frm.doc.eng_no || ""}'>
			</td>
			<td style="border:1px solid black;width:50px">Name</td>
			<td style="border:1px solid black;" colspan=2>
				<input type="text" id= "eng_name" class= "no-border" style= "width: 115px" value= '${cur_frm.doc.eng_name || ""}'>
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">Bag</td>
			<td style="border:1px solid black;">Type</td>
			<td style="border:1px solid black;" colspan=3>
				<select id="bag_type" class= "no-border">
					<option value="Circular">Circular</option>
					<option value="U+2">U+2</option>
					<option value="4 Panel">4 Panel</option>
				</select>
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">Bag Size:</td>
			<td style="border:1px solid black;">Layers</td>
			<td style="border:1px solid black;">L</td>
			<td style="border:1px solid black;">W/SP</td>
			<td style="border:1px solid black;">H</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">
				<select id="od_or_id" class= "no-border">
					<option value="OD">OD</option>
					<option value="ID">ID</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "od_or_id_layers" style= "width: 50px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "od_or_id_l" style= "width: 50px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "od_or_id_wsp" style= "width: 57px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "od_or_id_h" style= "width: 58px">
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">Extra Fold - Bag Type:</td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;">14 Cms</td>
			<td style="border:1px solid black;">14 Cms</td>
			<td style="border:1px solid black;">14 Cms</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">Extra Fold</td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"><input type="number" min="0" step="1" id= "extra_fold_l" style= "width: 50px"></td>
			<td style="border:1px solid black;"><input type="number" min="0" step="1" id= "extra_fold_wsp" style= "width: 57px"></td>
			<td style="border:1px solid black;"><input type="number" min="0" step="1" id= "extra_fold_h" style= "width: 58px"></td>
		</tr>
		<tr>
			<td style="border:1px solid black;">Cross Corner</td>
			<td style="border:1px solid black;">
				<select id="cross_corner_layers" class= "no-border">
					<option value="Yes">Yes</option>
					<option value="No">NO</option>
				</select>
			</td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
		</tr>
		<tr>
			<td style="border:1px solid black;">Butterfly Fold</td>
			<td style="border:1px solid black;">
				<select id="butterfly_fold_layers" class= "no-border">
					<option value="Yes">Yes</option>
					<option value="No">NO</option>
				</select>
			</td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"><input type="number" min="0" step="1" id= "butterfly_fold_h" style= "width: 58px"></td>
		</tr>
		<tr>
			<td style="border:1px solid black;">Net Total</td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;" id= "nett_total_l" >103 Cms</td>
			<td style="border:1px solid black;" id= "nett_total_w_sp" >103 Cms</td>
			<td style="border:1px solid black;" id= "nett_total_h" >120 Cms</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">SF</td>
			<td style="border:1px solid black;">
				<select id="sf" class= "no-border">
					<option value="5:01">5:01</option>
				</select>
			</td>
			<td style="border:1px solid black;">SWL</td>
			<td style="border:1px solid black;">
				<input type="text" id= "swl" class= "no-border" style= "width: 58px">	
			</td>
			<td style="border:1px solid black;">2000</td>
		</tr>
	</table>
	`
	return bag_size
}

function right_attachment() {
	let attachment = `
	<div class= "col-xs-12" style="margin-top:10px;" id="" padding:0px">
		<div class= "col-xs-6" style= "float: left; padding:0px">
			<table style="margin-top:10px;" id="">
				<tr>
					<td style="border:1px solid black;" colspan= 2>Attachment - Addons</td>
					<td style="border:1px solid black;">Yes/No</td>
				</tr>
				<tr>
					<td style="border:1px solid black;" colspan= 2>Outer Tie</td>
					<td style="border:1px solid black;" colspan=2>
						<select id="bt_outer_tie" class= "no-border">
							<option value="Yes">Yes</option>
							<option value="No">No</option>				
						</select>
					</td>
				</tr>
				<tr>
					<td style="border:1px solid black;" colspan= 2>Inner Tie/DS</td>
					<td style="border:1px solid black;" colspan=2>
						<select id="bt_inner_tie_ds" class= "no-border">
							<option value="Yes">Yes</option>
							<option value="No">No</option>				
						</select>
					</td>
				</tr>
				<tr>
					<td style="border:1px solid black;" colspan= 2>Petal Closure(2)</td>
					<td style="border:1px solid black;" colspan=2>
						<select id="bt_petal_closure" class= "no-border">
							<option value="Yes">Yes</option>
							<option value="No">No</option>				
						</select>
					</td>
				</tr>
				<tr>
					<td style="border:1px solid black;" colspan= 2>Skirt Open Corner</td>
					<td style="border:1px solid black;" colspan=2>
						<select id="bt_skirt_open_corner" class= "no-border">
							<option value="Yes">Yes</option>
							<option value="No">No</option>				
						</select>
					</td>
				</tr>
			</table>
		</div>
		<div class= "col-xs-6" style= "float: left; padding:0px"> 
			<table style="margin-top:10px;" id="">
				<tr>
					<td style="border:1px solid black;" colspan= 2>Type</td>
					<td style="border:1px solid black;">Width</td>
					<td style="border:1px solid black;">GSM</td>
					<td style="border:1px solid black;">Color</td>
				</tr>
				<tr>
					<td style="border:1px solid black;" colspan= 2>Outer Tie</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "bt_outer_tie_width" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "bt_outer_tie_gsm" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<select id="bt_outer_tie_color" class= "no-border" colspan =2>
							<option value="White">White</option>
							<option value="Orange">Orange</option>
						</select>
					</td>
				</tr>
				
				<tr>
					<td style="border:1px solid black;" colspan= 2>Inner Tie/DS</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "bt_inner_tie_ds_width" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "bt_inner_tie_ds_gsm" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<select id="bt_inner_tie_ds_color" class= "no-border" colspan =2>
							<option value="White">White</option>
							<option value="Orange">Orange</option>z
						</select>
					</td>
				</tr>
				
				<tr>
					<td style="border:1px solid black;" colspan= 2>Petal Rope(2)</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "bt_petal_rope_width" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "bt_petal_rope_gsm" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<select id="bt_petal_rope_color" class= "no-border" colspan =2>
							<option value="White">White</option>
							<option value="Orange">Orange</option>
						</select>
					</td>
				</tr>
				
				<tr>
					<td style="border:1px solid black;" colspan= 2>Hose Pipe</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "bt_hose_pipe_width" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "bt_hose_pipe_gsm" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<select id="bt_hose_pipe_color" class= "no-border" colspan =2>
							<option value="White">White</option>
							<option value="Orange">Orange</option>
						</select>
					</td>
				</tr>
			</table>
		</div>
	</div>
	`
	return attachment

}

function left_attachment() {
	let attachment = `
	<div class= "col-xs-12" style="margin-top:10px;" id="" >
		<div class= "col-xs-6" style= "float: left; padding:0px">
			<table style="margin-top:10px;" id="">
				<tr>
					<td style="border:1px solid black;" colspan= 2>Attachment - Addons</td>
					<td style="border:1px solid black;">Yes/No</td>
				</tr>
				<tr>
					<td style="border:1px solid black;" colspan= 2>Outer Tie</td>
					<td style="border:1px solid black;" colspan=2>
						<select id="tp_outer_tie" class= "no-border">
							<option value="Yes">Yes</option>
							<option value="No">No</option>				
						</select>
					</td>
				</tr>
				<tr>
					<td style="border:1px solid black;" colspan= 2>Inner Tie/DS</td>
					<td style="border:1px solid black;" colspan=2>
						<select id="tp_inner_tie_ds" class= "no-border">
							<option value="Yes">Yes</option>
							<option value="No">No</option>				
						</select>
					</td>
				</tr>
				<tr>
					<td style="border:1px solid black;" colspan= 2>Petal Closure</td>
					<td style="border:1px solid black;" colspan=2>
						<select id="tp_petal_closure" class= "no-border">
							<option value="Yes">Yes</option>
							<option value="No">No</option>				
						</select>
					</td>
				</tr>
				<tr>
					<td style="border:1px solid black;" colspan= 2>Skirt Open Corner</td>
					<td style="border:1px solid black;" colspan=2>
						<select id="tp_skirt_open_corner" class= "no-border">
							<option value="Yes">Yes</option>
							<option value="No">No</option>				
						</select>
					</td>
				</tr>
			</table>
		</div>
		<div class= "col-xs-6" style= "float: left; padding:0px"> 
			<table  id="" style="margin-top:10px;">
				<tr>
					<td style="border:1px solid black;" colspan= 2>Type</td>
					<td style="border:1px solid black;">Width</td>
					<td style="border:1px solid black;">GSM</td>
					<td style="border:1px solid black;">Color</td>
				</tr>
				<tr>
					<td style="border:1px solid black;" colspan= 2>Outer Tie</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "tp_outer_tie_width" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "tp_outer_tie_gsm" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<select id="tp_outer_tie_color" class= "no-border" colspan =2>
							<option value="White">White</option>
							<option value="Orange">Orange</option>
						</select>
					</td>
				</tr>
				
				<tr>
					<td style="border:1px solid black;" colspan= 2>Inner Tie/DS</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "tp_inner_tie_ds_width" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "tp_inner_tie_ds_gsm" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<select id="tp_inner_tie_ds_color" class= "no-border" colspan =2>
							<option value="White">White</option>
							<option value="Orange">Orange</option>
						</select>
					</td>
				</tr>
				
				<tr>
					<td style="border:1px solid black;" colspan= 2>Petal Rope</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "tp_petal_rope_width" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "tp_petal_rope_gsm" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<select id="tp_petal_rope_color" class= "no-border" colspan =2>
							<option value="White">White</option>
							<option value="Orange">Orange</option>
						</select>
					</td>
				</tr>
				
				<tr>
					<td style="border:1px solid black;" colspan= 2>Hose Pipe</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "tp_hose_pipe_width" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<input type="number" min="0" step="1" id= "tp_hose_pipe_gsm" style= "width: 58px">
					</td>
					<td style="border:1px solid black;">
						<select id="tp_hose_pipe_color" class= "no-border" colspan =2>
							<option value="White">White</option>
							<option value="Orange">Orange</option>
						</select>
					</td>
				</tr>
			</table>
		</div>
	</div>
	`
	return attachment
}

function tab_secondary_bottom() {
	let secondary_bottom = `
	<table style="margin-top:10px;" id="">
		<tr>
			<td style="border:1px solid black;" colspan= 2>Secondary Bottom</td>
			<td style="border:1px solid black;">Yes/No</td>
			<td style="border:1px solid black;" colspan= 2>Type</td>
			<td style="border:1px solid black;">L</td>
			<td style="border:1px solid black;">W</td>
			<td style="border:1px solid black;">GSM</td>
			<td style="border:1px solid black;">Coated</td>
			<td style="border:1px solid black;">Total</td>
			<td style="border:1px solid black;" colspan= 2>color</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 2>Bottom Flap</td>
			<td style="border:1px solid black;">
				<select id="sb_bottom_flap" class= "no-border" colspan =2>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;" colspan=2>
				<select id="sb_bottom_flap_type" class= "no-border">
					<option value="PP - Flat">PP - Flat</option>
					<option value="PP - Circular">PP - Circular</option>
					<option value="Sulzer">Sulzer</option>
					<option value="Ventilated">Ventilated</option>
					<option value="Nett Fabric">Nett Fabric</option>				
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "sb_bottom_flap_l" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "sb_bottom_flap_w" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "sb_bottom_flap_gsm" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "sb_bottom_flap_coated" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "sb_bottom_flap_total" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<select id="sb_bottom_flap_color" class= "no-border" colspan =2>
					<option value="White">White</option>
					<option value="Orange">Orange</option>
				</select>
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 3>Extra</td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "sb_extra_l" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "sb_extra_w" style= "width: 58px">
			</td>	
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
		</tr>
	</table>
	`
	return secondary_bottom
}

function tab_secondary_top() {
	let secondary_top = `
	<table style="margin-top:10px;" id="">
		<tr>
			<td style="border:1px solid black;" colspan= 2>Secondary Top</td>
			<td style="border:1px solid black;">Yes/No</td>
			<td style="border:1px solid black;" colspan= 2>Type</td>
			<td style="border:1px solid black;">L</td>
			<td style="border:1px solid black;">W</td>
			<td style="border:1px solid black;">GSM</td>
			<td style="border:1px solid black;">Coated</td>
			<td style="border:1px solid black;">Total</td>
			<td style="border:1px solid black;" colspan= 2>color</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 2>Top Flap</td>
			<td style="border:1px solid black;">
				<select id="st_top_flap" class= "no-border" colspan =2>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;" colspan=2>
				<select id="st_top_flap_type" class= "no-border">
					<option value="PP - Flat">PP - Flat</option>
					<option value="PP - Circular">PP - Circular</option>
					<option value="Sulzer">Sulzer</option>
					<option value="Ventilated">Ventilated</option>
					<option value="Nett Fabric">Nett Fabric</option>				
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "st_top_flap_l" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "st_top_flap_w" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "st_top_flap_gsm" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "st_top_flap_coated" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "st_top_flap_total" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<select id="st_top_flap_color" class= "no-border" colspan =2>
					<option value="White">White</option>
					<option value="Orange">Orange</option>
				</select>
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 3>Extra</td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "st_extra_l" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "st_extra_w" style= "width: 58px">
			</td>	
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
		</tr>
	</table>
	`
	return secondary_top
}

function tab_bottom_attachment_type() {
	let bottom_attachment_type = `
	<table style="margin-top:10px;" id="">
		<tr>
			<td style="border:1px solid black;" colspan= 3>Bottom Attachment Type</td>
			<td style="border:1px solid black;" colspan= 2>Fab Type</td>
			<td style="border:1px solid black;">GSM</td>
			<td style="border:1px solid black;">Coated</td>
			<td style="border:1px solid black;">Total</td>
			<td style="border:1px solid black;">Dia</td>
			<td style="border:1px solid black;">HT 2</td>
			<td style="border:1px solid black;" colspan= 2>color</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 3>
				<select id="bottom_attachment_type" class= "no-border" colspan =2>
					<option value="Spout">Spout</option>
					<option value="Skirt">Skirt</option>
					<option value="NA">NA</option>
				</select>
			</td>
			<td style="border:1px solid black;" colspan=2>
				<select id="bt_fab_type" class= "no-border">
					<option value="PP - Flat">PP - Flat</option>
					<option value="PP - Circular">PP - Circular</option>
					<option value="Sulzer">Sulzer</option>
					<option value="Ventilated">Ventilated</option>
					<option value="Nett Fabric">Nett Fabric</option>				
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "bt_gsm" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "bt_coated" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "bt_total" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "bt_dia" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "bt_height" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<select id="bt_color" class= "no-border" colspan =2>
					<option value="White">White</option>
					<option value="Orange">Orange</option>
				</select>
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 3>Hemming</td>
			<td style="border:1px solid black;" colspan= 2>
				<select id="bt_hemming_fab_type" class= "no-border">
					<option value="Yes">Yes</option>
					<option value="No">No</option>			
				</select>
			</td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 3>bottom Panel</td>
			<td style="border:1px solid black;" colspan= 2>
				<select id="bt_bottom_panel_type" class= "no-border">
					<option value="PP - Flat">PP - Flat</option>
					<option value="PP - Circular">PP - Circular</option>
					<option value="Sulzer">Sulzer</option>
					<option value="Ventilated">Ventilated</option>
					<option value="Nett Fabric">Nett Fabric</option>				
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "bt_bottom_panel_gsm" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "bt_bottom_panel_coated" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "bt_bottom_panel_total" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "bt_bottom_panel_dia" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "bt_bottom_panel_height" style= "width: 58px">
			</td>
			<td style="border:1px solid black;"></td>
		</tr>
	</table>
	`
	return bottom_attachment_type
}

function tab_top_attachment_type() {
	let top_attachment_type = `
	<table style="margin-top:10px;" id="">
		<tr>
			<td style="border:1px solid black;" colspan= 3>Top Attachment Type</td>
			<td style="border:1px solid black;" colspan= 2>Fab Type</td>
			<td style="border:1px solid black;">GSM</td>
			<td style="border:1px solid black;">Coated</td>
			<td style="border:1px solid black;">Total</td>
			<td style="border:1px solid black;">Dia</td>
			<td style="border:1px solid black;">HT 1</td>
			<td style="border:1px solid black;" colspan= 2>color</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 3>
				<select id="top_attachment_type" class= "no-border" colspan =2>
					<option value="Spout">Spout</option>
					<option value="Skirt">Skirt</option>
					<option value="NA">NA</option>
				</select>
			</td>
			<td style="border:1px solid black;" colspan=2>
				<select id="tp_fab_type" class= "no-border">
					<option value="PP - Flat">PP - Flat</option>
					<option value="PP - Circular">PP - Circular</option>
					<option value="Sulzer">Sulzer</option>
					<option value="Ventilated">Ventilated</option>
					<option value="Nett Fabric">Nett Fabric</option>				
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "tp_gsm" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "tp_coated" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "tp_total" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "tp_dia" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "tp_height" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<select id="tp_color" class= "no-border" colspan =2>
					<option value="White">White</option>
					<option value="Orange">Orange</option>
				</select>
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 3>Hemming</td>
			<td style="border:1px solid black;" colspan= 2>
				<select id="tp_hemming_fab_type" class= "no-border">
					<option value="Yes">Yes</option>
					<option value="No">No</option>			
				</select>
			</td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 3>Top Panel if Spout</td>
			<td style="border:1px solid black;" colspan= 2>
				<select id="tp_bottom_panel_type" class= "no-border">
					<option value="PP - Flat">PP - Flat</option>
					<option value="PP - Circular">PP - Circular</option>
					<option value="Sulzer">Sulzer</option>
					<option value="Ventilated">Ventilated</option>
					<option value="Nett Fabric">Nett Fabric</option>				
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "tp_bottom_panel_gsm" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "tp_bottom_panel_coated" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "tp_bottom_panel_total" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "tp_bottom_panel_dia" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "tp_bottom_panel_height" style= "width: 58px">
			</td>
			<td style="border:1px solid black;"></td>
		</tr>
	</table>
	`
	return top_attachment_type
}

function tab_categories() {
	let categories = `
	<table style="margin-top:10px;" id="">
		<tr>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;">Body</td>
			<td style="border:1px solid black;">Baffle</td>
			<td style="border:1px solid black;">Att</td>
			<td style="border:1px solid black;">Nos</td>
			<td style="border:1px solid black;">GSM</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">Dust Proof</td>
			<td style="border:1px solid black;">
				<select id="dust_proof" class= "no-border">
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<select id="dust_proof_body" class= "no-border">
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<select id="dust_proof_baffle" class= "no-border">
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<select id="dust_proof_att" class= "no-border">
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "dust_proof_nos" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "dust_proof_gsm" style= "width: 58px">
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">Felt</td>
			<td style="border:1px solid black;">
				<select id="felt" class= "no-border">
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<select id="felt_body" class= "no-border">
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<select id="felt_baffle" class= "no-border">
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<select id="felt_att" class= "no-border">
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "felt_nos" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "felt_gsm" style= "width: 58px">
			</td>
		</tr>
	</table>
	`
	return categories
}

function tab_extras_desc() {
	let extras_desc = `
	<table style="margin-top:10px;" id="">
		<tr>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;">Denier</td>
			<td style="border:1px solid black;">Grams</td>
			<td style="border:1px solid black;">Grams</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">Yarn</td>
			<td style="border:1px solid black;">
				<input type="text" id= "yarn" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<select id="yarn_yes_no" class= "no-border" colspan =2>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<select id="yarn_denier" class= "no-border" colspan =2>
					<option value="5000">5000</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "yarn_grams1" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "yarn_grams2" class= "no-border" style= "width: 58px">
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">B Lock</td>
			<td style="border:1px solid black;">
				<select id="b_lock_yes_no" class= "no-border" colspan =2>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "b_lock" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;">
				<input type="text" id= "b_lock_grams1" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;"></td>
		</tr>
		<tr>
			<td style="border:1px solid black;">Desc</td>
			<td style="border:1px solid black;">No</td>
			<td style="border:1px solid black;">Width</td>
			<td style="border:1px solid black;">Gsm</td>
			<td style="border:1px solid black;">Cut Length</td>
			<td style="border:1px solid black;">Weight</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">
				<button>Extra 1</button>
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra1_no" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra1_width" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra1_gsm" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra1_cut_length" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra1_weight" class= "no-border" style= "width: 58px">
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">
				<button>Extra 2</button>
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra2_no" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra2_width" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra2_gsm" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra2_cut_length" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra2_weight" class= "no-border" style= "width: 58px">
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">
				<button>Extra 3</button>
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra3_no" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra3_width" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra3_gsm" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra3_cut_length" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "extra3_weight" class= "no-border" style= "width: 58px">
			</td>
		</tr>
	</table>
	`
	return extras_desc
}

function tab_body_fabric() {
	let body_fabric = `
	<table style="margin-top:10px;" id="">
		<tr>
			<td style="border:1px solid black;" colspan=2>Body Fabric</td>
			<td style="border:1px solid black;" colspan=2>Type</td>
			<td style="border:1px solid black;">GSM</td>
			<td style="border:1px solid black;">RF</td>
			<td style="border:1px solid black;">Coated</td>
			<td style="border:1px solid black;">Total</td>
			<td style="border:1px solid black;" colspan= 2>color</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 2>Fabric</td>
			<td style="border:1px solid black;" colspan=2>
				<select id="fabric_type" class= "no-border">
					<option value="PP Flat">PP Flat</option>
					<option value="PP Circular">PP Circular</option>
					<option value="Sulzer">Sulzer</option>
					<option value="Ventilated">Ventilated</option>
					<option value="Net Fabric">Net Fabric</option>				
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "fabric_gsm" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "fabric_rf" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "fabric_coated" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "fabric_total" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<select id="fabric_color" class= "no-border" colspan =2>
					<option value="White">White</option>
					<option value="Orange">Orange</option>
				</select>
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 2>Fabric Sp</td>
			<td style="border:1px solid black;" colspan=2>
				<select id="fabric_sp_type" class= "no-border">
					<option value="PP Flat">PP Flat</option>
					<option value="PP Circular">PP Circular</option>
					<option value="Sulzer">Sulzer</option>
					<option value="Ventilated">Ventilated</option>
					<option value="Net Fabric">Net Fabric</option>				
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "fabric_sp_gsm" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "fabric_sp_rf" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "fabric_sp_coated" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "fabric_sp_total" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<select id="fabric_sp_color" class= "no-border" colspan =2>
					<option value="White">White</option>
					<option value="Orange">Orange</option>
				</select>
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 2>Base GSM (4 Panel)</td>
			<td style="border:1px solid black;" colspan=2>
				<select id="base_gsm__4p_type" class= "no-border">
					<option value="PP Flat">PP Flat</option>
					<option value="PP Circular">PP Circular</option>
					<option value="Sulzer">Sulzer</option>
					<option value="Ventilated">Ventilated</option>
					<option value="Net Fabric">Net Fabric</option>				
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "base_gsm__4p_gsm" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "base_gsm__4p_rf" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "base_gsm__4p_coated" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "base_gsm__4p_total" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<select id="base_gsm__4p_color" class= "no-border" colspan =2>
					<option value="White">White</option>
					<option value="Orange">Orange</option>
				</select>
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 2>Body Attachment</td>
			<td style="border:1px solid black;" colspan=2>
				<select id="body_attachment_type" class= "no-border" colspan =2>
					<option value="Baffle">Baffle</option>
					<option value="Net Baffle">Net Baffle</option>
					<option value="NA">NA</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "body_attachment_gsm" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "body_attachment_rf" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "body_attachment_coated" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "body_attachment_total" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<select id="body_attachment_color" class= "no-border" colspan =2>
					<option value="White">White</option>
					<option value="Orange">Orange</option>
				</select>
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan= 2>Extra Base</td>
			<td style="border:1px solid black;" colspan=2 id= "extra_base_type">Nos</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "extra_base_nos" style= "width: 58px">
			</td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
		</tr>
	</table>
	`
	return body_fabric
}

function tab_accessories() {
	let accessories = `
	<table style="margin-top:10px;" id="" >
		<tr>
			<td style="border:1px solid black;">Accessories</td>
			<td style="border:1px solid black;">Body1</td>
			<td style="border:1px solid black;">Body2/SP</td>
			<td style="border:1px solid black;">Color</td>
			<td style="border:1px solid black;">Others</td>
			<td style="border:1px solid black;">Others</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">Printing</td>
			<td style="border:1px solid black;">
				<select id="body1_printing" class= "no-border" colspan =2>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "body2_sp_printing" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "color_printing" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "others1_printing" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "others2_printing" class= "no-border" style= "width: 58px">
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">Doc Pocket</td>
			<td style="border:1px solid black;">
				<select id="body1_doc_pocket" class= "no-border" colspan =2>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "body2_sp_doc_pocket" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "color_doc_pocket" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "others1_doc_pocket" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "others2_doc_pocket" style= "width: 58px">
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;">Label</td>
			<td style="border:1px solid black;">
				<select id="body1_label" class= "no-border" colspan =2>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "body2_sp_label" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "color_label" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "others1_label" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<input type="number" min="0" step="1" id= "others2_label" style= "width: 58px">
			</td>
		</tr>
	</table>
	`
	return accessories
}

function tab_linear_type() {
	let linear_type = `
	<table style="margin-top:10px;" id="" >
		<tr>
			<td style="border:1px solid black;" colspan =2>Linear Type</td>
			<td style="border:1px solid black;">Nos</td>
			<td style="border:1px solid black;">Yes/No</td>
			<td style="border:1px solid black;">Micron</td>
			<td style="border:1px solid black;">Excess Ht.</td>
			<td style="border:1px solid black;">Excess wd</td>
			<td style="border:1px solid black;">Gluing</td>
			<td style="border:1px solid black;">Tabbing</td>
			<td style="border:1px solid black;" colspan =2>color</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan =2>
				<select id="linear_type" class= "no-border" >
					<option value="Normal">Normal</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<input type="text" id= "lt_nos" class= "no-border" style= "width: 58px">
			</td>
			<td style="border:1px solid black;">
				<select id="lt_yes_no" class= "no-border">
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;"> <input type="number" min="0" step="1" id= "lt_micron" style= "width: 58px"> </td>
			<td style="border:1px solid black;"><input type="number" min="0" step="1" id= "lt_excess_ht" style= "width: 70px"> </td>
			<td style="border:1px solid black;"><input type="number" min="0" step="1" id= "lt_excess_wd" style= "width: 70px"> </td>
			<td style="border:1px solid black;">
				<select id="lt_gluing" class= "no-border"  >
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;">
				<select id="lt_tabbing" class= "no-border"  >
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;" colspan =2>
				<select id="lt_color" class= "no-border" >
					<option value="Natural">Natural</option>
				</select>
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan =2></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"></td>
			<td style="border:1px solid black;"><input type="number" min="0" step="1" id= "lt_tabbing_nos" style= "width: 58px"> </td>
			<td style="border:1px solid black;" colspan =2></td>
		</tr>
	</table>
	
	`

	return linear_type
}

function tab_tunnel_attachment_type() {
	let tunnel_attachment_type = `
	<table style="margin-top:10px;" id="" >
		<tr>
			<td style="border:1px solid black;" colspan =3>Tunnel Attachment Type</td>
			<td style="border:1px solid black;">GSM</td>
			<td style="border:1px solid black;">Coated</td>
			<td style="border:1px solid black;">Width</td>
			<td style="border:1px solid black;">Length</td>
			<td style="border:1px solid black;">Color</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan =3>
				<select id="tunnel_attachment_type" class= "no-border" >
					<option value="Baffle">Baffle</option>
					<option value="Net Baffle">Net Baffle</option>
					<option value="NA">NA</option>
					
				</select>
			</td>
			<td style="border:1px solid black;"> <input type="number" min="0" step="1" id= "gsm" style= "width: 58px"> </td>
			<td style="border:1px solid black;"><input type="number" min="0" step="1" id= "coated" style= "width: 58px"> </td>
			<td style="border:1px solid black;"><input type="number" min="0" step="1" id= "width" style= "width: 58px"> </td>
			<td style="border:1px solid black;"><input type="number" min="0" step="1" id= "length" style= "width: 58px"> </td>
			<td style="border:1px solid black;"><input type="number" min="0" step="1" id= "color" style= "width: 58px"> </td>
		</tr>
	</table>
	`
	return tunnel_attachment_type
}

function tab_webbing_add_ons() {
	let webbing_add_ons = `
	<table style="margin-top:10px;" id="" >
		<tr>
			<td style="border:1px solid black;" colspan =2>Webbing Add Ons</td>
			<td style="border:1px solid black;" colspan =2>Full Loop</td>
			<td style="border:1px solid black;" colspan =2>Top Band</td>
			<td style="border:1px solid black;" colspan =2>Stevedor</td>
			<td style="border:1px solid black;" colspan =2>Sleeve</td>
			<td style="border:1px solid black;" colspan =2>
				<select id="patch_type" class= "no-border">
					<option value="Felt Patch">Felt Patch</option>
				</select>
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan =2>Type</td>
			<td style="border:1px solid black;" colspan =2>
				<select id="full_loop_type" class= "no-border" colspan =2>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;" colspan =2>
				<select id="top_band_type" class= "no-border" colspan =2>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;" colspan =2>
				<select id="stevedor_type" class= "no-border" colspan =2>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;" colspan =2>
				<select id="sleeve_type" class= "no-border" colspan =2>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
			<td style="border:1px solid black;" colspan =2>
				<select id="ft_type" class= "no-border" colspan =2>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan =2>Color</td>
			<td style="border:1px solid black;" colspan =2>
				<select id="full_loop_color" class= "no-border" colspan =2>
					<option value="White">White</option>
				</select>
			</td>
			<td style="border:1px solid black;" colspan =2>
				<select id="top_band_color" class= "no-border" colspan =2>
					<option value="White">White</option>
				</select>
			</td>
			<td style="border:1px solid black;" colspan =2>
				<select id="stevedor_color" class= "no-border" colspan =2>
					<option value="White">White</option>
				</select>
			</td>
			<td style="border:1px solid black;" colspan =2>
				<select id="sleeve_color" class= "no-border" colspan =2>
					<option value="White">White</option>
				</select>
			</td>
			<td style="border:1px solid black;" colspan =2>
				<select id="ft_color" class= "no-border" colspan =2>
					<option value="White">White</option>
				</select>
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan =2>Size</td>
			<td style="border:1px solid black;" colspan =2>
				<input type="number" min="0" step="1" id= "full_loop_size" style= "width: 58px">
			</td>
			<td style="border:1px solid black;" colspan =2>
				<input type="number" min="0" step="1" id= "top_band_size" style= "width: 58px">
			</td>
			<td style="border:1px solid black;" colspan =2>
				<input type="number" min="0" step="1" id= "stevedor_size" style= "width: 58px">
			</td>
			<td style="border:1px solid black;" colspan =2>
				<input type="number" min="0" step="1" id= "sleeve_size" style= "width: 58px">
			</td>
			<td style="border:1px solid black;" colspan =2>
				<input type="number" min="0" step="1" id= "ft_size" style= "width: 58px">
			</td>
		</tr>
		<tr>
			<td style="border:1px solid black;" colspan =2>GSM</td>
			<td style="border:1px solid black;" colspan =2>
				<input type="number" min="0" step="1" id= "full_loop_gsm" style= "width: 58px">
			</td>
			<td style="border:1px solid black;" colspan =2>
				<input type="number" min="0" step="1" id= "top_band_gsm" style= "width: 58px">
			</td>
			<td style="border:1px solid black;" colspan =2>
				<input type="number" min="0" step="1" id= "stevedor_gsm" style= "width: 58px">
			</td>
			<td style="border:1px solid black;" colspan =2>
				<input type="number" min="0" step="1" id= "sleeve_gsm" style= "width: 58px">
			</td>
			<td style="border:1px solid black;" colspan =2>
				<input type="number" min="0" step="1" id= "ft_gsm" style= "width: 58px">
			</td>
		</tr>
	</table>
	`
	return webbing_add_ons
}

function tab_webbing_type() {
	let webbing_type = `
		<table style="margin-top:10px;" id="" width="85%">
			<tr>
				<td style="border:1px solid black;" colspan =2>Webbing Type: </td>
				<td style="border:1px solid black">GSM</td>
				<td style="border:1px solid black">Width </td>
				<td style="border:1px solid black" colspan = 2>Color: </td>
				<td style="border:1px solid black" colspan= 7 ></td >
			</tr >
			<tr>
				<td style="border:1px solid black;" colspan= 2>
					<select id="pp_or_nylon" class= "no-border">
						<option value="PP">PP</option>
						<option value="Nylon">Nylon</option>
					</select>
				</td>
				<td style="border:1px solid black;">
					<input type="number" min="0" step="1" id= "pp_or_nylon_gsm" style= "width: 50px">
				</td>
				<td style="border:1px solid black;" colspan=2 >
					<input type="number" min="0" step="1" id= "pp_or_nylon_width" style= "width: 50px" class= "no-border">
				</td>
				<td style="border:1px solid black;">
					<select id="pp_or_nylon_color" class= "no-border">
						<option value="White">White</option>
					</select>
				</td>
				<td style="border:1px solid black" colspan= 7 ></td >
			</tr >
			<tr>
				<td style="border:1px solid black;width:120px" colspan =2>Open loop: </td>
				<td style="border:1px solid black;width:30px">
					<input type="number" min="0" step="1" id= "open_loop" style= "width: 50px">
				</td>
				<td style="border:1px solid black;width:50px"></td>
				<td style="border:1px solid black;width:50px" colspan= 2 ></td >
				<td style="border:1px solid black;width:50px"></td>
				<td style="border:1px solid black;width:120px" colspan = 2 > Double loop: </td >
				<td style="border:1px solid black;width:30px">
					<input type="number" min="0" step="1" id= "double_loop" style= "width: 50px">
				</td>
				<td style="border:1px solid black" colspan = 2 ></td >
				<td style="border:1px solid black"></td>
			</tr >
			<tr>
				<td style="border:1px solid black" colspan = 2>Short leg: </td>
				<td style="border:1px solid black;width:30px">
					<input type="number" min="0" step="1" id= "ol_short_leg" style= "width: 50px">
				</td>
				<td style="border:1px solid black;width:50px"></td>
				<td style="border:1px solid black;width:120px" colspan= 2 > long leg: </td >
				<td style="border:1px solid black;width:30px">
					<input type="number" min="0" step="1" id= "ol_long_leg" style= "width: 50px">
				</td>
				<td style="border:1px solid black" colspan= 2 > Short leg: </td >
				<td style="border:1px solid black;width:30px">
					<input type="number" min="0" step="1" id= "dl_short_leg" style= "width: 50px">
				</td>
				<td style="border:1px solid black" colspan= 2 > long leg: </td >
				<td style="border:1px solid black">
				<input type="number" min="0" step="1" id="dl_long_leg" style="width: 50px">
				</td>
			</tr >
	</table >`

	return webbing_type
}

function getHtml() {
	let body = `
	<style>
		.left-side{
			float: left;
		}
	
		// @media (max-width: 100px) {
		// 	.left-side, .right-side {
		// 		float: none;
		// 	}
		// }
	</style>
	<div class= "col-xs-12">
		<div class= "left-side" width= "100%">
			${tab_bag_size()}
			${tab_linear_type()}
			${tab_body_fabric()}
			${tab_categories()}
			${tab_top_attachment_type()}
			${tab_secondary_top()}
			${left_attachment()}
			
		</div>
		<div class= "left-side" width= "100%" style= "margin-left:20px">
			<table style="margin-top:10px;" id="" width = 85%>
				<tr>
					<td style="border:1px solid black;width:120px">Bag Wt: </td>
					<td style="border:1px solid black;width:30px">
						<input type="text" id= "bag_wt" style= "width: 65px">
					</td>
					<td style="border:1px solid black;width:160px;">No of bags: </td>
					<td style="border:1px solid black;width: 10px">
						<input type="number" min="0" step="1" id= "no_of_bags" style= "width: 100px" class= "no-border">
					</td>
					<td style="border:1px solid black;width:80px">Po No: </td>
					<td style="border:1px solid black;width:40px" colspan= 2>
						<input type="text" id= "po_no" class= "no-border" style= "width: 80px">
					</td>
					<td style="border:1px solid black;width:120px">Po Date: </td>
					<td style="border:1px solid black;width:40px" colspan= 2> 
						<input type="Date" id= "po_date" class= "no-border" style= "width: 110px">
					</td>
				</tr>
			</table>
			${tab_webbing_type()}
			${tab_tunnel_attachment_type()}
			${tab_webbing_add_ons()}
			${tab_accessories()}
			${tab_extras_desc()}
			${tab_bottom_attachment_type()}
			${tab_secondary_bottom()}
			${right_attachment()}
		</div>
	</div>
	`
	return body
}

function changeBody(frm) {
	let div = document.createElement("div");
	div.style.width = "100%"
	div.style.height = "140vh"
	div.style.zIndex = "1022"
	div.style.background = "#eaf5ee"
	div.style.padding = "5px"
	div.style.borderRadius = "10px"
	document.getElementsByClassName('form-layout')[0].id = cur_page.page.page.wrapper[0].id + "mainlayout"
	document.getElementsByClassName('form-layout')[0].innerHTML = ""
	let c = document.getElementsByClassName('col-lg-2')[0].style.display = "none"
	let cmb = document.getElementsByClassName('comment-box')[0].style.display = "none"
	let emb = document.getElementsByClassName('new-timeline')[0].style.display = "none"


	document.getElementsByClassName('form-layout')[0]?.appendChild(div)
	div.innerHTML = getHtml();
}


