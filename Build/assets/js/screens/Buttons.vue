<template>
    <div class="wrapper">
        <div class="row">
            <div class="md-col-12">
                <h1>Buttons</h1>
            </div>
        </div>
        <div class="row">
            <div class="md-col-12 mb-5">
                <a href="#" class="btn">BUTTON</a>
                <a href="#" class="btn btn--default">BUTTON</a>
                <a href="#" class="btn btn--primary">BUTTON</a>
                <a href="#" class="btn btn--secondary">BUTTON</a>
                <a href="#" class="btn btn--dark">BUTTON</a>
                <a href="#" class="btn btn--success">BUTTON</a>
            </div>
            <div class="md-col-12 mb-5">
                <a href="#" class="btn"><i class="lunacon lunacon-search"></i> BUTTON</a>
                <a href="#" class="btn btn--default"><i class="lunacon lunacon-search"></i> BUTTON</a>
                <a href="#" class="btn btn--primary">BUTTON <i class="lunacon lunacon-search"></i> </a>
                <a href="#" class="btn btn--primary">BUTTON</a>
                <a href="#" class="btn btn--secondary">BUTTON <i class="lunacon lunacon-search"></i> </a>
                <a href="#" class="btn btn--dark"><i class="lunacon lunacon-search"></i> BUTTON</a>
                <a href="#" class="btn btn--success"><i class="lunacon lunacon-search"></i> BUTTON</a>
            </div>
            <div class="md-col-12 mb-5">
                <a href="#" disabled class="btn"><i class="lunacon lunacon-search"></i> BUTTON</a>
                <a href="#" disabled class="btn btn--default"><i class="lunacon lunacon-search"></i> BUTTON</a>
                <a href="#" disabled class="btn btn--primary">BUTTON <i class="lunacon lunacon-search"></i> </a>
                <a href="#" disabled class="btn btn--secondary">BUTTON <i class="lunacon lunacon-search"></i> </a>
                <a href="#" disabled class="btn btn--dark"><i class="lunacon lunacon-search"></i> BUTTON</a>
                <a href="#" disabled class="btn btn--success"><i class="lunacon lunacon-search"></i> BUTTON</a>
            </div>
            <div class="md-col-12 mb-5">
                <a href="#" class="btn btn--xs btn--success"><i class="lunacon lunacon-search"></i></a>
                <a href="#" class="btn btn--xs btn--success"><i class="lunacon lunacon-search"></i> BUTTON</a>
                <a href="#" class="btn btn--sm btn--success"><i class="lunacon lunacon-search"></i> BUTTON</a>
                <a href="#" class="btn btn--md btn--success"><i class="lunacon lunacon-search"></i> BUTTON</a>
                <a href="#" class="btn btn--lg btn--success"><i class="lunacon lunacon-search"></i> BUTTON</a>
                <a href="#" class="btn btn--xl btn--success"><i class="lunacon lunacon-search"></i> BUTTON</a>
            </div>
            <div class="md-col-12 mb-5 btn__group flex flex--center justify--start">
                <a href="#" class="btn btn--xs btn--success"><i class="lunacon lunacon-search"></i> BUTTON</a>
                <a href="#" class="btn btn--sm btn--success"><i class="lunacon lunacon-search"></i> BUTTON</a>
                <a href="#" class="btn btn--md btn--success"><i class="lunacon lunacon-search"></i> BUTTON</a>
                <a href="#" class="btn btn--lg btn--success"><i class="lunacon lunacon-search"></i> BUTTON</a>
                <a href="#" class="btn btn--xl btn--success"><i class="lunacon lunacon-search"></i> BUTTON</a>
            </div>
        </div>
        <div class="row">
            <div class="md-col-12">
                <h1>Input</h1>
            </div>
        </div>
                <div class="row">   
            <div class="md-col-4">
                <div class="panel shadow--4 ">
                    <div class="panel__body">
                        <div class="form__group">
                            <label class="form__label">Name</label>
                            <input class="form__item r-6"></input>
                        </div>
                        <div class="form__group">
                            <label class="form__label">Email</label>
                            <input class="form__item"></input>
                        </div>
                        <div class="form__group">
                            <button class="btn btn--primary">Send</button>
                        </div>
                    </div>
                </div>   
            </div>
            <div class="md-col-4">
                <div class="panel shadow--4 ">
                    <div class="panel__body">
                        <div class="form__group">
                            <label class="form__label">Name</label>
                            <div class="form__wrap"><input class="form__item r-6"></input></div>
                        </div>
                        <div class="form__group">
                            <label class="form__label">Email</label>
                            <div class="form__wrap"><input class="form__item"></input></div>
                        </div>
                        <div class="form__group">
                            <button class="btn btn--primary r-5">Send</button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    
    export default {
        name: "Home"
    }

</script>
