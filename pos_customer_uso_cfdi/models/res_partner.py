# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
from odoo import api, fields, models, _
from odoo.exceptions import UserError


class ResPartner(models.Model):
    _inherit = 'res.partner'

    @api.model
    def create_from_ui(self,partner):
        print(partner)
        res = super(ResPartner, self).create_from_ui(partner)
        return res