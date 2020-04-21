<template>
	<div class="nav">
		<div class="nav__wrapper felx">
			<div class="nav__brand mr-5">
				<router-link :to="{name: 'home'}">
					Luna-sass
				</router-link>
			</div>


            <div class="nav__navicon"></div>

			<div class="nav__links__wrapper nav__links--right">
				<ul class="nav__links">
					<router-link  class="nav__links__item md-mr-3" tag="li" :to="{ name: 'home'}"><a>Home</a></router-link>
					<router-link  class="nav__links__item md-mr-3" tag="li" :to="{ name: 'grid'}"><a>Grid</a></router-link>
                    <router-link  class="nav__links__item md-mr-3" tag="li" :to="{ name: 'buttons'}"><a>Buttons</a></router-link>
                    <router-link  class="nav__links__item" tag="li" :to="{ name: 'cards'}"><a>Cards</a></router-link>
				</ul>
			</div>


		</div>
	</div>
</template>

<script>
	
	export default {
		name: "NavComponent"

	}

</script>
