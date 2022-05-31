module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                htmlWhitespaceSensitivity: 'ignore',
                singleQuote: true,
                semi: false,
                tabWidth: 4,
            },
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['prettier', '@typescript-eslint'],
            extends: ['plugin:@typescript-eslint/recommended'],
            rules: {
                // 禁止使用@ts-注解
                '@typescript-eslint/ban-ts-comment': 'off',
                // 在函数和类方法上需要显式的返回类型
                '@typescript-eslint/explicit-function-return-type': 'off',
                // 在导出的函数和类的公共类方法上需要显式的返回值和参数类型
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                //  禁止空接口
                '@typescript-eslint/no-empty-interface': 'off',
                //  禁止空函数
                '@typescript-eslint/no-empty-function': 'off',
                // 禁止使用any类型
                '@typescript-eslint/no-explicit-any': 'off',
                // 禁止使用特定类型 off 为可以打开 @ts-expect-error @ts-ignore @ts-nocheck @ts-check 注解
                '@typescript-eslint/ban-types': 'off',
                // 禁止 this
                '@typescript-eslint/no-this-alias': 'off',
                // 禁止使用!后缀运算符进行非null断言
                '@typescript-eslint/no-non-null-assertion': 'off',
                // 参考 https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
                '@typescript-eslint/explicit-member-accessibility': [
                    'error',
                    {
                        accessibility: 'explicit',
                        overrides: {
                            accessors: 'off',
                            constructors: 'no-public',
                            methods: 'explicit',
                            properties: 'explicit',
                            parameterProperties: 'off',
                        },
                    },
                ],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        // 关于类型的需要大驼峰
                        selector: ['class', 'interface', 'typeAlias'],
                        format: ['PascalCase'],
                    },
                ],
                // 除导入语句外，禁止使用require语句
                '@typescript-eslint/no-var-requires': ['error'],
                // 对于 Vue3 jsx 组合API可以不按顺序
                'no-use-before-define': 'off',
            },
        },
    ],
}