<template>
<on-click-outside :do="close">
    <div class="form__group">
        <slot></slot>
        <div class="form__wrap"  ref="button">
            <button @click.prevent="open" type="button" class="form__item">
                <span v-if="value !== null">{{ value }}</span>
                <span v-else class="form__helper text--gray">Select a option </span>
            </button>
            <i class="lunacon lunacon-chevron-down"></i>
        </div>
        <div ref="dropdown" v-show="isOpen" class="form__select__search">
            <div class="form__wrap mb-4">
                <input
                    ref="search"
                    v-model="search"
                    type="text"
                    @keydown.esc="close"
                    @keydown.down="highlightNext"
                    @keydown.up="highlightPrev"
                    @keydown.enter.prevent="selectHightlighted"
                    @keydown.tab.prevent
                    class="form__item">
            </div>
            <ul ref="options" class="form__select__list">
                <li
                    v-for="(option, index) in filteredOptions"
                    :key="option.key"
                    @click.prevent="select(option)" class="list__item"
                    :class="{ 'bg--primary r-3 text--white font-bold' : index === highlightedIndex }"
                >{{ option }}</li>
            </ul>
            <div v-show="filteredOptions.length === 0" class="form__helper text--danger">
                No search result for "{{ search }}"
            </div>
        </div>
    </div>
</on-click-outside>
</template>

<script>

    import { createPopper } from '@popperjs/core'
    import OnClickOutside from "./OnClickOutside";



    export default {
        name: "DropdownSearch",
        components: {
            OnClickOutside
        },
        props: {
            options: {
                required: true,
                type: Array
            },
            value: {
                default: '',
                type: String
            },
            filterFunction: {
                required: true
            }
        },
        data() {
            return {
                isOpen: false,
                search: '',
                highlightedIndex: 0
            }
        },
        computed: {
            filteredOptions() {
                return this.filterFunction(this.search, this.options)
            }
        },
        beforeDestroy() {
            this.popper.destroy()
        },
        methods: {
            open() {
                if (this.isOpen) { return }
                this.isOpen = true
                this.$nextTick(() => {
                    this.$refs.search.focus()
                    this.setupPopper()
                    this.scrollToHighlighted()
                })
            },
            close() {
                if (!this.isOpen) {
                    return
                }
                this.isOpen = false
                this.$refs.button.focus()
            },
            select(option) {
                this.$emit('input', option)
                this.search = ''
                this.highlightedIndex = 0
                this.close()
            },
            scrollToHighlighted() {
                this.$refs.options.children[this.highlightedIndex].scrollIntoView({block: 'nearest'})
            },
            highlight(index) {
                this.highlightedIndex = index
                if (this.highlightedIndex > this.filteredOptions.length - 1) {
                    this.highlightedIndex = 0
                }
                if (this.highlightedIndex < 0) {
                    this.highlightedIndex = this.filteredOptions.length - 1
                }
                this.scrollToHighlighted()
            },
            highlightNext() {
                this.highlight(this.highlightedIndex + 1)
            },
            highlightPrev() {
                this.highlight(this.highlightedIndex - 1)
            },
            selectHightlighted() {
                this.select(this.filteredOptions[this.highlightedIndex])
            },
            setupPopper() {
                if (this.popper === undefined) {
                    this.popper = createPopper(this.$refs.button, this.$refs.dropdown, {
                        placement: 'bottom',
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, 5],
                                },
                            },
                        ],
                    })
                }else{
                    this.popper.update()
                }

            }
        },

    }
</script>
