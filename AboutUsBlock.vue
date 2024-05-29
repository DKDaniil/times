<template>
    <div class="about-us">
        <app-container>
            <div class="about-us__wrapper">
                <div class="about-us__info">
                    <AppTitle
                        class="about-us__title"
                    >
                        <br/> Добро пожаловать!
                    </AppTitle>
                    <div class="about-us__description">
                        Часы – это красивое украшение и красивый подарок любому мужчине на все случаи жизни. Они символизируют силу, мужественность, чувство стиля и прекрасно подходят для любой ситуации: от деловых переговоров до отдыха на пляже.

Стильные часы на руке демонстрируют не только благополучие во всех сферах жизни, но и отменный вкус их обладателя. Часы как нельзя лучше дополнят образ успешного, сильного мужчины, придав его образу роскошь и некоторую романтичность.

Дорогие дамы! Сделайте прекрасный подарок любимому человеку. Подарите ему эти изысканны часы. Уверяем вас, ваш любимый по достоинству оценит ваше внимание. Более модного и изысканного украшения для вашего мужчины просто не придумать. И более прекрасного подарка от любимой женщины также.

Часы – лучшая альтернативы скучным, однообразным наборам для бритья, очередным рубашкам или наборам отвёрток. И за это прекрасное украшение невероятно низкая цена, всего 1000 долларов. Спешите сделать заказ – звоните нам прямо сейчас, не упускайте свой шанс.
                    </div>
                    <AppButton
                        text="Learn about us"
                        color="coral"
                        size="medium"
                        class="about-us__button"
                    />
                </div>
                <div class="about-us__image"></div>
            </div>
        </app-container>
    </div>
</template>

<script>
import AppContainer from "@/components/components/AppContainer.vue";
import AppButton from "@/components/components/AppButton.vue";
import AppTitle from "@/components/components/AppTitle.vue";

export default {
    name: 'AboutUsBlock',

    components: {
        AppContainer,
        AppButton,
        AppTitle
    },

    computed: {
        isMobile() {
            return window.innerWidth <= 768;
        }
    },
}
</script>

<style lang="scss">
    .about-us {

        background-repeat: no-repeat;
        background-size: cover;

        &__wrapper {
            display: flex;
            justify-content: space-between;

            @media screen and (max-width: 768px) {
                flex-wrap: wrap;
                justify-content: center;
            }
        }

        &__info {
            position: relative;
            width: 560px;
            margin-top: 290px;
            z-index: 1;

            &::before {
                content: '';
                position: absolute;
                top: -20%;
                left: 6%;
                width: 578px;
                height: 500px;
                background-repeat: no-repeat;
                background-size: cover;
                z-index: -1;
            }

            @media screen and (max-width: 768px) {
                width: 100%;
                margin-top: 0;
                
                &::before {
                    width: 90%;
                }
            }

        }

        &__title {
            margin-bottom: 29px;

            @media screen and (max-width: 768px) {
                text-align: center;
            }
        }

        &__description {
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 0.36px;
            color: #546285;

            @media screen and (max-width: 768px) {
                text-align: center;
            }
        }

        &__button {
            margin-top: 47px;

            @media screen and (max-width: 768px) {
                width: 86%;
            }

            @media screen and (max-width: 576px) {
                width: 80%;
                margin: 20px 0;
            }
        }

        &__image {
            width: 524px;
            height: 614px;
            background-repeat: no-repeat;
            background-size: cover;
            margin: 140px 0;

            @media screen and (max-width: 768px) {
                width: 100%;
                background-position-x: center;
                margin: 50px 0;
            }
        }
    }
</style>