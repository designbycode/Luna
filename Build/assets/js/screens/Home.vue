<template>
    <div>
        <div class="hero">
            <div class="wrapper">
                <div class="row flex justify--between flex--center">
                    <div class="md-col-7">
                        <h1 class="text--primary">Luna-sass</h1>
                        <p class="text--white">
                            An mobile firt css framwork for rapid we development
                        </p>
                    </div>
                    <div class="md-col-5">
                        <img class="hero__img responsive__img" src="/img/jetpacktocat.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="py-7">
            <div class="wrapper">
                <div class="row flex justify--between">
                    <div class="md-col-4">
                        <dropdown-search
                            :options="bands"
                            v-model="selectBand"
                            :filter-function="applySearchFilter"
                        >
                            <label for="option" class="form__label font--bold"> Select Band</label>
                        </dropdown-search>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	
	import DropdownSearch from "../components/DropdownSearch";
    export default {
		name: "Home",
        components: {DropdownSearch},
        data() {
		    return {
                selectBand: null,
                bands: [
                    'Anthrax',
                    'Dark Angel',
                    'Death Angel',
                    'Destruction',
                    'Exodus',
                    'Flotsam and Jetsam',
                    'Kreator',
                    'Megadeth',
                    'Ludi Myburgh',
                    'Metallica',
                    'Overkill',
                    'Sepultura',
                    'Slayer',
                    'Testament',
                ]
            }
        },
        methods: {
            applySearchFilter(search, options) {
		        return options.filter(option => {
		            return option.toLowerCase().startsWith(search.toLowerCase())
                })
            }
        }
    }

</script>
