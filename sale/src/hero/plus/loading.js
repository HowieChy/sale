import Msg from '../components/loading.vue'
import { mergeOptions } from '../libs/plugin_helper'

let $vm;

const plugin = {
    install (vue, options = {}) {
        const myMsg = vue.extend(Msg)

        if (!$vm) {
            $vm = new myMsg({
                el: document.createElement('div'),
            })
            document.body.appendChild($vm.$el)
        }

        const loading = {
            show (options) {
                if (typeof options === 'object') {
                    mergeOptions($vm, options)
                }
            },
        };

        if (!vue.$hero) {
            vue.$hero = {
                loading
            }
        } else {
            vue.$hero.loading = loading;
        }

        vue.mixin({
            created: function () {
                this.loading = vue.loading
            }
        })
    }
}

export default plugin
export const install = plugin.install

