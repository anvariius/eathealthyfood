<template>
  <div class="container" v-if="Object.keys(product).length > 0">
    <product-view-image :url="product.image"/>
    <v-title>{{product.title}}</v-title>
    <div class="block">
      <product-view-warnings :warnings="product.warnings"/>
    </div>
    <div class="block">
      <block-title>В 100 граммах</block-title>
      <product-view-params :params="product.params"/>
    </div>
    <div class="block">
      <block-title>Состав</block-title>
      <product-view-compsition :composition="product.composition" :lifetime="product.lifetime"/>
    </div>
    <div class="block">
      <block-title>Отзывы</block-title>
      <reviews-stat :review="product.review"/>
    </div>
    <div class="block">
      <feedbacks-list :feedbacks="product.feedbacks"/>
      <v-button full>Читать все отзывы</v-button>
    </div>
  </div>
  <scan-fixed-button @changeProduct="changeProduct"/>
</template>

<script>
import VButton from "@/components/buttons/VButton";
import axios from "axios"
import ProductViewImage from "@/blocks/ProductViewImage";
import VTitle from "@/components/text/VTitle";
import BlockTitle from "@/components/text/BlockTitle";
import ProductViewParams from "@/blocks/ProductViewParams";
import VText from "@/components/text/VText";
import ProductViewWarnings from "@/blocks/ProductViewWarnings";
import ProductViewCompsition from "@/blocks/ProductViewCompsition";
import ProductViewFeedbacks from "@/blocks/ProductViewFeedbacks";
import ReviewsStat from "@/blocks/ReviewsStat";
import FeedbacksList from "@/blocks/FeedbacksList";
import ScanFixedButton from "@/components/buttons/ScanFixedButton";
export default {
  components: {
    ScanFixedButton,
    FeedbacksList,
    ReviewsStat,
    ProductViewFeedbacks,
    ProductViewCompsition,
    ProductViewWarnings, VText, ProductViewParams, BlockTitle, VTitle, ProductViewImage, VButton},
  data() {
    return {
      //productId: '3687273',
      products: [
        {
          image: "https://rskrf.ru/upload/resize_cache/iblock/81f/255_260_140cd750bba9870f18aada2478b24840a/81f40ef7a8be36d395dffd98ea2e821c.jpg",
          title: "Вафли с жировой начинкой «Аппетитки», вкус «Шоколад»",
          warnings: ['Пальмовое масло', 'Много калорий'],
          params: {
            'белки': 5,
            'жиры': 28,
            'углеводы': 61,
            'ккал': 520
          },
          composition: "вода питьевая, сахар, мука пшеничная хлебопекарная высшего сорта, жир кондитерский (пальмовое масло, эмульгатор лецитин соевый, антиокислитель: токоферолы, концентрат смеси 9Е306)), какао-порошок, сухая молочная сыворотка, масло соевое, сухой яичный меланж, соль, эмульгатор лецитин соевый, ароматизатор, разрыхлитель гидрокарбонат натрия, регулятор кислотности кислота лимонная.",
          lifetime: '1 год',
          review: {
            rating: '4.5',
            recommendPercent: '89%',
            reviewsCount: '30 отзывов 300 оценок'
          },
          feedbacks: [
            {
              name: 'Алексей',
              pic: require('@/assets/img/user1.jpg'),
              comment: 'Часто покупаю круассан этой фирмы 😋 и точно могу сказать что в этот раз они были'
            },
            {
              name: 'Наталья',
              pic: require('@/assets/img/user2.jpg'),
              comment: 'Сытно и вкусно! Повышает настроение) Беру первый раз max, до этого покупала mini'
            }
          ]
        },
        {
          image: require('@/assets/img/product1.jpg'),
          title: "Мини-круассаны 7 Days с начинкой «Клубника»",
          warnings: ['Много калорий', 'Много сахара'],
          params: {
            'белки': 6,
            'жиры': 28,
            'углеводы': 44,
            'ккал': 456
          },
          composition: "тесто: мука пшеничная хлебопекарная высшего сорта, масло растительное",
          lifetime: '1 год',
          review: {
            rating: '4.5',
            recommendPercent: '89%',
            reviewsCount: '30 отзывов 300 оценок'
          },
          feedbacks: [
            {
              name: 'Алексей',
              pic: require('@/assets/img/user1.jpg'),
              comment: 'Часто покупаю круассан этой фирмы 😋 и точно могу сказать что в этот раз они были'
            },
            {
              name: 'Наталья',
              pic: require('@/assets/img/user2.jpg'),
              comment: 'Сытно и вкусно! Повышает настроение) Беру первый раз max, до этого покупала mini'
            }
          ]
        },
      ],
      product: {
        image: "https://rskrf.ru/upload/resize_cache/iblock/81f/255_260_140cd750bba9870f18aada2478b24840a/81f40ef7a8be36d395dffd98ea2e821c.jpg",
        title: "Вафли с жировой начинкой «Аппетитки», вкус «Шоколад»",
        warnings: ['Пальмовое масло', 'Много калорий'],
        params: {
          'белки': 5,
          'жиры': 28,
          'углеводы': 61,
          'ккал': 520
        },
        composition: "вода питьевая, сахар, мука пшеничная хлебопекарная высшего сорта, жир кондитерский (пальмовое масло, эмульгатор лецитин соевый, антиокислитель: токоферолы, концентрат смеси 9Е306)), какао-порошок, сухая молочная сыворотка, масло соевое, сухой яичный меланж, соль, эмульгатор лецитин соевый, ароматизатор, разрыхлитель гидрокарбонат натрия, регулятор кислотности кислота лимонная.",
        lifetime: '1 год',
        review: {
          rating: '4.5',
          recommendPercent: '89%',
          reviewsCount: '30 отзывов 300 оценок'
        },
        feedbacks: [
          {
            name: 'Алексей',
            pic: require('@/assets/img/user1.jpg'),
            comment: 'Часто покупаю круассан этой фирмы 😋 и точно могу сказать что в этот раз они были'
          },
          {
            name: 'Наталья',
            pic: require('@/assets/img/user2.jpg'),
            comment: 'Сытно и вкусно! Повышает настроение) Беру первый раз max, до этого покупала mini'
          }
        ]
      },
      prodCount: 0
    }
  },
  methods: {
    async getProduct(productId) {
      try {
        const response = await axios.get('https://rskrf.ru/rest/1/product/'+productId);
        this.product = response.data.response;
      }
      catch (e) {
        console.error(e);
      }
    },
    getNutritionalValue() {
      const nutritionalValue = this.product.product_info.find((item) => item.name === "Дополнительная информация");
      console.log(nutritionalValue.info);
    },
    getProductComposition() {
      this.productComposition = this.product.product_info.find((item) => item.name === "Состав").info;
    },
    changeProduct() {
      if(this.prodCount === 0) this.prodCount = 1;
      else this.prodCount = 0;
      this.product = this.products[this.prodCount];
    }
  },
  async mounted() {
    //await this.getProduct(this.productId);
    //this.getProductComposition();
    console.log(this.product);
  }
}
</script>

<style scoped>
.block{
  margin-top: 20px;
}

</style>