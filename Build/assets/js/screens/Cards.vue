<template>
    <div class="wrapper my-9">
        <div class="row">
            <div class="md-col-4">
                <div class="panel shadow--3">
                    <div class="panel__media">
                        <div class="panel__avatar">
                            <img :src="`https://gravatar.com/avatar/${email}`">
                            <div class="flex justify--between">
                                <a href=""><i class="lunacon lunacon-facebook"></i></a>
                                <a href=""><i class="lunacon lunacon-twitter-bird"></i></a>
                                <a href=""><i class="lunacon lunacon-github"></i></a>
                            </div>
                        </div>
                        <div class="media__author">
                            <img :src="`https://gravatar.com/${email}.qr?s=200`">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import md5 from 'md5'
    
    export default {
        name: "Home",
        data() {
            return {
                email: md5('claude@designbycode.co.za')
            }
        }
    }

</script>
