// app/page.js
export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/ping.jfif')] bg-cover bg-center bg-fixed text-gray-100 font-poppins">
      {/* Overlay blur biar elegan */}
      <div className="backdrop-blur-md min-h-screen px-6 md:px-16 py-10">
        
        {/* Judul */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-center 
               bg-gradient-to-r from-pink-300 via-white to-pink-500 
               bg-clip-text text-transparent 
               drop-shadow-[0_0_25px_rgba(236,72,153,0.8)] 
               tracking-wider animate-pulse">
  🌸 BioData Lia 🌸
</h1>

        {/* Biodata */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-black via-gray-900 to-pink-900/90 
                        backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10 border border-pink-600">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-400 text-center mb-8 tracking-wide drop-shadow">
             Perkenalan Singkat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <table className="text-lg md:text-xl font-medium space-y-2 text-gray-200">
              <tbody className="space-y-4">
                <tr><td className="pr-4 font-bold text-pink-400">Nama</td><td>:</td><td className="italic">Ferlia Febriyanti</td></tr>
                <tr><td className="pr-4 font-bold text-pink-400">Jurusan</td><td>:</td><td className="italic">Rekayasa Perangkat Lunak (RPL)</td></tr>
                <tr><td className="pr-4 font-bold text-pink-400">Hobby</td><td>:</td><td className="italic">Nonton Drakor 🎬</td></tr>
                <tr><td className="pr-4 font-bold text-pink-400">Lagu Favorit</td><td>:</td><td className="italic">"Aku Milikmu" 🎶</td></tr>
                <tr><td className="pr-4 font-bold text-pink-400">Alamat</td><td>:</td><td className="italic">Jl. Panji Suroso Utara</td></tr>
              </tbody>
            </table>
            <div className="flex justify-center">
              <img
                src="/ujan.jpeg"
                alt="ferlia"
                className="w-52 h-64 object-cover rounded-2xl shadow-2xl hover:scale-110 transition duration-300 ring-4 ring-pink-500"
              />
            </div>
          </div>
        </div>

        {/* Skill */}
        <section className="max-w-5xl mx-auto mt-20 bg-gradient-to-br from-black via-gray-900 to-pink-900/90 
                            rounded-3xl shadow-xl p-12 text-center border border-pink-600">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
                         bg-gradient-to-r from-pink-400 to-pink-600 drop-shadow mb-12 tracking-wide">
            🌟 Skill & Keahlian
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "💻 HTML, CSS, JavaScript",
              "⚛️ React JS",
              "🛢️ MySQL Database",
              "🎨 UI/UX Design",
              "⚡ Next.js"
            ].map((skill,i)=>(
              <div key={i} className="bg-gradient-to-tr from-pink-600 to-black 
                                     text-white font-semibold rounded-2xl shadow-lg py-6 
                                     hover:scale-110 hover:shadow-pink-500/70 transition duration-300 
                                     text-lg md:text-xl tracking-wide border border-pink-500">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Project */}
        <section className="max-w-6xl mx-auto mt-20 bg-gradient-to-br from-black via-gray-900 to-pink-900/90 
                            rounded-3xl shadow-xl p-12 border border-pink-600">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
                         bg-gradient-to-r from-pink-500 to-pink-700 text-center drop-shadow mb-12 tracking-wide">
            📌 Project Karang Taruna
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {img:"/barik.jpeg",title:"Barikan",desc:"Kegiatan makan bersama warga secara gotong royong untuk menunjukkan rasa syukur dan kebersamaan, serta memohon keselamatan dan keberkahan."},
              {img:"/wel.jpeg",title:"Jalan Sehat",desc:"Kegiatan berjalan kaki bersama-sama untuk olahraga, sosialisasi, dan mempromosikan gaya hidup sehat."},
              {img:"/ya.jpeg",title:"Karnaval",desc:"Perayaan meriah di jalanan umum, dengan parade kostum unik dan musik yang meriah."}
            ].map((p,i)=>(
              <div key={i} className="bg-gradient-to-t from-black to-pink-900 rounded-2xl shadow-md 
                                      overflow-hidden hover:shadow-pink-500/70 hover:-translate-y-2 
                                      transition duration-300 border border-pink-500">
                <img src={p.img} alt={p.title} className="w-full h-56 object-cover"/>
                <div className="p-6 text-gray-200">
                  <h3 className="font-bold text-2xl text-pink-400">{p.title}</h3>
                  <p className="text-gray-300 text-base mt-3 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kontak */}
        <section className="max-w-3xl mx-auto mt-20 bg-gradient-to-br from-black via-gray-900 to-pink-900/90 
                            rounded-3xl shadow-xl p-12 text-center border border-pink-600">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
                         bg-gradient-to-r from-pink-500 to-pink-700 mb-10 drop-shadow tracking-wide">
            📬 Contact Me
          </h2>
          <p className="mb-6 text-xl font-medium">📱 WhatsApp: 
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
               className="text-pink-400 font-semibold hover:underline ml-2">
              +62 831-2935-1423
            </a>
          </p>
          <p className="mb-6 text-xl font-medium">📧 Email: 
            <a href="mailto:febriyantiferlia@email.com" 
               className="text-pink-400 font-semibold hover:underline ml-2">
              febriyantiferlia@email.com
            </a>
          </p>
          <p className="space-x-10 text-xl font-semibold">
            <a href="http://www.instagram.com/ferliiaa_" target="_blank" rel="noreferrer" 
               className="text-pink-400 hover:underline">📷 Instagram</a>
            <a href="https://www.tiktok.com/@f3rliaa" target="_blank" rel="noreferrer" 
               className="text-pink-400 hover:underline">🎵 TikTok</a>
          </p>
        </section>
      </div>
    </div>
  )
}
