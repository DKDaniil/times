<template>
    <div class="menu">
        <app-container>
            <div class="menu__title">
                <AppTitle>
                    Наш ассортимент.
                </AppTitle>
            </div>
            <div class="menu__sub-title">
                <p></p>
            </div>
            <div class="menu__tab">
                <MenuTab
                    @click="SelectedTab"
                />
            </div>
            <div class="menu__cards">
                <MenuCard
                    v-for="card in cards"
                    :key="card.id"
                    :card="card"
                    class="menu__card"
                    @click="AddProducts"
                />
            </div>
            <div class="menu__button">
                <AppButton
                />
            </div>
        </app-container>
    </div>
</template>

<script>
import AppContainer from "@/components/components/AppContainer.vue";
import AppButton from "@/components/components/AppButton.vue";
import AppTitle from "@/components/components/AppTitle.vue";
import MenuTab from './MenuTab.vue';
import MenuCard from './MenuCard.vue';

export default {
    name: 'MenuBlock',

    components: {
        AppContainer,
        AppTitle,
        AppButton,
        MenuTab,
        MenuCard
    },

    data() {
        return {
            cards: [],
        };
    },

    computed: {
        casio() {
            return this.$store.state.casio;
        },
        applewatch() {
            return this.$store.state.applewatch;
        },
        rolex() {
            return this.$store.state.rolex;
        }
    },

    methods: {

        SelectedTab(name) {
            switch(name) {
                case 'Casio': {
                    this.cards = [...this.casio];
                    break;
                }
                case 'Applewatch': {
                    this.cards = [...this.applewatch];
                    break;
                }
                case 'Rolex': {
                    this.cards = [...this.rolex];
                    break;
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu {

        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 154px;
        padding-bottom: 140px;

        @media screen and (max-width: 768px) {
            padding: 80px 0;
        }

        &__title {
            display: flex;
            justify-content: center;

            @media screen and (max-width: 576px) {
                text-align: center; 
            }
        }

        &__sub-title {
            display: flex;
            justify-content: center;

            & p {
                font-size: 16px;
                line-height: 27px;
                text-align: center;
                letter-spacing: 0.36px;
                color: #546285;
                width: 466px;
            }

            & a {
                text-decoration: none;
                color: #35B8BE;
            }
        }

        &__tab {
            display: flex;
            justify-content: center;
        }

        &__cards {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px 0;
            margin-top: 40px;

            @media screen and (max-width: 768px) {
                justify-content: center;
            }
        }

        &__button {
            display: flex;
            justify-content: center;
            margin-top: 65px;
        }
    }

</style>