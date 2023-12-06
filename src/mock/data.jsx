import pizza from "../assets/pizza.png";
import shopping from "../assets/shopping.png";

export const data = {
  switcher: {
    english: ["CHANGE TO", "ENGLISH"],
    turkish: ["TÜRKÇE", "'YE GEÇ"],
  },
  darkmodeswitch: {
    english: "DARK MODE",
    turkish: "GECE MODU",
  },
  lightmode: {
    english: "LIGHT MODE",
    turkish: "GÜNDÜZ MODU",
  },
  hero: {
    title: {
      english: "I am a Frontend Developer...",
      turkish: "Ben bir Frontend Geliştiricisi'yim...",
    },
    content: {
      english:
        "...who likes to craft solid and scalable frontend products with great user experiences.",
      turkish:
        "...güçlü ve ölçeklenebilir harika kullanıcı deneyimleriyle frontend ürünleri oluşturmayı seven  birisiyim.",
    },
  },
  aboutmeobj: {
    profile: {
      english: "Profile",
      turkish: "Profil",
    },
    basic: {
      english: "Basic Information",
      turkish: "Temel Bilgiler",
    },
    info: {
      english: [
        "Birth Date",
        "Location",
        "Educational Background",
        "Preferred Role",
      ],
      turkish: [
        "Doğum Tarihi",
        "İkamet Şehri",
        "Eğitim Durumu",
        "Tercih Ettiği Rol",
      ],
    },
    infoco: {
      english: [
        "24.03.1996",
        "Ankara",
        "Hacettepe Uni. Bachelor's Degree in Biology, 2016",
        "Frontend, UI",
      ],
      turkish: [
        "24.03.1996",
        "Ankara",
        "Hacettepe Ünv. Biyoloji Lisans, 2016",
        "Frontend, UI",
      ],
    },
    about: {
      title: {
        english: "About Me",
        turkish: "Hakkımda",
      },
      content: {
        english: [
          "Passionate frontend developer dedicated to crafting seamless user interfaces. With a Computer Science background, I bring creative ideas to life through clean and efficient code.",
          " Always exploring new technologies to deliver exceptional user experiences.    Let's build something extraordinary together! ",
        ],
        turkish: [
          "Akıcı kullanıcı arayüzleri oluşturmaya adanmış bir frontend geliştirici. Bilgisayar Bilimi mezunu olarak temiz ve etkili kod ile yaratıcı fikirleri hayata geçiriyorum.",
          " Sürekli olarak yeni teknolojileri keşfetmek, olağanüstü kullanıcı deneyimleri sunmak için çaba harcamak benim prensibim.",
        ],
      },
    },
  },
  projects: {
    title: {
      english: "Projects",
      turkish: "Projeler",
    },
    projectdata: {
      english: [
        {
          projecttitle: "Pizza",
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          pro: pizza,
          url: "https://lezizpizza.vercel.app",
          giturl:
            "https://github.com/Skaimarvas/s7ch-ch-fsweb-s7-challenge-pizza",
        },
        {
          projecttitle: "Shopping",
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          pro: shopping,
          url: "https://shoppingcart-psi-ten.vercel.app",
          giturl:
            "https://github.com/Skaimarvas/s11g1-fsweb-s11g1-shopping-cart",
        },
      ],
      turkish: [
        {
          projecttitle: "Pizza",
          description:
            "Basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi; kullanıcılarınıza hangi çerezleri kabul edip reddedeceklerini seçme imkanı tanır. Bu eklenti, vanilla JS, SCSS ve Parcel Bundler kullanılarak oluşturuldu ve bir NPM paketi olarak mevcuttur. Git deposu üzerinden kod ve temalara her türlü özelleştirmeyi mümkün kılar",
          pro: pizza,
          url: "https://lezizpizza.vercel.app",
          giturl:
            "https://github.com/Skaimarvas/s7ch-ch-fsweb-s7-challenge-pizza",
        },
        {
          projecttitle: "Shopping",
          description:
            "Basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi; kullanıcılarınıza hangi çerezleri kabul edip reddedeceklerini seçme imkanı tanır. Bu eklenti, vanilla JS, SCSS ve Parcel Bundler kullanılarak oluşturuldu ve bir NPM paketi olarak mevcuttur. Git deposu üzerinden kod ve temalara her türlü özelleştirmeyi mümkün kılar",
          pro: shopping,
          url: "https://shoppingcart-psi-ten.vercel.app",
          giturl:
            "https://github.com/Skaimarvas/s11g1-fsweb-s11g1-shopping-cart",
        },
      ],
    },
  },
  footer: {
    message: {
      english: "Send me a message!",
      turkish: "Bana  mesaj gönder!",
    },
    description: {
      english:
        "Got a question or proposal, or just want to say hello? Go ahead.",
      turkish:
        "Bir sorun ya da teklifin mi var, sadece merhaba mı demek istiyorsun? Hadi durma!",
    },
  },
};
