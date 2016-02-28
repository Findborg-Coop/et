<template>
    <div>
        <div class="et-layout">
             <main>
                <div class="et-container mt1">
                    <div class="et-grid undefined">
                        <div class="et-block et-size-25 et-size-sm-100">
                            <stylesnav></stylesnav>
                        </div>
                    <div class="et-block et-size-75 et-size-sm-100">
                        <v-view>
                        </v-view>
                    </div>
                </div>
             </main>
             <shelf>
                <div class="et-shelf-row">
                    <i class="material-icons">dashboard</i>
                    <div class="et-layout-spacer"></div> 
                    <i class="material-icons">dashboard</i>
                </div>
             </shelf>
        </div>
    </div>
</template>
    <script>
    import Stylesnav from './styles-menu.vue';
    import Shelf from '../../et/layout/shelf.vue'
    export default {
    components: {
    stylesnav: Stylesnav,
    shelf: Shelf
    
    }
    };
    </script>