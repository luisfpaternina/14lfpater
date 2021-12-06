{
    'name': "POS - Cliente Tipo de Responsabilidad AFIP - Odoo Argentina",

    'summary': """
        Adds Identification type field and AFIP Responsability type field to pos customer view.
    """,

    'description': """
        Adds Identification type field and AFIP Responsability type field to pos customer view.
    """,

    'author': "Pronexo",
    'website': "https://www.pronexo.com",

    'category': 'Sales/Point of Sale',
    'version': '14.0.1.3',
    'license': 'OPL-1',
    'price': 0.00,
    'currency': 'USD',
    
    'depends': ['point_of_sale', 'l10n_latam_base','contacts'],

    'data': [
        'templates/point_of_sale_assets.xml',
    ],
    
    "qweb": [
        "static/src/xml/Screens/ClientLine.xml",
        "static/src/xml/Screens/ClientListScreen.xml",
        "static/src/xml/Screens/ClientDetailsEdit.xml",
    ],
    'images': ['static/description/banner.png'],
    'installable': True,
    'auto_install': False,
}
