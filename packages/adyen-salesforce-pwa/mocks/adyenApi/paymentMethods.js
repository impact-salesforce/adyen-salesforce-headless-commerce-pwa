import {http, HttpResponse} from 'msw'
import {ADYEN_API_BASEPATH} from './constants'

export const paymentMethodsHandlers = [
    http.post(`${ADYEN_API_BASEPATH}/paymentMethods`, ({request}) => {
        return HttpResponse.json(paymentMethodsResponse)
    })
]
const paymentMethodsResponse = {
    paymentMethods: [
        {
            details: [
                {
                    details: [
                        {
                            key: 'ownerName',
                            type: 'text'
                        },
                        {
                            key: 'bankLocationId',
                            type: 'text'
                        },
                        {
                            key: 'bankAccountNumber',
                            type: 'text'
                        }
                    ],
                    key: 'bankAccount',
                    type: 'bankAccount'
                }
            ],
            name: 'ACH Direct Debit',
            type: 'ach'
        },
        {
            name: 'Adyen Voucher',
            type: 'adyen_test_voucher'
        },
        {
            details: [
                {
                    details: [
                        {
                            key: 'firstName',
                            type: 'text'
                        },
                        {
                            key: 'lastName',
                            type: 'text'
                        },
                        {
                            items: [
                                {
                                    id: 'M',
                                    name: 'male'
                                },
                                {
                                    id: 'F',
                                    name: 'female'
                                }
                            ],
                            key: 'gender',
                            type: 'radio'
                        },
                        {
                            key: 'dateOfBirth',
                            type: 'date'
                        },
                        {
                            key: 'telephoneNumber',
                            type: 'tel'
                        },
                        {
                            key: 'shopperEmail',
                            type: 'emailAddress'
                        }
                    ],
                    key: 'personalDetails',
                    type: 'fieldSet'
                },
                {
                    details: [
                        {
                            key: 'street',
                            type: 'text'
                        },
                        {
                            key: 'houseNumberOrName',
                            type: 'text'
                        },
                        {
                            key: 'city',
                            type: 'text'
                        },
                        {
                            key: 'postalCode',
                            type: 'text'
                        },
                        {
                            key: 'stateOrProvince',
                            optional: true,
                            type: 'text'
                        },
                        {
                            items: [
                                {
                                    id: 'NL',
                                    name: 'Netherlands'
                                },
                                {
                                    id: 'BE',
                                    name: 'Belgium'
                                }
                            ],
                            key: 'country',
                            type: 'select'
                        }
                    ],
                    key: 'billingAddress',
                    type: 'address'
                },
                {
                    key: 'separateDeliveryAddress',
                    optional: true,
                    type: 'boolean',
                    value: 'false'
                },
                {
                    details: [
                        {
                            key: 'street',
                            type: 'text'
                        },
                        {
                            key: 'houseNumberOrName',
                            type: 'text'
                        },
                        {
                            key: 'city',
                            type: 'text'
                        },
                        {
                            key: 'postalCode',
                            type: 'text'
                        },
                        {
                            key: 'stateOrProvince',
                            optional: true,
                            type: 'text'
                        },
                        {
                            items: [
                                {
                                    id: 'NL',
                                    name: 'Netherlands'
                                },
                                {
                                    id: 'BE',
                                    name: 'Belgium'
                                }
                            ],
                            key: 'country',
                            type: 'select'
                        }
                    ],
                    key: 'deliveryAddress',
                    optional: true,
                    type: 'address'
                }
            ],
            name: 'AfterPay Invoice',
            type: 'afterpay_default'
        },
        {
            name: 'AfterPay DirectDebit',
            type: 'afterpay_directdebit'
        },
        {
            name: 'Afterpay',
            type: 'afterpaytouch'
        },
        {
            details: [
                {
                    key: 'encryptedCardNumber',
                    type: 'cardToken'
                },
                {
                    key: 'encryptedSecurityCode',
                    type: 'cardToken'
                },
                {
                    key: 'encryptedExpiryMonth',
                    type: 'cardToken'
                },
                {
                    key: 'encryptedExpiryYear',
                    type: 'cardToken'
                },
                {
                    key: 'holderName',
                    optional: true,
                    type: 'text'
                }
            ],
            name: 'Cards',
            type: 'scheme'
        },
        {
            name: 'AliPay',
            type: 'alipay'
        },
        {
            name: 'AliPay HK',
            type: 'alipay_hk'
        },
        {
            name: 'AliPay',
            type: 'alipay_wap'
        },
        {
            details: [
                {
                    key: 'additionalData.androidpay.token',
                    type: 'androidPayToken'
                }
            ],
            name: 'Android Pay',
            type: 'androidpay'
        },
        {
            details: [
                {
                    key: 'additionalData.applepay.token',
                    type: 'applePayToken'
                }
            ],
            name: 'Apple Pay',
            type: 'applepay'
        },
        {
            name: 'Credit Card via AsiaPay',
            type: 'asiapay'
        },
        {
            name: 'China UnionPay',
            type: 'asiapay_unionpay'
        },
        {
            name: 'Baby Gift Card',
            type: 'babygiftcard'
        },
        {
            name: 'Baloto',
            type: 'baloto'
        },
        {
            name: 'BancNet',
            type: 'bancnet'
        },
        {
            name: 'Bank Transfer (BG)',
            type: 'bankTransfer_BG'
        },
        {
            name: 'Bank Transfer (CH)',
            type: 'bankTransfer_CH'
        },
        {
            name: 'Bank Transfer (DE)',
            type: 'bankTransfer_DE'
        },
        {
            name: 'Bank Transfer (FI)',
            type: 'bankTransfer_FI'
        },
        {
            name: 'Bank Transfer (GB)',
            type: 'bankTransfer_GB'
        },
        {
            name: 'Bank Transfer (HU)',
            type: 'bankTransfer_HU'
        },
        {
            name: 'SEPA Bank Transfer',
            type: 'bankTransfer_IBAN'
        },
        {
            name: 'Bank Transfer (IE)',
            type: 'bankTransfer_IE'
        },
        {
            name: 'Electronic Bank Transfer (MX)',
            type: 'bankTransfer_MX_linked'
        },
        {
            name: 'Bank Transfer (MX)',
            type: 'bankTransfer_MX_offline'
        },
        {
            name: 'Bank Transfer (NL)',
            type: 'bankTransfer_NL'
        },
        {
            name: 'Bank Transfer (PL)',
            type: 'bankTransfer_PL'
        },
        {
            name: 'Bank Transfer (SE)',
            type: 'bankTransfer_SE'
        },
        {
            name: 'Bank Transfer (US)',
            type: 'bankTransfer_US'
        },
        {
            name: 'Payconiq by Bancontact',
            type: 'bcmc_mobile'
        },
        {
            name: 'Bijenkorf Cadeaucard',
            type: 'bijcadeaucard'
        },
        {
            name: '99Bill',
            type: 'bill99'
        },
        {
            details: [
                {
                    items: [
                        {
                            id: 'AUB_DIRECT',
                            name: 'AU Small Finance Bank'
                        },
                        {
                            id: 'ALB_DIRECT',
                            name: 'Allahabad Bank '
                        },
                        {
                            id: 'APG_DIRECT',
                            name: 'Andhra Pragathi Grameena Bank'
                        },
                        {
                            id: 'BDN_DIRECT',
                            name: 'Bandhan bank'
                        },
                        {
                            id: 'BBK_DIRECT',
                            name: 'Bank of Bahrain and Kuwait'
                        },
                        {
                            id: 'BBR_DIRECT',
                            name: 'Bank of Baroda - Retail Banking'
                        },
                        {
                            id: 'BCB_DIRECT',
                            name: 'Bassien Catholic Co-Operative Bank '
                        },
                        {
                            id: 'CNB_DIRECT',
                            name: 'Canara Bank'
                        },
                        {
                            id: 'SYD_DIRECT',
                            name: 'Canara Bank (e-Syndicate)'
                        },
                        {
                            id: 'CSB_DIRECT',
                            name: 'Catholic Syrian Bank'
                        },
                        {
                            id: 'CBI_DIRECT',
                            name: 'Central Bank of India'
                        },
                        {
                            id: 'CUB_DIRECT',
                            name: 'City Union Bank'
                        },
                        {
                            id: 'COB_DIRECT',
                            name: 'Cosmos Bank'
                        },
                        {
                            id: 'DEN_DIRECT',
                            name: 'Dena Bank'
                        },
                        {
                            id: 'DBK_DIRECT',
                            name: 'Deutsche Bank'
                        },
                        {
                            id: 'DCB_DIRECT',
                            name: 'Development Credit Bank'
                        },
                        {
                            id: 'DLB_DIRECT',
                            name: 'Dhanlakshmi Bank - Retail Net Banking'
                        },
                        {
                            id: 'ESF_DIRECT',
                            name: 'ESAF Small Finance Bank'
                        },
                        {
                            id: 'EQB_DIRECT',
                            name: 'Equitas Small Finance Bank'
                        },
                        {
                            id: 'FBK_DIRECT',
                            name: 'Federal Bank'
                        },
                        {
                            id: 'FNC_DIRECT',
                            name: 'Fincare Bank'
                        },
                        {
                            id: 'HDF_DIRECT',
                            name: 'HDFC Bank'
                        },
                        {
                            id: 'ICI_DIRECT',
                            name: 'ICICI Bank '
                        },
                        {
                            id: 'IDB_DIRECT',
                            name: 'IDBI Bank - Retail Net Banking'
                        },
                        {
                            id: 'IDN_DIRECT',
                            name: 'IDFC FIRST Bank'
                        },
                        {
                            id: 'INB_DIRECT',
                            name: 'Indian Bank'
                        },
                        {
                            id: 'IOB_DIRECT',
                            name: 'Indian Overseas Bank'
                        },
                        {
                            id: 'IDS_DIRECT',
                            name: 'IndusInd Bank'
                        },
                        {
                            id: 'JKB_DIRECT',
                            name: 'Jammu & Kashmir Bank'
                        },
                        {
                            id: 'JNB_DIRECT',
                            name: 'Jana Small Finance Bank'
                        },
                        {
                            id: 'JSB_DIRECT',
                            name: 'Janata Sahakari Bank Ltd Pune'
                        },
                        {
                            id: 'KJB_DIRECT',
                            name: 'Kalyan Janata Sahakari Bank'
                        },
                        {
                            id: 'KBL_DIRECT',
                            name: 'Karnataka Bank Ltd'
                        },
                        {
                            id: 'KVB_DIRECT',
                            name: 'Karur Vysya Bank'
                        },
                        {
                            id: '162_DIRECT',
                            name: 'Kotak Bank'
                        },
                        {
                            id: 'LVR_DIRECT',
                            name: 'Laxmi Vilas Bank - Retail'
                        },
                        {
                            id: 'NKB_DIRECT',
                            name: 'NKGSB Co-op Bank'
                        },
                        {
                            id: 'NEB_DIRECT',
                            name: 'North East Small Finance Bank'
                        },
                        {
                            id: 'OBC_DIRECT',
                            name: 'PNB (Erstwhile-Oriental Bank of Commerce)'
                        },
                        {
                            id: 'UNI_DIRECT',
                            name: 'PNB (Erstwhile-United Bank of India)'
                        },
                        {
                            id: 'PMC_DIRECT',
                            name: 'Punjab & Maharastra Co-op Bank'
                        },
                        {
                            id: 'PSB_DIRECT',
                            name: 'Punjab & Sind Bank'
                        },
                        {
                            id: 'CPN_DIRECT',
                            name: 'Punjab National Bank - Corporate '
                        },
                        {
                            id: 'PNB_DIRECT',
                            name: 'Punjab National Bank - Retail Banking'
                        },
                        {
                            id: 'RBL_DIRECT',
                            name: 'RBL Bank Limited'
                        },
                        {
                            id: 'SWB_DIRECT',
                            name: 'Saraswat Bank'
                        },
                        {
                            id: 'SHB_DIRECT',
                            name: 'Shivalik Mercantile Cooperative Bank Ltd'
                        },
                        {
                            id: 'SIB_DIRECT',
                            name: 'South Indian Bank'
                        },
                        {
                            id: 'SCB_DIRECT',
                            name: 'Standard Chartered Bank'
                        },
                        {
                            id: 'SBI_DIRECT',
                            name: 'State Bank of India'
                        },
                        {
                            id: 'SRB_DIRECT',
                            name: 'Suryoday Small Finance Bank'
                        },
                        {
                            id: 'TJB_DIRECT',
                            name: 'TJSB Bank'
                        },
                        {
                            id: 'TNC_DIRECT',
                            name: 'Tamil Nadu State Co-operative Bank'
                        },
                        {
                            id: 'TMB_DIRECT',
                            name: 'Tamilnad Mercantile Bank Ltd'
                        },
                        {
                            id: 'TBB_DIRECT',
                            name: 'Thane Bharat Sahakari Bank Ltd'
                        },
                        {
                            id: 'MSB_DIRECT',
                            name: 'The Mehsana Urban Co Op Bank Ltd'
                        },
                        {
                            id: 'UCO_DIRECT',
                            name: 'UCO Bank'
                        },
                        {
                            id: 'UBI_DIRECT',
                            name: 'Union Bank of India'
                        },
                        {
                            id: 'ADB_DIRECT',
                            name: 'Union Bank of India (Erstwhile Andhra Bank)'
                        },
                        {
                            id: 'CRP_DIRECT',
                            name: 'Union Bank of India (Erstwhile Corporation Bank)'
                        },
                        {
                            id: 'VRB_DIRECT',
                            name: 'Varachha Co-operative Bank Limited'
                        },
                        {
                            id: 'VJB_DIRECT',
                            name: 'Vijaya Bank'
                        },
                        {
                            id: 'YBK_DIRECT',
                            name: 'Yes Bank'
                        },
                        {
                            id: 'ZOB_DIRECT',
                            name: 'Zoroastrian Co-operative Bank Limited'
                        },
                        {
                            id: 'DBS_DIRECT',
                            name: 'digibank by DBS'
                        }
                    ],
                    key: 'issuer',
                    type: 'select'
                }
            ],
            name: 'Online Banking India',
            type: 'billdesk_online'
        },
        {
            name: 'UPI',
            type: 'billdesk_upi'
        },
        {
            details: [
                {
                    items: [
                        {
                            id: 'DCW_DIRECT',
                            name: 'DCB Cippy'
                        },
                        {
                            id: 'ICC_DIRECT',
                            name: 'ICC Cash Card'
                        },
                        {
                            id: 'OXY_DIRECT',
                            name: 'Oxigen Wallet'
                        },
                        {
                            id: 'PCH_DIRECT',
                            name: 'Pay World Money'
                        }
                    ],
                    key: 'issuer',
                    type: 'select'
                }
            ],
            name: 'Wallets India',
            type: 'billdesk_wallet'
        },
        {
            name: 'Blik',
            type: 'blik'
        },
        {
            name: 'Bloemen Giftcard',
            type: 'bloemengiftcard'
        },
        {
            name: 'Boekenbon Giftcard',
            type: 'boekenbon'
        },
        {
            name: 'Boleto',
            type: 'boleto'
        },
        {
            name: 'Boleto Bancario',
            type: 'boletobancario_santander'
        },
        {
            name: 'Bradesco',
            type: 'bradesco'
        },
        {
            name: 'Cash-Ticket',
            type: 'cashticket'
        },
        {
            name: 'CashU',
            type: 'cashu'
        },
        {
            name: 'CCAvenue',
            type: 'ccavenue'
        },
        {
            name: 'Mula Checkout',
            type: 'cellulant'
        },
        {
            name: 'Chasin Giftcard',
            type: 'chasingiftcard'
        },
        {
            name: 'Clearpay',
            type: 'clearpay'
        },
        {
            name: 'ClickandBuy',
            type: 'clickandbuy'
        },
        {
            name: 'Paiement en 3 fois par Cartes Bancaires',
            type: 'cofinoga_3xcb'
        },
        {
            name: 'Costes Giftcard',
            type: 'costesgiftcard'
        },
        {
            name: 'custom_settlement',
            type: 'custom_settlement'
        },
        {
            name: 'DANA',
            type: 'dana'
        },
        {
            name: 'DineroMail',
            type: 'dineromail'
        },
        {
            name: 'Online bank transfer.',
            type: 'directEbanking'
        },
        {
            name: 'Direct Debit Brazil - Banco do Brazil',
            type: 'directdebit_BR_bancodobrasil'
        },
        {
            name: 'Direct Debit Brazil - Bradesco',
            type: 'directdebit_BR_bradesco'
        },
        {
            name: 'Direct Debit Brazil - Caixa Economica Federal',
            type: 'directdebit_BR_caixa'
        },
        {
            name: 'Direct Debit Brazil - HSBC',
            type: 'directdebit_BR_hsbc'
        },
        {
            name: 'Direct Debit Brazil - Itau',
            type: 'directdebit_BR_itau'
        },
        {
            name: 'Direct Debit Brazil - Santander',
            type: 'directdebit_BR_santander'
        },
        {
            name: 'BACS Direct Debit',
            type: 'directdebit_GB'
        },
        {
            details: [
                {
                    key: 'shopperEmail',
                    type: 'emailAddress'
                },
                {
                    key: 'firstName',
                    type: 'text'
                },
                {
                    key: 'lastName',
                    type: 'text'
                },
                {
                    key: 'infix',
                    optional: true,
                    type: 'text'
                }
            ],
            name: 'Alfamart',
            type: 'doku_alfamart'
        },
        {
            details: [
                {
                    key: 'shopperEmail',
                    type: 'emailAddress'
                },
                {
                    key: 'firstName',
                    type: 'text'
                },
                {
                    key: 'lastName',
                    type: 'text'
                },
                {
                    key: 'infix',
                    optional: true,
                    type: 'text'
                }
            ],
            name: 'BCA Bank Transfer',
            type: 'doku_bca_va'
        },
        {
            details: [
                {
                    key: 'shopperEmail',
                    type: 'emailAddress'
                },
                {
                    key: 'firstName',
                    type: 'text'
                },
                {
                    key: 'lastName',
                    type: 'text'
                },
                {
                    key: 'infix',
                    optional: true,
                    type: 'text'
                }
            ],
            name: 'BNI VA',
            type: 'doku_bni_va'
        },
        {
            details: [
                {
                    key: 'shopperEmail',
                    type: 'emailAddress'
                },
                {
                    key: 'firstName',
                    type: 'text'
                },
                {
                    key: 'lastName',
                    type: 'text'
                },
                {
                    key: 'infix',
                    optional: true,
                    type: 'text'
                }
            ],
            name: 'BRI VA',
            type: 'doku_bri_va'
        },
        {
            details: [
                {
                    key: 'shopperEmail',
                    type: 'emailAddress'
                },
                {
                    key: 'firstName',
                    type: 'text'
                },
                {
                    key: 'lastName',
                    type: 'text'
                },
                {
                    key: 'infix',
                    optional: true,
                    type: 'text'
                }
            ],
            name: 'CIMB VA',
            type: 'doku_cimb_va'
        },
        {
            details: [
                {
                    key: 'shopperEmail',
                    type: 'emailAddress'
                },
                {
                    key: 'firstName',
                    type: 'text'
                },
                {
                    key: 'lastName',
                    type: 'text'
                },
                {
                    key: 'infix',
                    optional: true,
                    type: 'text'
                }
            ],
            name: 'Danamon VA',
            type: 'doku_danamon_va'
        },
        {
            details: [
                {
                    key: 'shopperEmail',
                    type: 'emailAddress'
                },
                {
                    key: 'firstName',
                    type: 'text'
                },
                {
                    key: 'lastName',
                    type: 'text'
                },
                {
                    key: 'infix',
                    optional: true,
                    type: 'text'
                }
            ],
            name: 'Indomaret',
            type: 'doku_indomaret'
        },
        {
            details: [
                {
                    key: 'shopperEmail',
                    type: 'emailAddress'
                },
                {
                    key: 'firstName',
                    type: 'text'
                },
                {
                    key: 'lastName',
                    type: 'text'
                },
                {
                    key: 'infix',
                    optional: true,
                    type: 'text'
                }
            ],
            name: 'Mandiri VA',
            type: 'doku_mandiri_va'
        },
        {
            details: [
                {
                    key: 'ovoId',
                    type: 'text'
                }
            ],
            name: 'OVO',
            type: 'doku_ovo'
        },
        {
            details: [
                {
                    key: 'shopperEmail',
                    type: 'emailAddress'
                },
                {
                    key: 'firstName',
                    type: 'text'
                },
                {
                    key: 'lastName',
                    type: 'text'
                },
                {
                    key: 'infix',
                    optional: true,
                    type: 'text'
                }
            ],
            name: 'Bank Transfer',
            type: 'doku_permata_lite_atm'
        },
        {
            details: [
                {
                    key: 'shopperEmail',
                    type: 'emailAddress'
                },
                {
                    key: 'firstName',
                    type: 'text'
                },
                {
                    key: 'lastName',
                    type: 'text'
                },
                {
                    key: 'infix',
                    optional: true,
                    type: 'text'
                }
            ],
            name: 'DOKU wallet',
            type: 'doku_wallet'
        },
        {
            details: [
                {
                    items: [
                        {
                            id: '66',
                            name: 'Bank Nowy BFG S.A.'
                        },
                        {
                            id: '92',
                            name: 'Bank Spółdzielczy w Brodnicy'
                        },
                        {
                            id: '11',
                            name: 'Bank transfer / postal'
                        },
                        {
                            id: '74',
                            name: 'Banki Spółdzielcze'
                        },
                        {
                            id: '73',
                            name: 'BLIK'
                        },
                        {
                            id: '90',
                            name: 'BNP Paribas - płacę z Pl@net'
                        },
                        {
                            id: '59',
                            name: 'CinkciarzPAY'
                        },
                        {
                            id: '87',
                            name: 'Credit Agricole PBL'
                        },
                        {
                            id: '83',
                            name: 'EnveloBank'
                        },
                        {
                            id: '76',
                            name: 'Getin Bank PBL'
                        },
                        {
                            id: '81',
                            name: 'Idea Cloud'
                        },
                        {
                            id: '7',
                            name: 'ING Corporate customers'
                        },
                        {
                            id: '93',
                            name: 'Kasa Stefczyka'
                        },
                        {
                            id: '44',
                            name: 'Millennium - Płatności Internetowe'
                        },
                        {
                            id: '10',
                            name: 'Millennium Corporate customers'
                        },
                        {
                            id: '68',
                            name: 'mRaty'
                        },
                        {
                            id: '1',
                            name: 'mTransfer'
                        },
                        {
                            id: '91',
                            name: 'Nest Bank'
                        },
                        {
                            id: '80',
                            name: 'Noble Pay'
                        },
                        {
                            id: '50',
                            name: 'Pay Way Toyota Bank'
                        },
                        {
                            id: '45',
                            name: 'Pay with Alior Bank'
                        },
                        {
                            id: '36',
                            name: 'Pekao24Przelew'
                        },
                        {
                            id: '70',
                            name: 'Pocztowy24'
                        },
                        {
                            id: '6',
                            name: 'Przelew24'
                        },
                        {
                            id: '46',
                            name: 'Płacę z Citi Handlowy'
                        },
                        {
                            id: '38',
                            name: 'Płacę z ING'
                        },
                        {
                            id: '2',
                            name: 'Płacę z Inteligo'
                        },
                        {
                            id: '4',
                            name: 'Płacę z iPKO'
                        },
                        {
                            id: '75',
                            name: 'Płacę z Plus Bank'
                        },
                        {
                            id: '51',
                            name: 'Płać z BOŚ'
                        },
                        {
                            id: '55',
                            name: 'Raty z Alior Bankiem PLN'
                        },
                        {
                            id: '89',
                            name: 'Santander'
                        },
                        {
                            id: '52',
                            name: 'SkyCash'
                        }
                    ],
                    key: 'issuer',
                    type: 'select'
                }
            ],
            name: 'Local Polish Payment Methods',
            type: 'dotpay'
        },
        {
            name: 'Dragonpay Prepaid Credits',
            type: 'dragonpay_credits'
        },
        {
            name: 'Online Banking',
            type: 'dragonpay_ebanking'
        },
        {
            name: 'GCash',
            type: 'dragonpay_gcash'
        },
        {
            name: 'Over The Counter Banks',
            type: 'dragonpay_otc_banking'
        },
        {
            name: 'OTC non-Bank via Dragonpay',
            type: 'dragonpay_otc_non_banking'
        },
        {
            name: 'Convenience Stores',
            type: 'dragonpay_otc_philippines'
        },
        {
            name: '7/11',
            type: 'dragonpay_seveneleven'
        },
        {
            name: 'eagleeye_voucher',
            type: 'eagleeye_voucher'
        },
        {
            name: 'Finnish E-Banking',
            type: 'ebanking_FI'
        },
        {
            name: 'Pay-easy ATM',
            type: 'econtext_atm'
        },
        {
            name: 'Online Banking',
            type: 'econtext_online'
        },
        {
            name: '7-Eleven',
            type: 'econtext_seven_eleven'
        },
        {
            name: 'Convenience Stores',
            type: 'econtext_stores'
        },
        {
            name: 'eft_directdebit_CA',
            type: 'eft_directdebit_CA'
        },
        {
            name: 'Lastschrift (ELV)',
            type: 'elv'
        },
        {
            details: [
                {
                    items: [
                        {
                            id: '231',
                            name: 'POP Pankki'
                        },
                        {
                            id: '551',
                            name: 'Komerční banka'
                        },
                        {
                            id: '232',
                            name: 'Aktia'
                        },
                        {
                            id: '552',
                            name: 'Raiffeisen'
                        },
                        {
                            id: '233',
                            name: 'Säästöpankki'
                        },
                        {
                            id: '750',
                            name: 'Swedbank'
                        },
                        {
                            id: '211',
                            name: 'Nordea'
                        },
                        {
                            id: '553',
                            name: 'ČSOB'
                        },
                        {
                            id: '234',
                            name: 'S-Pankki'
                        },
                        {
                            id: '751',
                            name: 'SEB'
                        },
                        {
                            id: '554',
                            name: 'Moneta'
                        },
                        {
                            id: '235',
                            name: 'OmaSP'
                        },
                        {
                            id: '752',
                            name: 'Nordea'
                        },
                        {
                            id: '213',
                            name: 'Op-Pohjola'
                        },
                        {
                            id: '555',
                            name: 'UniCredit'
                        },
                        {
                            id: '753',
                            name: 'LHV'
                        },
                        {
                            id: '556',
                            name: 'Fio'
                        },
                        {
                            id: '557',
                            name: 'mBank'
                        },
                        {
                            id: '216',
                            name: 'Handelsbanken'
                        },
                        {
                            id: '558',
                            name: 'Air Bank'
                        },
                        {
                            id: '260',
                            name: 'Länsförsäkringar'
                        },
                        {
                            id: '240',
                            name: 'BankDeposit'
                        },
                        {
                            id: '265',
                            name: 'Sparbanken'
                        },
                        {
                            id: '640',
                            name: 'BankDeposit'
                        },
                        {
                            id: '200',
                            name: 'Ålandsbanken'
                        },
                        {
                            id: '940',
                            name: 'Swedbank'
                        },
                        {
                            id: '500',
                            name: 'Česká spořitelna'
                        },
                        {
                            id: '720',
                            name: 'Swedbank'
                        },
                        {
                            id: '941',
                            name: 'SEB'
                        },
                        {
                            id: '204',
                            name: 'Danske Bank'
                        },
                        {
                            id: '721',
                            name: 'SEB'
                        },
                        {
                            id: '942',
                            name: 'Citadele'
                        },
                        {
                            id: '205',
                            name: 'Handelsbanken'
                        },
                        {
                            id: '722',
                            name: 'DNB'
                        },
                        {
                            id: '943',
                            name: 'DNB'
                        },
                        {
                            id: '206',
                            name: 'Nordea'
                        },
                        {
                            id: '723',
                            name: 'Šiaulių bankas'
                        },
                        {
                            id: '207',
                            name: 'SEB'
                        },
                        {
                            id: '724',
                            name: 'Nordea'
                        },
                        {
                            id: '505',
                            name: 'Komerční banka'
                        },
                        {
                            id: '208',
                            name: 'Skandiabanken'
                        },
                        {
                            id: '209',
                            name: 'Swedbank'
                        }
                    ],
                    key: 'issuer',
                    type: 'select'
                }
            ],
            name: 'Bank Payment',
            type: 'entercash'
        },
        {
            name: 'Nationale Entertainment Card',
            type: 'entertainmentcard'
        },
        {
            details: [
                {
                    items: [
                        {
                            id: 'd5d5b133-1c0d-4c08-b2be-3c9b116dc326',
                            name: 'Dolomitenbank'
                        },
                        {
                            id: 'ee9fc487-ebe0-486c-8101-17dce5141a67',
                            name: 'Raiffeissen Bankengruppe'
                        },
                        {
                            id: '6765e225-a0dc-4481-9666-e26303d4f221',
                            name: 'Hypo Tirol Bank AG'
                        },
                        {
                            id: '8b0bfeea-fbb0-4337-b3a1-0e25c0f060fc',
                            name: 'Sparda Bank Wien'
                        },
                        {
                            id: '1190c4d1-b37a-487e-9355-e0a067f54a9f',
                            name: 'Schoellerbank AG'
                        },
                        {
                            id: 'e2e97aaa-de4c-4e18-9431-d99790773433',
                            name: 'Volksbank Gruppe'
                        },
                        {
                            id: 'bb7d223a-17d5-48af-a6ef-8a2bf5a4e5d9',
                            name: 'Immo-Bank'
                        },
                        {
                            id: 'e6819e7a-f663-414b-92ec-cf7c82d2f4e5',
                            name: 'Bank Austria'
                        },
                        {
                            id: 'eff103e6-843d-48b7-a6e6-fbd88f511b11',
                            name: 'Easybank AG'
                        },
                        {
                            id: '25942cc9-617d-42a1-89ba-d1ab5a05770a',
                            name: 'VR-BankBraunau'
                        },
                        {
                            id: '4a0a975b-0594-4b40-9068-39f77b3a91f9',
                            name: 'Volkskreditbank'
                        },
                        {
                            id: '3fdc41fc-3d3d-4ee3-a1fe-cd79cfd58ea3',
                            name: 'Erste Bank und Sparkassen'
                        },
                        {
                            id: 'ba7199cc-f057-42f2-9856-2378abf21638',
                            name: 'BAWAG P.S.K. Gruppe'
                        }
                    ],
                    key: 'issuer',
                    type: 'select'
                }
            ],
            name: 'EPS',
            type: 'eps'
        },
        {
            name: 'Expert Cadeaukaart',
            type: 'expertgiftcard'
        },
        {
            details: [
                {
                    details: [
                        {
                            key: 'firstName',
                            type: 'text'
                        },
                        {
                            key: 'lastName',
                            type: 'text'
                        },
                        {
                            items: [
                                {
                                    id: 'M',
                                    name: 'male'
                                },
                                {
                                    id: 'F',
                                    name: 'female'
                                }
                            ],
                            key: 'gender',
                            type: 'radio'
                        },
                        {
                            key: 'telephoneNumber',
                            type: 'tel'
                        },
                        {
                            key: 'shopperEmail',
                            type: 'emailAddress'
                        }
                    ],
                    key: 'personalDetails',
                    type: 'fieldSet'
                },
                {
                    details: [
                        {
                            key: 'street',
                            type: 'text'
                        },
                        {
                            key: 'houseNumberOrName',
                            type: 'text'
                        },
                        {
                            key: 'city',
                            type: 'text'
                        },
                        {
                            key: 'postalCode',
                            type: 'text'
                        },
                        {
                            key: 'stateOrProvince',
                            optional: true,
                            type: 'text'
                        },
                        {
                            items: [
                                {
                                    id: 'FR',
                                    name: 'France'
                                },
                                {
                                    id: 'ES',
                                    name: 'Spain'
                                }
                            ],
                            key: 'country',
                            type: 'select'
                        }
                    ],
                    key: 'billingAddress',
                    type: 'address'
                },
                {
                    key: 'separateDeliveryAddress',
                    optional: true,
                    type: 'boolean',
                    value: 'false'
                },
                {
                    details: [
                        {
                            key: 'street',
                            type: 'text'
                        },
                        {
                            key: 'houseNumberOrName',
                            type: 'text'
                        },
                        {
                            key: 'city',
                            type: 'text'
                        },
                        {
                            key: 'postalCode',
                            type: 'text'
                        },
                        {
                            key: 'stateOrProvince',
                            optional: true,
                            type: 'text'
                        },
                        {
                            items: [
                                {
                                    id: 'FR',
                                    name: 'France'
                                },
                                {
                                    id: 'ES',
                                    name: 'Spain'
                                }
                            ],
                            key: 'country',
                            type: 'select'
                        }
                    ],
                    key: 'deliveryAddress',
                    optional: true,
                    type: 'address'
                }
            ],
            name: '3x Oney',
            type: 'facilypay_3x'
        },
        {
            details: [
                {
                    details: [
                        {
                            key: 'firstName',
                            type: 'text'
                        },
                        {
                            key: 'lastName',
                            type: 'text'
                        },
                        {
                            items: [
                                {
                                    id: 'M',
                                    name: 'male'
                                },
                                {
                                    id: 'F',
                                    name: 'female'
                                }
                            ],
                            key: 'gender',
                            type: 'radio'
                        },
                        {
                            key: 'telephoneNumber',
                            type: 'tel'
                        },
                        {
                            key: 'shopperEmail',
                            type: 'emailAddress'
                        }
                    ],
                    key: 'personalDetails',
                    type: 'fieldSet'
                },
                {
                    details: [
                        {
                            key: 'street',
                            type: 'text'
                        },
                        {
                            key: 'houseNumberOrName',
                            type: 'text'
                        },
                        {
                            key: 'city',
                            type: 'text'
                        },
                        {
                            key: 'postalCode',
                            type: 'text'
                        },
                        {
                            key: 'stateOrProvince',
                            optional: true,
                            type: 'text'
                        },
                        {
                            items: [
                                {
                                    id: 'FR',
                                    name: 'France'
                                },
                                {
                                    id: 'ES',
                                    name: 'Spain'
                                }
                            ],
                            key: 'country',
                            type: 'select'
                        }
                    ],
                    key: 'billingAddress',
                    type: 'address'
                },
                {
                    key: 'separateDeliveryAddress',
                    optional: true,
                    type: 'boolean',
                    value: 'false'
                },
                {
                    details: [
                        {
                            key: 'street',
                            type: 'text'
                        },
                        {
                            key: 'houseNumberOrName',
                            type: 'text'
                        },
                        {
                            key: 'city',
                            type: 'text'
                        },
                        {
                            key: 'postalCode',
                            type: 'text'
                        },
                        {
                            key: 'stateOrProvince',
                            optional: true,
                            type: 'text'
                        },
                        {
                            items: [
                                {
                                    id: 'FR',
                                    name: 'France'
                                },
                                {
                                    id: 'ES',
                                    name: 'Spain'
                                }
                            ],
                            key: 'country',
                            type: 'select'
                        }
                    ],
                    key: 'deliveryAddress',
                    optional: true,
                    type: 'address'
                }
            ],
            name: '4x Oney',
            type: 'facilypay_4x'
        },
        {
            name: 'Fashioncheque',
            type: 'fashioncheque'
        },
        {
            details: [
                {
                    key: 'shopper.firstName',
                    type: 'text'
                },
                {
                    key: 'shopper.lastName',
                    type: 'text'
                },
                {
                    key: 'shopper.gender',
                    type: 'text'
                },
                {
                    key: 'shopperEmail',
                    type: 'emailAddress'
                },
                {
                    key: 'telephoneNumber',
                    type: 'tel'
                },
                {
                    key: 'countryCode',
                    type: 'text'
                }
            ],
            name: 'Fawry',
            type: 'fawry'
        },
        {
            name: 'FijnCadeau',
            type: 'fijncadeau'
        },
        {
            name: 'Fleurop Bloemenbon',
            type: 'fleuropbloemenbon'
        },
        {
            name: 'Fonq Giftcard',
            type: 'fonqgiftcard'
        },
        {
            name: 'Gall & Gall',
            type: 'gallgall'
        },
        {
            name: 'GCash',
            type: 'gcash'
        },
        {
            name: 'Generic GiftCard',
            type: 'genericgiftcard'
        },
        {
            name: 'GiftFor2',
            type: 'giftfor2card'
        },
        {
            details: [
                {
                    key: 'bic',
                    type: 'text'
                }
            ],
            name: 'GiroPay',
            type: 'giropay'
        },
        {
            name: 'Givex',
            type: 'givex'
        },
        {
            name: 'Globe GCash',
            type: 'globegcash'
        },
        {
            name: 'Goldsmiths Card',
            type: 'goldsmithscard'
        },
        {
            name: 'GoPay Wallet',
            type: 'gopay_wallet'
        },
        {
            name: 'OVO',
            type: 'grabpay_ID'
        },
        {
            name: 'GrabPay',
            type: 'grabpay_PH'
        },
        {
            name: 'GrabPay',
            type: 'grabpay_SG'
        },
        {
            name: 'Hallmark Card',
            type: 'hallmarkcard'
        },
        {
            name: 'HDFC',
            type: 'hdfc'
        },
        {
            name: 'Hunkemoller Member Card',
            type: 'hmclub'
        },
        {
            name: 'Hunkemoller Lingerie Card',
            type: 'hmlingerie'
        },
        {
            details: [
                {
                    items: [
                        {
                            id: '1121',
                            name: 'Test Issuer'
                        },
                        {
                            id: '1154',
                            name: 'Test Issuer 5'
                        },
                        {
                            id: '1153',
                            name: 'Test Issuer 4'
                        },
                        {
                            id: '1152',
                            name: 'Test Issuer 3'
                        },
                        {
                            id: '1151',
                            name: 'Test Issuer 2'
                        },
                        {
                            id: '1162',
                            name: 'Test Issuer Cancelled'
                        },
                        {
                            id: '1161',
                            name: 'Test Issuer Pending'
                        },
                        {
                            id: '1160',
                            name: 'Test Issuer Refused'
                        },
                        {
                            id: '1159',
                            name: 'Test Issuer 10'
                        },
                        {
                            id: '1158',
                            name: 'Test Issuer 9'
                        },
                        {
                            id: '1157',
                            name: 'Test Issuer 8'
                        },
                        {
                            id: '1156',
                            name: 'Test Issuer 7'
                        },
                        {
                            id: '1155',
                            name: 'Test Issuer 6'
                        }
                    ],
                    key: 'issuer',
                    type: 'select'
                }
            ],
            name: 'iDEAL',
            type: 'ideal'
        },
        {
            name: 'igive',
            type: 'igive'
        },
        {
            name: 'Korean Account Transfer (IniPay)',
            type: 'inicisIniPay_accounttransfer'
        },
        {
            name: 'Korean Credit Cards (IniPay)',
            type: 'inicisIniPay_creditcard'
        },
        {
            name: 'Korean Mobile Phone (IniPay)',
            type: 'inicisIniPay_mobilephone'
        },
        {
            name: 'Korean Virtual Account (IniPay)',
            type: 'inicisIniPay_virtualaccount'
        },
        {
            name: 'Korean Account Transfer (Mobile)',
            type: 'inicisMobile_accounttransfer'
        },
        {
            name: 'Korean Credit Cards (Mobile)',
            type: 'inicisMobile_creditcard'
        },
        {
            name: 'Korean Mobile Phone (Mobile)',
            type: 'inicisMobile_mobilephone'
        },
        {
            name: 'Korean Virtual Account (Mobile)',
            type: 'inicisMobile_virtualaccount'
        },
        {
            name: 'Korean Credit Cards',
            type: 'inicis_creditcard'
        },
        {
            name: 'Interac® Online',
            type: 'interac'
        },
        {
            name: 'Instant EFT',
            type: 'ipay'
        },
        {
            name: 'iPay88',
            type: 'ipay88'
        },
        {
            name: 'isracard',
            type: 'isracard'
        },
        {
            name: 'Phone Payment',
            type: 'ivr'
        },
        {
            name: 'Landline phone',
            type: 'ivrLandline'
        },
        {
            name: 'Mobile phone',
            type: 'ivrMobile'
        },
        {
            name: 'Kado Wereld',
            type: 'kadowereld'
        },
        {
            name: 'KakaoPay',
            type: 'kakaopay'
        },
        {
            name: 'Karen Millen Card',
            type: 'karenmillen'
        },
        {
            name: 'Karen Millen GiftCard',
            type: 'karenmillengiftcard'
        },
        {
            name: 'Bank Transfer',
            type: 'kcp_banktransfer'
        },
        {
            name: 'Korea–issued cards',
            type: 'kcp_creditcard'
        },
        {
            name: 'PayCo',
            type: 'kcp_payco'
        },
        {
            name: 'Naver Pay',
            type: 'kcp_naverpay'
        },
        {
            name: 'Virtual Account via KCP',
            type: 'kcp_va'
        },
        {
            name: 'Pay later with Klarna.',
            type: 'klarna'
        },
        {
            name: 'Pay over time with Klarna.',
            type: 'klarna_account'
        },
        {
            name: 'Buy Now, Pay Later with Billie',
            type: 'klarna_b2b'
        },
        {
            name: 'Pay now with Klarna.',
            type: 'klarna_paynow'
        },
        {
            name: 'Leisure Card',
            type: 'leisurecard'
        },
        {
            name: 'China Credit Card',
            type: 'lianlianpay_creditcard'
        },
        {
            name: 'China Debit Card',
            type: 'lianlianpay_debitcard'
        },
        {
            details: [
                {
                    key: 'telephoneNumber',
                    type: 'tel'
                }
            ],
            name: 'China Online Banking - Credit Card',
            type: 'lianlianpay_ebanking_credit'
        },
        {
            details: [
                {
                    items: [
                        {
                            id: '01030000',
                            name: 'Agricultural Bank of China'
                        },
                        {
                            id: '4031000',
                            name: 'Bank of Beijing'
                        },
                        {
                            id: '01040000',
                            name: 'Bank of China'
                        },
                        {
                            id: '03020000',
                            name: 'China Citic Bank'
                        },
                        {
                            id: '01050000',
                            name: 'China Construction Bank'
                        },
                        {
                            id: '03030000',
                            name: 'China Everbright Bank'
                        },
                        {
                            id: '03080000',
                            name: 'China Merchants Bank'
                        },
                        {
                            id: '03050000',
                            name: 'China Minsheng Banking Group'
                        },
                        {
                            id: '03040000',
                            name: 'Hua Xia Bank Co'
                        },
                        {
                            id: '01020000',
                            name: 'Industrial and Commercial Bank of China'
                        },
                        {
                            id: '03070000',
                            name: 'PingAn Bank'
                        },
                        {
                            id: '1000000',
                            name: 'Postal Savings Bank of China'
                        }
                    ],
                    key: 'issuer',
                    type: 'select'
                },
                {
                    key: 'telephoneNumber',
                    type: 'tel'
                }
            ],
            name: 'China Online Banking - Debit Card',
            type: 'lianlianpay_ebanking_debit'
        },
        {
            details: [
                {
                    items: [
                        {
                            id: '01030000',
                            name: 'Agricultural Bank of China'
                        },
                        {
                            id: '01050000',
                            name: 'China Construction Bank'
                        },
                        {
                            id: '03080000',
                            name: 'China Merchants Bank'
                        },
                        {
                            id: '01020000',
                            name: 'Industrial and Commercial Bank of China'
                        },
                        {
                            id: '03100000',
                            name: 'Shanghai Pudong Development Bank'
                        }
                    ],
                    key: 'issuer',
                    type: 'select'
                },
                {
                    key: 'telephoneNumber',
                    type: 'tel'
                }
            ],
            name: 'China Online Banking - Enterprise',
            type: 'lianlianpay_ebanking_enterprise'
        },
        {
            name: 'Loods5 Cadeaukaart',
            type: 'loods5giftcard'
        },
        {
            name: 'Loods5 Tegoedbon',
            type: 'loods5prepaidcard'
        },
        {
            name: 'Love2Shop GiftCard',
            type: 'love2shop'
        },
        {
            details: [
                {
                    key: 'shopper.firstName',
                    type: 'text'
                },
                {
                    key: 'shopper.lastName',
                    type: 'text'
                },
                {
                    key: 'shopper.gender',
                    type: 'text'
                },
                {
                    key: 'shopperEmail',
                    type: 'emailAddress'
                },
                {
                    key: 'telephoneNumber',
                    type: 'tel'
                },
                {
                    key: 'countryCode',
                    type: 'text'
                }
            ],
            name: 'mada',
            type: 'mada'
        },
        {
            name: 'Mappin & Webb Card',
            type: 'mappinwebbcard'
        },
        {
            name: 'MB WAY',
            type: 'mbway'
        },
        {
            details: [
                {
                    key: 'additionalData.amazonPayToken',
                    type: 'text'
                }
            ],
            name: 'Amazon Pay',
            supportsRecurring: true,
            type: 'amazonpay'
        },
        {
            name: 'Mercado Pago',
            type: 'mercadopago'
        },
        {
            name: 'MobilePay',
            type: 'mobilepay'
        },
        {
            name: 'AliPay via Razer Merchant Services',
            type: 'molpay_alipay'
        },
        {
            name: '7-Eleven',
            type: 'molpay_cash'
        },
        {
            name: 'CIMB Virtual Account',
            type: 'molpay_cimb_va'
        },
        {
            name: 'Malaysia E-Banking via Razer Merchant Services',
            type: 'molpay_ebanking_MY'
        },
        {
            details: [
                {
                    items: [
                        {
                            id: 'vtcpay-vietinbank',
                            name: 'Vietinbank'
                        },
                        {
                            id: 'vtcpay-bidv',
                            name: 'BIDV'
                        },
                        {
                            id: 'vtcpay-agribank',
                            name: 'Agribank'
                        },
                        {
                            id: 'vtcpay-mb',
                            name: 'MB Bank'
                        },
                        {
                            id: 'vtcpay-sacombank',
                            name: 'Sacombank'
                        },
                        {
                            id: 'vtcpay-dongabank',
                            name: 'DongABank'
                        },
                        {
                            id: 'vtcpay-maritimebank',
                            name: 'MaritimeBank'
                        },
                        {
                            id: 'vtcpay-vietcombank',
                            name: 'Vietcombank'
                        },
                        {
                            id: 'vtcpay-acb',
                            name: 'ACB'
                        },
                        {
                            id: 'vtcpay-techcombank',
                            name: 'Techcombank'
                        }
                    ],
                    key: 'issuer',
                    type: 'select'
                }
            ],
            name: 'Vietnam E-Banking',
            type: 'molpay_ebanking_VN'
        },
        {
            details: [
                {
                    items: [
                        {
                            id: 'fpx_bimb',
                            name: 'Bank Islam'
                        },
                        {
                            id: 'fpx_uob',
                            name: 'UOB Bank'
                        },
                        {
                            id: 'fpx_cimbclicks',
                            name: 'CIMB Clicks'
                        },
                        {
                            id: 'fpx_kfh',
                            name: 'Kuwait Finance House'
                        },
                        {
                            id: 'fpx_rhb',
                            name: 'RHB Now'
                        },
                        {
                            id: 'fpx_abmb',
                            name: 'Alliance Bank'
                        },
                        {
                            id: 'fpx_amb',
                            name: 'Am Online'
                        },
                        {
                            id: 'fpx_hsbc',
                            name: 'HSBC'
                        },
                        {
                            id: 'fpx_abb',
                            name: 'Affin Bank'
                        },
                        {
                            id: 'fpx_ocbc',
                            name: 'OCBC Bank'
                        },
                        {
                            id: 'fpx_pbb',
                            name: 'Public Bank'
                        },
                        {
                            id: 'fpx_scb',
                            name: 'Standard Chartered Bank'
                        },
                        {
                            id: 'fpx_bsn',
                            name: 'Bank Simpanan Nasional'
                        },
                        {
                            id: 'fpx_mb2u',
                            name: 'Maybank2u'
                        },
                        {
                            id: 'fpx_hlb',
                            name: 'Hong Leong Connect'
                        },
                        {
                            id: 'fpx_bmmb',
                            name: 'Bank Muamalat'
                        },
                        {
                            id: 'fpx_bkrm',
                            name: 'Bank Rakyat'
                        }
                    ],
                    key: 'issuer',
                    type: 'select'
                }
            ],
            name: 'Malaysia E-Banking',
            type: 'molpay_ebanking_fpx_MY'
        },
        {
            name: 'eNETS Debit',
            type: 'molpay_enetsd'
        },
        {
            name: 'epay',
            type: 'molpay_epay'
        },
        {
            name: 'Esapay',
            type: 'molpay_esapay'
        },
        {
            name: 'MyClear FPX',
            type: 'molpay_fpx'
        },
        {
            name: 'Maybank2u',
            type: 'molpay_maybank2u'
        },
        {
            name: 'Nganluong',
            type: 'molpay_nganluong'
        },
        {
            name: 'Convenience Stores Thailand',
            type: 'molpay_paysbuy'
        },
        {
            name: 'MOLPoints',
            type: 'molpay_points'
        },
        {
            name: 'RHB Now',
            type: 'molpay_rhb'
        },
        {
            name: 'SAM by SingPost',
            type: 'molpay_singpost'
        },
        {
            name: 'MOLWallet',
            type: 'molpay_wallet'
        },
        {
            name: 'MoMo ATM',
            type: 'momo_atm'
        },
        {
            name: 'Momo Wallet',
            type: 'momo_wallet'
        },
        {
            name: 'Moneybookers',
            type: 'moneybookers'
        },
        {
            name: 'Multibanco',
            type: 'multibanco'
        },
        {
            name: 'De Nationale Musicalcard',
            type: 'musicalcard'
        },
        {
            name: 'Nationale Bioscoopbon',
            type: 'nationalebioscoopbon'
        },
        {
            name: 'Nationale Tuinbon',
            type: 'nationaletuinbon'
        },
        {
            name: 'Nationale Verwen Cadeaubon',
            type: 'nationaleverwencadeaubon'
        },
        {
            name: 'BankAxess',
            type: 'netaxept_bankaxess'
        },
        {
            name: 'NETELLER',
            type: 'neteller'
        },
        {
            name: 'Onebip',
            type: 'onebip'
        },
        {
            name: 'One Two Three',
            type: 'onetwothree'
        },
        {
            name: 'Online Banking PL',
            type: 'onlineBanking_PL'
        },
        {
            details: [
                {
                    items: [
                        {
                            id: '1',
                            name: 'Model Bank v2'
                        }
                    ],
                    key: 'issuer',
                    type: 'select'
                }
            ],
            name: 'Online banking',
            type: 'openbanking_UK'
        },
        {
            name: 'Oxxo',
            type: 'oxxo'
        },
        {
            name: 'Pathe Giftcard',
            type: 'pathegiftcard'
        },
        {
            name: 'PayBright',
            type: 'paybright'
        },
        {
            name: 'Maya Wallet',
            type: 'paymaya_wallet'
        },
        {
            name: 'PayPal',
            type: 'paypal'
        },
        {
            name: 'Paysafecard',
            type: 'paysafecard'
        },
        {
            name: 'Payshop',
            type: 'payshop'
        },
        {
            name: 'PayD AMT via Paythru',
            type: 'paythru_amt'
        },
        {
            name: 'EFT via Paythru',
            type: 'paythru_eft'
        },
        {
            name: 'PayTM',
            type: 'paytm'
        },
        {
            details: [
                {
                    key: 'virtualPaymentAddress',
                    type: 'text'
                }
            ],
            name: 'PayU UPI',
            type: 'payu_IN_upi'
        },
        {
            name: 'EFT Pro via PayU',
            type: 'payu_ZA_eftpro'
        },
        {
            details: [
                {
                    key: 'additionalData.paywithgoogle.token',
                    type: 'payWithGoogleToken'
                }
            ],
            name: 'Google Pay',
            type: 'paywithgoogle'
        },
        {
            name: 'pix',
            type: 'pix'
        },
        {
            name: 'Plastix',
            type: 'plastix'
        },
        {
            name: 'Pluim',
            type: 'pluimgiftcard'
        },
        {
            name: 'Podium Card',
            type: 'podiumcard'
        },
        {
            name: 'POLi',
            type: 'poli'
        },
        {
            name: 'PPS',
            type: 'pps'
        },
        {
            name: 'Primera Cadeaukaart',
            type: 'primeracadeaucard'
        },
        {
            name: 'Illicado Gift Card',
            type: 'prosodie_illicado'
        },
        {
            name: 'PSE',
            type: 'pse'
        },
        {
            details: [
                {
                    items: [
                        {
                            id: '+7',
                            name: 'RU'
                        },
                        {
                            id: '+9955',
                            name: 'GE'
                        },
                        {
                            id: '+507',
                            name: 'PA'
                        },
                        {
                            id: '+44',
                            name: 'GB'
                        },
                        {
                            id: '+992',
                            name: 'TJ'
                        },
                        {
                            id: '+370',
                            name: 'LT'
                        },
                        {
                            id: '+972',
                            name: 'IL'
                        },
                        {
                            id: '+996',
                            name: 'KG'
                        },
                        {
                            id: '+380',
                            name: 'UA'
                        },
                        {
                            id: '+84',
                            name: 'VN'
                        },
                        {
                            id: '+90',
                            name: 'TR'
                        },
                        {
                            id: '+994',
                            name: 'AZ'
                        },
                        {
                            id: '+374',
                            name: 'AM'
                        },
                        {
                            id: '+371',
                            name: 'LV'
                        },
                        {
                            id: '+91',
                            name: 'IN'
                        },
                        {
                            id: '+66',
                            name: 'TH'
                        },
                        {
                            id: '+373',
                            name: 'MD'
                        },
                        {
                            id: '+1',
                            name: 'US'
                        },
                        {
                            id: '+81',
                            name: 'JP'
                        },
                        {
                            id: '+998',
                            name: 'UZ'
                        },
                        {
                            id: '+77',
                            name: 'KZ'
                        },
                        {
                            id: '+375',
                            name: 'BY'
                        },
                        {
                            id: '+372',
                            name: 'EE'
                        },
                        {
                            id: '+40',
                            name: 'RO'
                        },
                        {
                            id: '+82',
                            name: 'KR'
                        }
                    ],
                    key: 'qiwiwallet.telephoneNumberPrefix',
                    type: 'select'
                },
                {
                    key: 'qiwiwallet.telephoneNumber',
                    type: 'text'
                }
            ],
            name: 'Qiwi Wallet',
            type: 'qiwiwallet'
        },
        {
            name: 'RatePay Invoice',
            type: 'ratepay'
        },
        {
            name: 'RatePay Direct Debit',
            type: 'ratepay_directdebit'
        },
        {
            name: 'Rituals Giftcard',
            type: 'rituals'
        },
        {
            name: 'Rob Peetoom Giftcard',
            type: 'robpeetoomgiftcard'
        },
        {
            name: 'SafetyPay',
            type: 'safetypay'
        },
        {
            name: 'SafetyPay Cash',
            type: 'safetypay_cash'
        },
        {
            name: 'Shoes&Accessories Cadeau',
            type: 'sagiftcard'
        },
        {
            name: 'Score Giftcard',
            type: 'scoregiftcard'
        },
        {
            name: 'SEB Direktbetalning',
            type: 'sebdirectpayment'
        },
        {
            details: [
                {
                    key: 'sepa.ownerName',
                    type: 'text'
                },
                {
                    key: 'sepa.ibanNumber',
                    type: 'text'
                }
            ],
            name: 'SEPA Direct Debit',
            type: 'sepadirectdebit'
        },
        {
            name: '7-Eleven',
            type: 'seveneleven'
        },
        {
            name: 'Premium SMS',
            type: 'sms'
        },
        {
            name: 'SVS',
            type: 'svs'
        },
        {
            name: 'Swish',
            type: 'swish'
        },
        {
            name: 'TCS Test GiftCard',
            type: 'tcstestgiftcard'
        },
        {
            name: 'TenPay',
            type: 'tenpay'
        },
        {
            name: 'The Sting Giftcard',
            type: 'thestinggiftcard'
        },
        {
            name: 'TrueMoney',
            type: 'truemoney'
        },
        {
            name: 'Trustly',
            type: 'trustly'
        },
        {
            name: 'Online Banking by Trustpay',
            type: 'trustpay'
        },
        {
            name: 'TWINT',
            type: 'twint'
        },
        {
            name: 'Ukash',
            type: 'ukash'
        },
        {
            name: 'UnionPay',
            type: 'unionpay'
        },
        {
            details: [
                {
                    key: 'virtualPaymentAddress',
                    type: 'text'
                }
            ],
            name: 'UPI Collect',
            type: 'upi_collect'
        },
        {
            name: 'Valuelink',
            type: 'valuelink'
        },
        {
            name: 'V&D Cadeaukaart',
            type: 'vdcadeaucard'
        },
        {
            details: [
                {
                    key: 'telephoneNumber',
                    optional: true,
                    type: 'tel'
                }
            ],
            name: 'Vipps',
            type: 'vipps'
        },
        {
            details: [
                {
                    key: 'additionalData.visacheckout.callId',
                    type: 'text'
                }
            ],
            name: 'Visa Checkout',
            type: 'visacheckout'
        },
        {
            name: 'VVV Cadeaubon',
            type: 'vvvcadeaubon'
        },
        {
            name: 'VVV Giftcard',
            type: 'vvvgiftcard'
        },
        {
            name: 'Webshop Giftcard',
            type: 'webshopgiftcard'
        },
        {
            name: 'WeChat Pay',
            type: 'wechatpayMiniProgram'
        },
        {
            name: 'WeChat Pay',
            type: 'wechatpayQR'
        },
        {
            name: 'WeChat Pay',
            type: 'wechatpayWeb'
        },
        {
            name: 'WE Fashion Giftcard',
            type: 'wefashiongiftcard'
        },
        {
            name: 'Western Union',
            type: 'westernunion'
        },
        {
            name: 'Winkel Cheque',
            type: 'winkelcheque'
        },
        {
            name: 'WOS Card',
            type: 'woscard'
        },
        {
            name: 'Alfa-Click',
            type: 'yandex_alfaclick'
        },
        {
            name: 'Pay using bank card',
            type: 'yandex_bank_card'
        },
        {
            name: 'Cash terminals',
            type: 'yandex_cash'
        },
        {
            name: 'Pay using installments',
            type: 'yandex_installments'
        },
        {
            name: 'YooMoney',
            type: 'yandex_money'
        },
        {
            name: 'Promsvyazbank',
            type: 'yandex_promsvyazbank'
        },
        {
            name: 'SberPay',
            type: 'yandex_sberbank'
        },
        {
            name: 'WebMoney',
            type: 'yandex_webmoney'
        },
        {
            name: 'Your Gift',
            type: 'yourgift'
        },
        {
            name: 'Zip',
            type: 'zip'
        }
    ]
}
