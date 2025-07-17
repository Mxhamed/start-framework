export default function InfoSection() {
  return (
    <section className="container-fluid">
      <div className="info-list row row-cols-1 row-cols-md-3">
        <Info title="LOCATION">
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </Info>

        <Info title="AROUND THE WEB">
          <IconsList />
        </Info>

        <Info title="ABOUT FREELANCING">
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </Info>
      </div>
    </section>
  );
}

function Info({ title, children }) {
  return (
    <div className="col">
      <div className="content">
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}

function IconsList() {
  return (
    <ul className="icon-wrapper">
      {/* Facebook */}
      <SocialIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
          />
        </svg>
      </SocialIcon>

      {/* Twitter */}
      <SocialIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
          />
        </svg>
      </SocialIcon>

      {/* LinkedIn */}
      <SocialIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="522.9"
          height="512"
          viewBox="0 0 1536 1504">
          <path
            fill="currentColor"
            d="M349 497v991H19V497zm21-306q1 73-50.5 122T184 362h-2q-82 0-132-49T0 191q0-74 51.5-122.5T186 20t133 48.5T370 191m1166 729v568h-329V958q0-105-40.5-164.5T1040 734q-63 0-105.5 34.5T871 854q-11 30-11 81v553H531q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52t87-43.5T1157 474q171 0 275 113.5T1536 920"
          />
        </svg>
      </SocialIcon>

      {/* Internet */}
      <SocialIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
          />
        </svg>
      </SocialIcon>
    </ul>
  );
}

function SocialIcon({ children }) {
  return <li>{children}</li>;
}
