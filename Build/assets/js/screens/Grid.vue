<template>
    <div>
        <div class="wrapper">
            <div class="row mb-5">
                <div class="col">
                    <h1>The Grid</h1>
                    <h2>Grid Layout</h2>
                    <p>The <strong>Luna Framework</strong> is a 12-column responsive grid by default. The column count be changed in the _settings.sass to whatever you need. This means that you can make it a 2-column grid, 24-column grid or anything in between. Each column set needs to be with in a <code>.row</code> class and  must by default be prepended with one of the following prefixes. <code>.xs-</code>  <code>.sm-</code>  <code>.md-</code>  <code>.lg-</code>  <code>.xl-</code></p>

                    <blockquote class="bq bq--warning shadow--2">
                        <div class="bq__header bg--warning-light mb-4 flex justify--between flex--center"><div>More breakpoint can be added or can be removed in <strong>_settings.sass</strong> file</div> <div class="btn btn--warning">View</div></div>
                        <div class="bq__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        <div class="bq__footer bg--mute">Lorem ipsum dolor.</div>
                    </blockquote>
                </div>
            </div>

            <div class="row mb-5">
                <div class="md-col-1" v-for="index in 12" :key="index">
                    <div class="bg--gray-light r-3 border--gray text-align-center text--gray px-4 py-5"> </div>
                </div>
            </div>

            <div class="row mb-5">
                <div class="md-col-2" v-for="index in 6" :key="index">
                    <div class="bg--gray-light r-3 border--gray text-align-center text--gray px-4 py-5"></div>
                </div>
            </div>

            <div class="row mb-5">
                <div class="md-col-3" v-for="index in 4" :key="index">
                    <div class="bg--gray-light r-3 border--gray text-align-center text--gray px-4 py-5"></div>
                </div>
            </div>


            <div class="row mb-5">
                <div class="md-col-4" v-for="index in 3" :key="index">
                    <div class="bg--gray-light r-3 border--gray text-align-center text--gray px-4 py-5"></div>
                </div>
            </div>

            <div class="row mb-5">
                <div class="md-col-6" v-for="index in 2" :key="index">
                    <div class="bg--gray-light r-3 border--gray text-align-center text--gray px-4 py-5"></div>
                </div>
            </div>

            <div class="row mb-5">
                <div class="md-col-12">
                    <div class="bg--gray-light r-3 border--gray text-align-center text--gray px-4 py-5"></div>
                </div>
            </div>

            <div class="row mb-5">
                <div class="col">
<pre class="well"><code lang="html">&lt;div class=&quot;wrapper&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;md-col-4&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;md-col-4&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;md-col-4&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </div>
            </div>

            <div class="row mb-5">
                <div class="col">
                    <h2>Column Offset Layout</h2>
                    <p>Columns can be easily offset by using the <code>.{prefix}-offset-{num}</code> classes. Different offset can be set for different screen sizes by added multiple classes to a single element.</p>
                </div>
            </div>
            <div class="row mb-5">
                <div class="md-col-4 md-offset-4">
                    <div class="bg--secondary-light border--secondary text-align-center text--secondary px-4 py-3 ">col 4 offset 4</div>
                </div>
                <div class="md-col-4">
                    <div class="bg--gray-light r-3 border--gray text-align-center text--gray px-4 py-3">col 4</div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="md-col-4">
                    <div class="bg--gray-light r-3 border--gray text-align-center text--gray px-4 py-3">col 4</div>
                </div>
                <div class="md-col-4 md-offset-4">
                    <div class="bg--secondary-light border--secondary text-align-center text--secondary px-4 py-3 ">col 4 offset 4</div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="md-col-3">
                    <div class="bg--gray-light r-3 border--gray text-align-center text--gray px-4 py-3">col 3</div>
                </div>
                <div class="md-col-3 md-offset-1">
                    <div class="bg--secondary-light border--secondary text-align-center text--secondary px-4 py-3 ">col 3 offset 1</div>
                </div>
                <div class="md-col-3 md-offset-1">
                    <div class="bg--secondary-light border--secondary text-align-center text--secondary px-4 py-3 ">col 3 offset 1</div>
                </div>
            </div>
            <div class="row">
                <div class="col">
<pre class="well"><code lang="html">&lt;div class=&quot;row&quot;&gt;
 &lt;div class=&quot;md-col-4 md-offset-4&quot;&gt;&lt;/div&gt;
 &lt;div class=&quot;md-col-4&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
	
    export default {
        name: "Grid"
    }

</script>
