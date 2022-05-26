module.exports = {
    extends: ['stylelint-config-standard-scss'],
    plugins: ['stylelint-order'],
    rules: {
        'color-function-notation': null,
        'string-quotes': 'single',
        /** 设置类名选择器不遵循 kebab-case */
        'selector-class-pattern': null,
        'custom-property-no-missing-var-function': null,
        'color-hex-length': null,
        'max-empty-lines': 1,
        indentation: 4,
        // 字符串使用双引号
        'string-quotes': 'double',
        // 使用了 autoprefix 不需要前缀
        'property-no-vendor-prefix': true,
        'selector-type-no-unknown': null,
        'selector-pseudo-element-colon-notation': null,
        'selector-pseudo-class-no-unknown': null,
        'number-leading-zero': null,
        'at-rule-no-unknown': null,
        'font-family-no-missing-generic-family-keyword': null,
        'no-descending-specificity': null,
        'unit-no-unknown': [
            true,
            {
                ignoreUnits: ['rpx']
            }
        ],
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes']
            }
        ],
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep']
            }
        ],
        // 属性顺序
        'order/order': [
            'dollar-variables',
            'custom-properties',
            'at-rules',
            'declarations',
            'rules'
        ],
        'order/properties-order': [
            'display',
            'float',
            'position',
            {
                order: 'flexible',
                properties: ['left', 'top', 'right', 'bottom']
            },
            'width',
            'height',
            {
                order: 'flexible',
                properties: [
                    'min-width',
                    'max-width',
                    'min-height',
                    'max-height',
                    'line-height'
                ]
            },
            'padding',
            {
                order: 'flexible',
                properties: [
                    'padding-left',
                    'padding-top',
                    'padding-right',
                    'padding-bottom'
                ]
            },
            'margin',
            {
                order: 'flexible',
                properties: [
                    'margin-left',
                    'margin-top',
                    'margin-right',
                    'margin-bottom'
                ]
            },
            'border',
            {
                order: 'flexible',
                properties: [
                    'border-left',
                    'border-top',
                    'border-right',
                    'border-bottom',
                    'border-radius'
                ]
            },
            'color',
            {
                order: 'flexible',
                properties: ['font-weight', 'font-size']
            },
            'background',
            {
                order: 'flexible',
                properties: [
                    'background-image',
                    'background-position',
                    'background-repeat',
                    'background-size',
                    'background-color'
                ]
            },
            {
                order: 'flexible',
                properties: ['text-align']
            }
        ]
    },
    overrides: [
        {
            files: ['**/*.module.scss'],
            rules: {
                'selector-class-pattern': null
            }
        }
    ]
}