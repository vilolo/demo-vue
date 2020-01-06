<template>
    <div>
        <testVolidate v-bind:bb='42' v-model="vvv" cc='ccc' dd='ddd' ee='eeee' ff='ffff'>6666 slot{{vvv}}</testVolidate>
        {{lovingVue}}<testModel v-model="lovingVue"></testModel>
    </div>
</template>
<script>
// import lodash from 'lodash'
// window._ = lodash
window._ = require('lodash')
export default {
    methods: {
        doTest: _.debounce(function () {
            console.log('777')
        }, 1000)
    },
    data: function(){
        return {
            vvv: '组件 v-model',
            lovingVue: true
        }
    },
    components: {
        testVolidate: {
            data: function(){
                return {aa: 'aaa'}
            },
            inheritAttrs: false,
            // props: ['bb', 'cc'],
            props: {
                bb: {
                    type: Number,
                    required: true
                },
                cc: [String, Number],
                dd: {
                    required: true
                },
            },
            template: `
            <div>
                <h2>{{aa}}</h2><h2>{{bb}}</h2><h2>{{cc}}</h2><input v-bind="$attrs">
                <slot>默认值</slot>
            </div>`
        },
        testModel: {
            // model: {
            //     prop: 'checked',
            //     event: 'change'
            // },
            // props: {
            //     checked: Boolean
            // },
            // template: `
            //     <input
            //     type="checkbox"
            //     v-bind:checked="checked"
            //     v-on:change="$emit('change', $event.target.checked)"
            //     >
            // `

            // 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件, 但是像单选框、复选框等类型的输入控件可能会将 value 特性用于不同的目的。model 选项可以用来避免这样的冲突：
            props: {
                value: Boolean
            },
            template: `
                <input
                type="checkbox"
                v-bind:checked="value"
                v-on:change="$emit('input', $event.target.checked)"
                >
            `
        }
    }
}
</script>