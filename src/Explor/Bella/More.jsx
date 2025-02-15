function More() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center space-y-10 xs:space-y-0">
          <div className="space-y-3 lg:space-y-5">
            <h1 className="font-bold">More informations</h1>
            <div className="flex gap-2 items-center">
              <img src="/BellaImage/Menu.png" alt="" />
              <span className="underline cursor-pointer">See the menu</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/BellaImage/Call.png" alt="" />
              <span>+88013056762</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/BellaImage/Location.png" alt="" />
              <span>Singapour, Bishan</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/BellaImage/Time.png" alt="" />
              <span>7j/7, 08:00 - 22:00</span>
            </div>
            <div className="flex gap-2">
              <img src="/BellaImage/Web.png" alt="" />
              <span className="underline cursor-pointer">
                WWw.bellaitalia.com
              </span>
            </div>
            <div className="flex items-center gap-5">
              <img src="/BellaImage/Facebook.png" alt="" />
              <img src="/BellaImage/Instagram.png" alt="" />
              <img src="/BellaImage/Tiktok.png" alt="" />
              <img src="/BellaImage/Whatsapp.png" alt="" />
            </div>
          </div>
          <div>
            <img src="/BellaImage/Map.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default More;
