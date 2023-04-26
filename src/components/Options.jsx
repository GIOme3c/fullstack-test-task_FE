import { useState } from "react"
import Card from "./Card";
import SizeBlock from "./SizeBlock";
import classes from '../pages/products/products.module.scss'
import optionsStyles from './options.module.scss'

const options = [
  {
    id: 1,
    path: 'materials',
    name: 'Обивка',
  },
  {
    id: 2,
    path: 'sizes',
    name: 'Размер',
  },
  {
    id: 3,
    path: 'base',
    name: 'Основание',
  },
  {
    id: 4,
    path: 'additional',
    name: 'Доп. опции',
  }
]

const materials = [
  {
    "id": 852,
    "title": "Nice Beige",
    "slug": "ekokozha-modern-nice-beige",
    "price": 0,
    "image": "/media/shop/color/image_852_NLZJyMf.png"
  },
  {
    "id": 853,
    "title": "Nice Red",
    "slug": "ekokozha-modern-nice-red",
    "price": 6100,
    "image": "/media/shop/color/image_853.jpg"
  },
  {
    "id": 854,
    "title": "Nice White",
    "slug": "ekokozha-modern-nice-white",
    "price": 0,
    "image": "/media/shop/color/image_854.png",
  },
  {
    "id": 855,
    "title": "Nice Black",
    "slug": "ekokozha-modern-nice-black",
    "price": "6100.00",
    "image": "/media/shop/color/image_855.png"
  },
  {
    "id": 856,
    "title": "Nice Blue",
    "slug": "ekokozha-modern-nice-blue",
    "price": "6100.00",
    "image": "/media/shop/color/image_856.png"
  },
  {
    "id": 857,
    "title": "Nice Choco",
    "slug": "ekokozha-modern-nice-choco",
    "price": 0,
    "image": "/media/shop/color/image_857.png"
  },
  {
    "id": 859,
    "title": "Liker Navi",
    "slug": "ekokozha-modern-liker-navi",
    "price": "6100.00",
    "image": "/media/shop/color/image_859.jpg"
  },
  {
    "id": 860,
    "title": "Liker White",
    "slug": "ekokozha-modern-liker-white",
    "price": 200,
    "image": "/media/shop/color/image_860.jpg"
  },
  {
    "id": 861,
    "title": "Liker Gray",
    "slug": "ekokozha-modern-liker-gray",
    "price": 6100,
    "image": "/media/shop/color/image_861.jpg"
  },
  {
    "id": 858,
    "title": "Nice Gray",
    "slug": "ekokozha-modern-nice-gray",
    "price": 6100,
    "image": "/media/shop/color/image_858.jpg", 
  }
]

const sizes = [
  {
      "id": 1,
      "size": {
          "length": 200,
          "width": 160,
          "percent_price": 0
      }
  },
  {
      "id": 2,
      "size": {
          "length": 200,
          "width": 140,
          "percent_price": -5
      }
  },
  {
      "id": 3,
      "size": {
          "length": 200,
          "width": 180,
          "percent_price": 15
      }
  },
  {
      "id": 5,
      "size": {
          "length": 200,
          "width": 120,
          "percent_price": -10
      }
  },
  {
      "id": 14,
      "size": {
          "length": 200,
          "width": 200,
          "percent_price": 30
      }
  },
  {
      "id": 19,
      "size": {
          "length": 200,
          "width": 90,
          "percent_price": -20
      }
  },
  {
      "id": 13,
      "size": {
          "length": 190,
          "width": 200,
          "percent_price": 22.5
      }
  },
  {
      "id": 18,
      "size": {
          "length": 190,
          "width": 90,
          "percent_price": -22
      }
  },
  {
      "id": 4,
      "size": {
          "length": 190,
          "width": 120,
          "percent_price": -12
      }
  },
  {
      "id": 6,
      "size": {
          "length": 210,
          "width": 120,
          "percent_price": -8
      }
  },
  {
      "id": 7,
      "size": {
          "length": 190,
          "width": 140,
          "percent_price": -7
      }
  },
  {
      "id": 8,
      "size": {
          "length": 210,
          "width": 140,
          "percent_price": -3
      }
  },
  {
      "id": 9,
      "size": {
          "length": 190,
          "width": 160,
          "percent_price": -2
      }
  },
  {
      "id": 10,
      "size": {
          "length": 210,
          "width": 160,
          "percent_price": 2
      }
  },
  {
      "id": 11,
      "size": {
          "length": 190,
          "width": 180,
          "percent_price": 13
      }
  },
  {
      "id": 12,
      "size": {
          "length": 210,
          "width": 180,
          "percent_price": 17
      }
  },
  {
      "id": 15,
      "size": {
          "length": 210,
          "width": 200,
          "percent_price": 32
      }
  },
  {
      "id": 16,
      "size": {
          "length": 190,
          "width": 80,
          "percent_price": -27
      }
  },
  {
      "id": 17,
      "size": {
          "length": 200,
          "width": 80,
          "percent_price": -25
      }
  },
  {
      "id": 108,
      "size": {
          "length": 190,
          "width": 190,
          "percent_price": 20.5
      }
  },
  {
      "id": 127,
      "size": {
          "length": 190,
          "width": 110,
          "percent_price": -17.01
      }
  },
  {
      "id": 128,
      "size": {
          "length": 190,
          "width": 130,
          "percent_price": -9.5
      }
  },
  {
      "id": 129,
      "size": {
          "length": 190,
          "width": 150,
          "percent_price": -4.5
      }
  },
  {
      "id": 130,
      "size": {
          "length": 190,
          "width": 170,
          "percent_price": 5.5
      }
  },
  {
      "id": 131,
      "size": {
          "length": 200,
          "width": 110,
          "percent_price": -15
      }
  },
  {
      "id": 132,
      "size": {
          "length": 200,
          "width": 130,
          "percent_price": -7.5
      }
  },
  {
      "id": 133,
      "size": {
          "length": 200,
          "width": 150,
          "percent_price": -2.5
      }
  },
  {
      "id": 134,
      "size": {
          "length": 200,
          "width": 170,
          "percent_price": 7.5
      }
  },
  {
      "id": 135,
      "size": {
          "length": 200,
          "width": 190,
          "percent_price": 22.5
      }
  },
  {
      "id": 136,
      "size": {
          "length": 210,
          "width": 80,
          "percent_price": -23
      }
  },
  {
      "id": 137,
      "size": {
          "length": 210,
          "width": 90,
          "percent_price": -18
      }
  },
  {
      "id": 138,
      "size": {
          "length": 210,
          "width": 110,
          "percent_price": -13
      }
  },
  {
      "id": 139,
      "size": {
          "length": 210,
          "width": 130,
          "percent_price": -5.5
      }
  },
  {
      "id": 140,
      "size": {
          "length": 210,
          "width": 150,
          "percent_price": -0.5
      }
  },
  {
      "id": 141,
      "size": {
          "length": 210,
          "width": 170,
          "percent_price": 9.5
      }
  },
  {
      "id": 142,
      "size": {
          "length": 210,
          "width": 190,
          "percent_price": 24.5
      }
  }
]

const base = [
  {
      "id": 5,
      "title": "Ортопедическое основание",
      "price": 0,
      "image": "/media/image_5_QcoDHmz.png"
  },
  {
      "id": 36,
      "title": "Основание с подъемным механизмом",
      "price": 17000,
      "image": "/media/image_36_iKnVvgI.png"
  },
  {
      "id": 37,
      "title": "Деревянное",
      "price": 0,
      "image": "/media/image_37_5ALeaqC.png"
  },
  {
      "id": 38,
      "title": "Металлическое",
      "price": 14000,
      "image": "/media/image_38_wXd0IiE.png"
  },
  {
      "id": 31,
      "title": "Подъемный механизм без ящиков",
      "price": 17000,
      "image": "/media/image_31_SGPzTne.png"
  },
  {
      "id": 1,
      "title": "Подъёмный механизм с 1 ящиком",
      "price": 24000,
      "image": "/media/image_1_gGUZpaV.png"
  },
  {
      "id": 2,
      "title": "Подъёмный механизм с 2 ящиками",
      "price": 27000,
      "image": "/media/image_2_hsWTLE9.png"
  },
  {
      "id": 104,
      "title": "Эко ПМ 1 ящик new Олимпия",
      "price": 17000,
      "image": null
  },
  {
      "id": 105,
      "title": "Эко ПМ 2 ящика new Олимпия",
      "price": 19500,
      "image": null
  },
  {
      "id": 106,
      "title": "Эко ПМ без дна new Олимпия",
      "price": 14500,
      "image": null
  },
  {
      "id": 99,
      "title": "ЭКО",
      "price": 0,
      "image": null
  }
]

const additional = [
  {
      "id": 4,
      "title": "Утолщённые царги",
      "price": 7000,
      "image": "/media/image_4_g8TCCbA.jpg"
  },
  {
      "id": 25,
      "title": "Кант на стыке царг в 45°",
      "price": 600,
      "image": "/media/image_25_KTDNu3y.jpg"
  },
  {
      "id": 54,
      "title": "Увеличение спинки +10 см",
      "price": 4050,
      "image": "/media/image_54_jHCID3s.jpg"
  },
  {
      "id": 55,
      "title": "Увеличение спинки +20 см",
      "price": 6075,
      "image": "/media/image_55_wZS1AFx.jpg"
  },
  {
      "id": 69,
      "title": "Ножки, покрытые маслом",
      "price": 0,
      "image": null
  },
  {
      "id": 71,
      "title": "Ножки Черные",
      "price": 2000,
      "image": null
  },
  {
      "id": 72,
      "title": "Ножки Орех Италия",
      "price": 2000,
      "image": null
  },
  {
      "id": 70,
      "title": "Ножки Орех",
      "price": 2000,
      "image": null
  },
  {
      "id": 73,
      "title": "Ножки Белый",
      "price": 2000,
      "image": null
  },
  {
      "id": 74,
      "title": "Ножки Орех Венге",
      "price": 2000,
      "image": null
  },
  {
      "id": 92,
      "title": "Увеличенные тонкие царги",
      "price": 3500,
      "image": null
  },
  {
      "id": 94,
      "title": "Увеличенные утолщенные царги с утяжками (3 царги)",
      "price": 4000,
      "image": null
  },
  {
      "id": 93,
      "title": "Увеличенные утолщенные царги",
      "price": 4000,
      "image": null
  },
  {
      "id": 95,
      "title": "Увел.тонкие царги (утяжки на передней царге)",
      "price": 4500,
      "image": null
  },
  {
      "id": 96,
      "title": "Увелич.утолщенные царги (утяжки на передней царге)",
      "price": 6000,
      "image": null
  },
  {
      "id": 97,
      "title": "Уменьшение спинки -10см",
      "price": 0,
      "image": null
  },
  {
      "id": 98,
      "title": "Уменьшение спинки -20см",
      "price": 0,
      "image": null
  },
  {
      "id": 108,
      "title": "Комплект декоративных подушек 3 штуки",
      "price": 4500,
      "image": "/media/image_108.jpg"
  },
  {
      "id": 109,
      "title": "Комплект декоративных подушек 5 штук",
      "price": 7000,
      "image": "/media/image_109.jpg"
  },
  {
      "id": 110,
      "title": "Комплект декоративных подушек 8 штук",
      "price": 10500,
      "image": "/media/image_110.jpg"
  }
]

export default function Options() {

  const [optionsName, setOptionsName] = useState(options[0].path);

  const optionsJsx = options.map(option => {
    const style = {
      backgroundColor: option.path === optionsName ? '#263475' : '#F0EFF5',
      color: option.path === optionsName ? '#ffffff' : '#000000',
      padding: '8px 15px',
      margin: '1px',
      cursor: 'pointer',
    }
    return <div key={option.id} onClick={() => setOptionsName(option.path)} style={style}>{option.name}</div>
  })

  return (
    <div>
      <div className={optionsStyles.container}>
        {/* <div>Обивка</div>
        <div>Размер</div>
        <div>Основание</div>
        <div>Доп. опции</div> */}
        {optionsJsx}
      </div>

      <div className={classes.container}>
        {optionsName === 'materials' && materials.map(option => <Card key={option.id} img={option.image} title={option.title} price={option.price}/>)}

        {optionsName === 'sizes' && sizes.map(option => <SizeBlock length={option.size.length} width={option.size.width} price={option.size.percent_price}/>)}
        
        {optionsName === 'base' && base.map(option => <Card key={option.id} img={option.image} title={option.title} price={option.price}/>)}

        {optionsName === 'additional' && additional.map(option => <Card key={option.id} img={option.image} title={option.title} price={option.price}/>)}
      </div>

    </div>
  )
}