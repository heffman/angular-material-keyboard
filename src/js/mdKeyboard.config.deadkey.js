/* - Lay out each dead key set as an object of property/value
 *   pairs.  The rows below are wrapped so uppercase letters are
 *   below their lowercase equivalents.
 *
 * - The property name is the letter pressed after the diacritic.
 *   The property value is the letter this key-combo will generate.
 *
 * - Note that if you have created a new keyboard layout and want
 *   it included in the distributed script, PLEASE TELL ME if you
 *   have added additional dead keys to the ones below.
 */

(function () {
    "use strict";

    angular.module('material.components.keyboard')
        .constant('keyboardDeadkey', keyboardDeadkey());

    function keyboardDeadkey() {
        var deadkey = {
            '"': {
                'a': '\u00e4',
                'e': '\u00eb',
                'i': '\u00ef',
                'o': '\u00f6',
                'u': '\u00fc',
                'y': '\u00ff',
                '\u03b9': '\u03ca',
                '\u03c5': '\u03cb',
                '\u016B': '\u01D6',
                '\u00FA': '\u01D8',
                '\u01D4': '\u01DA',
                '\u00F9': '\u01DC',
                'A': '\u00c4',
                'E': '\u00cb',
                'I': '\u00cf',
                'O': '\u00d6',
                'U': '\u00dc',
                'Y': '\u0178',
                '\u0399': '\u03aa',
                '\u03a5': '\u03ab',
                '\u016A': '\u01D5',
                '\u00DA': '\u01D7',
                '\u01D3': '\u01D9',
                '\u00D9': '\u01DB',
                '\u304b': '\u304c',
                '\u304d': '\u304e',
                '\u304f': '\u3050',
                '\u3051': '\u3052',
                '\u3053': '\u3054',
                '\u305f': '\u3060',
                '\u3061': '\u3062',
                '\u3064': '\u3065',
                '\u3066': '\u3067',
                '\u3068': '\u3069',
                '\u3055': '\u3056',
                '\u3057': '\u3058',
                '\u3059': '\u305a',
                '\u305b': '\u305c',
                '\u305d': '\u305e',
                '\u306f': '\u3070',
                '\u3072': '\u3073',
                '\u3075': '\u3076',
                '\u3078': '\u3079',
                '\u307b': '\u307c',
                '\u30ab': '\u30ac',
                '\u30ad': '\u30ae',
                '\u30af': '\u30b0',
                '\u30b1': '\u30b2',
                '\u30b3': '\u30b4',
                '\u30bf': '\u30c0',
                '\u30c1': '\u30c2',
                '\u30c4': '\u30c5',
                '\u30c6': '\u30c7',
                '\u30c8': '\u30c9',
                '\u30b5': '\u30b6',
                '\u30b7': '\u30b8',
                '\u30b9': '\u30ba',
                '\u30bb': '\u30bc',
                '\u30bd': '\u30be',
                '\u30cf': '\u30d0',
                '\u30d2': '\u30d3',
                '\u30d5': '\u30d6',
                '\u30d8': '\u30d9',
                '\u30db': '\u30dc'
            },
            // Tilde / Stroke
            '~': {
                'a': '\u00e3', 'l': '\u0142', 'n': '\u00f1', 'o': '\u00f5',
                'A': '\u00c3', 'L': '\u0141', 'N': '\u00d1', 'O': '\u00d5'
            },
            // Circumflex
            '^': {
                'a': '\u00e2', 'e': '\u00ea', 'i': '\u00ee', 'o': '\u00f4', 'u': '\u00fb', 'w': '\u0175', 'y': '\u0177',
                'A': '\u00c2', 'E': '\u00ca', 'I': '\u00ce', 'O': '\u00d4', 'U': '\u00db', 'W': '\u0174', 'Y': '\u0176'
            },
            // Baltic caron
            '\u02c7': {
                'c': '\u010D',
                'd': '\u010f',
                'e': '\u011b',
                's': '\u0161',
                'l': '\u013e',
                'n': '\u0148',
                'r': '\u0159',
                't': '\u0165',
                'u': '\u01d4',
                'z': '\u017E',
                '\u00fc': '\u01da',
                'C': '\u010C',
                'D': '\u010e',
                'E': '\u011a',
                'S': '\u0160',
                'L': '\u013d',
                'N': '\u0147',
                'R': '\u0158',
                'T': '\u0164',
                'U': '\u01d3',
                'Z': '\u017D',
                '\u00dc': '\u01d9'
            },
            // Romanian and Turkish breve
            '\u02d8': {
                'a': '\u0103', 'g': '\u011f',
                'A': '\u0102', 'G': '\u011e'
            },
            // Macron
            '-': {
                'a': '\u0101',
                'e': '\u0113',
                'i': '\u012b',
                'o': '\u014d',
                'u': '\u016B',
                'y': '\u0233',
                '\u00fc': '\u01d6',
                'A': '\u0100',
                'E': '\u0112',
                'I': '\u012a',
                'O': '\u014c',
                'U': '\u016A',
                'Y': '\u0232',
                '\u00dc': '\u01d5'
            },
            // Grave
            '`': {
                'a': '\u00e0', 'e': '\u00e8', 'i': '\u00ec', 'o': '\u00f2', 'u': '\u00f9', '\u00fc': '\u01dc',
                'A': '\u00c0', 'E': '\u00c8', 'I': '\u00cc', 'O': '\u00d2', 'U': '\u00d9', '\u00dc': '\u01db'
            },
            // Acute / Greek Tonos
            '\'': {
                'a': '\u00e1',
                'e': '\u00e9',
                'i': '\u00ed',
                'o': '\u00f3',
                'u': '\u00fa',
                'y': '\u00fd',
                '\u03b1': '\u03ac',
                '\u03b5': '\u03ad',
                '\u03b7': '\u03ae',
                '\u03b9': '\u03af',
                '\u03bf': '\u03cc',
                '\u03c5': '\u03cd',
                '\u03c9': '\u03ce',
                '\u00fc': '\u01d8',
                'A': '\u00c1',
                'E': '\u00c9',
                'I': '\u00cd',
                'O': '\u00d3',
                'U': '\u00da',
                'Y': '\u00dd',
                '\u0391': '\u0386',
                '\u0395': '\u0388',
                '\u0397': '\u0389',
                '\u0399': '\u038a',
                '\u039f': '\u038c',
                '\u03a5': '\u038e',
                '\u03a9': '\u038f',
                '\u00dc': '\u01d7'
            },
            // Hungarian Double Acute Accent
            '\u02dd': {
                'o': '\u0151', 'u': '\u0171',
                'O': '\u0150', 'U': '\u0170'
            },
            // Greek Dialytika + Tonos
            '\u0385': {
                '\u03b9': '\u0390', '\u03c5': '\u03b0'
            },
            // Ring
            '\u00b0': {
                'a': '\u00e5', 'u': '\u016f',
                'A': '\u00c5', 'U': '\u016e'
            },
            // Ogonek
            '\u02DB': {
                'a': '\u0106', 'e': '\u0119', 'i': '\u012f', 'o': '\u01eb', 'u': '\u0173', 'y': '\u0177',
                'A': '\u0105', 'E': '\u0118', 'I': '\u012e', 'O': '\u01ea', 'U': '\u0172', 'Y': '\u0176'
            },
            // Dot-above
            '\u02D9': {
                'c': '\u010B', 'e': '\u0117', 'g': '\u0121', 'z': '\u017C',
                'C': '\u010A', 'E': '\u0116', 'G': '\u0120', 'Z': '\u017B'
            },
            // Cedilla
            '\u00B8':  {
                'c': '\u00e7', 's': '\u015F',
                'C': '\u00c7', 'S': '\u015E'
            },
            /*// / Comma
            ',': {
             's': (this.VKI_isIElt8) ? '\u015F' : '\u0219', 't': (this.VKI_isIElt8) ? '\u0163' : '\u021B',
             'S': (this.VKI_isIElt8) ? '\u015E' : '\u0218', 'T': (this.VKI_isIElt8) ? '\u0162' : '\u021A'
             },*/
            // Hiragana/Katakana Point
            '\u3002': {
                '\u306f': '\u3071', '\u3072': '\u3074', '\u3075': '\u3077', '\u3078': '\u307a', '\u307b': '\u307d',
                '\u30cf': '\u30d1', '\u30d2': '\u30d4', '\u30d5': '\u30d7', '\u30d8': '\u30da', '\u30db': '\u30dd'
            }
        };

        buildAliases(deadkey);
        return deadkey;
    }

    function buildAliases (deadkey) {
        // Macron
        deadkey['\u00af'] = deadkey['-'];

        // Umlaut / Diaeresis / Greek Dialytika / Hiragana/Katakana Voiced Sound Mark
        deadkey['\u00a8'] = deadkey['\u309B'] = deadkey['\''];

        // Acute / Greek Tonos
        deadkey['\u00b4'] = deadkey['\u0384'] = deadkey['\''];

        // Ring
        deadkey['\u00ba'] = deadkey['\u00b0'];
        deadkey['\u201a'] = deadkey['\u00B8'];
    }
})();
