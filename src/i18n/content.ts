/**
 * All user-visible text, keyed by language.
 * ───────────────────────────────────────────────────────────────────────────
 * To edit copy: change the strings under `hy` (Armenian).
 * To translate: copy the whole `hy` object to `ru` / `en` and translate values.
 * Components read text via getContent(lang); missing languages fall back to hy.
 */
import type { Lang } from './ui';
import { defaultLang } from './ui';

export interface NavItem {
  label: string;
  path: string;
}
export interface TitledText {
  title: string;
  text: string;
}
export interface MetaEntry {
  title: string;
  description: string;
}

export interface SiteContent {
  tagline: string;
  nav: NavItem[];
  cta: {
    order: string;
    orderNow: string;
    viewProducts: string;
    call: string;
    whatsapp: string;
    viber: string;
    learnMore: string;
    contactUs: string;
  };
  currencyLabel: string;
  units: { mgdm3: string; mgeq: string; none: string };
  mineralNames: Record<string, string>;
  meta: Record<'home' | 'water' | 'products' | 'quality' | 'contact', MetaEntry>;
  home: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    trust: { value: string; label: string }[];
    valuePropsTitle: string;
    valueProps: TitledText[];
    sourceTeaser: TitledText;
    offersTitle: string;
    offersSubtitle: string;
    productsTeaserTitle: string;
    productsTeaserSubtitle: string;
    ctaBand: TitledText;
    howItWorks: { title: string; subtitle: string; steps: TitledText[] };
    whySteps: TitledText[];
    trustSection: {
      title: string;
      subtitle: string;
      points: TitledText[];
      certTitle: string;
      certText: string;
    };
  };
  water: {
    title: string;
    intro: string;
    story: string[];
    highlights: { value: string; label: string }[];
    compositionTitle: string;
    compositionNote: string;
    colName: string;
    colValue: string;
  };
  products: {
    title: string;
    subtitle: string;
    groups: { retail: string; delivery: string };
    perBottle: string;
    orderNote: string;
    orderPrefix: string;
    orderGreeting: string;
    orderAddress: string;
    badge: string;
    quantity: string;
    dispenserTitle: string;
    dispenserText: string;
  };
  quality: {
    title: string;
    intro: string;
    points: TitledText[];
    closing: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phoneLabel: string;
    emailLabel: string;
    socialLabel: string;
    hoursLabel: string;
    hoursValue: string;
    cityLabel: string;
    cityValue: string;
    formTitle: string;
    formName: string;
    formPhone: string;
    formMessage: string;
    formSubmit: string;
    formNote: string;
  };
  offers: { freeDelivery: TitledText; freeDispenser: TitledText; cleaning: TitledText };
  footer: { about: string; quickLinks: string; contact: string; rights: string };
}

const hy: SiteContent = {
  tagline: 'Արզականի բարձրադիր աղբյուրներից',
  nav: [
    { label: 'Գլխավոր', path: '/' },
    { label: 'Մեր ջուրը', path: '/water' },
    { label: 'Ապրանքներ', path: '/products' },
    { label: 'Որակ', path: '/quality' },
    { label: 'Կապ', path: '/contact' },
  ],
  cta: {
    order: 'Պատվիրել',
    orderNow: 'Պատվիրել հիմա',
    viewProducts: 'Տեսնել ապրանքները',
    call: 'Զանգահարել',
    whatsapp: 'WhatsApp',
    viber: 'Viber',
    learnMore: 'Իմանալ ավելին',
    contactUs: 'Կապ մեզ հետ',
  },
  currencyLabel: '֏',
  units: { mgdm3: 'մգ/դմ³', mgeq: 'մգ-էկվ/լ', none: '' },
  mineralNames: {
    bicarbonate: 'Հիդրոկարբոնատներ',
    sulfate: 'Սուլֆատներ',
    potassium: 'Կալիում',
    sodium: 'Նատրիում',
    magnesium: 'Մագնեզիում',
    calcium: 'Կալցիում',
    ph: 'pH (ջրածնային ցուցանիշ)',
    mineralization: 'Ընդհանուր հանքայնացում',
    fluoride: 'Ֆտորիդներ',
    hardness: 'Կոշտություն',
    alkalinity: 'Հիմնայնություն',
  },
  meta: {
    home: {
      title: 'AQUA №1 — մաքուր խմելու ջուր Արզականից',
      description:
        'Բարձրորակ խմելու ջուր Արզականի բարձրլեռնային աղբյուրներից։ Շշալցված ջուր և դիսպենսերի ջուր՝ անվճար առաքումով տուն և գրասենյակ։',
    },
    water: {
      title: 'Մեր ջուրը — Արզականի աղբյուրը | AQUA №1',
      description:
        'Արզականի բարձրադիր աղբյուրների բնական ալկալային ջուր՝ pH 9.0 և ցածր հանքայնացում։ Տես ամբողջական քիմիական բաղադրությունը։',
    },
    products: {
      title: 'Ապրանքներ և գներ | AQUA №1',
      description:
        '0.5 լ-ից մինչև 19 լ շշալցված ու դիսպենսերի ջուր։ Տես գները և պատվիրիր անվճար առաքումով։',
    },
    quality: {
      title: 'Որակ և անվտանգություն | AQUA №1',
      description:
        'AQUA №1 ջուրը ստուգվում է որակի և անվտանգության չափանիշներով՝ բնական աղբյուրից մինչև ձեր սեղանը։',
    },
    contact: {
      title: 'Կապ և պատվեր | AQUA №1',
      description:
        'Պատվիրիր AQUA №1 ջուրը՝ զանգահարելով կամ գրելով WhatsApp/Viber-ով։ Անվճար առաքում Երևանում։',
    },
  },
  home: {
    heroBadge: 'Բնական աղբյուրային ջուր',
    heroTitle: 'Մաքուր ջուր՝ լեռների սրտից',
    heroSubtitle:
      'Բարձրորակ խմելու ջուր Արզականի բարձրլեռնային աղբյուրներից։ Անվճար առաքում՝ տան և գրասենյակի համար։',
    trust: [
      { value: 'pH 9.0', label: 'Ալկալային ջուր' },
      { value: '162.9 մգ/լ', label: 'Բնական հանքայնացում' },
      { value: 'Անվճար', label: 'Առաքում' },
      { value: '0.5–19 լ', label: 'Շիշ՝ ամեն կարիքի' },
    ],
    valuePropsTitle: 'Ինչո՞ւ AQUA №1',
    valueProps: [
      {
        title: 'Բարձրլեռնային աղբյուր',
        text: 'Ջուրը ստացվում է Արզականի մաքուր, բարձրադիր աղբյուրներից՝ պահպանելով իր բնական հատկությունները։',
      },
      {
        title: 'Ալկալային pH 9.0',
        text: 'Բնական ալկալային միջավայր և մեղմ, հավասարակշռված համ՝ ամենօրյա օգտագործման համար։',
      },
      {
        title: 'Անվճար առաքում',
        text: 'Հասցնում ենք ձեր ջուրը տուն կամ գրասենյակ՝ արագ և առանց հավելավճարի։',
      },
      {
        title: 'Դիսպենսերի սպասարկում',
        text: 'Տրամադրում ենք դիսպենսերներ և իրականացնում դրանց խորը մաքրումը։',
      },
    ],
    sourceTeaser: {
      title: 'Արզականի աղբյուրը',
      text: 'Արզականը հայտնի է իր մաքուր լեռնային ջրով։ Մեր ջուրը ստացվում է բարձրադիր աղբյուրներից և պահպանում է բնության պարգևած հանքային հավասարակշռությունը։',
    },
    offersTitle: 'Մեր առաջարկները',
    offersSubtitle: 'Ավելի շատ պատճառ՝ ընտրելու AQUA №1-ը',
    productsTeaserTitle: 'Մեր ապրանքները',
    productsTeaserSubtitle: '0.5 լ-ից մինչև 19 լ՝ ընտանիքի, գրասենյակի և ճանապարհի համար',
    ctaBand: {
      title: 'Պատվիրեք ձեր ջուրը հիմա',
      text: 'Զանգահարեք կամ գրեք մեզ WhatsApp/Viber-ով՝ պատվերն ընդամենը մեկ քայլ է։',
    },
    howItWorks: {
      title: 'Ինչպե՞ս է աշխատում',
      subtitle: 'Ընդամենը 3 պարզ քայլ՝ մաքուր ջուրը ձեր դռան մոտ։',
      steps: [
        { title: 'Ընտրեք ջրի չափը', text: '0.5 լ-ից մինչև 19 լ՝ ըստ ձեր կարիքի։' },
        { title: 'Պատվիրեք զանգով կամ WhatsApp-ով', text: 'Արագ կապ օպերատորի հետ։' },
        { title: 'Ստացեք առաքում ձեր հասցեում', text: 'Տուն, գրասենյակ կամ խանութ։' },
      ],
    },
    whySteps: [
      {
        title: 'Բնական ջուր',
        text: 'Արզականի բարձրադիր աղբյուրների մաքուր ջուր՝ պահպանված բնական հատկություններով։',
      },
      { title: 'Անվտանգ առաքում', text: 'Հասցնում ենք ձեր ջուրը խնամքով և ճիշտ ժամին։' },
      { title: 'Տան և գրասենյակի համար', text: 'Հարմար լուծումներ ընտանիքի և բիզնեսի համար։' },
      {
        title: 'Փոխարինում ենք դատարկ շշերը',
        text: 'Բերում ենք լիքը շիշը և տանում դատարկը՝ առանց ավելորդ հոգսի։',
      },
    ],
    trustSection: {
      title: 'Որակ և վստահություն',
      subtitle: 'Ջուր, որին կարող եք վստահել ամեն օր։',
      points: [
        { title: 'EAC համապատասխանության նշան', text: 'Արտադրանքը կրում է EAC նշանը։' },
        {
          title: 'Ստուգված բաղադրություն',
          text: 'Հանքային բաղադրությունը համապատասխանում է պիտակի ցուցանիշներին։',
        },
        { title: 'Հիգիենիկ արտադրություն', text: 'Շշալցումն իրականացվում է մաքուր պայմաններում։' },
      ],
      certTitle: 'Որակի սերտիֆիկատ',
      certText: 'Որակի պաշտոնական սերտիֆիկատը շուտով կտեղադրվի այստեղ։',
    },
  },
  water: {
    title: 'Մեր ջուրը',
    intro:
      'AQUA №1-ը բնական խմելու ջուր է՝ ստացված Արզականի բարձրլեռնային աղբյուրներից։',
    story: [
      'Արզականը՝ Կոտայքի մարզում, հայտնի է իր մաքուր լեռնային ջրով։ Բարձրադիր աղբյուրների ջուրը ֆիլտրվում է բնական ապարների միջով՝ ձեռք բերելով իր մաքրությունն ու հանքային հավասարակշռությունը։',
      'Մենք ջուրը հասցնում ենք ձեզ՝ պահպանելով նրա բնական հատկությունները՝ ալկալային pH 9.0 և ցածր հանքայնացում, ինչը այն դարձնում է մեղմ ու հաճելի ամենօրյա օգտագործման համար։',
    ],
    highlights: [
      { value: 'pH 9.0', label: 'Բնական ալկալային ջուր' },
      { value: '162.9 մգ/լ', label: 'Ընդհանուր հանքայնացում' },
      { value: '10.3 մգ/լ', label: 'Ցածր նատրիում (Na⁺)' },
    ],
    compositionTitle: 'Քիմիական բաղադրությունը',
    compositionNote: 'Ցուցանիշները՝ ըստ պիտակի տվյալների (մեկ դմ³ ջրի համար)։',
    colName: 'Ցուցանիշ',
    colValue: 'Արժեք',
  },
  products: {
    title: 'Ապրանքներ և գներ',
    subtitle: 'Ընտրիր ծավալը՝ ըստ քո կարիքի։ Բոլոր պատվերներն առաքվում են անվճար։',
    groups: {
      retail: 'Շշալցված ջուր',
      delivery: 'Դիսպենսերի ջուր (12–19 լ)',
    },
    perBottle: '/ հատ',
    orderNote: 'Պատվիրելու համար զանգահարեք կամ գրեք մեզ WhatsApp/Viber-ով։',
    orderPrefix: 'Ուզում եմ պատվիրել',
    orderGreeting: 'Բարև Ձեզ,',
    orderAddress: 'Հասցե:',
    badge: 'Ամենապահանջված',
    quantity: 'Քանակ',
    dispenserTitle: 'Ջրի դիսպենսեր',
    dispenserText:
      'Ամսական 8 և ավելի 19 լ շիշ պատվիրելու դեպքում դիսպենսերը տրամադրվում է անվճար։ Առաջարկում ենք նաև դիսպենսերի խորը մաքրման ծառայություն։',
  },
  quality: {
    title: 'Որակ և անվտանգություն',
    intro:
      'Ջրի որակը մեզ համար առաջնահերթ է՝ բնական աղբյուրից մինչև ձեր սեղանը։',
    points: [
      {
        title: 'Բնական աղբյուր',
        text: 'Ջուրը ստացվում է Արզականի պահպանվող բարձրլեռնային աղբյուրներից։',
      },
      {
        title: 'Հսկվող բաղադրություն',
        text: 'Հանքային բաղադրությունը կայուն է և համապատասխանում է պիտակի վրա նշված ցուցանիշներին։',
      },
      {
        title: 'Համապատասխանության նշում',
        text: 'Արտադրանքը կրում է EAC համապատասխանության նշանը։',
      },
      {
        title: 'Մաքուր փաթեթավորում',
        text: 'Շշալցումն իրականացվում է հիգիենիկ պայմաններում՝ պահպանելով ջրի մաքրությունը։',
      },
    ],
    closing:
      'Պահպանման պայմաններ՝ 15–25 °C ջերմաստիճանում, պիտանելիության ժամկետ՝ 12 ամիս։',
  },
  contact: {
    title: 'Կապ և պատվեր',
    subtitle: 'Զանգահարեք կամ գրեք մեզ՝ պատվերի և առաքման համար։',
    phoneLabel: 'Հեռախոս',
    emailLabel: 'Էլ. փոստ',
    socialLabel: 'Սոցիալական ցանցեր',
    hoursLabel: 'Աշխատանքային ժամեր',
    hoursValue: 'Ամեն օր, 09:00–20:00',
    cityLabel: 'Քաղաք',
    cityValue: 'Երևան, Հայաստան',
    formTitle: 'Թողեք հայտ',
    formName: 'Անուն',
    formPhone: 'Հեռախոսահամար',
    formMessage: 'Հաղորդագրություն (ծավալ, հասցե)',
    formSubmit: 'Ուղարկել',
    formNote: 'Կկապվենք ձեզ հետ հնարավորինս շուտ։',
  },
  offers: {
    freeDelivery: {
      title: 'Անվճար առաքում',
      text: 'Բոլոր պատվերների առաքումն անվճար է։',
    },
    freeDispenser: {
      title: 'Անվճար դիսպենսեր',
      text: 'Ամսական 8+ հատ 19 լ ջուր պատվիրելու դեպքում դիսպենսերը՝ նվեր։',
    },
    cleaning: {
      title: 'Դիսպենսերի խորը մաքրում',
      text: 'Մաքրում ենք ձեր կամ մեր դիսպենսերը։',
    },
  },
  footer: {
    about:
      'AQUA №1 — բնական խմելու ջուր Արզականի բարձրադիր աղբյուրներից։ Անվճար առաքում տուն և գրասենյակ։',
    quickLinks: 'Արագ հղումներ',
    contact: 'Կապ',
    rights: 'Բոլոր իրավունքները պաշտպանված են։',
  },
};

// Russian & English are added in Phase 3 (after the Armenian layout is approved).
export const content: Partial<Record<Lang, SiteContent>> = { hy };

export function getContent(lang: Lang): SiteContent {
  return content[lang] ?? content[defaultLang]!;
}
