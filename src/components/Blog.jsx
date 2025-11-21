import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaBriefcase, FaBullhorn } from "react-icons/fa";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Osnove Programiranja: Odakle Početi?",
      excerpt:
        "Programiranje nije samo pisanje koda - to je način razmišljanja, rješavanje problema i kreativno izražavanje kroz tehnologiju.",
      date: "15. Novembar 2025",
      readTime: "5 min",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069",
      content: [
        {
          heading: "Šta je programiranje?",
          text: "Programiranje je proces kreiranja instrukcija koje računar može razumijeti i izvršavati. To je kao da naučite novi jezik - jezik koji vam omogućava da komunicirate sa računarima i napravite aplikacije, web stranice, igrice i mnogo više.",
        },
        {
          heading: "Zašto naučiti programiranje?",
          text: "• **Visoka potražnja:** IT sektor je jedan od najbrže rastućih u svijetu\n• **Kreativnost:** Možete pretvoriti svaku ideju u digitalnu realnost\n• **Fleksibilnost:** Rad od kuće, freelancing, ili klasična kancelarija\n• **Rješavanje problema:** Razvijate logičko razmišljanje i analytical skills",
        },
        {
          heading: "Sa čim početi?",
          text: "Za potpune početnike preporučujemo:\n\n**1. HTML & CSS** - Osnove web developmenta (2-3 sedmice)\n**2. JavaScript** - Dodavanje interaktivnosti (1-2 mjeseca)\n**3. React** - Moderna JavaScript biblioteka (1-2 mjeseca)\n**4. Backend (Node.js/PHP)** - Server-side programiranje\n\nNajvažnije: **Vježbajte svaki dan!** Čak i 30 minuta dnevno donosi ogromne rezultate.",
        },
        {
          heading: "Savjeti za učenje",
          text: "✅ Pravite projekte od prvog dana\n✅ Ne učite samo teoriju - **pišite kod!**\n✅ Pridružite se zajednicama (Reddit, Discord, GitHub)\n✅ Ne odustajte kada zapnete - svi programeri prolaze kroz to\n✅ Koristite besplatne resurse: freeCodeCamp, YouTube, dokumentacije",
        },
      ],
      color: "blue",
    },
    {
      id: 2,
      icon: <FaBriefcase />,
      title: "Zašto Svaka Firma Treba Web Stranicu?",
      excerpt:
        "U digitalnom dobu, web stranica nije luksuz - to je osnovna poslovna potreba. Bez online prisutnosti, gubite klijente prije nego što ih upoznate.",
      date: "18. Novembar 2025",
      readTime: "6 min",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
      content: [
        {
          heading: "Online prisutnost = Kredibilitet",
          text: "**81% potrošača** istražuje online prije nego što kupi proizvod ili uslugu. Ako vaša firma nema web stranicu, za mnoge jednostavno ne postoji.\n\nWeb stranica je digitalna vizit karta vašeg biznisa koja radi 24/7, 365 dana godišnje.",
        },
        {
          heading: "Prednosti web stranice za biznis",
          text: "🌐 **Dostupnost 24/7** - Klijenti vas mogu pronaći bilo kada\n📈 **Veći doseg** - Ne ograničavate se samo na lokalnu zajednicu\n💰 **Jeftiniji marketing** - Web stranica koštava manje od klasičnih oglasa\n🎯 **Targetirana publika** - Privlačite tačno one klijente koje želite\n📊 **Mjerljivi rezultati** - Google Analytics pokazuje šta radi, a šta ne\n✉️ **Direktna komunikacija** - Kontakt forme, chat, email integracije",
        },
        {
          heading: "Šta web stranica donosi organizacijama?",
          text: "**Za male biznise:** Jeftina alternativa fizičkom prodajnom mestu\n**Za restorane:** Online meni, rezervacije, delivery narudžbine\n**Za freelancere:** Portfolio koji radi umesto vas\n**Za lokalne firme:** Google Maps integracija, recenzije, directions\n**Za e-commerce:** Prodajna platforma koja nikada ne spava",
        },
        {
          heading: "Koliko košta web stranica?",
          text: "Cijene variraju:\n• **Jednostavan landing page:** 100-500€\n• **Profesionalan sajt (5-10 stranica):** 500-2000€\n• **E-commerce platforma:** 1500-5000€\n• **Custom web app:** 3000€+\n\n💡 **ROI je ogroman!** Web stranica se isplati za nekoliko mjeseci kroz nove klijente i smanjene marketinške troškove.",
        },
        {
          heading: "Konkurencija već ima web stranicu",
          text: "Ako vi nemate web stranicu, a vaši konkurenti imaju - oni osvajaju vaše potencijalne klijente. Jednostavno je: klijenti biraju one koje mogu pronaći online.\n\n**Ne čekajte!** Svaki dan bez web stranice je izgubljena prilika.",
        },
      ],
      color: "green",
    },
    {
      id: 3,
      icon: <FaBullhorn />,
      title: "Digitalni Marketing i Moć Web Portala",
      excerpt:
        "Digitalni marketing je budućnost oglašavanja. Web portali su centar svake uspješne digitalne strategije - saznajte zašto!",
      date: "20. Novembar 2025",
      readTime: "7 min",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070",
      content: [
        {
          heading: "Šta je digitalni marketing?",
          text: "Digitalni marketing obuhvata sve online kanale za promociju: društvene mreže, Google oglase, email kampanje, SEO, content marketing, i mnogo više.\n\n**Ali centar svega je vaš web portal!** Sve kampanje vode ka jednom cilju - dovesti ljude na vašu web stranicu.",
        },
        {
          heading: "Zašto je web portal srce digitalne strategije?",
          text: "🎯 **Vi kontrolišete poruku** - Za razliku od socijalnih mreža, vaša web stranica je vaša teritorija\n📊 **Prikupljanje podataka** - Google Analytics, heatmaps, konverzije\n🔗 **SEO prednosti** - Google rangira web stranice, ne Facebook postove\n💼 **Profesionalnost** - Web portal signalizira ozbiljnost i povjerenje\n🛒 **Konverzije** - Lakše je prodati sa web stranice nego sa Instagram profila",
        },
        {
          heading: "Ključne prednosti digitalnog marketinga",
          text: "**1. Ciljanje precizne publike**\nGoogleFacebook Ads omogućavaju targeting po lokaciji, godinama, interesovanjima, ponašanju. Ne bacate novac na ljude koje ne zanima vaš proizvod.\n\n**2. Merljivi rezultati u realnom vremenu**\nVidite tačno koliko ljudi je kliknulo, koliko je kupilo, koji oglas radi najbolje.\n\n**3. Niži troškovi od klasičnog marketinga**\nTV reklama: 5000€+ | Google Ads: krećete sa 100€ mesečno\n\n**4. Lakše skaliranje**\nOglas koji radi? Povećajte budžet! Oglas ne radi? Isključite ga odmah.",
        },
        {
          heading: "Web portal kao landing page",
          text: "Svaka digitalna kampanja treba destinaciju - to je vaš web portal.\n\n**Primjer:**\n1. Korisnik vidi Facebook oglas za vašu uslugu\n2. Klikne i dolazi na vaš landing page\n3. Vidi profesionalnu web stranicu sa jasnom porukom\n4. Popunjava kontakt formu ili kupuje\n5. Vi dobijate novog klijenta!\n\nBez web portala, korisnik kliks... i nema gdje ići. Gubite ga zauvijek.",
        },
        {
          heading: "Kombinacija: Web Portal + Social Media + SEO",
          text: "**Instagram/Facebook:** Za engagement i brand awareness\n**Google Ads:** Za instant traffic i prodaju\n**SEO (optimizacija sajta):** Za besplatan organik traffic\n**Email marketing:** Za zadržavanje klijenata\n\n**Web portal je hub** koji povezuje sve kanale! 🎯",
        },
        {
          heading: "Investicija koja se vraća",
          text: "• **Google oglasi:** Prosječan ROI 200% (za svaki 1€ uloženi dobijete 2€)\n• **Email marketing:** ROI 3800% (najisplativiji kanal!)\n• **SEO:** Dugoročno donosi besplatan traffic godinama\n\n**Zaključak:** Bez web portala, digitalni marketing nema smisla. To je kao da imate auto bez točkova - možete ga gledati, ali ne možete voziti.",
        },
      ],
      color: "purple",
    },
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        border: "border-blue-500",
        bg: "bg-blue-600/20",
        text: "text-blue-400",
        hover: "hover:border-blue-400",
        button: "bg-blue-600 hover:bg-blue-500",
      },
      green: {
        border: "border-green-500",
        bg: "bg-green-600/20",
        text: "text-green-400",
        hover: "hover:border-green-400",
        button: "bg-green-600 hover:bg-green-500",
      },
      purple: {
        border: "border-purple-500",
        bg: "bg-purple-600/20",
        text: "text-purple-400",
        hover: "hover:border-purple-400",
        button: "bg-purple-600 hover:bg-purple-500",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="blog" className="py-20 px-4 relative overflow-hidden">
      {/* Pozadinska slika sa gradijentom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/90"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl font-bold text-center mb-4 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Blog
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Članci o programiranju, biznisu i digitalnom marketingu
        </motion.p>

        {!selectedPost ? (
          // Lista članaka
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const colorClasses = getColorClasses(post.color);
              return (
                <motion.div
                  key={post.id}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-lg border-2 ${colorClasses.border} ${colorClasses.hover} transition-all overflow-hidden group cursor-pointer h-[500px] flex flex-col`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => setSelectedPost(post)}
                >
                  {/* Pozadinska slika */}
                  <div
                    className="relative h-48 overflow-hidden"
                    style={{
                      backgroundImage: `url("${post.image}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      className={`absolute inset-0 ${colorClasses.bg} flex justify-center items-center`}
                    >
                      <motion.div
                        className={`text-6xl ${colorClasses.text}`}
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        {post.icon}
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3 text-sm text-gray-400">
                      <span>📅 {post.date}</span>
                      <span>⏱️ {post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-blue-300 transition">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>

                    <motion.button
                      className={`${colorClasses.button} text-white px-4 py-2 rounded-lg font-semibold transition w-full mt-auto`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Pročitaj više →
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          // Prikaz pojedinačnog članka
          <motion.div
            className="bg-slate-800/70 backdrop-blur-sm rounded-lg border-2 border-blue-500 overflow-hidden max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Hero slika */}
            <motion.div
              className="relative h-64 md:h-80 overflow-hidden"
              style={{
                backgroundImage: `url("${selectedPost.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
              <motion.div
                className="absolute bottom-6 left-6 right-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                    getColorClasses(selectedPost.color).bg
                  } mb-3`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  <div
                    className={`text-3xl ${
                      getColorClasses(selectedPost.color).text
                    }`}
                  >
                    {selectedPost.icon}
                  </div>
                </motion.div>
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {selectedPost.title}
                </motion.h2>
              </motion.div>
            </motion.div>

            <div className="p-8">
              <motion.button
                onClick={() => setSelectedPost(null)}
                className="mb-6 text-blue-400 hover:text-blue-300 transition flex items-center gap-2 group"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: -5 }}
              >
                <motion.span
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ←
                </motion.span>
                <span className="group-hover:underline">Nazad na blog</span>
              </motion.button>

              <motion.div
                className="flex justify-between items-center mb-6 text-sm text-gray-400 pb-4 border-b border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  📅 {selectedPost.date}
                </motion.span>
                <motion.span
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  ⏱️ {selectedPost.readTime}
                </motion.span>
              </motion.div>

              <div className="space-y-8">
                {selectedPost.content.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="relative pl-6 border-l-4 border-blue-500/30 hover:border-blue-500 transition-colors duration-300"
                  >
                    <motion.h3
                      className="text-2xl font-semibold mb-3 text-blue-300"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.15 * index + 0.2 }}
                    >
                      {section.heading}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 leading-relaxed whitespace-pre-line"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 * index + 0.3, duration: 0.6 }}
                    >
                      {section.text}
                    </motion.p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => setSelectedPost(null)}
                className="mt-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition w-full shadow-lg hover:shadow-blue-500/50 group flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ←
                </motion.span>
                Nazad na blog
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
